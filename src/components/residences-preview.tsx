"use client";
import Image from "next/image";
import { useState } from "react";
import { residences } from "@/data/explorer";
import { ImageViewer } from "./image-viewer";
export function ResidencesPreview() {
  const [selected, setSelected] = useState(0);
  const residence = residences[selected];
  return (
    <section id="residences" className="section residences">
      <div className="section-label">
        YOUR OWN SPACE <span>06 /</span>
      </div>
      <div className="residences-heading">
        <h2>
          A home.
          <br />
          <em>Your way.</em>
        </h2>
        <p>Begin with the space you have in mind.</p>
      </div>
      <div className="residences-layout">
        <div className="residence-visual">
          <Image
            src="/assets/bedroom.webp"
            alt="Illustrative bedroom interior, not a configuration-specific floor plan"
            fill
            sizes="(max-width: 767px) 90vw, 52vw"
          />
          <span className="image-note">ILLUSTRATIVE INTERIOR</span>
        </div>
        <div className="residence-details">
          <div
            className="residence-options"
            role="group"
            aria-label="Residence configuration"
          >
            {residences.map((r, i) => (
              <button
                key={r.id}
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
              >
                {r.label}
              </button>
            ))}
          </div>
          <div className="residence-panel" aria-live="polite">
            <span className="eyebrow">EXPLORE THE POSSIBILITIES</span>
            <h3>{residence.label}</h3>
            <p>
              Tell us what you’re looking for.
              <br />
              We’ll help you take the next step.
            </p>
            <dl>
              <div>
                <dt>Unit types & areas</dt>
                <dd>Awaiting verification</dd>
              </div>
              <div>
                <dt>Tower & availability</dt>
                <dd>To be confirmed</dd>
              </div>
              <div>
                <dt>Detailed floor plan</dt>
                <dd>High-resolution plan pending</dd>
              </div>
            </dl>
            {residence.planImage && (
              <ImageViewer
                src={residence.planImage}
                label={`${residence.label} floor plan`}
              />
            )}
            <a
              className="arrow-link"
              href={`#enquire?project=Sri%20Krishna%20Vilas&configuration=${encodeURIComponent(residence.label)}`}
            >
              Enquire about {residence.label}
              <span aria-hidden="true">↗</span>
            </a>
            <small>
              Configuration preview only. Availability and specifications are
              not confirmed.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
