"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { chapters } from "@/data/explorer";
export function GuidedJourney() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  return (
    <section
      id="journey"
      className={`journey ${reduced ? "journey-reduced" : ""}`}
      aria-labelledby="journey-title"
    >
      <div className="journey-heading section">
        <span className="eyebrow">A GUIDED PROPERTY VISIT</span>
        <h2 id="journey-title">
          Imagine the everyday.
          <br />
          <em>One space at a time.</em>
        </h2>
        <div className="journey-intro">
          <p>
            Seven perspectives on Sri Krishna Vilas, from arrival through the
            walkway, atrium and lobby to the pool and residence. Follow the
            story, or choose where to begin.
          </p>
          <a className="arrow-link light" href="#living">
            Skip to life & amenities <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className="journey-layout">
        <div className="journey-stage" aria-hidden="true">
          <div className="stage-images">
            {chapters.map((c, i) => (
              <motion.div
                className="stage-image"
                key={c.id}
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  scale: reduced ? 1 : active === i ? 1.03 : 1,
                }}
                transition={{ duration: reduced ? 0 : 0.65, ease: "easeInOut" }}
              >
                <Image
                  src={`/assets/${c.image}.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 1px, 65vw"
                  style={{ objectPosition: c.position }}
                />
              </motion.div>
            ))}
          </div>
          <div className="stage-caption">
            <span>ARCHITECTURAL VISUAL</span>
            <span>{chapters[active].number} / 07</span>
          </div>
          <div className="stage-progress">
            <span
              style={{ width: `${((active + 1) / chapters.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="journey-chapters">
          {chapters.map((c, i) => (
            <motion.article
              key={c.id}
              id={`chapter-${c.id}`}
              className={`journey-chapter ${active === i ? "is-active" : ""}`}
              onViewportEnter={() => setActive(i)}
              viewport={{ amount: 0.5 }}
            >
              <div className="chapter-mobile-image">
                <Image
                  src={`/assets/${c.image}.webp`}
                  alt={`${c.title} — Sri Krishna Vilas architectural visualisation`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 1px"
                  style={{ objectPosition: c.position }}
                />
                <span>ARCHITECTURAL VISUAL</span>
              </div>
              <div className="chapter-copy">
                <span className="eyebrow chapter-number">{c.number} / 07</span>
                <h3>{c.title}</h3>
                <p className="chapter-subtitle">{c.subtitle}</p>
                <p>{c.description}</p>
                <a
                  className="arrow-link light"
                  href={
                    i < chapters.length - 1
                      ? `#chapter-${chapters[i + 1].id}`
                      : "#living"
                  }
                >
                  {i < chapters.length - 1
                    ? "Continue the visit"
                    : "Discover everyday life"}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <p className="journey-disclaimer">
        A visual journey using supplied architectural renders. The sequence is
        editorial, not a verified physical route. Detailed specifications are
        available on request.
      </p>
    </section>
  );
}
