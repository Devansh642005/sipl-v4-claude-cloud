"use client";
import Image from "next/image";
import { mediaReplacementBySource } from "@/data/media";
import { useRef, useState } from "react";
import { gallery, type GalleryCategory } from "@/data/sipl";
export function PropertyGallery({ compact = false }: { compact?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const overflow = useRef("");
  const touch = useRef<{ x: number; y: number } | null>(null);
  const items = (
    compact
      ? [...gallery].sort(
          (a, b) =>
            Number(b.category === "Interiors") -
            Number(a.category === "Interiors"),
        )
      : gallery
  )
    .filter((item) => filter === "All" || item.category === filter)
    .map((item) => ({
      ...item,
      src: mediaReplacementBySource[item.src] || item.src,
    }));
  const item = items[active] ?? items[0];
  const move = (step: number) =>
    setActive((i) => (i + step + items.length) % items.length);
  return (
    <section id="gallery" className="section property-gallery">
      <div className="depth-heading">
        <div>
          <span className="eyebrow red">SRI KRISHNA VILAS / THE GALLERY</span>
          <h2>
            Every perspective.
            <br />
            <em>One place.</em>
          </h2>
        </div>
        <p>
          Architecture, interiors, shared spaces and the work on site. Explore
          the real project material in detail.
        </p>
      </div>
      <div
        className="gallery-filters"
        role="group"
        aria-label="Gallery category"
      >
        {(
          [
            "All",
            "Exteriors",
            "Interiors",
            "Amenities",
            "Master Plan",
            "Construction",
          ] as const
        ).map((category) => (
          <button
            key={category}
            aria-pressed={filter === category}
            onClick={() => {
              setFilter(category);
              setActive(0);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="gallery-count" aria-live="polite">
        {items.length} perspectives · {filter}
      </p>
      <div className="gallery-grid">
        {(compact && !expanded ? items.slice(0, 6) : items).map((asset, i) => (
          <button
            className="gallery-tile"
            key={asset.id}
            onClick={(e) => {
              trigger.current = e.currentTarget;
              overflow.current = document.body.style.overflow;
              document.body.style.overflow = "hidden";
              setActive(i);
              dialog.current?.showModal();
            }}
            aria-label={`View ${asset.title}`}
          >
            <div className="gallery-tile-image">
              <Image
                src={asset.src}
                alt={asset.title + " — " + asset.note}
                fill
                sizes="(max-width: 600px) 90vw, (max-width: 1023px) 45vw, 30vw"
              />
            </div>
            <span className="gallery-tile-caption">
              <span>
                {asset.title}
                <small>{asset.category}</small>
              </span>
              <span aria-hidden="true">↗</span>
            </span>
          </button>
        ))}
      </div>
      {compact && items.length > 6 && (
        <button
          className="c-button"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded
            ? "Show fewer photos"
            : "View all " + items.length + " photos"}
        </button>
      )}
      <dialog
        className="gallery-dialog"
        ref={dialog}
        aria-label="Project gallery viewer"
        onClose={() => {
          document.body.style.overflow = overflow.current;
          trigger.current?.focus();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            move(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            move(-1);
          }
        }}
      >
        <div className="gallery-dialog-top">
          <span className="eyebrow">SRI KRISHNA VILAS / {item.category}</span>
          <button
            autoFocus
            onClick={() => dialog.current?.close()}
            aria-label="Close gallery"
          >
            Close ×
          </button>
        </div>
        <div
          className="gallery-dialog-image"
          onTouchStart={(e) => {
            touch.current = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
            };
          }}
          onTouchEnd={(e) => {
            if (!touch.current) return;
            const dx = e.changedTouches[0].clientX - touch.current.x,
              dy = e.changedTouches[0].clientY - touch.current.y;
            if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5)
              move(dx < 0 ? 1 : -1);
            touch.current = null;
          }}
        >
          <Image
            key={item.id}
            src={item.src}
            alt={item.title + " — " + item.note}
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="gallery-dialog-bottom">
          <button onClick={() => move(-1)} aria-label="Previous image">
            ←
          </button>
          <div aria-live="polite">
            <h3>{item.title}</h3>
            <p>{item.note}</p>
            <span>
              {active + 1} / {items.length}
            </span>
          </div>
          <button onClick={() => move(1)} aria-label="Next image">
            →
          </button>
        </div>
        <p className="gallery-help">
          Use arrow keys or swipe to browse. Escape closes the viewer.
        </p>
      </dialog>
    </section>
  );
}
