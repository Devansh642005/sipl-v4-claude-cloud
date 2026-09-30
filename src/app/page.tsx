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
      <HomeRibbon />
      <HomeStatement />
      <HomePortfolio />
      <HomeCurtain />
      <HomeTowers />
      <HomeLandscape />
      <HomeWelcome />
      <HomeEnquiry />
    </main>
  );
}
