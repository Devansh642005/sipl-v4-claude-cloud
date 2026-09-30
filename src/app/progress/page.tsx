import type { Metadata } from "next";
import Image from "next/image";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";

export const metadata: Metadata = {
  title: "Site progress | Sri Krishna Vilas | SIPL Group",
  description: "Photographs from the Sri Krishna Vilas site in Varanasi.",
  alternates: { canonical: "/progress" },
};

const photos = [
  { src: "/assets/progress-wide.webp", alt: "Sri Krishna Vilas site photograph, structure rising", cap: "The structure, from the ground" },
  { src: "/assets/progress-courtyard.webp", alt: "Sri Krishna Vilas site photograph, between the towers", cap: "Between the two towers" },
  { src: "/assets/progress.webp", alt: "Sri Krishna Vilas site photograph, a tower with balconies", cap: "Balconies taking shape" },
];

export default function Progress() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Site progress"
        title="Not only rendered,"
        em="also built."
        lead="Photographs from the Sri Krishna Vilas site. Come and see the progress in person."
        image="sitePhoto"
      />
      <section className="s-section s-bg-ivory" aria-label="Site photographs">
        <div className="s-container">
          <div className="pg-grid">
            {photos.map((p) => (
              <figure key={p.src} className="sp-card pg-fig">
                <div className="pg-img sp-frame">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 900px) 90vw, 420px" style={{ objectFit: "cover" }} />
                </div>
                <figcaption>{p.cap}</figcaption>
              </figure>
            ))}
          </div>
          <p className="s-caption">Site photographs. Dated updates are shared on visits and by request.</p>
        </div>
      </section>
      <EnquiryBand title="Walk the site" em="with our team." />
    </main>
  );
}
