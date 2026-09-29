import Image from "next/image";
import { ArchitecturalLineArt, GraphicSideRail } from "./architectural-art";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";
import { media } from "@/data/media";
import { projects } from "@/data/projects";
import { contact, contactConfig } from "@/data/contact";
import { snapshot } from "@/data/company";
import { awards } from "@/data/awards";
import { news } from "@/data/news";
import { EnquireButton } from "./interactive";
import { ImageViewer } from "@/components/image-viewer";

export function MediaImage({
  id,
  className = "",
  priority = false,
  decorative = false,
}: {
  id: string;
  className?: string;
  priority?: boolean;
  decorative?: boolean;
}) {
  const m = media[id];
  return m ? (
    <div className={"c-media " + className} data-id={id}>
      <Image
        src={m.src}
        alt={decorative ? "" : m.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
        priority={priority}
      />
    </div>
  ) : null;
}

export function KnowMore({
  href,
  children = "Know More",
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <Link className="lx-link" href={href}>
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

/* ── cinematic page hero ───────────────────────────────────────────────
   Photography sits behind the type, not beside it. Where a route has no
   suitable image the plain variant changes rhythm instead of leaving a
   hole — a wide serif statement against a narrow intro column. */
export function PageHero({
  title,
  kicker = "SIPL GROUP",
  intro,
  image,
}: {
  title: string;
  kicker?: string;
  intro: string;
  image?: string;
}) {
  const heading = title.includes(" ") ? (
    <>
      {title.slice(0, title.lastIndexOf(" "))}{" "}
      <em>{title.slice(title.lastIndexOf(" ") + 1)}</em>
    </>
  ) : (
    title
  );

  if (!image)
    return (
      <section className="lx-phero lx-phero-plain">
        <div className="lx-phero-inner">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">{kicker}</span>
            <h1>{heading}</h1>
          </div>
          <div>
            <p>{intro}</p>
          </div>
        </div>
        <ArchitecturalLineArt variant="elevation" />
      </section>
    );

  return (
    <section className="lx-phero">
      <MediaImage id={image} priority decorative />
      <div className="lx-phero-veil" aria-hidden="true" />
      <div className="lx-phero-inner">
        <span className="lx-eyebrow lx-eyebrow-rule">{kicker}</span>
        <h1>{heading}</h1>
        <p>{intro}</p>
      </div>
      <GraphicSideRail label="SIPL / BUILDING TRUST" />
    </section>
  );
}

export function Breadcrumbs({ path, title }: { path: string; title: string }) {
  const parts = path.split("/").filter(Boolean);
  const labels: Record<string, string> = {
    about: "About",
    projects: "Projects",
    hospitality: "Hospitality",
    gallery: "Gallery",
    blog: "Insights",
  };
  const items = [
    { name: "Home", href: "/" },
    ...parts.slice(0, -1).map((p, i) => ({
      name: labels[p] || p,
      href:
        p === "hospitality"
          ? "/projects/hospitality"
          : "/" + parts.slice(0, i + 1).join("/"),
    })),
    { name: title, href: path },
  ];
  return (
    <>
      <nav className="c-breadcrumbs" aria-label="Breadcrumb">
        {items.map((x, i) => (
          <span key={i}>
            {i > 0 && " / "}
            {i === items.length - 1 ? (
              <span aria-current="page">{x.name}</span>
            ) : (
              <Link href={x.href}>{x.name}</Link>
            )}
          </span>
        ))}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map((x, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: x.name,
              item: "https://siplgroup.in" + x.href,
            })),
          }),
        }}
      />
    </>
  );
}

