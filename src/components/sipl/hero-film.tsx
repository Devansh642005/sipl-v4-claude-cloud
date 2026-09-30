"use client";
import { useEffect, useRef, useState } from "react";

const FILM = "/media/film/skv-film-web.mp4";
const POSTER = "/media/film/skv-hero-poster.webp";

export function HeroFilm() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const el = video.current;
    if (!el) return;
    if (el.paused) {
      el.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="s-film-frame">
      <video
        ref={video}
        className="s-film-video"
        src={FILM}
        poster={POSTER}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Sri Krishna Vilas property film, architectural visualisation"
      />
      <button
        type="button"
        className="s-film-pause"
        onClick={toggle}
        aria-label={playing ? "Pause background film" : "Play background film"}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
