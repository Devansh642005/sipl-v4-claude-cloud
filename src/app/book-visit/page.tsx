import type { Metadata } from "next";
import { SubHero } from "@/components/sipl/subpage";
import { VisitForm } from "@/components/sipl/visit-form";

export const metadata: Metadata = {
  title: "Book a site visit | Sri Krishna Vilas | SIPL Group",
  description: "Pick a day and time to visit Sri Krishna Vilas in Varanasi. We will confirm.",
  alternates: { canonical: "/book-visit" },
};

export default function BookVisit() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Book a visit"
        title="Come and see it"
        em="for yourself."
        lead="Pick a day and a time. Bring the family and your questions. We will confirm by phone or email."
        image="frontageLandscapeRoad"
      />
      <section className="s-section s-bg-sand" aria-label="Visit request form">
        <div className="s-container">
          <VisitForm />
        </div>
      </section>
    </main>
  );
}