/* premium statistics — serif numerals, hairline dividers, no cards */
export function Snapshot() {
  return (
    <section className="lx-sec lx-sec-tight">
      <div className="lx-inner">
        <div className="lx-stats">
          {snapshot.map((s) => (
            <div key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
          <div>
            <b>Building Trust</b>
            <span>One shared principle</span>
          </div>
        </div>
        <div style={{ marginTop: "var(--lx-s6)" }}>
          <KnowMore href="/about/legacy">Our journey</KnowMore>
        </div>
      </div>
    </section>
  );
}

export function CorporateCTA() {
  return (
    <section className="lx-sec lx-sec-dark">
      <div className="lx-inner lx-ed lx-ed-center">
        <div>
          <span className="lx-eyebrow lx-eyebrow-rule">
            A conversation begins here
          </span>
          <h2>
            Let&rsquo;s talk about <em>your next address.</em>
          </h2>
        </div>
        <div className="lx-ed-body">
          <p>
            Tell us what you are looking for and SIPL will come back to you
            directly. Availability, pricing and approvals are confirmed by the
            team, not by this website.
          </p>
          <div className="lx-actions" style={{ marginTop: "var(--lx-s7)" }}>
            <Link className="lx-btn lx-btn-light" href="/projects">
              Explore projects
            </Link>
            <EnquireButton intent="Site Visit" className="lx-btn lx-btn-ghost">
              Book a visit
            </EnquireButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* the certificate is a document — shown whole, never cropped */
export function Recognition({ full = false }: { full?: boolean }) {
  const a = awards[0];
  return (
    <section className="lx-sec lx-sec-cream">
      <div className="lx-inner lx-split lx-ed-center">
        <figure className="lx-frame lx-ar-editorial">
          <MediaImage id={a.image} decorative />
        </figure>
        <div>
          <span className="lx-eyebrow lx-eyebrow-rule">
            Project recognition · Sustainability
          </span>
          <h2>{a.title}</h2>
          <p>
            {a.project} · {a.issuer} · {a.date}
          </p>
          {full ? (
            <>
              <p style={{ marginTop: "var(--lx-s5)" }}>{a.description}</p>
              <div style={{ marginTop: "var(--lx-s6)" }}>
                <ImageViewer
                  src={media[a.image].src}
                  label={a.title}
                  triggerLabel="View certificate"
                />
              </div>
            </>
          ) : (
            <div style={{ marginTop: "var(--lx-s6)" }}>
              <KnowMore href="/about/awards">View recognition</KnowMore>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function NewsCards() {
  return (
    <div className="lx-index">
      {news.slice(0, 3).map((n, i) => (
        <article key={n.id}>
          <span className="lx-num">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <span className="lx-eyebrow">{n.category}</span>
            <h3>{n.title}</h3>
          </div>
          <div>
            <p>{n.summary}</p>
            <div style={{ marginTop: "var(--lx-s5)" }}>
              <KnowMore href={n.href}>Read more</KnowMore>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CorporateFooter() {
  const cols = [
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
    { title: "Projects", links: projects.map((p) => [p.name, p.href]) },
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
      ],
    },
  ];
  return (
    <footer className="c-footer">
      <div className="c-footer-top">
        <div className="c-footer-brand">
          <Image
            src={media["logo-light"].src}
            alt="SIPL Group"
            width={130}
            height={70}
          />
          <p>Building Trust</p>
          <p>
            Real estate and hospitality.
            <br />
            Rooted in Varanasi.
          </p>
          <div className="c-socials">
            {contactConfig.socials.map((s) => (
              <a href={s.href} key={s.label} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3>{c.title}</h3>
            {c.links.map(([n, h]) => (
              <Link key={h} href={h}>
                {n}
              </Link>
            ))}
          </div>
        ))}
        <div className="c-footer-contact">
          <h3>Contact SIPL</h3>
          <a href={"tel:" + contact.tel}>{contact.phone}</a>
          <a href={"mailto:" + contact.email}>{contact.email}</a>
          <h4>Registered Office</h4>
          <p>{contact.registeredOffice}</p>
          <h4>Corporate Office</h4>
          <p>{contact.corporateOffice}</p>
          <Link href="/contact">Office &amp; enquiry details ↗</Link>
        </div>
      </div>
      <div className="c-footer-bottom">
        <span>
          © {new Date().getFullYear()} SIPL Group. All rights reserved.
        </span>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
        <p>
          Architectural visualisations are illustrative. Confirm current project
          details with SIPL.
        </p>
      </div>
    </footer>
  );
}

export function TestimonialPreview() {
  const verified = testimonials.filter((t) => t.verified);
  if (!verified.length) return null;
  return (
    <section className="lx-sec">
      <div className="lx-inner">
        <div className="lx-head">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Customer voices</span>
            <h2>In our customers&rsquo; words.</h2>
          </div>
          <KnowMore href="/testimonials">Read customer stories</KnowMore>
        </div>
        <div className="lx-index">
          {verified.slice(0, 3).map((t, i) => (
            <blockquote key={t.id}>
              <span className="lx-num">{String(i + 1).padStart(2, "0")}</span>
              <p className="lx-quote">{t.quote}</p>
              <div>
                <cite style={{ fontStyle: "normal" }}>{t.name}</cite>
                {t.project && <p className="lx-cap">{t.project}</p>}
                {t.sourceUrl && (
                  <a className="lx-link" href={t.sourceUrl}>
                    {t.source} <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
