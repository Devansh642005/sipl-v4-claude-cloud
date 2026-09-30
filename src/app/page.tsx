import type { Metadata } from "next";
import {
  HomeCurtain,
  HomeEnquiry,
  HomeHero,
  HomeLandscape,
  HomePortfolio,
  HomeRibbon,
  HomeStatement,
  HomeTowers,
  HomeWelcome,
} from "@/components/sipl/home-sections";
import {
  HomeBand,
  HomeInteriors,
  HomeLife,
  HomeLocation,
  HomeProgress,
  HomeResidences,
  HomeTrust,
} from "@/components/sipl/home-more";

export const metadata: Metadata = {
  title: "SIPL Group | Building Trust | Varanasi",
  description:
    "SIPL Group brings real estate and hospitality together in Varanasi. Discover Sri Krishna Vilas, our running residential project, and the wider SIPL portfolio.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main" className="s-page">
      <HomeHero />
      <HomeTrust />
      <HomeRibbon />
      <HomeStatement />
      <HomePortfolio />
      <HomeCurtain />
      <HomeTowers />
      <HomeLife />
      <HomeBand
        id="frontageLandscapeRoad"
        kicker="Open ground"
        title="70% open,"
        em="planned around green."
      />
      <HomeResidences />
      <HomeInteriors />
      <HomeLandscape />
      <HomeProgress />
      <HomeBand
        id="gardenAmphitheatre"
        kicker="Come and see it"
        title="Visit the site,"
        em="walk the grounds."
        cta={{ href: "/contact", label: "Book a site visit" }}
      />
      <HomeLocation />
      <HomeWelcome />
      <HomeEnquiry />
    </main>
  );
}
