"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/** Once-per-visit curtain intro on the home page. Skippable. */
export function IntroCurtain() {
  const path = usePathname();
  const [phase, setPhase] = useState<"off" | "on" | "lift">("off");
  useEffect(() => {
    if (path !== "/") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem("skv-intro") === "done") return;
    } catch {}
    setPhase("on");
    const a = window.setTimeout(() => setPhase("lift"), 2300);
    const b = window.setTimeout(() => {
      setPhase("off");
      try {
        sessionStorage.setItem("skv-intro", "done");
      } catch {}
    }, 3300);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [path]);
  if (phase === "off") return null;
  return (
    <div className={`ic ${phase === "lift" ? "is-lift" : ""}`} role="presentation">
      <div className="ic-in">
        <p className="ic-deva" lang="hi">
          श्री कृष्ण विलास
        </p>
        <p className="ic-name">Sri Krishna Vilas</p>
        <p className="ic-line">Two towers. Built on trust.</p>
        <p className="ic-by">SIPL Group</p>
      </div>
      <button type="button" className="ic-skip" onClick={() => {
          setPhase("lift");
          try {
            sessionStorage.setItem("skv-intro", "done");
          } catch {}
        }}>
        Skip
      </button>
    </div>
  );
}

/** A greeting that follows the time in Varanasi. */
export function Greeting() {
  const [g, setG] = useState("Welcome to Varanasi");
  useEffect(() => {
    const h = Number(
      new Intl.DateTimeFormat("en-GB", { hour: "numeric", hour12: false, timeZone: "Asia/Kolkata" }).format(new Date()),
    );
    setG(h < 12 ? "Good morning from Varanasi" : h < 17 ? "Good afternoon from Varanasi" : "Good evening from Varanasi");
  }, []);
  return (
    <p className="gr">
      <span lang="hi">श्री कृष्ण विलास</span>
      <i aria-hidden="true">·</i>
      {g}
    </p>
  );
}

/** Optional soft bansuri-style tune, synthesised in the browser. Off by default, never autoplays. */
type Player = { c: AudioContext; master: GainNode; timer: number; stopped: boolean };

// Raag Bhupali around D: D E F# A B, two octaves of the flute's sweet range
const D = 293.66;
const BHUPALI = [1, 9 / 8, 5 / 4, 3 / 2, 5 / 3].map((r) => D * r);
const SCALE = [...BHUPALI.map((f) => f), ...BHUPALI.map((f) => f * 2)]; // D4..B5

function reverb(c: AudioContext) {
  const len = c.sampleRate * 3.2;
  const buf = c.createBuffer(2, len, c.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
  }
  const conv = c.createConvolver();
  conv.buffer = buf;
  return conv;
}

function flute(c: AudioContext, out: AudioNode, freq: number, when: number, dur: number, vol: number) {
  const g = c.createGain();
  g.gain.setValueAtTime(0, when);
  g.gain.linearRampToValueAtTime(vol, when + 0.35); // soft breath-in attack
  g.gain.setTargetAtTime(vol * 0.78, when + 0.5, 0.6);
  g.gain.setTargetAtTime(0, when + dur, 0.5); // gentle release
  const tone = c.createGain();
  tone.gain.value = 1;
  const parts: [number, number][] = [[1, 1], [2, 0.16], [3, 0.05]];
  const vib = c.createOscillator();
  vib.frequency.value = 4.8;
  const vibDepth = c.createGain();
  vibDepth.gain.setValueAtTime(0, when);
  vibDepth.gain.linearRampToValueAtTime(freq * 0.006, when + 0.9); // vibrato blooms after the onset
  vib.connect(vibDepth);
  const oscs = parts.map(([m, a]) => {
    const o = c.createOscillator();
    o.type = "sine";
    o.frequency.value = freq * m;
    vibDepth.connect(o.frequency);
    const og = c.createGain();
    og.gain.value = a;
    o.connect(og).connect(tone);
    o.start(when);
    o.stop(when + dur + 3);
    return o;
  });
  // breath noise
  const nb = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
  const nd = nb.getChannelData(0);
  for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
  const noise = c.createBufferSource();
  noise.buffer = nb;
  noise.loop = true;
  const bp = c.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = freq * 2.2;
  bp.Q.value = 1.2;
  const ng = c.createGain();
  ng.gain.value = 0.035;
  noise.connect(bp).connect(ng).connect(tone);
  noise.start(when);
  noise.stop(when + dur + 3);
  tone.connect(g).connect(out);
  vib.start(when);
  vib.stop(when + dur + 3);
  return oscs;
}

