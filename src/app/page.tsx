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
  HomeExplore,
  HomeInteriors,
  HomeLife,
  HomeLocation,
  HomeProgress,
  HomeResidences,
  HomeTrust,
} from "@/components/sipl/home-more";
import {
  HomeDay,
  HomeLeadership,
  HomeLines,
  HomeManifesto,
  HomeRecognition,
  HomeStory,
  HomeVoices,
  HomeWhy,
} from "@/components/sipl/home-royal";

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
      <HomeLines />
      <HomeManifesto />
      <HomeRibbon />
      <HomeStatement />
      <HomePortfolio />
      <HomeStory />
      <HomeCurtain />
      <HomeTowers />
      <HomeLife />
      <HomeDay />
      <HomeBand
        id="frontageLandscapeRoad"
        kicker="Open ground"
        title="70% open,"
        em="planned around green."
      />
      <HomeResidences />
      <HomeInteriors />
      <HomeExplore />
      <HomeWhy />
      <HomeLandscape />
      <HomeProgress />
      <HomeRecognition />
      <HomeLeadership />
      <HomeVoices />
      <HomeBand
        id="gardenAmphitheatre"
        kicker="Come and see it"
        title="Visit the site,"
        em="walk the grounds."
        cta={{ href: "/book-visit", label: "Book a site visit" }}
      />
      <HomeLocation />
      <HomeWelcome />
      <HomeEnquiry />
    </main>
  );
}
