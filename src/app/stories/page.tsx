import type { Metadata } from "next";
import Link from "next/link";
import { stories } from "@/data/ask";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";

export const metadata: Metadata = {
  title: "Buyer stories | Sri Krishna Vilas | SIPL Group",
  description: "Four kinds of buyer and honest advice for each, from a first home to a parents' home bought from abroad.",
  alternates: { canonical: "/stories" },
};

export default function Stories() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Buyer stories"
        title="Which buyer"
        em="are you?"
        lead="Four kinds of buyer we meet often, and the advice we would give each one."
        image="gokulEntrance"
      />
      <section className="s-section s-bg-ivory" aria-label="Buyer profiles">
        <div className="s-container">
          <div className="st-grid">
            {stories.map((s, i) => (
              <article key={s.who} className="st-card sp-card">
                <span className="st-n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="s-display">{s.who}</h3>
                <p className="st-line">“{s.line}”</p>
                <p className="st-plan">{s.plan}</p>
                <ul>
                  {s.advice.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <Link className="s-textlink" href={s.href}>
                  {s.action}
                </Link>
              </article>
            ))}
          </div>
          <p className="s-caption">Illustrative buyer profiles. These are not customer testimonials.</p>
        </div>
      </section>
      <EnquiryBand title="Recognise yourself?" em="Let us show you around." />
    </main>
  );
}
