import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";

export const metadata: Metadata = {
  title: "Your site visit | Sri Krishna Vilas | SIPL Group",
  description: "What to bring, what to look at and what to ask when you visit Sri Krishna Vilas.",
  alternates: { canonical: "/visit-day" },
};

const bring = ["Everyone who will live in the home", "Your questions, written down", "A photo ID", "A camera or phone for photographs"];
const look = [
  "The gate and how visitors are checked",
  "The two towers and the space between them",
  "The garden, pool area and jogging track",
  "The construction itself, close up, not only from the road",
  "The distance from the entrance to the flat you like",
];
const ask = [
  "Can I see the RERA registration, approved map and title documents?",
  "What is the full cost sheet, line by line?",
  "What is the current construction schedule?",
  "What does the maintenance charge cover?",
  "What is in the specification schedule for my flat?",
];

export default function VisitDay() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Your visit"
        title="What to expect"
        em="on the day."
        lead="A good visit is one where you leave with answers. Here is how to make the most of it."
        image="govardhanEntrance"
      />
      <section className="s-section s-bg-ivory" aria-label="Visit guide">
        <div className="s-container vd">
          {[
            ["Bring", bring],
            ["Look at", look],
            ["Ask", ask],
          ].map(([t, items]) => (
            <article key={t as string} className="hw-card">
              <span className="hw-k">{t as string}</span>
              <ul className="vd-list">
                {(items as string[]).map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="s-container">
          <div className="s-actions">
            <Link href="/book-visit" className="s-pill s-pill-solid">
              <span>Book a site visit</span>
            </Link>
            <Link href="/ask" className="s-textlink">
              More questions to ask
            </Link>
          </div>
        </div>
      </section>
      <EnquiryBand title="Pick a day." em="We will confirm." />
    </main>
  );
}
