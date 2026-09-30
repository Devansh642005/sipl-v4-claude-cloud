import type { Metadata } from "next";
import { BudgetFinder, Eligibility, EmiPlanner, RentVsEmi } from "@/components/sipl/tools";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";

export const metadata: Metadata = {
  title: "Budget planner | Sri Krishna Vilas | SIPL Group",
  description: "Find a plan for your family and your monthly payment. EMI planner and rent-versus-EMI calculator.",
  alternates: { canonical: "/tools" },
};

export default function Tools() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Budget planner"
        title="Start with the number"
        em="you are comfortable with."
        lead="Three small tools to help you decide before you talk to anyone. Nothing is stored and nothing is sent."
        image="lobbyReception"
      />
      <section className="s-section s-bg-ivory" aria-labelledby="find-t">
        <div className="s-container">
          <p className="s-eyebrow">1 · Find a plan</p>
          <h2 id="find-t" className="s-display s-h2">
            Your family,
            <em>your payment.</em>
          </h2>
          <BudgetFinder />
        </div>
      </section>
      <section className="s-section s-bg-sand" aria-labelledby="emi-t">
        <div className="s-container">
          <p className="s-eyebrow">2 · EMI planner</p>
          <h2 id="emi-t" className="s-display s-h2">
            What a loan
            <em>costs each month.</em>
          </h2>
          <EmiPlanner />
        </div>
      </section>
      <section className="s-section s-bg-ivory" aria-labelledby="rent-t">
        <div className="s-container">
          <p className="s-eyebrow">3 · Rent or own</p>
          <h2 id="rent-t" className="s-display s-h2">
            Ten years of rent,
            <em>set against ten years of EMI.</em>
          </h2>
          <RentVsEmi />
        </div>
      </section>
      <section className="s-section s-bg-sand" aria-labelledby="elig-t">
        <div className="s-container">
          <p className="s-eyebrow">4 · Loan eligibility</p>
          <h2 id="elig-t" className="s-display s-h2">
            How much could a bank
            <em>be willing to lend?</em>
          </h2>
          <Eligibility />
        </div>
      </section>
      <EnquiryBand title="Numbers look right?" em="Come and see the home." />
    </main>
  );
}
