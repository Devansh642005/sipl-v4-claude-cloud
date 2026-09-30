"use client";
import { useEffect, useRef, useState } from "react";
import { SiteImg } from "./ui";
import type { SiteImageKey } from "@/data/site-images";

type Item = { id: SiteImageKey; title: string; text: string };

/** Sticky image on the left changes as each chapter on the right scrolls past. */
export function LifeScroll({ items }: { items: Item[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="s-life">
      <div className="s-life-sticky" aria-hidden="true">
        {items.map((it, i) => (
          <div key={it.id} className={`s-life-frame ${i === active ? "is-on" : ""}`}>
            <SiteImg id={it.id} sizes="(max-width: 900px) 90vw, 560px" />
          </div>
        ))}
        <span className="s-life-count">
          {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>
      <ol className="s-life-list">
        {items.map((it, i) => (
          <li
            key={it.id}
            data-i={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={i === active ? "is-on" : ""}
          >
            <div className="s-life-inline">
              <SiteImg id={it.id} sizes="90vw" />
            </div>
            <span className="s-life-num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="s-display">{it.title}</h3>
            <p className="s-body">{it.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
