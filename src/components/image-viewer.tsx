"use client";
import { useRef, useState } from "react";
import Image from "next/image";
export function ImageViewer({
  src,
  label,
  triggerLabel = "Explore fullscreen",
}: {
  src: string;
  label: string;
  triggerLabel?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [zoom, setZoom] = useState(1);
  const viewport = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    x: number;
    y: number;
    left: number;
    top: number;
  } | null>(null);
  const reset = () => {
    setZoom(1);
    viewport.current?.scrollTo(0, 0);
  };
  const previousOverflow = useRef("");
  const close = () => {
    document.body.style.overflow = previousOverflow.current;
    reset();
  };
  return (
    <>
      <button
        className="arrow-link"
        onClick={() => {
          previousOverflow.current = document.body.style.overflow;
          document.body.style.overflow = "hidden";
          dialog.current?.showModal();
        }}
      >
        {triggerLabel} <span aria-hidden="true">↗</span>
      </button>
      <dialog
        ref={dialog}
        className="image-dialog"
        onClose={close}
        aria-label={label}
      >
        <div className="viewer-toolbar">
          <span>{label}</span>
          <button
            onClick={() => dialog.current?.close()}
            autoFocus
            aria-label="Close image viewer"
          >
            Close ×
          </button>
        </div>
        <div className="viewer-controls">
          <button
            disabled={zoom <= 1}
            onClick={() => setZoom((z) => Math.max(1, z - 0.5))}
            aria-label="Zoom out"
          >
            −
          </button>
          <output aria-live="polite">{Math.round(zoom * 100)}%</output>
          <button
            disabled={zoom >= 3}
            onClick={() => setZoom((z) => Math.min(3, z + 0.5))}
            aria-label="Zoom in"
          >
            +
          </button>
          <button onClick={reset}>Reset</button>
        </div>
        <div
          ref={viewport}
          className="viewer-scroll"
          onPointerDown={(event) => {
            if (event.pointerType !== "mouse" || event.button !== 0) return;
            event.preventDefault();
            const el = event.currentTarget;
            drag.current = {
              x: event.clientX,
              y: event.clientY,
              left: el.scrollLeft,
              top: el.scrollTop,
            };
            el.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (!drag.current) return;
            event.currentTarget.scrollLeft =
              drag.current.left - (event.clientX - drag.current.x);
            event.currentTarget.scrollTop =
              drag.current.top - (event.clientY - drag.current.y);
          }}
          onPointerUp={() => {
            drag.current = null;
          }}
          onPointerCancel={() => {
            drag.current = null;
          }}
          tabIndex={0}
          aria-label="Zoomed image. Scroll to explore."
        >
          <div className="viewer-canvas" style={{ width: `${zoom * 100}%` }}>
            <Image
              src={src}
              alt={label}
              width={1600}
              height={1135}
              sizes="100vw"
              className="viewer-plan"
            />
          </div>
        </div>
        <p className="viewer-note">
          Use + / − to zoom. Drag, swipe or scroll to pan. Focus the image area
          and use arrow keys to scroll.
        </p>
      </dialog>
    </>
  );
}
