"use client";
import { useEffect, useRef, useState } from "react";

/** Headline whose words rise into place one after another when it scrolls into view. */
export function SplitHeading({
  lines,
  as: Tag = "h2",
  className = "",
  id,
}: {
  lines: { text: string; em?: boolean }[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return setSeen(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  let n = 0;
  return (
    <Tag ref={ref as never} id={id} className={`sw ${seen ? "is-in" : ""} ${className}`} data-no-rv>
      {lines.map((l, i) => {
        const words = l.text.split(" ");
        const inner = words.map((w) => (
          <span className="sw-w" key={n}>
            <span style={{ transitionDelay: `${(n++ % 24) * 70}ms` }}>{w}&nbsp;</span>
          </span>
        ));
        return l.em ? <em key={i}>{inner}</em> : <span className="sw-l" key={i}>{inner}</span>;
      })}
    </Tag>
  );
}

/** A paragraph whose words light up as you scroll through it. */
export function WordScroll({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [p, setP] = useState(0);
  const words = text.split(" ");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return setP(1);
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.25;
      setP(Math.max(0, Math.min(1, (start - r.top) / (start - end + r.height * 0.6))));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <p ref={ref} className={`ws ${className}`}>
      {words.map((w, i) => (
        <span key={i} className={i / words.length < p ? "is-lit" : ""}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}