/* ── Soft piano: slow lounge-style chords with a simple melody above ── */
function piano(c: AudioContext, out: AudioNode, freq: number, when: number, dur: number, vol: number) {
  const g = c.createGain();
  g.gain.setValueAtTime(0.0001, when);
  g.gain.exponentialRampToValueAtTime(vol, when + 0.012); // soft hammer
  g.gain.exponentialRampToValueAtTime(vol * 0.35, when + 0.6);
  g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.setValueAtTime(Math.min(4200, freq * 7), when);
  lp.frequency.exponentialRampToValueAtTime(Math.max(600, freq * 2), when + dur);
  const partials: [number, number][] = [[1, 1], [2, 0.42], [3, 0.2], [4, 0.09], [5, 0.04]];
  partials.forEach(([m, a], i) => {
    const o = c.createOscillator();
    o.type = "sine";
    o.frequency.value = freq * m * (1 + (i % 2 ? 0.0006 : -0.0004));
    const og = c.createGain();
    og.gain.value = a;
    o.connect(og).connect(lp);
    o.start(when);
    o.stop(when + dur + 0.2);
  });
  lp.connect(g).connect(out);
}
const hz = (midi: number) => 440 * Math.pow(2, (midi - 69) / 12);
// Cmaj7 - Am7 - Fmaj7 - G6, each held two beats x 2
const PROG = [
  { bass: 48, chord: [55, 59, 64, 67], mel: [72, 74, 76, 79] },
  { bass: 45, chord: [52, 60, 64, 67], mel: [72, 76, 79, 81] },
  { bass: 41, chord: [53, 57, 60, 64], mel: [72, 76, 77, 81] },
  { bass: 43, chord: [50, 55, 59, 64], mel: [71, 74, 76, 79] },
];

type Mode = "off" | "flute" | "piano";
export function AmbientSound() {
  const [mode, setMode] = useState<Mode>("off");
  const ref = useRef<Player | null>(null);

  const stop = () => {
    const p = ref.current;
    if (!p) return;
    p.stopped = true;
    window.clearTimeout(p.timer);
    p.master.gain.setTargetAtTime(0, p.c.currentTime, 0.4);
    window.setTimeout(() => void p.c.close(), 1600);
    ref.current = null;
  };

  const start = (m: "flute" | "piano") => {
    const AC = window.AudioContext || (window as never as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const c = new AC();
    const master = c.createGain();
    master.gain.value = 0;
    master.gain.setTargetAtTime(m === "piano" ? 0.5 : 0.55, c.currentTime, 1.2);
    const wet = c.createGain();
    wet.gain.value = m === "piano" ? 0.42 : 0.38;
    const dry = c.createGain();
    dry.gain.value = 0.8;
    const conv = reverb(c);
    conv.connect(wet).connect(master);
    dry.connect(master);
    const bus = c.createGain();
    bus.connect(dry);
    bus.connect(conv);
    master.connect(c.destination);
    const p: Player = { c, master, timer: 0, stopped: false };
    ref.current = p;

    if (m === "flute") {
      [D / 2, (D / 2) * 1.5].forEach((f, i) => {
        const o = c.createOscillator();
        o.type = "triangle";
        o.frequency.value = f;
        const g = c.createGain();
        g.gain.value = 0.02;
        const l = c.createOscillator();
        l.frequency.value = 0.09 + i * 0.03;
        const lg = c.createGain();
        lg.gain.value = 0.012;
        l.connect(lg).connect(g.gain);
        const lp = c.createBiquadFilter();
        lp.type = "lowpass";
        lp.frequency.value = 500;
        o.connect(lp).connect(g).connect(bus);
        o.start();
        l.start();
      });
      let idx = 5;
      const phrase = () => {
        if (p.stopped) return;
        const now = c.currentTime + 0.1;
        const n = 3 + Math.floor(Math.random() * 3);
        let t = now;
        for (let k = 0; k < n; k++) {
          const step = [-2, -1, -1, 1, 1, 2][Math.floor(Math.random() * 6)];
          idx = Math.max(2, Math.min(SCALE.length - 2, idx + step));
          if (k === n - 1) idx = [0, 3, 5, 8][Math.floor(Math.random() * 4)];
          const dur = 2 + Math.random() * 1.6;
          flute(c, bus, SCALE[idx], t, dur, 0.13);
          t += dur * 0.82;
        }
        p.timer = window.setTimeout(phrase, (t - now + 2.5 + Math.random() * 3) * 1000);
      };
      phrase();
    } else {
      // ~58 bpm: one beat is about 1.03 s; each chord lasts 4 beats
      const beat = 1.03;
      let bar = 0;
      let last = 2;
      const play = () => {
        if (p.stopped) return;
        const t0 = c.currentTime + 0.1;
        const ch = PROG[bar % PROG.length];
        piano(c, bus, hz(ch.bass), t0, beat * 4.2, 0.16);
        // rolled chord
        ch.chord.forEach((n, i) => piano(c, bus, hz(n), t0 + 0.02 + i * 0.09, beat * 3.6, 0.075));
        // gentle arpeggio on the off-beats
        ch.chord.slice(1).forEach((n, i) => piano(c, bus, hz(n + 12), t0 + beat * (1 + i * 0.5), beat * 2, 0.045));
        // sparse melody: two or three notes, not every bar
        if (Math.random() < 0.85) {
          const count = Math.random() < 0.5 ? 2 : 3;
          let mt = t0 + beat * (1.5 + Math.random() * 0.5);
          for (let k = 0; k < count; k++) {
            last = Math.max(0, Math.min(ch.mel.length - 1, last + [-1, 0, 1, 1, -2][Math.floor(Math.random() * 5)]));
            piano(c, bus, hz(ch.mel[last]), mt, beat * 2.6, 0.09);
            mt += beat * (0.9 + Math.random() * 0.7);
          }
        }
        bar++;
        p.timer = window.setTimeout(play, beat * 4 * 1000);
      };
      play();
    }
  };

  const next = () => {
    stop();
    if (mode === "off") {
      start("flute");
      setMode("flute");
    } else if (mode === "flute") {
      start("piano");
      setMode("piano");
    } else {
      setMode("off");
    }
  };
  useEffect(() => () => stop(), []);
  const label = mode === "off" ? "Music off" : mode === "flute" ? "Flute" : "Piano";
  return (
    <button
      type="button"
      className={`as ${mode !== "off" ? "is-on" : ""}`}
      onClick={next}
      aria-label={`Background music: ${label}. Press to change.`}
      title="Press to cycle: off, flute, piano"
    >
      <span aria-hidden="true">♪</span>
      {label}
    </button>
  );
}

/** Evening view: a warm dark palette. Remembered in the browser. */
export function NightToggle() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    try {
      if (localStorage.getItem("skv-night") === "1") {
        document.documentElement.dataset.night = "1";
        setOn(true);
      }
    } catch {}
  }, []);
  const toggle = () => {
    const n = !on;
    setOn(n);
    if (n) document.documentElement.dataset.night = "1";
    else delete document.documentElement.dataset.night;
    try {
      localStorage.setItem("skv-night", n ? "1" : "0");
    } catch {}
  };
  return (
    <button type="button" className={`nt ${on ? "is-on" : ""}`} onClick={toggle} aria-pressed={on} aria-label="Evening view">
      <span aria-hidden="true">{on ? "☀" : "☾"}</span>
      {on ? "Day view" : "Evening view"}
    </button>
  );
}

