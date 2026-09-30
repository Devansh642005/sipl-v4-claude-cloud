import type { Metadata } from "next";
import { PlanExplorer } from "@/components/sipl/plan-explorer";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";
import { paymentStages, specifications } from "@/data/specs";

export const metadata: Metadata = {
  title: "Floor plans | Sri Krishna Vilas | SIPL Group",
  description: "Reference plans for 1, 1.5, 2 and 3 BHK residences at Sri Krishna Vilas, Varanasi.",
  alternates: { canonical: "/floor-plans" },
};

export default function FloorPlans() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Floor plans"
        title="Find the plan"
        em="that fits your family."
        lead="1, 1.5, 2 and 3 BHK reference plans. Compare them side by side, enlarge any plan, and ask about the one you like."
        image="livingDining"
      />
      <section className="s-section s-bg-sand" aria-label="Plans">
        <div className="s-container">
          <PlanExplorer />
          <p className="s-caption">
            Plans are brochure references. Confirm the current detailed plan and dimensions with SIPL before booking.
          </p>
        </div>
      </section>
      {specifications.length > 0 && (
        <section className="s-section s-bg-ivory" aria-labelledby="spec-t">
          <div className="s-container">
            <p className="s-eyebrow">Specifications</p>
            <h2 id="spec-t" className="s-display s-h2">
              What goes
              <em>into the home.</em>
            </h2>
            <div className="hw-grid">
              {specifications.map((g) => (
                <article key={g.area} className="hw-card">
                  <h3 className="s-display">{g.area}</h3>
                  <dl className="sc-dl">
                    {g.items.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {paymentStages.length > 0 && (
        <section className="s-section s-bg-sage" aria-labelledby="pay-t">
          <div className="s-container">
            <p className="s-eyebrow">Payment stages</p>
            <h2 id="pay-t" className="s-display s-h2">
              What you pay,
              <em>and when.</em>
            </h2>
            <ol className="bg-steps">
              {paymentStages.map((p, i) => (
                <li key={p.stage} className="sp-card">
                  <span className="bg-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="s-display">{p.stage}</h3>
                  <p className="s-body">{p.note}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
      <EnquiryBand title="Not sure which plan?" em="Talk to us." />
    </main>
  );
}
