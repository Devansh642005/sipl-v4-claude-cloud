"use client";
import Image from "next/image";
import { useState } from "react";
import { configurations } from "@/data/sipl";
import { ImageViewer } from "./image-viewer";
export function ConfigurationExplorer() {
  const [selected, setSelected] = useState(0);
  const c = configurations[selected];
  return (
    <section id="residences" className="section configuration-explorer">
      <div className="depth-heading">
        <div>
          <span className="eyebrow red">FIND YOUR RESIDENCE</span>
          <h2>
            Room for
            <br />
            <em>your kind of life.</em>
          </h2>
        </div>
        <p>
          Begin with a configuration. Explore the reference plan, then speak
          with SIPL about the details that matter to you. Supplied plans offer a
          starting point for understanding the layout; request the detailed plan
          for your preferred configuration.
        </p>
      </div>
      <div
        className="configuration-tabs"
        role="group"
        aria-label="Residence configuration"
      >
        {configurations.map((item, i) => (
          <button
            key={item.label}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="configuration-layout">
        <div className="configuration-image">
          <Image
            src="/assets/bedroom.webp"
            alt="Sri Krishna Vilas illustrative bedroom interior"
            fill
            sizes="(max-width: 767px) 90vw, 48vw"
          />
          <span className="image-note">ILLUSTRATIVE INTERIOR</span>
        </div>
        <div className="configuration-detail" aria-live="polite" key={c.label}>
          <span className="eyebrow">SRI KRISHNA VILAS</span>
          <h3>{c.label}</h3>
          <p>Consider the spaces. Picture the everyday.</p>
          {c.plan ? (
            <>
              <div className="configuration-plan">
                <Image
                  src={c.plan}
                  alt={`${c.label} reference plan — ${c.source}`}
                  fill
                  sizes="(max-width: 767px) 85vw, 36vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <ImageViewer
                src={c.plan}
                label={`${c.label} supplied reference plan`}
                triggerLabel="Explore supplied plan"
              />
            </>
          ) : (
            <div className="plan-request">
              <span aria-hidden="true">↗</span>
              <p>Detailed plan available on request.</p>
            </div>
          )}
          <p className="source-note">
            {c.source}. {c.note} Reference images have limited resolution; zoom
            does not add detail.
          </p>
          <a
            className="arrow-link"
            href={`#enquire?project=Sri%20Krishna%20Vilas&configuration=${encodeURIComponent(c.label)}`}
          >
            Request detailed {c.label} plan <span aria-hidden="true">↗</span>
          </a>
          <a
            className="arrow-link"
            href={`#enquire?intent=visit&configuration=${encodeURIComponent(c.label)}`}
          >
            Enquire / book a site visit <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
