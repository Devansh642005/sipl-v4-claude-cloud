"use client";
import { useState } from "react";
import Image from "next/image";
import { media } from "@/data/media";
import { chapters } from "@/data/explorer";
import { ImageViewer } from "./image-viewer";
export function MasterPlan() {
  const [selected, setSelected] = useState(chapters[0]);
  return (
    <section id="master-plan" className="section master-plan">
      <div className="section-label">
        YOUR VISIT, AT A GLANCE <span>03 /</span>
      </div>
      <div className="master-heading">
        <h2>
          A place.
          <br />
          <em>Many perspectives.</em>
        </h2>
        <p>
          See how the towers, internal circulation, landscaping and shared
          amenity areas come together. Enlarge the supplied plan, then explore
          the individual spaces through their architectural visualisations.
        </p>
      </div>
      <div className="master-grid">
        <figure>
          <div className="plan-image">
            <Image
              src={media["master-plan"].src}
              alt="Supplied illustrated master plan of Sri Krishna Vilas showing the two building footprints and surrounding shared spaces"
              fill
              sizes="(max-width: 767px) 90vw, 65vw"
            />
            {chapters
              .filter((c) => c.hotspot)
              .map((c) => (
                <button
                  className="plan-hotspot"
                  key={c.id}
                  style={{ left: `${c.hotspot!.x}%`, top: `${c.hotspot!.y}%` }}
                  aria-label={`Select ${c.title}`}
                  aria-pressed={selected.id === c.id}
                  onClick={() => setSelected(c)}
                >
                  {c.number}
                </button>
              ))}
          </div>
          <figcaption>ILLUSTRATIVE MASTER PLAN · NOT TO SCALE</figcaption>
          <ImageViewer
            src={media["master-plan"].src}
            label="Sri Krishna Vilas master plan"
          />
        </figure>
        <div className="destination-list">
          <span className="eyebrow">CHOOSE A PERSPECTIVE</span>
          {chapters.map((c) => (
            <button
              key={c.id}
              aria-pressed={selected.id === c.id}
              onClick={() => setSelected(c)}
            >
              <small>{c.number}</small>
              <span>{c.title}</span>
              <span aria-hidden="true">↗</span>
            </button>
          ))}
          <div className="plan-context" aria-live="polite" key={selected.id}>
            <span className="eyebrow">
              {selected.number} / SELECTED PERSPECTIVE
            </span>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <ImageViewer
              src={
                media[selected.image]?.src || `/assets/${selected.image}.webp`
              }
              label={`${selected.title} — Sri Krishna Vilas visualisation`}
              triggerLabel="View selected perspective"
            />
          </div>
          <p>
            Perspectives illustrate the design intent. Refer to the supplied
            plan and confirm detailed layouts with SIPL.
          </p>
        </div>
      </div>
    </section>
  );
}
