"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { project } from "@/data/sipl";
export function EstateHero({ projectPage = false }: { projectPage?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const media = matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );
    const update = () =>
      setEnabled(
        project.heroVideoApproved &&
          media.matches &&
          !(navigator as Navigator & { connection?: { saveData?: boolean } })
            .connection?.saveData,
      );
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!enabled) return;
    void video.current?.play().catch(() => setEnabled(false));
  }, [enabled]);
  return (
    <section className="hero estate-hero" aria-labelledby="hero-title">
      <div className="hero-image">
        <Image
          src="/assets/hero.webp"
          alt="Architectural visualisation of Sri Krishna Vilas in Varanasi"
          fill
          preload
          sizes="100vw"
          quality={90}
        />
        {enabled && (
          <video
            ref={video}
            className={`hero-video ${ready ? "is-ready" : ""}`}
            src={project.heroVideo}
            poster="/assets/hero.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onPlaying={() => {
              setReady(true);
              setPlaying(true);
            }}
            onPause={() => setPlaying(false)}
            onError={() => setEnabled(false)}
            aria-label="Sri Krishna Vilas architectural hero film"
          />
        )}
      </div>
      <div className="hero-shade" />
      <div className="hero-content">
        <span className="eyebrow hero-kicker">
          SIPL GROUP · BUILDING TRUST · VARANASI
        </span>
        <h1 id="hero-title">Sri Krishna Vilas</h1>
        <p className="hero-statement">
          Considered living.
          <br />
          <em>Rooted in Varanasi.</em>
        </p>
        <div className="hero-cta-cluster">
          <a className="button button-ivory" href="#development">
            Explore the Development <span aria-hidden="true">↗</span>
          </a>
          <a className="button hero-outline" href="#residences">
            Explore Residences <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-secondary">
          <a href="#enquire?intent=visit">Book a Site Visit ↗</a>
          <a href="#enquire">Enquire Now ↗</a>
        </div>
      </div>
      <div className="hero-baseline">
        <span>ARCHITECTURAL VISUALISATION</span>
        {enabled ? (
          <button
            onClick={() => {
              if (playing) {
                video.current?.pause();
                setPlaying(false);
              } else {
                void video.current
                  ?.play()
                  .then(() => setPlaying(true))
                  .catch(() => setEnabled(false));
              }
            }}
          >
            {playing ? "Pause film" : "Play film"}
          </button>
        ) : (
          <a href={projectPage ? "#overview" : "#about"}>
            {projectPage ? "Discover the project" : "Discover SIPL Group"} ↓
          </a>
        )}
      </div>
    </section>
  );
}
export function QuickFacts() {
  return (
    <section className="quick-facts" aria-label="Sri Krishna Vilas at a glance">
      {[
        [project.size, "DEVELOPMENT"],
        ["1 / 1.5 / 2 / 3 BHK", "CONFIGURATIONS"],
        [project.openArea, "OPEN AREA"],
        ["3 Tier", "SECURITY"],
      ].map(([value, label]) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}
