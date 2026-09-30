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

export function AmbientSound() {
  const [on, setOn] = useState(false);
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

  const start = () => {
    const AC = window.AudioContext || (window as never as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const c = new AC();
    const master = c.createGain();
    master.gain.value = 0;
    master.gain.setTargetAtTime(0.55, c.currentTime, 1.2);
    const wet = c.createGain();
    wet.gain.value = 0.38;
    const dry = c.createGain();
    dry.gain.value = 0.85;
    const conv = reverb(c);
    conv.connect(wet).connect(master);
    dry.connect(master);
    const bus = c.createGain();
    bus.connect(dry);
    bus.connect(conv);
    master.connect(c.destination);

    // tanpura-like hum: Sa and Pa, very quiet, breathing slowly
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

    const p: Player = { c, master, timer: 0, stopped: false };
    ref.current = p;

    // phrase generator: slow stepwise melody that keeps returning to Sa, then rests
    let idx = 5;
    const phrase = () => {
      if (p.stopped) return;
      const now = c.currentTime + 0.1;
      const n = 3 + Math.floor(Math.random() * 3);
      let t = now;
      for (let k = 0; k < n; k++) {
        const step = [-2, -1, -1, 1, 1, 2][Math.floor(Math.random() * 6)];
        idx = Math.max(2, Math.min(SCALE.length - 2, idx + step));
        if (k === n - 1) idx = [0, 3, 5, 8][Math.floor(Math.random() * 4)] + 0; // land on a resting note
        const dur = 2 + Math.random() * 1.6;
        flute(c, bus, SCALE[idx], t, dur, 0.13);
        t += dur * 0.82;
      }
      const rest = 2.5 + Math.random() * 3;
      p.timer = window.setTimeout(phrase, (t - now + rest) * 1000);
    };
    phrase();
    setOn(true);
  };

  const toggle = () => {
    if (on) {
      stop();
      setOn(false);
    } else {
      start();
    }
  };
  useEffect(() => () => stop(), []);
  return (
    <button type="button" className={`as ${on ? "is-on" : ""}`} onClick={toggle} aria-pressed={on} aria-label={on ? "Turn the flute music off" : "Turn the flute music on"}>
      <span aria-hidden="true">♪</span>
      {on ? "Flute on" : "Flute off"}
    </button>
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
