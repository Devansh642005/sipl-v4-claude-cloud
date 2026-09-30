import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";

export const metadata: Metadata = {
  title: "For investors | Sri Krishna Vilas | SIPL Group",
  description: "Thinking of buying to let or to hold? An honest checklist, with no promised returns.",
  alternates: { canonical: "/investors" },
};

const checks = [
  ["Registration", "Check the RERA registration and the promoter's record before anything else."],
  ["Location", "Rents and resale depend on the neighbourhood. Visit at different hours and talk to people who live nearby."],
  ["Rental demand", "Ask local agents what similar flats actually rent for, and how long they stay empty."],
  ["Holding costs", "Add maintenance, property tax, repairs and vacancy to the sum, not just the loan payment."],
  ["Exit", "Ask how easily similar flats have resold in the area, and what buyers looked for."],
  ["Documents", "Have your lawyer review the agreement, title and approvals before you pay."],
];

export default function Investors() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="For investors"
        title="Buying to let or to hold?"
        em="Check before you commit."
        lead="We will not promise you a return, and neither should anyone selling you a flat. Here is how to judge one yourself."
        image="balconyPoolView"
      />
      <section className="s-section s-bg-ivory" aria-labelledby="chk-t">
        <div className="s-container">
          <p className="s-eyebrow">Your checklist</p>
          <h2 id="chk-t" className="s-display s-h2">
            Six questions
            <em>before you buy.</em>
          </h2>
          <div className="hw-grid">
            {checks.map(([t, d], i) => (
              <article key={t} className="hw-card">
                <span className="hw-k">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="s-display">{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <p className="s-caption">
            General guidance, not financial or legal advice. Property values and rents can fall as well as rise.{" "}
            <Link href="/tools">Try the calculators</Link>.
          </p>
        </div>
      </section>
      <EnquiryBand title="Ask us the hard questions." em="We would rather you did." />
    </main>
  );
}
