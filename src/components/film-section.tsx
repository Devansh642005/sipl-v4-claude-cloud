"use client";
import Image from "next/image";
import { useState } from "react";
import { project } from "@/data/sipl";
export function FilmSection() {
  const [requested, setRequested] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <section id="film" className="film-section">
      <Image
        src="/assets/exterior-evening.webp"
        alt="Sri Krishna Vilas evening architectural visualisation"
        fill
        sizes="100vw"
      />
      <div className="film-overlay" />
      <div className="film-content">
        <span className="eyebrow">THE PROJECT FILM</span>
        <h2>
          See the story.
          <br />
          <em>In motion.</em>
        </h2>
        {requested && !failed ? (
          <>
            <video
              className="project-film"
              controls
              playsInline
              preload="none"
              poster="/assets/architecture.webp"
              src={project.film}
              onError={() => setFailed(true)}
              aria-label="Supplied Sri Krishna Vilas architectural walkthrough"
            />
            <button
              className="film-trigger"
              onClick={() => setRequested(false)}
            >
              Close film ×
            </button>
          </>
        ) : (
          <button
            className="film-trigger"
            onClick={() => {
              setRequested(true);
              setFailed(false);
            }}
          >
            <span aria-hidden="true">▷</span>Watch the project film
          </button>
        )}
        {failed && (
          <p role="status">
            The film could not be loaded. Open the official walkthrough below.
          </p>
        )}
        <a
          className="film-official"
          href={project.walkthrough}
          target="_blank"
          rel="noreferrer"
        >
          Open official walkthrough on YouTube ↗
        </a>
        <p>SILENT ARCHITECTURAL WALKTHROUGH · EARLIER PROJECT VISUALISATION</p>
        <details className="film-description">
          <summary>About this visual walkthrough</summary>
          <p>
            This silent edition of the supplied film introduces Sri Krishna
            Vilas through exterior, arrival, landscape, pool and shared interior
            views. It depicts an earlier architectural presentation. Current
            specifications and detailed plans are available from SIPL.
          </p>
        </details>
      </div>
    </section>
  );
}
