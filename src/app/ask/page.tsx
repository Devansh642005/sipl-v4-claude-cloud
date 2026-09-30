import type { Metadata } from "next";
import Link from "next/link";
import { ask } from "@/data/ask";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";

export const metadata: Metadata = {
  title: "Ask us anything | Sri Krishna Vilas | SIPL Group",
  description: "Delays, hidden charges, approvals, loans, NRI purchases and maintenance: the questions buyers are afraid to ask, answered plainly.",
  alternates: { canonical: "/ask" },
};

export default function Ask() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ask.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Ask us anything"
        title="The questions"
        em="you are afraid to ask."
        lead="Every buyer has them and most builders avoid them. Here are plain answers, and the checks you can make yourself."
        image="gardenAmphitheatre"
      />
      <section className="s-section s-bg-ivory" aria-label="Questions and answers">
        <div className="s-container as-wrap">
          {ask.map((x, i) => (
            <details key={x.q} className="as-item sp-card" open={i === 0}>
              <summary>
                <span className="as-n">{String(i + 1).padStart(2, "0")}</span>
                {x.q}
              </summary>
              <p className="s-body">{x.a}</p>
              {"href" in x && (
                <Link className="s-textlink" href={x.href}>
                  {x.action}
                </Link>
              )}
            </details>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <EnquiryBand title="Still a question?" em="Ask it in person." />
    </main>
  );
}
