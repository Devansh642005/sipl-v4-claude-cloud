import Link from "next/link";
import { MediaImage } from "./shared";
import { EnquireButton } from "./interactive";

export function DiscoveryCampaign() {
  return (
    <section className="ed-section ed-discovery">
      <div className="ed-key-scene" aria-hidden="true">
        <span className="ed-key-ring" />
        <div className="ed-key-tag">
          <MediaImage id="hospitality" decorative />
          <span>
            SIPL
            <br />
            <small>YOUR NEXT CHAPTER</small>
          </span>
        </div>
      </div>
      <div>
        <span className="ed-label">05 / Let’s begin</span>
        <h2>
          Find your place
          <br />
          <em>in the SIPL story.</em>
        </h2>
        <p>
          A home, a stay, or a first conversation. Tell us what you have in mind
          and choose the project you would like to explore.
        </p>
        <div className="lx-actions">
          <EnquireButton className="lx-btn">Start an enquiry ↗</EnquireButton>
          <Link className="lx-link" href="/contact">
            Contact SIPL
          </Link>
        </div>
        <p className="ed-fine">
          The form prepares an email draft for you to review and send. Site
          visits are confirmed directly by SIPL.
        </p>
      </div>
    </section>
  );
}
export function InteriorCampaign() {
  return (
    <section className="ed-section ed-interior">
      <div>
        <span className="ed-label">Sri Krishna Vilas · Interior study</span>
        <h2>
          Room for
          <br />
          <em>everyday life.</em>
        </h2>
        <p>
          A closer look at a sample-flat interior from the project’s
          architectural visualisations. Finishes and furnishings are
          illustrative; confirm the current specifications with SIPL.
        </p>
      </div>
      <figure className="ed-reveal">
        <MediaImage id="editorial-interior" />
        <figcaption>
          Sample-flat interior · Architectural visualisation
        </figcaption>
      </figure>
    </section>
  );
}
