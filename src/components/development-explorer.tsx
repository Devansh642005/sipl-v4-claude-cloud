"use client";
import Image from "next/image";
import { useState, type ComponentType } from "react";
import {
  developmentModes,
  developmentModel,
  type DevelopmentMode,
  type ModelAsset,
} from "@/data/flagship";
import { ImageViewer } from "./image-viewer";

// Future client-only R3F adapter owns loading, error recovery, camera and picking.
// Touch gestures must be opt-in to the canvas so page scrolling stays usable.
export type ModelViewportProps = {
  asset: ModelAsset;
  mode: DevelopmentMode;
  command: {
    kind: "rotate" | "zoom-in" | "zoom-out" | "reset";
    sequence: number;
  } | null;
  onReady: () => void;
  onError: () => void;
  onSelect: (mode: DevelopmentMode) => void;
};
export function DevelopmentExplorer({
  asset = developmentModel,
  Viewport,
}: {
  asset?: ModelAsset | null;
  Viewport?: ComponentType<ModelViewportProps>;
}) {
  const [mode, setMode] = useState<DevelopmentMode>("Overview");
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [command, setCommand] = useState<ModelViewportProps["command"]>(null);
  const reference =
    mode === "Master Plan"
      ? "/assets/master-plan.webp"
      : mode === "Towers"
        ? "/assets/east.webp"
        : mode === "Amenities"
          ? "/assets/pool.webp"
          : "/assets/exterior-aerial.webp";
  return (
    <section id="development" className="section development-explorer">
      <div className="master-heading">
        <div>
          <span className="eyebrow red">EXPLORE THE DEVELOPMENT</span>
          <h2>
            The whole place.
            <br />
            <em>Within view.</em>
          </h2>
        </div>
        <p>
          Explore the development through architectural perspectives and the
          supplied master plan. Move between views to understand the towers and
          shared spaces.
        </p>
      </div>
      <div
        className="explorer-modes"
        role="group"
        aria-label="Development mode"
      >
        {developmentModes.map((item) => (
          <button
            key={item}
            aria-pressed={mode === item}
            onClick={() => setMode(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="model-stage">
        {asset && Viewport && !failed ? (
          <Viewport
            asset={asset}
            mode={mode}
            command={command}
            onReady={() => setReady(true)}
            onError={() => {
              setFailed(true);
              setReady(false);
            }}
            onSelect={setMode}
          />
        ) : (
          <Image
            src={reference}
            alt={
              mode === "Master Plan"
                ? "Supplied illustrative master plan"
                : "Supplied architectural aerial visualisation; not an interactive 3D model"
            }
            fill
            sizes="(max-width: 767px) 90vw, 89vw"
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <div className="explorer-status" aria-live="polite">
        <span className="eyebrow">{mode}</span>
        <p>
          {failed
            ? "The model could not be loaded. Explore the supplied imagery below."
            : ready
              ? "Interactive development model"
              : asset && Viewport
                ? "Loading development model…"
                : "ARCHITECTURAL VISUALISATION · REFERENCE VIEW"}
        </p>
      </div>
      <div
        className="explorer-controls"
        role="group"
        aria-label="Development controls"
      >
        {ready &&
          (
            [
              ["Rotate", "rotate"],
              ["Zoom in", "zoom-in"],
              ["Zoom out", "zoom-out"],
              ["Reset View", "reset"],
            ] as const
          ).map(([label, kind]) => (
            <button
              key={kind}
              disabled={!ready}
              onClick={() =>
                setCommand((c) => ({ kind, sequence: (c?.sequence ?? 0) + 1 }))
              }
            >
              {label}
            </button>
          ))}
        <ImageViewer src={reference} label="Development reference image" />
        <a className="arrow-link" href="#journey">
          Guided visual tour <span aria-hidden="true">↓</span>
        </a>
      </div>
      <p className="model-note">
        Open a perspective fullscreen for a closer look, or follow the guided
        visual journey from arrival to residence.
      </p>
    </section>
  );
}
