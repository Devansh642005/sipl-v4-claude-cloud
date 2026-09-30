"use client";
import Image from "next/image";
import { useState } from "react";
import { configurations } from "@/data/sipl";

function enquire(label: string) {
  window.dispatchEvent(
    new CustomEvent("sipl-enquire", {
      detail: { project: "Sri Krishna Vilas", intent: `${label} plan` },
    }),
  );
}

export function ResidenceTabs() {
  const [i, setI] = useState(0);
  const c = configurations[i];
  return (
    <div className="s-res">
      <div className="s-res-tabs" role="tablist" aria-label="Residence types">
        {configurations.map((k, n) => (
          <button
            key={k.label}
            role="tab"
            aria-selected={n === i}
            className={n === i ? "is-on" : ""}
            onClick={() => setI(n)}
          >
            {k.label}
          </button>
        ))}
      </div>
      <div className="s-res-panel" role="tabpanel">
        <div className="s-res-plan">
          {c.plan ? (
            <Image
              src={c.plan}
              alt={`${c.label} reference plan`}
              fill
              sizes="(max-width: 900px) 90vw, 620px"
              style={{ objectFit: "contain" }}
            />
          ) : (
            <p className="s-res-empty">Detailed plan available on request.</p>
          )}
        </div>
        <div className="s-res-copy">
          <h3 className="s-display">{c.label}</h3>
          <p className="s-body">{c.note}</p>
          <p className="s-caption">{c.source}</p>
          <button className="s-pill s-pill-solid" onClick={() => enquire(c.label)}>
            <span>Enquire about this plan</span>
          </button>
        </div>
      </div>
    </div>
  );
}
