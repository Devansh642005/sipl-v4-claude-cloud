import type { Metadata } from "next";
import { PlanExplorer } from "@/components/sipl/plan-explorer";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";

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
      <EnquiryBand title="Not sure which plan?" em="Talk to us." />
    </main>
  );
}
