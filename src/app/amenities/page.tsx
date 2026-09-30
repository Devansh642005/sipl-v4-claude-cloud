import type { Metadata } from "next";
import Image from "next/image";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";

export const metadata: Metadata = {
  title: "Amenities | Sri Krishna Vilas | SIPL Group",
  description: "Amenities at Sri Krishna Vilas: open ground, pool and garden, gyms, courts, clubhouse and more.",
  alternates: { canonical: "/amenities" },
};

const skv = "/projects/sri-krishna-vilas";
const items: { name: string; text: string; src?: string; icon?: "shield" | "bolt" }[] = [
  { name: "70% open area", text: "Landscape planned around the towers.", src: `${skv}/vilas-garden-amphitheatre-1600.webp` },
  { name: "Pool and garden", text: "An exclusive pool and garden area.", src: "/assets/pool.webp" },
  { name: "Club house", text: "A shared space for residents.", src: "/assets/clubhouse.webp" },
  { name: "Open gym", text: "Exercise in open air.", src: "/assets/gym.webp" },
  { name: "Gym and spa", text: "An indoor gym and spa.", src: "/assets/indoor-gym.webp" },
  { name: "Jogging track", text: "A track through the greenery.", src: "/assets/jogging.webp" },
  { name: "Badminton court", text: "A court for evening games.", src: "/assets/badminton.webp" },
  { name: "Kids play area", text: "A play area for children.", src: "/assets/kids-play.webp" },
  { name: "Guest rooms", text: "Rooms for visiting family.", src: "/assets/guest-room.webp" },
  { name: "Gated community", text: "A controlled entrance.", src: `${skv}/vilas-govardhan-entrance-1600.webp` },
  { name: "3 tier security", text: "Layered security for residents.", icon: "shield" },
  { name: "24x7 power backup", text: "Power when you need it.", icon: "bolt" },
];

const Icon = ({ k }: { k: "shield" | "bolt" }) => (
  <svg width="54" height="54" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {k === "shield" ? (
      <path d="M24 6 10 11v11c0 9 6 16 14 20 8-4 14-11 14-20V11L24 6Zm-5 17 4 4 7-8" />
    ) : (
      <path d="M26 5 11 27h11l-2 16 17-24H26l0-14Z" />
    )}
  </svg>
);

export default function Amenities() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Amenities"
        title="Everyday comforts,"
        em="thoughtfully placed."
        lead="Open ground, water, movement and rest. These are the amenities published for Sri Krishna Vilas."
        image="balconyPoolView"
      />
      <section className="s-section s-bg-ivory" aria-label="Amenities">
        <div className="s-container">
          <div className="am-grid">
            {items.map((a) => (
              <article key={a.name} className="sp-card am-card">
                <div className="am-media sp-frame">
                  {a.src ? (
                    <Image src={a.src} alt={a.name} fill sizes="(max-width: 700px) 90vw, 380px" style={{ objectFit: "cover" }} />
                  ) : (
                    <div className="am-icon">
                      <Icon k={a.icon!} />
                    </div>
                  )}
                </div>
                <h3 className="s-display">{a.name}</h3>
                <p className="s-body">{a.text}</p>
              </article>
            ))}
          </div>
          <p className="s-caption">Illustrative images. Confirm the final amenities with SIPL.</p>
        </div>
      </section>
      <EnquiryBand title="See them" em="in person." />
    </main>
  );
}
