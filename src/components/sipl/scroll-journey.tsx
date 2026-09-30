"use client";
import { useEffect, useRef, useState } from "react";

const GUTTER = 64;
const STEP = 6;

/** Winding trail down the right edge; a peacock feather and flute travel it as the page scrolls. */
export function ScrollJourney() {
  const [vh, setVh] = useState(0);
  const trail = useRef<SVGPathElement>(null);
  const done = useRef<SVGPathElement>(null);
  const marker = useRef<SVGGElement>(null);

  useEffect(() => {
    const measure = () => setVh(window.innerHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const d = (() => {
    if (!vh) return "";
    const wave = Math.max(320, vh / 2.2);
    let out = "";
    for (let y = -STEP; y <= vh + STEP; y += STEP) {
      const x = GUTTER / 2 + (GUTTER / 2 - 12) * Math.sin((y / wave) * Math.PI * 2);
      out += `${out ? "L" : "M"}${x.toFixed(1)} ${y}`;
    }
    return out;
  })();

  useEffect(() => {
    const path = trail.current;
    const line = done.current;
    const mark = marker.current;
    if (!path || !line || !mark || !d) return;
    const total = path.getTotalLength();
    line.style.strokeDasharray = `${total}`;
    let shown = -1;
    let frame = 0;

    const draw = (p: number) => {
      const at = path.getPointAtLength(total * p);
      const ahead = path.getPointAtLength(Math.min(total, total * p + 6));
      const tilt = Math.max(-26, Math.min(26, (ahead.x - at.x) * 9));
      mark.setAttribute("transform", `translate(${at.x} ${at.y}) rotate(${tilt})`);
      line.style.strokeDashoffset = `${total * (1 - p)}`;
    };
    const tick = () => {
      const room = document.documentElement.scrollHeight - window.innerHeight;
      const target = room > 0 ? Math.min(1, Math.max(0, window.scrollY / room)) : 0;
      shown = shown < 0 ? target : shown + (target - shown) * 0.16;
      if (Math.abs(target - shown) < 0.0004) shown = target;
      draw(shown);
      frame = shown === target ? 0 : requestAnimationFrame(tick);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [d]);

  return (
    <div className="s-journey" aria-hidden="true">
      <svg width={GUTTER} height={vh} viewBox={`0 0 ${GUTTER} ${vh || 1}`}>
        <path ref={trail} d={d} className="s-journey-trail" />
        <path ref={done} d={d} className="s-journey-done" />
        <g ref={marker}>
          <g className="s-journey-sway">
            {/* flute */}
            <g transform="translate(0 6) rotate(-38)">
              <rect x="-27" y="-2.2" width="54" height="4.4" rx="2.2" fill="#7a4a32" />
              <rect x="-27" y="-2.2" width="5" height="4.4" rx="1.6" fill="#c9aa72" />
              <rect x="22" y="-2.2" width="5" height="4.4" rx="1.6" fill="#c9aa72" />
              <circle cx="-9" cy="0" r="1" fill="#1f1813" />
              <circle cx="-2" cy="0" r="1" fill="#1f1813" />
              <circle cx="5" cy="0" r="1" fill="#1f1813" />
              <circle cx="12" cy="0" r="1" fill="#1f1813" />
            </g>
            {/* peacock feather (mor pankh) */}
            <path d="M0 30C4 12 -4 -4 0 -14" fill="none" stroke="#5c7a3c" strokeWidth="1.4" strokeLinecap="round" />
            <g stroke="#4f9060" strokeWidth="0.9" strokeLinecap="round" opacity="0.9">
              <path d="M0 -6L-8 -12M0 -6L8 -12M0 0L-9 -6M0 0L9 -6M0 6L-8 1M0 6L8 1M0 12L-6 8M0 12L6 8" />
            </g>
            <ellipse cx="0" cy="-20" rx="9" ry="12.5" fill="#c9aa72" />
            <ellipse cx="0" cy="-20" rx="7.4" ry="10.8" fill="#2a8f86" />
            <ellipse cx="0" cy="-20" rx="5.2" ry="8" fill="#1d4f9c" />
            <ellipse cx="0" cy="-19" rx="2.6" ry="4" fill="#0f1f4a" />
          </g>
        </g>
      </svg>
    </div>
  );
}
