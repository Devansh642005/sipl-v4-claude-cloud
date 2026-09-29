"use client";
import { useEffect, useRef, useState } from "react";
import { approvedFilm } from "@/data/media";
export function openProjectFilm() {
  window.dispatchEvent(new Event("sipl-film"));
}
export function VideoTheatre() {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const open = () => {
      setLoaded(true);
      setError(false);
      dialog.current?.showModal();
    };
    window.addEventListener("sipl-film", open);
    return () => window.removeEventListener("sipl-film", open);
  }, []);
  return (
    <dialog
      ref={dialog}
      className="c-dialog c-video-dialog v-theatre"
      aria-label="Sri Krishna Vilas project film"
      onClose={() => {
        video.current?.pause();
        setLoaded(false);
      }}
    >
      <div className="v-theatre-heading">
        <span>SIPL / WATCH & EXPLORE</span>
        <button className="c-close" onClick={() => dialog.current?.close()}>
          Close film ×
        </button>
      </div>
      {loaded && (
        <video
          ref={video}
          src={approvedFilm.src}
          controls
          autoPlay
          playsInline
          onError={() => setError(true)}
          aria-label="Sri Krishna Vilas silent architectural film"
        />
      )}
      <p>{approvedFilm.description}</p>
      {error && (
        <p role="alert">
          Unable to load the film.{" "}
          <a href="https://www.youtube.com/watch?v=3hNM2ulWbI4">
            Open official walkthrough ↗
          </a>
        </p>
      )}
    </dialog>
  );
}
