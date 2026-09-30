"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { configurations } from "@/data/sipl";

function enquire(label: string) {
  window.dispatchEvent(
    new CustomEvent("sipl-enquire", { detail: { project: "Sri Krishna Vilas", intent: `${label} plan` } }),
  );
}

export function PlanExplorer() {
  const [sel, setSel] = useState<string>(configurations[0].label);
  const [all, setAll] = useState(false);
  const [zoom, setZoom] = useState<{ src: string; label: string } | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  const [saved, setSaved] = useState<string[]>([]);
  useEffect(() => {
    try {
      setSaved(JSON.parse(localStorage.getItem("skv-saved-plans") || "[]"));
    } catch {}
  }, []);
  const toggleSave = (label: string) => {
    const next = saved.includes(label) ? saved.filter((x) => x !== label) : [...saved, label];
    setSaved(next);
    try {
      localStorage.setItem("skv-saved-plans", JSON.stringify(next));
    } catch {}
  };
  const share = (labels: string[]) => {
    const text = `${labels.join(", ")} at Sri Krishna Vilas, Varanasi: ${window.location.origin}/floor-plans`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };
  const shown = all ? [...configurations] : configurations.filter((c) => c.label === sel);

  return (
    <div className="pe">
      <div className="pe-bar">
        <div className="s-res-tabs" role="tablist" aria-label="Residence types">
          {configurations.map((c) => (
            <button
              key={c.label}
              role="tab"
              aria-selected={!all && c.label === sel}
              className={!all && c.label === sel ? "is-on" : ""}
              onClick={() => {
                setSel(c.label);
                setAll(false);
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
        <button type="button" className={`pe-compare ${all ? "is-on" : ""}`} onClick={() => setAll((a) => !a)}>
          {all ? "Show one plan" : "Compare all"}
        </button>
      </div>
      {saved.length > 0 && (
        <p className="pe-saved">
          Saved: <b>{saved.join(", ")}</b>
          <button type="button" onClick={() => share(saved)}>
            Share my saved plans
          </button>
        </p>
      )}
      <div className={`pe-grid ${all ? "is-all" : ""}`}>
        {shown.map((c) => (
          <article key={c.label} className="sp-card pe-card">
            <div className="pe-plan sp-frame">
              {c.plan ? (
                <button
                  type="button"
                  aria-label={`Enlarge ${c.label} plan`}
                  onClick={() => {
                    setZoom({ src: c.plan!, label: c.label });
                    dlg.current?.showModal();
                  }}
                >
                  <Image src={c.plan} alt={`${c.label} reference plan`} fill sizes="(max-width: 900px) 90vw, 560px" style={{ objectFit: "contain" }} />
                  <span className="pe-zoom">Enlarge</span>
                </button>
              ) : (
                <p className="s-res-empty">Detailed plan available on request.</p>
              )}
            </div>
            <div className="pe-copy">
              <h3 className="s-display">{c.label}</h3>
              <p className="s-body">{c.note}</p>
              <p className="s-caption">{c.source}</p>
              <div className="pe-actions">
                <button type="button" className="s-pill s-pill-solid" onClick={() => enquire(c.label)}>
                  <span>Enquire about this plan</span>
                </button>
                <button
                  type="button"
                  className={`pe-heart ${saved.includes(c.label) ? "is-on" : ""}`}
                  aria-pressed={saved.includes(c.label)}
                  onClick={() => toggleSave(c.label)}
                >
                  <span aria-hidden="true">{saved.includes(c.label) ? "♥" : "♡"}</span>
                  {saved.includes(c.label) ? "Saved" : "Save"}
                </button>
                <button type="button" className="pe-heart" onClick={() => share([c.label])}>
                  Share on WhatsApp
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <dialog ref={dlg} className="pe-dialog" onClick={(e) => e.target === dlg.current && dlg.current?.close()}>
        {zoom && (
          <div className="pe-dialog-in">
            <button type="button" className="pe-close" onClick={() => dlg.current?.close()}>Close ×</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={zoom.src} alt={`${zoom.label} reference plan, enlarged`} />
          </div>
        )}
      </dialog>
    </div>
  );
}
