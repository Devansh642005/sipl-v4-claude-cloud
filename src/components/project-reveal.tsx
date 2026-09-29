"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
export function ProjectReveal() {
  const reduced = useReducedMotion();
  return (
    <section id="residence" className="section project-reveal">
      <div className="section-label">
        <span className="dot" /> SIPL GROUP / THE FLAGSHIP <span>03 /</span>
      </div>
      <div className="reveal-grid">
        <div>
          <span className="eyebrow red">OUR FLAGSHIP PROJECT</span>
          <h2>
            Sri Krishna
            <br />
            <em>Vilas.</em>
          </h2>
        </div>
        <div className="reveal-copy">
          <p className="reveal-statement">
            More than a view.
            <br />A way to <em>experience home.</em>
          </p>
          <p>
            Step into an architectural vision rooted in Varanasi. Explore the
            spaces, the shared moments and the details of Sri Krishna Vilas.
          </p>
          <div className="reveal-facts">
            {[
              ["THE PLACE", "Lahartara–Bhitari Road, Varanasi"],
              ["THE COLLECTION", "Residential apartments"],
            ].map(([label, value], i) => (
              <motion.div
                key={label}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: reduced ? 0 : i * 0.12 }}
              >
                <span className="eyebrow">{label}</span>
                <p>{value}</p>
              </motion.div>
            ))}
          </div>
          <a href="/projects/sri-krishna-vilas" className="arrow-link">
            Explore Sri Krishna Vilas <span aria-hidden="true">↓</span>
          </a>
          <a href="/projects/sri-krishna-vilas#journey" className="arrow-link">
            Start Guided Experience <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <figure className="flagship-panorama">
        <div className="depth-panorama">
          <Image
            src="/assets/hero.webp"
            alt="Sri Krishna Vilas architectural visualisation showing the residential arrival"
            fill
            sizes="90vw"
          />
        </div>
        <figcaption>
          <span>SRI KRISHNA VILAS / VARANASI</span>
          <span>ARCHITECTURAL VISUALISATION</span>
        </figcaption>
      </figure>
    </section>
  );
}
