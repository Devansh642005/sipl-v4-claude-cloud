import type { Metadata } from "next";
import Link from "next/link";
import { MediaImage } from "@/components/corporate/shared";
import { EnquireButton } from "@/components/corporate/interactive";
import { companyStory } from "@/data/company";
import { projects } from "@/data/projects";
import { DiscoveryCampaign } from "@/components/corporate/campaigns";

export const metadata: Metadata = {
  title: "SIPL Group | Sri Krishna Vilas | Building Trust",
  description:
    "Discover Sri Krishna Vilas, SIPL Group’s featured residential project in Varanasi, alongside the wider SIPL real estate and hospitality portfolio.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main" className="editorial-home">
      <section className="ed-hero ed-hero-feature" aria-labelledby="home-title">
        <div className="ed-hero-top">
          <span className="ed-label">SIPL Group · Since 2013</span>
          <span className="ed-label">Current featured project · Varanasi</span>
        </div>
        <div className="ed-hero-heading">
          <div>
            <span className="ed-kicker">A new address, carefully considered</span>
            <h1 id="home-title">
              Sri Krishna
              <br />
              <em>Vilas.</em>
            </h1>
          </div>
          <div>
            <p>A considered collection of residences shaped around light, landscape and everyday belonging.</p>
            <p>Explore the architecture and shared spaces of SIPL&apos;s featured residential project.</p>
            <div className="ed-hero-actions">
              <Link className="lx-btn" href="/projects/sri-krishna-vilas">Explore the project ↗</Link>
              <EnquireButton project="Sri Krishna Vilas" intent="Site Visit" className="lx-link">Request a site visit ↗</EnquireButton>
            </div>
          </div>
        </div>
        <figure className="ed-city ed-hero-architecture">
          <MediaImage id="hero" priority />
          <div className="ed-hero-frame" aria-hidden="true"><span /></div>
          <span className="ed-city-word" aria-hidden="true">Vilas</span>
          <figcaption>Sri Krishna Vilas · Architectural visualisation</figcaption>
        </figure>
        <div className="ed-hero-foot">
          <span>Homes with a sense of place.</span>
          <Link href="/about">Meet SIPL Group <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="ed-section ed-intro">
        <span className="ed-label">01 / The SIPL principle</span>
        <div>
          <h2>
            Places matter.
            <br />
            <em>People come first.</em>
          </h2>
          <p>{companyStory.introduction}</p>
          <Link className="lx-link" href="/about">
            Our story <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="ed-intro-note">
          <span className="ed-seal">
            SIPL
            <br />
            <small>BUILDING TRUST</small>
          </span>
          <p>{companyStory.approach}</p>
          <Link className="lx-link" href="/about/leadership">
            The people behind SIPL ↗
          </Link>
        </div>
      </section>
      <section className="ed-section ed-portfolio" id="projects">
        <div className="ed-section-head">
          <div>
            <span className="ed-label">02 / Our portfolio</span>
            <h2>
              Distinct places.
              <br />
              <em>A shared commitment.</em>
            </h2>
          </div>
          <Link className="lx-link" href="/projects">
            Explore all projects ↗
          </Link>
        </div>
        <div className="ed-projects">
          {[
            projects[0],
            projects[3],
            projects[1],
            projects[2],
            projects[4],
          ].map((p, i) => (
            <article
              key={p.id}
              className={
                "ed-project " +
                (p.status === "Upcoming" ? "ed-project-identity" : "")
              }
            >
              <Link
                href={p.href}
                className="ed-project-image"
                aria-label={`Explore ${p.name}`}
              >
                <MediaImage id={p.image} />
                <span className="ed-project-number">0{i + 1}</span>
              </Link>
              <div className="ed-project-meta">
                <span>{p.category}</span>
                <span>{p.status}</span>
              </div>
              <h3>
                <Link href={p.href}>
                  {p.name} <span aria-hidden="true">↗</span>
                </Link>
              </h3>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="ed-section ed-feature">
        <figure className="ed-door">
          <MediaImage id="editorial-arrival" />
          <figcaption>
            Sri Krishna Vilas · Architectural visualisation
          </figcaption>
        </figure>
        <div>
          <span className="ed-label">03 / Featured residential project</span>
          <h2>
            A new perspective
            <br />
            <em>on coming home.</em>
          </h2>
          <p>
            Sri Krishna Vilas brings a choice of 1, 1.5, 2 and 3 BHK residences
            to Lahartara–Bhitari Road, Varanasi.
          </p>
          <p>
            Explore its architecture, shared spaces and reference plans, then
            start a conversation with the SIPL team.
          </p>
          <Link className="lx-btn" href="/projects/sri-krishna-vilas">
            Discover Sri Krishna Vilas ↗
          </Link>
        </div>
      </section>
      <section className="ed-section ed-hospitality">
        <div>
          <span className="ed-label">04 / The hospitality chapter</span>
          <h2>
            A welcome.
            <br />
            <em>With a sense of place.</em>
          </h2>
          <p>
            The Kashi Residency is SIPL’s running hospitality project in
            Varanasi. Discover the property and connect with its team for
            accommodation enquiries.
          </p>
          <Link className="lx-link" href="/hospitality/the-kashi-residency">
            Explore The Kashi Residency ↗
          </Link>
        </div>
        <figure>
          <MediaImage id="kashi-room" />
          <figcaption>The Kashi Residency · Guest room</figcaption>
        </figure>
      </section>
      <DiscoveryCampaign />
      <section className="ed-section ed-company-links">
        <span className="ed-label">More from the group</span>
        {[
          ["Our people", "/about/leadership"],
          ["Our journey", "/about/legacy"],
          ["News & insights", "/blog"],
          ["Join SIPL", "/careers"],
        ].map(([name, href]) => (
          <Link key={href} href={href}>
            {name}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