/** Sticky call, visit and enquire bar for phones. */
export function MobileBar({ tel }: { tel: string }) {
  return (
    <nav className="mb" aria-label="Quick actions">
      <a href={`tel:${tel}`}>Call</a>
      <a href="/book-visit" className="mb-main">
        Book a visit
      </a>
      <button
        type="button"
        onClick={() =>
          window.dispatchEvent(new CustomEvent("sipl-enquire", { detail: { project: "", intent: "Project Information" } }))
        }
      >
        Enquire
      </button>
    </nav>
  );
}

/** Back to top, with the feather. */
export function ToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 1400);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <button type="button" className="tt" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      ↑
    </button>
  );
}

/** One gentle offer to take the brochure when a desktop visitor is about to leave. */
export function ExitOffer({ href }: { href: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let armed = false;
    const t = window.setTimeout(() => (armed = true), 25000);
    const leave = (e: MouseEvent) => {
      if (!armed || e.clientY > 0) return;
      try {
        if (sessionStorage.getItem("skv-exit")) return;
        sessionStorage.setItem("skv-exit", "1");
      } catch {}
      setOpen(true);
    };
    document.addEventListener("mouseleave", leave);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);
  if (!open) return null;
  return (
    <div className="xo" role="dialog" aria-label="Take the brochure">
      <button type="button" className="xo-x" onClick={() => setOpen(false)} aria-label="Close">
        ×
      </button>
      <p className="xo-k">Before you go</p>
      <p className="xo-t">Take the Sri Krishna Vilas brochure with you.</p>
      <a className="s-pill s-pill-solid" href={href} download onClick={() => setOpen(false)}>
        <span>Download brochure</span>
      </a>
    </div>
  );
}

/** Two towers drawn in line art that trace themselves when they scroll into view. */
export function TowersArt() {
  const ref = useRef<SVGSVGElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const tower = (x: number, w: number, h: number) => {
    const floors = Math.floor(h / 16);
    const lines: string[] = [];
    for (let i = 1; i < floors; i++) lines.push(`M${x} ${300 - i * 16}h${w}`);
    const cols = 6;
    for (let i = 1; i < cols; i++) lines.push(`M${x + (w / cols) * i} 300v-${h}`);
    return { frame: `M${x} 300V${300 - h}h${w}V300`, spire: `M${x + w / 2} ${300 - h}v-34`, cap: `M${x - 4} ${300 - h}h${w + 8}`, grid: lines.join("") };
  };
  const a = tower(50, 110, 230);
  const b = tower(210, 120, 270);
  return (
    <svg ref={ref} className={`ta ${seen ? "is-in" : ""}`} viewBox="0 0 380 320" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      {[a, b].map((t, i) => (
        <g key={i} style={{ ["--d" as string]: `${i * 0.5}s` }}>
          <path d={t.frame} pathLength={1} />
          <path d={t.cap} pathLength={1} />
          <path d={t.spire} pathLength={1} />
          <path d={t.grid} pathLength={1} className="ta-grid" />
        </g>
      ))}
      <path d="M20 300h340" pathLength={1} />
      <path d="M170 300v-28M190 300v-28M170 272h20" pathLength={1} />
    </svg>
  );
}
