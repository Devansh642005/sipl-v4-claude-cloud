"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const REVEAL =
  "main h1, main h2, main h3, main .c-media, main .s-prog-img, main .s-strip-card, main .sp-card, main .s-loc-card, main .sp-frame";
const SKIP =
  ".s-reveal, .s-film-stage, .lx-hero, .s-nav-wrap, dialog, [data-no-rv], .s-life-list, .s-footer";

/** Scroll reveals, gentle parallax and page fade for every page. */
export function PageMotion() {
  const path = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL)).filter(
      (el) =>
        !el.closest(SKIP) && !(el.matches("h1, h2, h3") && el.closest(".sp-card, .sp-hero-copy .sp-h1")),
    );
    nodes.forEach((el) => el.setAttribute("data-rv", "p"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).setAttribute("data-rv", "i");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    nodes.forEach((el) => io.observe(el));
    const safety = window.setTimeout(
      () => nodes.forEach((el) => el.setAttribute("data-rv", "i")),
      6000,
    );
    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [path]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const k = Number(el.dataset.parallax) || 0.08;
        el.style.transform = `translate3d(0, ${((r.top + r.height / 2 - vh / 2) * -k).toFixed(1)}px, 0)`;
      });
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
  }, [path]);

  return null;
}

/** A small gold ring that follows the pointer and says "View" over pictures. */
export function GoldCursor() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = ring.current;
    if (!el) return;
    let x = -100, y = -100, cx = -100, cy = -100, raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target as HTMLElement | null;
      const over = !!t?.closest("main img, main video, main .c-media, main .sp-frame, main .s-band, main .pan");
      const link = !!t?.closest("a, button, input, select, textarea, summary, dialog");
      el.dataset.state = link ? "link" : over ? "view" : "";
      el.style.opacity = "1";
    };
    const leave = () => (el.style.opacity = "0");
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ring} className="s-cursor" aria-hidden="true">
      <span>View</span>
    </div>
  );
}
