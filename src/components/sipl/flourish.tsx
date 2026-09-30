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

/** Optional ambient sound made in the browser. Off by default, never autoplays. */
export function AmbientSound() {
  const [on, setOn] = useState(false);
  const ctx = useRef<{ c: AudioContext; g: GainNode; o: OscillatorNode[] } | null>(null);
  const toggle = () => {
    if (on && ctx.current) {
      const { c, g, o } = ctx.current;
      g.gain.setTargetAtTime(0, c.currentTime, 0.4);
      window.setTimeout(() => {
        o.forEach((x) => x.stop());
        void c.close();
      }, 1400);
      ctx.current = null;
      setOn(false);
      return;
    }
    const AC = window.AudioContext || (window as never as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const c = new AC();
    const g = c.createGain();
    g.gain.value = 0;
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 900;
    const lfo = c.createOscillator();
    const lfoGain = c.createGain();
    lfo.frequency.value = 0.08;
    lfoGain.gain.value = 0.02;
    lfo.connect(lfoGain).connect(g.gain);
    const notes = [146.83, 220, 293.66, 329.63];
    const o = notes.map((f, i) => {
      const x = c.createOscillator();
      x.type = i % 2 ? "sine" : "triangle";
      x.frequency.value = f;
      x.detune.value = (i - 1.5) * 4;
      x.connect(lp);
      x.start();
      return x;
    });
    lp.connect(g).connect(c.destination);
    lfo.start();
    o.push(lfo);
    g.gain.setTargetAtTime(0.05, c.currentTime, 1.2);
    ctx.current = { c, g, o };
    setOn(true);
  };
  useEffect(
    () => () => {
      ctx.current?.o.forEach((x) => x.stop());
      void ctx.current?.c.close();
    },
    [],
  );
  return (
    <button type="button" className={`as ${on ? "is-on" : ""}`} onClick={toggle} aria-pressed={on} aria-label={on ? "Turn ambient sound off" : "Turn ambient sound on"}>
      <span aria-hidden="true">{on ? "♪" : "♪"}</span>
      {on ? "Sound on" : "Sound off"}
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
