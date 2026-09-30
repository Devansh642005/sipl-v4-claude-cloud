import Link from "next/link";
import { SiteImg } from "./ui";
import type { SiteImageKey } from "@/data/site-images";

/** Shared header for the Sri Krishna Vilas explore pages. */
export function SubHero({
  kicker,
  title,
  em,
  lead,
  image,
}: {
  kicker: string;
  title: string;
  em: string;
  lead: string;
  image: SiteImageKey;
}) {
  return (
    <section className="sp-hero" aria-labelledby="sp-title">
      <div className="s-container sp-hero-in">
        <div className="sp-hero-copy">
          <p className="sp-crumb">
            <Link href="/">Home</Link> / <Link href="/projects/sri-krishna-vilas">Sri Krishna Vilas</Link> / {kicker}
          </p>
          <p className="s-eyebrow">{kicker}</p>
          <h1 id="sp-title" className="s-display sp-h1">
            {title}
            <em>{em}</em>
          </h1>
          <p className="s-lead">{lead}</p>
        </div>
        <div className="sp-hero-media sp-frame" data-parallax="0.05">
          <SiteImg id={image} sizes="(max-width: 900px) 90vw, 600px" priority />
        </div>
      </div>
    </section>
  );
}

export function EnquiryBand({ title, em }: { title: string; em: string }) {
  return (
    <section className="s-section s-bg-cocoa sp-cta" aria-label="Enquire">
      <div className="s-container sp-cta-in">
        <h2 className="s-display s-h2">
          {title}
          <em>{em}</em>
        </h2>
        <div className="s-actions">
          <Link href="/contact" className="s-pill s-pill-light">
            <span>Book a site visit</span>
          </Link>
          <Link href="/projects/sri-krishna-vilas" className="s-textlink">
            Project overview
          </Link>
        </div>
      </div>
    </section>
  );
}
