import type { Metadata } from "next";
import { InteriorCampaign } from "@/components/corporate/campaigns";
import Link from "next/link";
import { AmenityExplorer } from "@/components/corporate/experience";
import { ArchitecturalLineArt } from "@/components/corporate/architectural-art";
import {
  Breadcrumbs,
  MediaImage,
  Recognition,
  KnowMore,
} from "@/components/corporate/shared";
import {
  EnquireButton,
  VideoExperience,
  ProjectCard,
} from "@/components/corporate/interactive";
import { HeroFilm } from "@/components/sipl/hero-film";
import { QuickFacts } from "@/components/estate-hero";
import { MasterPlan } from "@/components/master-plan";
import { ConfigurationExplorer } from "@/components/configuration-explorer";
import { PropertyGallery } from "@/components/property-gallery";
import { ProjectInformation } from "@/components/project-depth";
import { EnquiryForm } from "@/components/enquiry-form";
import { ImageViewer } from "@/components/image-viewer";
import { project, amenities, nearbyDevelopment, faqs } from "@/data/sipl";
import { projects } from "@/data/projects";
import { media } from "@/data/media";

export const metadata: Metadata = {
  title: "Sri Krishna Vilas | Premium Apartments in Varanasi | SIPL Group",
  description:
    "Explore Sri Krishna Vilas on Lahartara–Bhitari Road, Varanasi. 1, 1.5, 2 and 3 BHK configurations, reference plans, amenities, brochure and site visits.",
  alternates: { canonical: "/projects/sri-krishna-vilas" },
  openGraph: {
    title: "Sri Krishna Vilas | SIPL Group",
    description:
      "Residences, plans, amenities and project documentation in Varanasi.",
    url: "/projects/sri-krishna-vilas",
    images: ["/assets/hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Krishna Vilas | SIPL Group",
    description: "Residences on Lahartara–Bhitari Road, Varanasi.",
    images: ["/assets/hero.webp"],
  },
};

const sectionNav: [string, string][] = [
  ["Overview", "overview"],
  ["Architecture", "architecture"],
  ["Master Plan", "master-plan"],
  ["Residences", "residences"],
  ["Amenities", "living"],
  ["Gallery", "gallery"],
  ["Location", "location"],
  ["Brochure", "project-information"],
  ["Enquire", "enquire"],
];

export default function SriKrishnaVilas() {
  const related = projects.filter((p) => p.id !== "sri-krishna-vilas");

  return (
    <main id="main" className="lx-home skv-corporate-detail">
      <Breadcrumbs
        path="/projects/sri-krishna-vilas"
        title="Sri Krishna Vilas"
      />

      {/* ── 1 · CINEMATIC HERO ──────────────────────────────── */}
      <section className="lx-hero lx-hero-film" aria-labelledby="skv-title">
        <HeroFilm />
        <div className="lx-hero-veil" aria-hidden="true" />
        <div className="lx-hero-inner">
          <span className="lx-eyebrow lx-eyebrow-rule">
            Running · Real estate · Varanasi
          </span>
          <h1 id="skv-title">
            Sri Krishna <em>Vilas</em>
          </h1>
          <p>
            Open surroundings, considered architecture and a choice of
            residences on Lahartara–Bhitari Road.
          </p>
          <div className="lx-actions">
            <EnquireButton
              project={project.name}
              intent="Site Visit"
              className="lx-btn lx-btn-light"
            >
              Book a site visit
            </EnquireButton>
            <a className="lx-btn lx-btn-ghost" href={project.brochure} download>
              Download brochure
            </a>
          </div>
          <div className="lx-hero-meta">
            <div>
              <b>{project.size.replace(" Acres", "")}</b>
              <span>Acres, gated</span>
            </div>
            <div>
              <b>{project.openArea}</b>
              <span>Open ground</span>
            </div>
            <div>
              <b>1–3</b>
              <span>BHK</span>
            </div>
            <div>
              <b>IGBC Gold</b>
              <span>Precertified</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 · SECTION NAV ─────────────────────────────────── */}
      <nav className="lx-secnav" aria-label="Project sections">
        {sectionNav.map(([n, h]) => (
          <a href={"#" + h} key={h}>
            {n}
          </a>
        ))}
      </nav>

      {/* ── 3 · OVERVIEW ────────────────────────────────────── */}
      <section id="overview" className="lx-sec">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Project overview</span>
            <h2>
              Space for <em>everyday life.</em>
            </h2>
          </div>
          <div className="lx-ed-body">
            <p>
              Sri Krishna Vilas is a residential project on Lahartara–Bhitari
              Road in Varanasi, developed by {project.developer}, a SIPL Group
              company.
            </p>
            <p>
              The project’s architectural approach emphasises light, ventilation
              and privacy. Shared green spaces, internal circulation and
              amenities connect the residences with life beyond the front door.
            </p>
            <div style={{ marginTop: "var(--lx-s6)" }}>
              <KnowMore href="#residences">See the residences</KnowMore>
            </div>
          </div>
        </div>
        <div className="lx-inner" style={{ marginTop: "var(--lx-s8)" }}>
          <QuickFacts />
        </div>
      </section>

      {/* ── 4 · A FULL-BLEED ARCHITECTURAL MOMENT ───────────── */}
      <section className="lx-bleed" aria-label="Sri Krishna Vilas, aerial view">
        <MediaImage id="exterior-aerial" decorative />
        <div className="lx-bleed-note">
          <span className="lx-eyebrow">The development from above</span>
          <p>
            Seventy percent of the ground is left open — garden, water and
            circulation, rather than built-up density.
          </p>
        </div>
      </section>

      {/* ── 5 · ARCHITECTURE ────────────────────────────────── */}
      <section id="architecture" className="lx-sec lx-sec-cream">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                Architecture in view
              </span>
              <h2>Two perspectives on the same idea.</h2>
            </div>
            <p>
              Open surroundings and considered shared spaces. Architectural
              visualisations show design intent.
            </p>
          </div>
          <div className="lx-plates">
            {(
              [
                ["east", "East-side perspective"],
                ["exterior-evening", "Evening perspective"],
              ] as [string, string][]
            ).map(([id, title]) => (
              <figure key={id}>
                <div className="lx-frame lx-ar-editorial">
                  <MediaImage id={id} />
                </div>
                <figcaption className="lx-cap">
                  {title} · Architectural visualisation
                </figcaption>
                <div style={{ marginTop: "var(--lx-s4)" }}>
                  <ImageViewer src={media[id].src} label={title} />
                </div>
              </figure>
            ))}
          </div>
          <ArchitecturalLineArt variant="elevation" />
        </div>
      </section>

      {/* ── 6 · MASTER PLAN ─────────────────────────────────── */}
      <MasterPlan />

      {/* ── 7 · RESIDENCES ──────────────────────────────────── */}
      <ConfigurationExplorer />

      {/* ── 8 · AMENITIES / LIFESTYLE ───────────────────────── */}
      <section id="living" className="lx-sec lx-sec-dark">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                Amenities &amp; shared spaces
              </span>
              <h2>
                Time for the things
                <br />
                <em>you enjoy.</em>
              </h2>
            </div>
            <p>
              From outdoor activity to quieter moments, the official project
              highlights include these shared facilities. Confirm final
              specifications and availability with SIPL.
            </p>
          </div>
          <AmenityExplorer />
          <ul className="lx-amen" id="amenity-index">
            {amenities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 9 · GALLERY ─────────────────────────────────────── */}
      <PropertyGallery compact />

      {/* ── 10 · ON SITE ────────────────────────────────────── */}
      <section id="updates" className="lx-sec">
        <div className="lx-inner lx-split is-flipped lx-ed-center">
          <figure className="lx-frame lx-ar-editorial">
            <MediaImage id="progress-courtyard" />
            <figcaption className="lx-frame-cap">
              Actual site photography
            </figcaption>
          </figure>
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">On site</span>
            <h2>The work taking shape.</h2>
            <p>
              A view from the supplied Sri Krishna Vilas construction archive.
              Capture date is not confirmed.
            </p>
            <div style={{ marginTop: "var(--lx-s6)" }}>
              <KnowMore href="/gallery/current">View site photos</KnowMore>
            </div>
          </div>
        </div>
      </section>

      <InteriorCampaign />

      {/* ── 11 · FILM ───────────────────────────────────────── */}
      <section id="project-film" className="lx-sec lx-sec-cream">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                The project film
              </span>
              <h2>
                Watch &amp; explore
                <br />
                <em>Sri Krishna Vilas.</em>
              </h2>
            </div>
            <p>
              A silent architectural film. Illustrative project imagery, at your
              own pace.
            </p>
          </div>
          <VideoExperience />
        </div>
      </section>

      {/* ── 12 · LOCATION ───────────────────────────────────── */}
      <section id="location" className="lx-sec">
        <figure className="ed-location-art">
          <MediaImage id="editorial-arrival" />
          <span className="ed-location-pin" aria-hidden="true" />
          <figcaption>
            Sri Krishna Vilas · Lahartara–Bhitari Road, Varanasi
            <br />
            Architectural visualisation · Decorative location marker, not a map
          </figcaption>
        </figure>
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">Location</span>
              <h2>
                Lahartara–Bhitari Road,
                <br />
                <em>Varanasi.</em>
              </h2>
            </div>
            <EnquireButton
              project={project.name}
              intent="Site Visit"
              className="lx-btn"
            >
              Arrange a visit
            </EnquireButton>
          </div>
          <p>
            Contact SIPL to confirm the site entrance and arrange an
            appointment. The following connectivity and development references
            appear in the project material.
          </p>
          <div className="lx-near">
            {nearbyDevelopment.map((n) => (
              <div key={n.name}>
                <span>{n.name}</span>
                <small>{n.status}</small>
              </div>
            ))}
          </div>
          <p className="lx-cap" style={{ marginTop: "var(--lx-s6)" }}>
            Source descriptions are retained, including proposed and sanctioned
            qualifiers. Ask SIPL about current status; no travel times or
            completion dates are implied.
          </p>
        </div>
      </section>

      {/* ── 13 · DEVELOPER CREDIBILITY ──────────────────────── */}
      <div id="credibility">
        <Recognition full />
      </div>

      {/* ── 14 · DOCUMENTS ──────────────────────────────────── */}
      <ProjectInformation />

      {/* ── 15 · QUESTIONS ──────────────────────────────────── */}
      <section className="lx-sec lx-sec-cream">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">
              Project questions
            </span>
            <h2>Useful to know.</h2>
          </div>
          <div>
            {faqs.map((f) => (
              <details className="c-faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 16 · ENQUIRY ────────────────────────────────────── */}
      <section id="enquire" className="lx-sec estate-enquiry">
        <div className="lx-inner lx-enquiry">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">
              Sri Krishna Vilas · Your next step
            </span>
            <h2>Come and take a closer look.</h2>
            <p>
              Request project information or share your preferred date for a
              site visit. SIPL will confirm arrangements directly.
            </p>
            <div style={{ marginTop: "var(--lx-s6)" }}>
              <Link className="lx-link" href="/contact">
                Contact SIPL <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>

      {/* ── 17 · RELATED ────────────────────────────────────── */}
      <section className="lx-sec lx-sec-dark">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                Also in the portfolio
              </span>
              <h2>More from SIPL.</h2>
            </div>
            <KnowMore href="/projects">All projects</KnowMore>
          </div>
          <div className="c-project-grid">
            {related.map((x) => (
              <ProjectCard project={x} key={x.id} />
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: project.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Lahartara–Bhitari Road",
              addressLocality: "Varanasi",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
            url: "https://siplgroup.in/projects/sri-krishna-vilas",
          }),
        }}
      />
    </main>
  );
}
