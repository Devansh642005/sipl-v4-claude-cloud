import Image from "next/image";
import Link from "next/link";
import { contact } from "@/data/contact";
import { contactConfig } from "@/data/contact";
import { siteImages } from "@/data/site-images";
import { ArrowIcon } from "./ui";

const columns = [
  {
    title: "Company",
    links: [
      ["About SIPL", "/about"],
      ["Leadership", "/about/leadership"],
      ["Our Journey", "/about/legacy"],
      ["Recognition", "/about/awards"],
      ["Corporate Culture", "/about/corporate-culture"],
      ["Careers", "/careers"],
    ],
  },
  {
    title: "Projects",
    links: [
      ["Sri Krishna Vilas", "/projects/sri-krishna-vilas"],
      ["Barsana", "/projects/barsana"],
      ["Raman Reti", "/projects/raman-reti"],
      ["The Kashi Residency", "/hospitality/the-kashi-residency"],
      ["Manasi Ganga", "/hospitality/manasi-ganga"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Gallery", "/gallery"],
      ["Media Centre", "/media"],
      ["News & Updates", "/news"],
      ["Insights", "/blog"],
      ["Customer Stories", "/testimonials"],
      ["NRI Corner", "/nri"],
      ["EMI Calculator", "/emi-calculator"],
      ["Virtual Tour", "/tour"],
      ["Floor Plans", "/floor-plans"],
      ["Amenities", "/amenities"],
      ["Site Progress", "/progress"],
      ["Location", "/location"],
      ["Buyer's Guide", "/buyers-guide"],
    ],
  },
];

export function SiteFooter() {
  const logo = siteImages.logoLight;
  return (
    <footer className="s-footer">
      <div className="s-container">
        <div className="s-footer-mark">
          <p className="s-footer-giant" aria-hidden="true">
            Building Trust.
          </p>
          <p className="s-footer-tagline">
            Real estate and hospitality. Rooted in Varanasi.
          </p>
        </div>
        <div className="s-footer-grid">
          <div className="s-footer-brand">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              sizes="150px"
            />
            <ul className="s-footer-social">
              {contactConfig.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.label} <ArrowIcon size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="s-footer-h">{col.title}</h2>
              <ul>
                {col.links.map(([name, href]) => (
                  <li key={href}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <h2 className="s-footer-h">Contact SIPL</h2>
            <ul>
              <li>
                <a href={"tel:" + contact.tel}>{contact.phone}</a>
              </li>
              <li>
                <a href={"mailto:" + contact.email}>{contact.email}</a>
              </li>
            </ul>
            <h3 className="s-footer-sub">Registered Office</h3>
            <address>
              B-30/251, Nagwa, Lanka, Varanasi,
              <br />
              Uttar Pradesh – 221005
            </address>
            <h3 className="s-footer-sub">Corporate Office</h3>
            <address>
              Plot Survey No – 529 A&amp;B,
              <br />
              Lahartara-Bhitari Road, Bhitari,
              <br />
              Varanasi – 221107
            </address>
          </div>
        </div>
        <div className="s-footer-bottom">
          <span>© {new Date().getFullYear()} SIPL Group. All rights reserved.</span>
          <span>
            Renders are artist&apos;s impressions. Confirm current project
            details with SIPL.
          </span>
          <span className="s-footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
