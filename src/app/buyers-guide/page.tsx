import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";
import { buyingSteps } from "@/data/explore";
import { faqs } from "@/data/sipl";

export const metadata: Metadata = {
  title: "Buyer's guide | Sri Krishna Vilas | SIPL Group",
  description: "How buying a home at Sri Krishna Vilas works, step by step, with common questions answered.",
  alternates: { canonical: "/buyers-guide" },
};

const docs = ["Photo ID", "Address proof", "PAN card", "Income proof, if you need a loan", "Recent bank statements, if you need a loan"];

export default function BuyersGuide() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Buyer's guide"
        title="Buying a home,"
        em="step by step."
        lead="A plain guide to how buying works, what to keep ready, and where to ask if you are unsure."
        image="bedroom"
      />
      <section className="s-section s-bg-ivory" aria-labelledby="steps-t">
        <div className="s-container">
          <p className="s-eyebrow">The steps</p>
          <h2 id="steps-t" className="s-display s-h2">
            Eight steps,
            <em>no surprises.</em>
          </h2>
          <ol className="bg-steps">
            {buyingSteps.map(([t, d], i) => (
              <li key={t} className="sp-card">
                <span className="bg-n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="s-display">{t}</h3>
                <p className="s-body">{d}</p>
              </li>
            ))}
          </ol>
          <p className="s-caption">General guidance. Our team confirms the exact process and documents for your purchase.</p>
        </div>
      </section>
      <section className="s-section s-bg-sand" aria-labelledby="docs-t">
        <div className="s-container bg-two">
          <div>
            <p className="s-eyebrow">Keep ready</p>
            <h2 id="docs-t" className="s-display s-h2">
              Documents
              <em>to keep handy.</em>
            </h2>
            <ul className="bg-checks">
              {docs.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="sp-card bg-emi">
            <h3 className="s-display">Plan your monthly payment</h3>
            <p className="s-body">Try different loan amounts and years with our EMI calculator.</p>
            <Link href="/emi-calculator" className="s-pill s-pill-solid">
              <span>Open the EMI calculator</span>
            </Link>
          </div>
        </div>
      </section>
      {faqs?.length ? (
        <section className="s-section s-bg-ivory" aria-labelledby="faq-t">
          <div className="s-container">
            <p className="s-eyebrow">Questions</p>
            <h2 id="faq-t" className="s-display s-h2">
              Answered,
              <em>plainly.</em>
            </h2>
            <div className="bg-faq">
              {faqs.map((f: { q?: string; a?: string; question?: string; answer?: string }, i: number) => (
                <details key={i} className="sp-card">
                  <summary>{f.q ?? f.question}</summary>
                  <p className="s-body">{f.a ?? f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <EnquiryBand title="Ready to begin?" em="Start with a visit." />
    </main>
  );
}
