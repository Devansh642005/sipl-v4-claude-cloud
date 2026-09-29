import type { Metadata } from "next";
import "./globals.css";
import "./estate.css";
import "./corporate.css";
import "./royal.css";
import "./experience.css";
import "./luxe.css";
import "./editorial.css";
import { VideoTheatre } from "@/components/corporate/video-theatre";
import { GraphicMotion } from "@/components/corporate/graphic-motion";
import {
  CorporateHeader,
  GlobalContact,
} from "@/components/corporate/interactive";
import { CorporateFooter } from "@/components/corporate/shared";
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
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <CorporateHeader />
        {children}
        <CorporateFooter />
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
