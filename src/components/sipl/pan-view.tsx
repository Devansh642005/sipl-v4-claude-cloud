"use client";
import { useRef, useState } from "react";
import { panViews } from "@/data/explore";

/** Drag to look around a wide render. This is a flat picture, not a 360° capture. */
export function PanView() {
  const [i, setI] = useState(0);
  const [z, setZ] = useState(1.6);
  const [p, setP] = useState({ x: 0, y: 0 });
  const box = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);

  const clamp = (x: number, y: number, zoom = z) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return { x, y };
    const mx = (r.width * (zoom - 1)) / 2;
    const my = (r.height * (zoom - 1)) / 2;
    return { x: Math.max(-mx, Math.min(mx, x)), y: Math.max(-my, Math.min(my, y)) };
  };
  const zoom = (d: number) => {
    const nz = Math.max(1, Math.min(3, z + d));
    setZ(nz);
    setP((q) => clamp(q.x, q.y, nz));
  };

  return (
    <div className="pan-wrap">
      <div
        ref={box}
        className="pan sp-frame"
        onPointerDown={(e) => {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          drag.current = { x: e.clientX, y: e.clientY, px: p.x, py: p.y };
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (d) setP(clamp(d.px + e.clientX - d.x, d.py + e.clientY - d.y));
        }}
        onPointerUp={() => (drag.current = null)}
        onPointerCancel={() => (drag.current = null)}
        onWheel={(e) => {
          if (e.ctrlKey) return;
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={panViews[i].src}
          alt={panViews[i].title}
          draggable={false}
          style={{ transform: `translate3d(${p.x}px, ${p.y}px, 0) scale(${z})` }}
        />
        <div className="pan-ui">
          <span>Drag to look around</span>
          <div>
            <button type="button" onClick={() => zoom(-0.35)} aria-label="Zoom out">−</button>
            <button type="button" onClick={() => zoom(0.35)} aria-label="Zoom in">+</button>
          </div>
        </div>
      </div>
      <ul className="pan-thumbs">
        {panViews.map((v, n) => (
          <li key={v.src}>
            <button
              type="button"
              className={n === i ? "is-on" : ""}
              onClick={() => {
                setI(n);
                setP({ x: 0, y: 0 });
              }}
            >
              {v.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="s-caption">
        Artist&apos;s impressions. These are flat renders you can pan and zoom, not 360° captures.
      </p>
    </div>
  );
}
