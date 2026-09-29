"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import { media } from "@/data/media";
import { ArchitecturalLineArt } from "./architectural-art";

function SceneImage({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const m = media[id];
  return m ? (
    <div
      className={`v-scene-image ${m.type === "logo" ? "is-identity" : ""} ${className}`}
      key={id}
    >
      <Image
        src={m.src}
        alt={m.alt}
        fill
        sizes="(max-width: 700px) 100vw, 60vw"
        style={{ objectPosition: m.focalPoint || "center" }}
      />
    </div>
  ) : null;
}
export function DiscoveryStage({ list }: { list: Project[] }) {
  const [selected, setSelected] = useState("");
  const [mode, setMode] = useState<"visual" | "index">("visual");
  const current = list.find((p) => p.id === selected) || list[0];
  const rail = useRef<HTMLDivElement>(null);
  const start = useRef<{ x: number; scroll: number; active: boolean } | null>(
    null,
  );
  if (!current) return null;
  const index = list.indexOf(current);
  function select(i: number) {
    const p = list[(i + list.length) % list.length];
    setSelected(p.id);
    rail.current
      ?.querySelector<HTMLElement>(`[data-project="${p.id}"]`)
      ?.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  }
  return (
    <div className={`v-discovery is-${mode}`}>
      <div className="v-discovery-toolbar">
        <span>THE SIPL PROJECT COLLECTION</span>
        <div role="group" aria-label="Project view">
          <button
            aria-pressed={mode === "visual"}
            onClick={() => setMode("visual")}
          >
            Visual view
          </button>
          <button
            aria-pressed={mode === "index"}
            onClick={() => setMode("index")}
          >
            Index view
          </button>
        </div>
      </div>
      <div className="v-discovery-stage">
        <div className="v-discovery-media">
          <SceneImage id={current.image} />
          <div className="v-scene-caption">
            <span>
              {current.status} / {current.category}
            </span>
            <span>
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(list.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className="v-discovery-story" key={current.id}>
          <span className="c-kicker">
            {current.category} · {current.status}
          </span>
          <h2>{current.name}</h2>
          {current.location && <p className="v-location">{current.location}</p>}
          <p>{current.description}</p>
          <Link className="c-link" href={current.href}>
            Explore Project <span>↗</span>
          </Link>
          <div className="v-stage-controls">
            <button
              onClick={() => select(index - 1)}
              aria-label="Previous project"
            >
              ←
            </button>
            <span>Explore the collection</span>
            <button onClick={() => select(index + 1)} aria-label="Next project">
              →
            </button>
          </div>
          <ArchitecturalLineArt variant="plan" />
        </div>
      </div>
      <div
        ref={rail}
        className="v-project-index"
        aria-label="Project index"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            select(index + (e.key === "ArrowRight" ? 1 : -1));
          }
        }}
        onPointerDown={(e) => {
          if (e.pointerType === "mouse")
            start.current = {
              x: e.clientX,
              scroll: rail.current!.scrollLeft,
              active: false,
            };
        }}
        onPointerMove={(e) => {
          const s = start.current;
          if (!s || e.buttons !== 1) return;
          if (Math.abs(e.clientX - s.x) > 6) s.active = true;
          if (s.active) rail.current!.scrollLeft = s.scroll - (e.clientX - s.x);
        }}
        onPointerUp={() =>
          setTimeout(() => {
            start.current = null;
          }, 0)
        }
        onPointerLeave={() => {
          start.current = null;
        }}
        onClickCapture={(e) => {
          if (start.current?.active) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        {list.map((p, i) => (
          <article
            className="c-project-card v-index-project"
            key={p.id}
            data-project={p.id}
            data-active={p.id === current.id}
          >
            <button
              onClick={() => setSelected(p.id)}
              onFocus={() => {
                if (mode === "index") setSelected(p.id);
              }}
              onMouseEnter={() => {
                if (mode === "index") setSelected(p.id);
              }}
              aria-pressed={p.id === current.id}
              aria-label={`Preview ${p.name}`}
            >
              <span className="v-index-number">0{i + 1}</span>
              <div>
                <h3>{p.name}</h3>
                <span>
                  {p.category} · {p.status}
                </span>
              </div>
              <span aria-hidden="true">↗</span>
            </button>
            <Link href={p.href} className="v-index-link">
              Know More ↗
            </Link>
          </article>
        ))}
      </div>
      <div className="v-rail-progress" aria-hidden="true">
        <span
          style={{
            width: `${100 / list.length}%`,
            transform: `translateX(${index * 100}%)`,
          }}
        />
      </div>
    </div>
  );
}
export function PortfolioConstellation() {
  const [active, setActive] = useState(projects[0]);
  return (
    <section className="c-section v-constellation">
      <div className="c-section-heading">
        <div>
          <span className="c-kicker">THE GROUP / CONNECTED BY PURPOSE</span>
          <h2>
            Different places.
            <br />
            <em>One SIPL.</em>
          </h2>
        </div>
        <p>
          Explore the relationships within our portfolio. Select a project to
          find its next chapter.
        </p>
      </div>
      <div className="v-constellation-layout">
        <div className="v-constellation-map">
          <svg viewBox="0 0 700 370" aria-hidden="true">
            <path d="M350 185H150V65H40M150 185V305H40M350 185H560V105H660M560 185V280H660M350 185V335" />
          </svg>
          <div className="v-constellation-core">
            SIPL<span>BUILDING TRUST</span>
          </div>
          {projects.map((p, i) => (
            <button
              className={`v-node v-node-${i}`}
              key={p.id}
              aria-pressed={p.id === active.id}
              onClick={() => setActive(p)}
            >
              <i />
              <span>
                {p.name}
                <small>{p.status}</small>
              </span>
            </button>
          ))}
          <span className="v-diagram-note">
            PORTFOLIO RELATIONSHIPS · NOT A GEOGRAPHIC MAP
          </span>
        </div>
        <div className="v-constellation-detail" key={active.id}>
          <span className="c-kicker">
            {active.category} / {active.status}
          </span>
          <h3>{active.name}</h3>
          <p>{active.description}</p>
          <Link className="c-link" href={active.href}>
            Know More ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
const values = [
  {
    name: "Trust",
    line: "Commitments become relationships.",
    text: "Fulfilling commitments and maintaining open relationships with customers, investors and employees.",
    image: "event-1",
  },
  {
    name: "Ethics",
    line: "Care in every decision.",
    text: "Care in the way we work, communicate and make decisions.",
    image: "event-2",
  },
  {
    name: "Principles",
    line: "A consistent way of working.",
    text: "A consistent focus on quality, learning and responsibility.",
    image: "event-3",
  },
];
export function ValuesChapter() {
  const [active, setActive] = useState(0);
  return (
    <section className="c-section c-principles v-values">
      <ArchitecturalLineArt variant="plan" />
      <span className="c-kicker">OUR CORE PHILOSOPHY</span>
      <div className="v-values-layout">
        <div
          className="v-value-tabs"
          role="tablist"
          aria-label="SIPL principles"
        >
          {values.map((v, i) => (
            <button
              key={v.name}
              id={`value-tab-${i}`}
              role="tab"
              aria-selected={active === i}
              aria-controls="value-panel"
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onKeyDown={(e) => {
                if (
                  ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(
                    e.key,
                  )
                ) {
                  e.preventDefault();
                  const next =
                    (i +
                      (["ArrowDown", "ArrowRight"].includes(e.key) ? 1 : 2)) %
                    3;
                  setActive(next);
                  document.getElementById(`value-tab-${next}`)?.focus();
                }
              }}
            >
              <small>0{i + 1}</small>
              <span>{v.name}</span>
              <b aria-hidden="true">↗</b>
            </button>
          ))}
        </div>
        <div
          id="value-panel"
          role="tabpanel"
          aria-labelledby={`value-tab-${active}`}
          className="v-value-panel"
        >
          <SceneImage id={values[active].image} />
          <div key={active}>
            <h2>{values[active].line}</h2>
            <p>{values[active].text}</p>
            <span className="v-photo-note">SIPL project event archive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function CultureRail() {
  const rail = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  return (
    <section className="c-section v-culture">
      <div className="c-section-heading">
        <div>
          <span className="c-kicker">PEOPLE / SHARED MOMENTS</span>
          <h2>
            The relationships
            <br />
            <em>behind our work.</em>
          </h2>
        </div>
        <div className="v-stage-controls">
          <button
            aria-label="Previous event photograph"
            onClick={() =>
              rail.current?.scrollBy({
                left: -350,
                behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? "instant"
                  : "smooth",
              })
            }
          >
            ←
          </button>
          <button
            aria-label="Next event photograph"
            onClick={() =>
              rail.current?.scrollBy({
                left: 350,
                behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? "instant"
                  : "smooth",
              })
            }
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={rail}
        className="v-culture-rail"
        tabIndex={0}
        aria-label="SIPL event photographs"
        onScroll={() => {
          const el = rail.current!;
          setPosition(
            el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth),
          );
        }}
      >
        {["event-1", "event-2", "event-3", "event-4", "event-5"].map(
          (id, i) => (
            <figure key={id}>
              <SceneImage id={id} />
              <figcaption>
                <span>0{i + 1}</span> SIPL project gathering · Event archive
              </figcaption>
            </figure>
          ),
        )}
      </div>
      <div className="v-rail-progress" aria-hidden="true">
        <span
          style={{ width: "30%", transform: `translateX(${position * 233}%)` }}
        />
      </div>
      <p className="c-small">
        People and moments from the supplied company archive. Event names and
        capture dates are not confirmed.
      </p>
    </section>
  );
}
const amenityScenes = [
  {
    name: "Pool & garden",
    id: "pool",
    text: "Explore the project’s pool and shared outdoor setting.",
  },
  {
    name: "Club House",
    id: "clubhouse",
    text: "A shared destination within the residential development.",
  },
  {
    name: "Open Gym",
    id: "gym",
    text: "Outdoor activity forms part of the project’s amenity offering.",
  },
  {
    name: "Jogging Track",
    id: "jogging",
    text: "Explore the outdoor circulation and jogging-track visualisation.",
  },
  {
    name: "Atrium",
    id: "atrium",
    text: "A view into the shared architectural spaces between residences.",
  },
];
export function AmenityExplorer() {
  const [active, setActive] = useState(0);
  return (
    <div className="v-amenity-explorer">
      <div className="v-amenity-image">
        <SceneImage id={amenityScenes[active].id} />
        <div key={active}>
          <span className="c-kicker">SRI KRISHNA VILAS / SHARED SPACES</span>
          <h3>{amenityScenes[active].name}</h3>
          <p>{amenityScenes[active].text}</p>
          <small>
            Architectural visualisation · Confirm final specifications with
            SIPL.
          </small>
        </div>
      </div>
      <div
        className="v-amenity-tabs"
        role="group"
        aria-label="Explore amenities"
      >
        {amenityScenes.map((a, i) => (
          <button
            key={a.name}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            <span>0{i + 1}</span>
            {a.name}
            <b aria-hidden="true">↗</b>
          </button>
        ))}
      </div>
    </div>
  );
}
