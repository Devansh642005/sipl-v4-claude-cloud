import type { Metadata } from "next";
import "./globals.css";
import "./estate.css";
import "./corporate.css";
import "./royal.css";
import "./experience.css";
import "./luxe.css";
import "./editorial.css";
import "./sipl.css";
import "./deep.css";
import type { Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { VideoTheatre } from "@/components/corporate/video-theatre";
import { GraphicMotion } from "@/components/corporate/graphic-motion";
import { GlobalContact } from "@/components/corporate/interactive";
import { SiteHeader } from "@/components/sipl/site-header";
import { SiteFooter } from "@/components/sipl/site-footer";
import { ScrollJourney } from "@/components/sipl/scroll-journey";
import { GoldCursor, PageMotion } from "@/components/sipl/page-motion";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F6F0E6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://siplgroup.in"),
  title: "SIPL Group | Building Trust",
  description: "SIPL Group — real estate and hospitality in Varanasi.",
  openGraph: {
    siteName: "SIPL Group",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/assets/varanasi.webp", alt: "Varanasi riverfront" }],
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: process.env.SIPL_ALLOW_INDEXING === "true",
    follow: process.env.SIPL_ALLOW_INDEXING === "true",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="s-body-root">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <ScrollJourney />
        <PageMotion />
        <GoldCursor />
        {children}
        <SiteFooter />
        <GlobalContact />
        <GraphicMotion />
        <VideoTheatre />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://siplgroup.in/#organization",
                  name: "SIPL Group",
                  url: "https://siplgroup.in/",
                  logo: "https://siplgroup.in/assets/logo-dark.png",
                  telephone: "+915424000511",
                  email: "email@siplgroup.in",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://siplgroup.in/#website",
                  url: "https://siplgroup.in/",
                  name: "SIPL Group",
                  publisher: { "@id": "https://siplgroup.in/#organization" },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
