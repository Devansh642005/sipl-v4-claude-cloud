"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
/** Motion enhances visible content; no scroll replacement and no hidden SSR copy. */
export function GraphicMotion() {
  const path = usePathname();
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    const observers: IntersectionObserver[] = [];
    let frame = 0;
    let pointerFrame = 0;
    const hero = document.querySelector<HTMLElement>(".c-hero");
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("r-in-view", "v-revealed");
            reveal.unobserve(entry.target);
          }
        }),
      { threshold: 0.22 },
    );
    document
      .querySelectorAll(
        ".r-art,.c-section-heading,.c-timeline article,.c-hero-copy,.c-page-hero>div:first-child,.c-about-preview figure,.c-gallery-grid>button,.r-portrait-plane,.c-skv-perspectives figure",
      )
      .forEach((el) => reveal.observe(el));
    observers.push(reveal);
    function update() {
      frame = 0;
      const total = document.documentElement.scrollHeight - innerHeight;
      progress.current?.style.setProperty(
        "--page-progress",
        String(total > 0 ? scrollY / total : 0),
      );
      if (!reduced.matches && fine.matches && hero) {
        hero.style.setProperty(
          "--hero-scroll",
          `${Math.min(26, scrollY * 0.045)}px`,
        );
      }
      document
        .querySelectorAll<HTMLElement>(".c-timeline article")
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          el.classList.toggle(
            "v-milestone-active",
            r.top < innerHeight * 0.66 && r.bottom > innerHeight * 0.25,
          );
        });
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    function onPointer(e: PointerEvent) {
      if (reduced.matches || !fine.matches || !hero) return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty(
          "--hero-x",
          `${((e.clientX - r.left) / r.width - 0.5) * 8}px`,
        );
        hero.style.setProperty(
          "--hero-y",
          `${((e.clientY - r.top) / r.height - 0.5) * 6}px`,
        );
      });
    }
    function reset() {
      hero?.style.setProperty("--hero-x", "0px");
      hero?.style.setProperty("--hero-y", "0px");
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    hero?.addEventListener("pointermove", onPointer, { passive: true });
    hero?.addEventListener("pointerleave", reset);
    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
      hero?.removeEventListener("pointermove", onPointer);
      hero?.removeEventListener("pointerleave", reset);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(pointerFrame);
    };
  }, [path]);
  return (
    <>
      <div className="v-page-progress" ref={progress} aria-hidden="true">
        <i />
      </div>
      <div key={path} className="v-route-veil" aria-hidden="true" />
    </>
  );
}
