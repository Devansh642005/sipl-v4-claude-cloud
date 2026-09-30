import type { Metadata } from "next";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";
import { ReferralShare } from "@/components/sipl/referral-share";

export const metadata: Metadata = {
  title: "Recommend Sri Krishna Vilas | SIPL Group",
  description: "Know someone looking for a home in Varanasi? Share Sri Krishna Vilas with them.",
  alternates: { canonical: "/referral" },
};

export default function Referral() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Share"
        title="Know someone"
        em="looking for a home?"
        lead="The best introductions come from people who already trust us. Send this page to a friend or family member."
        image="gokulEntrance"
      />
      <section className="s-section s-bg-sand" aria-label="Share">
        <div className="s-container">
          <ReferralShare />
        </div>
      </section>
      <EnquiryBand title="Thank you" em="for spreading the word." />
    </main>
  );
}
