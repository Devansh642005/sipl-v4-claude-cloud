import Link from "next/link";
import { EnquireButton } from "@/components/corporate/interactive";
import { HeroFilm } from "./hero-film";
import { Arch, ArrowIcon, Eyebrow, KeyTag, PillLink, Ribbon, SiteImg, TextLink } from "./ui";

export function HomeHero() {
  return (
    <section className="s-hero s-hero-film" aria-labelledby="home-title">
      <div className="s-film-stage">
        <HeroFilm />
        <div className="s-film-copy">
          <Eyebrow>Current project · Real estate · Running</Eyebrow>
          <h1 id="home-title" className="s-display s-hero-title">
            Two towers.
            <em>Built on trust.</em>
          </h1>
          <p className="s-lead">
            Sri Krishna Vilas is SIPL Group&apos;s running residential project,
            with open surroundings and a choice of 1, 1.5, 2 and 3 BHK
            configurations.
          </p>
          <div className="s-actions">
            <PillLink href="/projects/sri-krishna-vilas">
              Discover Sri Krishna Vilas
            </PillLink>
            <TextLink href="/projects">Explore our portfolio</TextLink>
          </div>
        </div>
      </div>
      <div className="s-container">
        <dl className="s-facts s-film-facts">
          <div>
            <dt>Our founding year</dt>
            <dd>2013</dd>
          </div>
          <div>
            <dt>Business verticals</dt>
            <dd>2</dd>
          </div>
          <div>
            <dt>One shared principle</dt>
            <dd className="s-facts-word">Building Trust</dd>
          </div>
        </dl>
        <p className="s-caption s-film-note">
          Sri Krishna Vilas · Architectural visualisation · Artist&apos;s impression
        </p>
      </div>
    </section>
  );
}

export function HomeRibbon() {
  return (
    <Ribbon
      items={[
        "Sri Krishna Vilas",
        "The Kashi Residency",
        "Barsana",
        "Raman Reti",
        "Manasi Ganga",
      ]}
    />
  );
}

