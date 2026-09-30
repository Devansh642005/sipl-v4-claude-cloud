import type { Metadata } from "next";
import { FilmPlayer } from "@/components/sipl/film-player";
import { PanView } from "@/components/sipl/pan-view";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";

export const metadata: Metadata = {
  title: "Virtual tour | Sri Krishna Vilas | SIPL Group",
  description:
    "Watch the Sri Krishna Vilas film chapter by chapter and look around the architectural renders. Artist's impressions.",
  alternates: { canonical: "/tour" },
};

export default function Tour() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Virtual tour"
        title="Walk through"
        em="Sri Krishna Vilas."
        lead="Watch the film chapter by chapter, then look around the renders yourself. All pictures are artist's impressions."
        image="atriumSkylight"
      />
      <section className="s-section s-bg-ivory" aria-labelledby="film-t">
        <div className="s-container">
          <p className="s-eyebrow">The film</p>
          <h2 id="film-t" className="s-display s-h2">
            Ten scenes,
            <em>jump to any one.</em>
          </h2>
          <FilmPlayer />
        </div>
      </section>
      <section className="s-section s-bg-sand" aria-labelledby="look-t">
        <div className="s-container">
          <p className="s-eyebrow">Look around</p>
          <h2 id="look-t" className="s-display s-h2">
            Take your time,
            <em>in any direction.</em>
          </h2>
          <PanView />
        </div>
      </section>
      <EnquiryBand title="Seen enough online?" em="Come and see it." />
    </main>
  );
}
