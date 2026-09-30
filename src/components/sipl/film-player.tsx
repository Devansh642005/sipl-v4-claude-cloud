"use client";
import { useEffect, useRef, useState } from "react";
import { filmChapters } from "@/data/explore";

const SRC = "/media/film/skv-film-hero.mp4";
const POSTER = "/media/film/skv-hero-poster.webp";

/** The property film with a chapter list that jumps to each scene. */
export function FilmPlayer() {
  const v = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = v.current;
    if (!el) return;
    const on = () => {
      let a = 0;
      filmChapters.forEach((c, i) => {
        if (el.currentTime >= c.t - 0.4) a = i;
      });
      setActive(a);
    };
    el.addEventListener("timeupdate", on);
    return () => el.removeEventListener("timeupdate", on);
  }, []);

  const jump = (i: number) => {
    const el = v.current;
    if (!el) return;
    el.currentTime = filmChapters[i].t;
    void el.play().catch(() => {});
    setActive(i);
  };

  return (
    <div className="fp">
      <div className="fp-stage sp-frame">
        <video ref={v} src={SRC} poster={POSTER} controls playsInline preload="metadata" muted />
      </div>
      <ol className="fp-list">
        {filmChapters.map((c, i) => (
          <li key={c.title}>
            <button type="button" className={i === active ? "is-on" : ""} onClick={() => jump(i)}>
              <span className="fp-n">{String(i + 1).padStart(2, "0")}</span>
              <span className="fp-t">{c.title}</span>
              <span className="fp-d">{c.note}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
