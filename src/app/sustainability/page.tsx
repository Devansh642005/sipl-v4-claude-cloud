import type { Metadata } from "next";
import Image from "next/image";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";

export const metadata: Metadata = {
  title: "Sustainability | Sri Krishna Vilas | SIPL Group",
  description: "Sri Krishna Vilas is IGBC Green Homes precertified Gold. What that means, and what it does not.",
  alternates: { canonical: "/sustainability" },
};

const areas = [
  ["Site and surroundings", "Green Homes ratings look at how a project sits on its land, including open space and planting."],
  ["Water", "Ratings consider how a building uses and conserves water."],
  ["Energy", "Design choices that reduce the energy a home needs are part of the assessment."],
  ["Materials", "The choice and sourcing of construction materials is one of the areas reviewed."],
  ["Indoor comfort", "Daylight, ventilation and the quality of the indoor environment are assessed."],
  ["Innovation", "Extra credit for approaches that go beyond the standard checklist."],
];

export default function Sustainability() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Sustainability"
        title="Certified Gold,"
        em="explained plainly."
        lead="Sri Krishna Vilas is IGBC Green Homes precertified Gold. Here is what that means, and, just as important, what it does not."
        image="gardenAmphitheatre"
      />
      <section className="s-section s-bg-ivory" aria-labelledby="cert-t">
        <div className="s-container hr-grid">
          <figure className="hr-cert">
            <div className="hr-cert-img">
              <Image src="/assets/skv-igbc-precertificate.jpg" alt="IGBC Green Homes precertificate, Gold, Sri Krishna Vilas, November 2025" fill sizes="(max-width: 900px) 90vw, 560px" style={{ objectFit: "contain" }} />
            </div>
            <figcaption>IGBC registration GH240670 · November 2025</figcaption>
          </figure>
          <div>
            <p className="s-eyebrow">The certificate</p>
            <h2 id="cert-t" className="s-display s-h2">
              What it says,
              <em>and what it doesn&apos;t.</em>
            </h2>
            <p className="s-body">
              The Indian Green Building Council has precertified Sri Krishna Vilas at Gold level under its Green Homes
              Rating System. The certificate is dated November 2025.
            </p>
            <p className="s-body">
              Precertification is given at design stage. It shows that the project has demonstrated intent to design and
              build to a high performance standard. It is not the final certification, which follows construction and
              review. Please confirm the current status with SIPL.
            </p>
          </div>
        </div>
      </section>
      <section className="s-section s-bg-sage" aria-labelledby="areas-t">
        <div className="s-container">
          <p className="s-eyebrow">What green ratings look at</p>
          <h2 id="areas-t" className="s-display s-h2">
            Six areas,
            <em>one benchmark.</em>
          </h2>
          <div className="hw-grid">
            {areas.map(([t, d], i) => (
              <article key={t} className="hw-card">
                <span className="hw-k">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="s-display">{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <p className="s-caption">General description of green-home rating areas. Project-specific features are confirmed by SIPL.</p>
        </div>
      </section>
      <EnquiryBand title="Ask what it means" em="for your home." />
    </main>
  );
}