export function HomeStatement() {
  return (
    <section className="s-section s-bg-ivory" aria-labelledby="principle-title">
      <div className="s-container s-statement">
        <span className="s-outline-num" aria-hidden="true">
          01
        </span>
        <Eyebrow>01 / The SIPL principle</Eyebrow>
        <h2 id="principle-title" className="s-display s-h2">
          Homes. Hospitality.
          <em>A shared sense of belonging.</em>
        </h2>
        <div className="s-statement-cols">
          <div>
            <p className="s-body">
              SIPL Group brings real estate and hospitality together in
              Varanasi. Trust, ethics and principles are at the centre of the
              way we work.
            </p>
            <TextLink href="/about">Our story</TextLink>
          </div>
          <div>
            <p className="s-body">
              Quality construction. Lasting customer relationships. Fulfilling
              commitments. Building Trust is the principle that connects our
              work across the group.
            </p>
            <TextLink href="/about/leadership">The people behind SIPL</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

const upcoming = [
  {
    n: "03",
    meta: "Real estate · Upcoming",
    name: "Barsana",
    text: "An upcoming residential group-housing project in the SIPL portfolio.",
    href: "/projects/barsana",
    logo: "logoBarsana",
  },
  {
    n: "04",
    meta: "Real estate · Upcoming",
    name: "Raman Reti",
    text: "An upcoming real-estate development, introduced by SIPL through a township concept.",
    href: "/projects/raman-reti",
    logo: "logoRamanReti",
  },
  {
    n: "05",
    meta: "Hospitality · Upcoming",
    name: "Manasi Ganga",
    text: "The next hospitality chapter in SIPL's announced portfolio.",
    href: "/hospitality/manasi-ganga",
    logo: "logoManasiGanga",
  },
] as const;

export function HomePortfolio() {
  return (
    <section className="s-section s-bg-cocoa" aria-labelledby="portfolio-title">
      <div className="s-container">
        <div className="s-head-row">
          <div>
            <Eyebrow>The SIPL portfolio</Eyebrow>
            <h2 id="portfolio-title" className="s-display s-h2">
              Distinct places.
              <em>A shared commitment.</em>
            </h2>
          </div>
          <PillLink href="/projects" variant="light">
            All projects
          </PillLink>
        </div>
        <div className="s-collage">
          <article className="s-collage-lead">
            <Arch id="aerialTwinTowers" sizes="(max-width: 900px) 90vw, 460px" />
            <div className="s-collage-text">
              <p className="s-meta">01 · Real estate · Running</p>
              <h3 className="s-display s-h3">Sri Krishna Vilas</h3>
              <p className="s-body">
                Residential living with open surroundings and a choice of 1,
                1.5, 2 and 3 BHK configurations.
              </p>
              <TextLink href="/projects/sri-krishna-vilas">Explore project</TextLink>
            </div>
          </article>
          <article className="s-collage-kashi">
            <div className="s-circle">
              <SiteImg id="kashiFacade" sizes="(max-width: 900px) 70vw, 320px" />
            </div>
            <div className="s-collage-text">
              <p className="s-meta">02 · Hospitality · Running</p>
              <h3 className="s-display s-h3">The Kashi Residency</h3>
              <p className="s-body">
                Explore the group&apos;s hospitality presence in Varanasi.
              </p>
              <TextLink href="/hospitality/the-kashi-residency">
                Explore project
              </TextLink>
            </div>
          </article>
          <div className="s-collage-upcoming">
            {upcoming.map((p) => (
              <article key={p.name} className="s-logo-card">
                <div className="s-logo-card-img">
                  <SiteImg id={p.logo} sizes="200px" />
                </div>
                <p className="s-meta">
                  {p.n} · {p.meta}
                </p>
                <h3 className="s-display s-h4">
                  <Link href={p.href} className="s-stretched">
                    {p.name}
                  </Link>
                </h3>
                <p className="s-small">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeCurtain() {
  return (
    <section className="s-curtain-sec s-bg-sand" aria-labelledby="inside-title">
      <div className="s-container s-curtain-head">
        <Eyebrow>Inside Sri Krishna Vilas</Eyebrow>
        <h2 id="inside-title" className="s-display s-giant">
          Step <em>inside.</em>
        </h2>
      </div>
      <div className="s-curtain">
        <div className="s-curtain-rod" aria-hidden="true" />
        <div className="s-curtain-stage">
          <SiteImg id="livingDining" sizes="100vw" />
        </div>
        <div className="s-drape s-drape-left" aria-hidden="true" />
        <div className="s-drape s-drape-right" aria-hidden="true" />
      </div>
      <div className="s-container s-curtain-foot">
        <div>
          <p className="s-display s-h4">Warm timber, soft light.</p>
          <p className="s-small">
            Artist&apos;s impression of an apartment interior at Sri Krishna
            Vilas.
          </p>
        </div>
        <PillLink href="/projects/sri-krishna-vilas" variant="outline">
          Explore Sri Krishna Vilas
        </PillLink>
      </div>
    </section>
  );
}

export function HomeTowers() {
  return (
    <section className="s-section s-bg-terracotta" aria-labelledby="towers-title">
      <div className="s-container s-towers">
        <div className="s-towers-copy">
          <Eyebrow>The towers</Eyebrow>
          <h2 id="towers-title" className="s-display s-h2">
            Two towers,
            <em>two entrances.</em>
          </h2>
          <p className="s-body">
            Govardhan and Gokul, each with its own entrance at Sri Krishna
            Vilas.
          </p>
          <PillLink href="/projects/sri-krishna-vilas" variant="light">
            Meet the towers
          </PillLink>
          <p className="s-caption">Artist&apos;s impressions</p>
        </div>
        <div className="s-keytags">
          <KeyTag id="govardhanEntrance" name="Govardhan" tilt="left" />
          <KeyTag id="gokulEntrance" name="Gokul" tilt="right" />
        </div>
      </div>
    </section>
  );
}

export function HomeLandscape() {
  return (
    <section className="s-section s-bg-olive" aria-labelledby="landscape-title">
      <div className="s-container s-landscape">
        <div className="s-landscape-visual">
          <div className="s-circle s-circle-lg">
            <SiteImg id="gardenAmphitheatre" sizes="(max-width: 900px) 80vw, 560px" />
          </div>
          <div className="s-circle s-circle-sm">
            <SiteImg id="frontageLandscapeRoad" sizes="220px" />
          </div>
        </div>
        <div className="s-landscape-copy">
          <Eyebrow>Landscape and arrival</Eyebrow>
          <h2 id="landscape-title" className="s-display s-h2">
            Architecture planned around open ground
            <em>rather than squeezed between towers.</em>
          </h2>
          <PillLink href="/projects/sri-krishna-vilas" variant="light">
            Explore the landscape
          </PillLink>
          <p className="s-caption">
            Garden and frontage · Artist&apos;s impressions
          </p>
        </div>
      </div>
    </section>
  );
}

export function HomeWelcome() {
  return (
    <section className="s-section s-bg-sand s-welcome-sec" aria-labelledby="welcome-title">
      <p className="s-outline-word" aria-hidden="true">
        Welcome.
      </p>
      <div className="s-container s-welcome">
        <figure className="s-welcome-visual">
          <Arch id="kashiGuestroom" sizes="(max-width: 900px) 80vw, 440px" />
          <figcaption className="s-caption">
            The Kashi Residency · Guest room
          </figcaption>
        </figure>
        <div className="s-welcome-copy">
          <Eyebrow>The hospitality chapter</Eyebrow>
          <h2 id="welcome-title" className="s-display s-h2">
            A welcome.
            <em>With a sense of place.</em>
          </h2>
          <p className="s-body">
            The Kashi Residency is SIPL&apos;s running hospitality project in
            Varanasi. Discover the property and connect with its team for
            accommodation enquiries.
          </p>
          <PillLink href="/hospitality/the-kashi-residency">
            The Kashi Residency
          </PillLink>
        </div>
      </div>
    </section>
  );
}

export function HomeEnquiry() {
  return (
    <section className="s-section s-bg-ivory s-enquiry" aria-labelledby="enquiry-title">
      <div className="s-container">
        <span className="s-outline-num s-outline-num-right" aria-hidden="true">
          05
        </span>
        <Eyebrow>05 / Let&apos;s begin</Eyebrow>
        <h2 id="enquiry-title" className="s-display s-giant s-giant-left">
          Find your place
          <em>in the SIPL story.</em>
        </h2>
        <div className="s-enquiry-row">
          <p className="s-lead">
            A home, a stay, or a first conversation. Tell us what you have in
            mind and choose the project you would like to explore.
          </p>
          <div className="s-actions">
            <EnquireButton className="s-pill s-pill-solid">
              <span>Start an enquiry</span>
              <span className="s-pill-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </EnquireButton>
            <PillLink href="/contact" variant="outline">
              Contact SIPL
            </PillLink>
          </div>
        </div>
        <p className="s-small s-note">
          The form prepares an email draft for you to review and send. Site
          visits are confirmed directly by SIPL.
        </p>
        <ul className="s-chips" aria-label="Explore more">
          {[
            ["Our people", "/about/leadership"],
            ["Our journey", "/about/legacy"],
            ["News & insights", "/media"],
            ["Join SIPL", "/careers"],
          ].map(([n, h]) => (
            <li key={h}>
              <Link href={h} className="s-chip">
                {n}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
