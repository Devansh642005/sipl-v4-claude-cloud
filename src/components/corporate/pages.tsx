import Link from "next/link";
import { ValuesChapter, CultureRail } from "./experience";
import {
  ArchitecturalLineArt,
  PortraitPlane,
  GraphicSideRail,
} from "./architectural-art";
import {
  PageHero,
  MediaImage,
  KnowMore,
  Snapshot,
  Recognition,
  NewsCards,
  CorporateCTA,
} from "./shared";
import {
  ProjectFilter,
  EnquireButton,
  LeadForm,
  VideoExperience,
  GalleryGrid,
  EMICalculator,
  ProjectCard,
} from "./interactive";
import { companyStory, milestones, groupCompanies } from "@/data/company";
import { team } from "@/data/team";
import { media, mediaSlots } from "@/data/media";
import { projects } from "@/data/projects";
import { contact } from "@/data/contact";
import { gallery } from "@/data/sipl";
import { articles } from "@/data/blog";
import { testimonials } from "@/data/testimonials";

const culture = [
  [
    "Integrity",
    "Trust, ethics and principles guide relationships with our customers, associates and colleagues.",
  ],
  [
    "Learning & innovation",
    "Our quality policy supports new technology, continual improvement and developing our people.",
  ],
  [
    "Collaboration",
    "We encourage initiative and teamwork, with participation from our associates.",
  ],
  [
    "Community",
    "SIPL’s stated social priorities include the environment, art and culture, and rural empowerment.",
  ],
];

/* ── a full-bleed architectural moment used to break long pages ── */
function Bleed({
  id,
  eyebrow,
  line,
}: {
  id: string;
  eyebrow: string;
  line: string;
}) {
  return (
    <section className="lx-bleed" aria-label={eyebrow}>
      <MediaImage id={id} decorative />
      <div className="lx-bleed-note">
        <span className="lx-eyebrow">{eyebrow}</span>
        <p>{line}</p>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero
        title="About SIPL Group"
        intro="Building Trust is our starting point. It shapes our relationships and the places we create."
        image={mediaSlots.aboutHero}
      />

      <section className="lx-sec">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Our company</span>
            <h2>
              Rooted in Varanasi.
              <br />
              <em>Committed to our people.</em>
            </h2>
            <p className="lx-quote" style={{ marginTop: "var(--lx-s7)" }}>
              Building Trust — since 2013
            </p>
          </div>
          <div className="lx-ed-body">
            <p>{companyStory.introduction}</p>
            <p>
              Founded in 2013 by Devesh Tripathi, SIPL works across real estate
              and hospitality. Our original company philosophy places quality
              construction, customer satisfaction, innovation and fulfilling
              commitments at the centre of the business.
            </p>
            <p>
              Our roots are in Varanasi, on the banks of the Ganges. The group’s
              development vision includes residential environments, commercial
              buildings and townships, with a focus on improving the way people
              live.
            </p>
          </div>
        </div>
      </section>

      <ValuesChapter />
      <Snapshot />

      <Bleed
        id="architecture"
        eyebrow="Sri Krishna Vilas · West–north perspective"
        line="Architecture planned around open ground rather than squeezed between towers."
      />

      <section className="lx-sec lx-sec-cream">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">Our businesses</span>
              <h2>Two verticals. One principle.</h2>
            </div>
            <KnowMore href="/projects">Explore projects</KnowMore>
          </div>
          <div className="lx-plates">
            <Link className="lx-vertical" href="/projects/real-estate">
              <MediaImage id="east" decorative />
              <div>
                <span className="lx-eyebrow">Real Estate</span>
                <h3>Homes designed for everyday rhythm.</h3>
                <p>
                  Explore our running residential development and upcoming
                  portfolio.
                </p>
                <span className="lx-link">
                  Explore residential <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
            <Link className="lx-vertical" href="/projects/hospitality">
              <MediaImage id="kashi-room" decorative />
              <div>
                <span className="lx-eyebrow">Hospitality</span>
                <h3>Places that welcome you in.</h3>
                <p>Discover The Kashi Residency and upcoming Manasi Ganga.</p>
                <span className="lx-link">
                  Explore hospitality <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="lx-sec lx-sec-dark">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">
              Quality is a daily commitment
            </span>
            <h2>
              The standard is set <em>every day.</em>
            </h2>
            <div style={{ marginTop: "var(--lx-s7)" }}>
              <KnowMore href="/about/corporate-culture">
                Corporate culture
              </KnowMore>
            </div>
          </div>
          <div className="lx-ed-body">
            <p>
              {companyStory.quality} Our policy calls for understanding customer
              needs, refining processes, using resources responsibly and
              involving our associates.
            </p>
            <p>
              We recognise the relationships behind every development:
              customers, investors, employees and the wider community. SIPL’s
              stated community priorities include environmental care, art and
              culture, and rural empowerment.
            </p>
          </div>
        </div>
      </section>

      <section className="lx-sec">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Group companies</span>
            <h2>Our corporate family.</h2>
          </div>
          <div>
            <ul className="lx-list">
              {groupCompanies.names.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <a
              className="lx-link"
              href={media["group-identities"].src}
              style={{ marginTop: "var(--lx-s6)" }}
            >
              View original group identities <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="lx-sec lx-sec-cream">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">Our people</span>
              <h2>The people. The journey.</h2>
            </div>
            <KnowMore href="/about/leadership">Meet our team</KnowMore>
          </div>
          <div className="lx-people">
            {team.slice(0, 3).map((t) => (
              <article key={t.name}>
                {t.media && <MediaImage id={t.media} />}
                <h3>{t.name}</h3>
                <p>{t.designation}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "var(--lx-s8)" }}>
            <KnowMore href="/about/legacy">Explore our journey</KnowMore>
          </div>
        </div>
      </section>

      <Recognition />
      <CorporateCTA />
    </>
  );
}

export function LeadershipPage() {
  return (
    <>
      <PageHero
        title="The people behind SIPL"
        kicker="LEADERSHIP & OUR TEAM"
        intro="Leadership, technical knowledge and lasting relationships connect the different parts of our organisation."
      />

      <section className="lx-sec">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Our people</span>
            <h2>
              A team built around
              <br />
              <em>care and continuity.</em>
            </h2>
          </div>
          <p className="lx-quote">
            SIPL’s work is shaped by relationships as much as by design — from
            customer conversations to project delivery and long-term
            stewardship.
          </p>
        </div>
      </section>

      <section className="lx-sec lx-sec-tight lx-sec-cream">
        <div className="lx-inner lx-people">
          {team.map((t, i) => (
            <article key={t.name}>
              <PortraitPlane>
                {t.media ? (
                  <MediaImage id={t.media} />
                ) : (
                  <div className="c-portrait-monogram" aria-hidden="true">
                    {t.name
                      .split(" ")
                      .map((s) => s[0])
                      .join("")}
                  </div>
                )}
              </PortraitPlane>
              <span
                className="lx-eyebrow"
                style={{ marginTop: "var(--lx-s4)" }}
              >
                {i < 3 ? "Group leadership" : "Our people"} ·{" "}
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{t.name}</h3>
              <p>{t.designation}</p>
              {i === 0 && (
                <details className="v-leader-note">
                  <summary>
                    Read context <span>+</span>
                  </summary>
                  <p className="r-person-context">
                    SIPL was founded in 2013 by Devesh Tripathi. The group’s
                    philosophy brings together trust, ethics and principles
                    across real estate and hospitality.
                  </p>
                </details>
              )}
              {i === 1 && (
                <details className="v-leader-note">
                  <summary>
                    Read context <span>+</span>
                  </summary>
                  <p className="r-person-context">
                    Our leadership works within a company culture that values
                    customer relationships, quality construction and fulfilling
                    commitments.
                  </p>
                </details>
              )}
              {i === 2 && (
                <details className="v-leader-note">
                  <summary>
                    Read context <span>+</span>
                  </summary>
                  <p className="r-person-context">
                    SIPL’s published team connects engineering, construction,
                    customer relationships, finance and administration.
                  </p>
                </details>
              )}
            </article>
          ))}
        </div>
      </section>

      <CorporateCTA />
    </>
  );
}

export function LegacyPage() {
  return (
    <>
      <PageHero
        title="Our journey"
        intro="A Varanasi story, guided by Building Trust."
        image="varanasi"
      />

      <section className="lx-sec">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Our journey</span>
            <h2>
              A timeline of
              <br />
              <em>place and progress.</em>
            </h2>
            <ArchitecturalLineArt variant="river" />
          </div>
          <div className="lx-time">
            {milestones.map((m) => (
              <article key={m.date}>
                <strong>{m.date}</strong>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </article>
            ))}
            <article>
              <strong>Our portfolio</strong>
              <h3>Real estate and hospitality</h3>
              <p>
                Today’s published portfolio includes Sri Krishna Vilas, Barsana,
                Raman Reti, The Kashi Residency and Manasi Ganga, with running
                and upcoming projects clearly identified.
              </p>
              <div style={{ marginTop: "var(--lx-s5)" }}>
                <KnowMore href="/projects">View the portfolio</KnowMore>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CorporateCTA />
    </>
  );
}

export function CulturePage() {
  return (
    <>
      <PageHero
        title="Working together. Growing together."
        kicker="CORPORATE CULTURE"
        intro="SIPL’s culture centres on innovation, integrity, excellence and continuous learning."
        image={mediaSlots.culture}
      />

      <section className="lx-sec lx-sec-tight">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">
              People / practice
            </span>
            <h2>
              The rhythm of a
              <br />
              <em>working culture.</em>
            </h2>
          </div>
          <p className="lx-quote">
            An environment that encourages initiative, innovation and teamwork.
          </p>
        </div>
      </section>

      <CultureRail />

      <section className="lx-sec lx-sec-cream">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">What we value</span>
              <h2>Four things we hold to.</h2>
            </div>
          </div>
          <div className="lx-index">
            {culture.map(([h, p], i) => (
              <article key={h}>
                <span className="lx-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lx-sec lx-sec-dark">
        <div className="lx-inner lx-ed lx-ed-center">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Our culture</span>
            <h2>
              People make <em>the difference.</em>
            </h2>
          </div>
          <div className="lx-ed-body">
            <p>
              Our quality policy calls for an environment that encourages
              initiative, innovation and teamwork. Explore the people behind our
              projects or introduce yourself to SIPL.
            </p>
            <div className="lx-actions" style={{ marginTop: "var(--lx-s7)" }}>
              <Link className="lx-btn lx-btn-light" href="/about/leadership">
                Meet our team
              </Link>
              <Link className="lx-btn lx-btn-ghost" href="/careers">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ProjectsPage({ category }: { category?: string }) {
  const heroImage =
    category === "Hospitality"
      ? "kashi-room"
      : category === "Real Estate"
        ? "east"
        : "architecture";
  return (
    <>
      <PageHero
        title={category || "Our projects"}
        intro={
          category === "Hospitality"
            ? "A welcome in Varanasi. Explore The Kashi Residency and our upcoming hospitality portfolio."
            : category === "Real Estate"
              ? "Explore our residential portfolio, with running and upcoming projects clearly identified."
              : "Real estate and hospitality. Discover the different places and possibilities within SIPL Group."
        }
        image={heroImage}
      />

      {!category && (
        <section className="lx-sec lx-sec-tight">
          <div className="lx-inner">
            <div className="lx-head">
              <div>
                <span className="lx-eyebrow lx-eyebrow-rule">
                  Portfolio view
                </span>
                <h2>Guiding the next move.</h2>
              </div>
              <KnowMore href="/contact">Speak with SIPL</KnowMore>
            </div>
            <div className="lx-plates">
              <Link className="lx-vertical" href="/projects/real-estate">
                <MediaImage id="exterior-front" decorative />
                <div>
                  <span className="lx-eyebrow">Real Estate</span>
                  <h3>Homes designed for everyday rhythm.</h3>
                  <p>
                    From running residential communities to upcoming launches —
                    architecture, planning and livability.
                  </p>
                  <span className="lx-link">
                    Explore residential <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
              <Link className="lx-vertical" href="/projects/hospitality">
                <MediaImage id="hospitality" decorative />
                <div>
                  <span className="lx-eyebrow">Hospitality</span>
                  <h3>Places that welcome you in.</h3>
                  <p>
                    Comfort, location and a more considered guest experience in
                    Varanasi.
                  </p>
                  <span className="lx-link">
                    Explore hospitality <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="lx-sec lx-sec-cream">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                Select your chapter
              </span>
              <h2>Portfolio by status.</h2>
            </div>
            <p>
              Running projects and announced development opportunities remain
              clearly separated, so you can compare the current portfolio with
              what is next.
            </p>
          </div>
          <ProjectFilter category={category} />
        </div>
      </section>

      <CorporateCTA />
    </>
  );
}

export function ProjectDetail({ path }: { path: string }) {
  const p = projects.find((p) => p.href === path)!;
  const visualId = p.image;
  const isUpcoming = p.status === "Upcoming";
  const isIdentity = media[visualId]?.type === "logo";
  const storyImage = p.id === "the-kashi-residency" ? "kashi-room" : p.image;

  return (
    <>
      {isIdentity ? (
        <section className="lx-phero lx-phero-plain">
          <div className="lx-phero-inner">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                {p.status} · {p.category}
              </span>
              <h1>{p.name}</h1>
            </div>
            <div>
              {p.location && <p className="lx-cap">{p.location}</p>}
              <p>{p.description}</p>
              <div className="lx-actions" style={{ marginTop: "var(--lx-s6)" }}>
                <EnquireButton project={p.name} className="lx-btn">
                  {isUpcoming ? "Register interest" : "Enquire"}
                </EnquireButton>
                <Link className="lx-btn lx-btn-ghost" href="/contact">
                  Contact SIPL
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="lx-phero">
          <MediaImage id={visualId} priority decorative />
          <div className="lx-phero-veil" aria-hidden="true" />
          <div className="lx-phero-inner">
            <span className="lx-eyebrow lx-eyebrow-rule">
              {p.status} · {p.category}
            </span>
            <h1>{p.name}</h1>
            {p.location && <p>{p.location}</p>}
            <div className="lx-actions" style={{ marginTop: "var(--lx-s6)" }}>
              <EnquireButton project={p.name} className="lx-btn lx-btn-light">
                {isUpcoming ? "Register interest" : "Enquire"}
              </EnquireButton>
              <Link className="lx-btn lx-btn-ghost" href="/contact">
                Contact SIPL
              </Link>
            </div>
          </div>
          <GraphicSideRail label={p.category.toUpperCase()} />
        </section>
      )}

      {isIdentity && (
        <section className="lx-sec lx-sec-tight lx-sec-cream">
          <div className="lx-inner lx-split lx-ed-center">
            <figure className="lx-frame lx-ar-editorial">
              <MediaImage id={visualId} />
            </figure>
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                Project identity
              </span>
              <h2>Announced, and taking shape.</h2>
              <p>
                Project photography for {p.name} is not yet available here. The
                identity above is the published project mark.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="lx-sec">
        <div className="lx-inner lx-split">
          <figure className="lx-frame lx-ar-editorial">
            <MediaImage id={storyImage} decorative />
            <figcaption className="lx-frame-cap">
              {isUpcoming
                ? `${p.name} · Published project identity`
                : `${p.name} · Official photography`}
            </figcaption>
          </figure>
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Project story</span>
            <h2>
              {isUpcoming
                ? "The next chapter in the SIPL portfolio."
                : "A place shaped around daily life."}
            </h2>
            <p>
              {isUpcoming
                ? `We are continuing to share project information for ${p.name} as it develops. Speak with SIPL for the latest configuration, status and next-step guidance.`
                : p.category === "Hospitality"
                  ? "The Kashi Residency expresses the hospitality chapter of SIPL’s Varanasi portfolio, balancing a local identity with a simpler, more considered guest experience."
                  : "This residential chapter reflects SIPL’s broader commitment to considered architecture, open living and a practical approach to family life."}
            </p>
            <div style={{ marginTop: "var(--lx-s6)" }}>
              <KnowMore href={isUpcoming ? "/contact" : "/projects"}>
                {isUpcoming ? "Ask for details" : "View other projects"}
              </KnowMore>
            </div>
          </div>
        </div>
      </section>

      <section className="lx-sec lx-sec-dark">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">
              {p.category} · {p.status}
            </span>
            <h2>
              {isUpcoming
                ? "Stay connected with " + p.name
                : "Discover The Kashi Residency"}
            </h2>
          </div>
          <div className="lx-ed-body">
            <p>
              {isUpcoming
                ? "Speak with SIPL for the latest project information and announcements. The team can help you understand what is available to review before you take the next step."
                : "The Kashi Residency is listed as the running hospitality project in SIPL’s official portfolio. Visit its official website to explore accommodation and contact the property directly."}
            </p>
            {p.id === "the-kashi-residency" && (
              <div className="lx-actions" style={{ marginTop: "var(--lx-s6)" }}>
                <a
                  className="lx-btn lx-btn-light"
                  href="https://kashiresidency.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit official hotel website ↗
                </a>
              </div>
            )}
            <p className="lx-cap" style={{ marginTop: "var(--lx-s6)" }}>
              Confirm current details directly with the authorised team before
              making a booking or commitment.
            </p>
          </div>
        </div>
      </section>

      <section className="lx-sec" id="enquire">
        <div className="lx-inner lx-enquiry">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Your next step</span>
            <h2>
              {isUpcoming
                ? "Register your interest."
                : "Let’s plan your enquiry."}
            </h2>
            <p>Choose your area of interest and prepare a message to SIPL.</p>
            {isUpcoming && <p>Detailed plan available on request.</p>}
          </div>
          <LeadForm
            initialProject={p.name}
            initialIntent={
              p.category === "Hospitality" ? "Hospitality" : "Residential"
            }
          />
        </div>
      </section>

      <section className="lx-sec lx-sec-cream">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                Also in the portfolio
              </span>
              <h2>More from SIPL.</h2>
            </div>
            <KnowMore href="/projects">All projects</KnowMore>
          </div>
          <div className="c-project-grid">
            {projects
              .filter((x) => x.category === p.category && x.id !== p.id)
              .map((x) => (
                <ProjectCard project={x} key={x.id} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

const galleryCategories = [
  {
    title: "Project Photos",
    path: "/gallery/project",
    image: "atrium",
    text: "Architecture, interiors and lifestyle visualisations.",
  },
  {
    title: "Current / Site Photos",
    path: "/gallery/current",
    image: "progress",
    text: "Actual construction photographs from the project archive.",
  },
  {
    title: "Event Photos",
    path: "/gallery/events",
    image: "event-4",
    text: "People and moments from SIPL’s project gatherings.",
  },
];

export function GalleryPage({ kind }: { kind?: string }) {
  if (!kind)
    return (
      <>
        <PageHero
          title="A closer look"
          kicker="SIPL GALLERY"
          intro="Three ways to explore: the project vision, work on site, and the people who come together around it."
          image="walkway"
        />

        <section className="lx-sec lx-sec-tight">
          <div className="lx-inner lx-ed">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                Archive / study
              </span>
              <h2>
                Project feeling, site truth and <em>shared moments.</em>
              </h2>
            </div>
            <div className="lx-ed-body">
              <p>
                SIPL’s gallery brings together project visuals, actual site
                photography and event moments in the same visual language.
              </p>
              <KnowMore href="/gallery/project">View project imagery</KnowMore>
            </div>
          </div>
        </section>

        <section className="lx-sec lx-sec-cream">
          <div className="lx-inner lx-plates">
            {galleryCategories.map((g) => (
              <Link className="lx-plate" href={g.path} key={g.path}>
                <figure className="lx-frame">
                  <MediaImage id={g.image} decorative />
                </figure>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
                <span className="lx-link">
                  View collection <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </>
    );

  const assets =
    kind === "events"
      ? Object.values(media).filter((m) => m.category === "event")
      : gallery
          .filter((g) =>
            kind === "current"
              ? g.category === "Construction"
              : g.category !== "Construction",
          )
          .map((g) => ({
            ...media[g.id],
            id: g.id,
            src: media[g.id]?.src || g.src,
            alt: g.title + " · Sri Krishna Vilas",
            caption: g.title,
            project: "sri-krishna-vilas",
            actualOrRender:
              g.category === "Construction"
                ? "actual"
                : g.category === "Master Plan"
                  ? "document"
                  : "render",
            verified: true,
          }));

  return (
    <>
      <PageHero
        title={galleryCategories.find((g) => g.path.endsWith(kind))!.title}
        intro={
          kind === "events"
            ? "Moments from SIPL’s project event archive. Event names and dates have not been independently confirmed."
            : kind === "current"
              ? "Actual Sri Krishna Vilas site photographs from the supplied archive. Capture dates are not confirmed."
              : "Sri Krishna Vilas architectural visualisations and reference plans. Illustrative design intent; confirm current specifications with SIPL."
        }
      />
      <section className="lx-sec lx-sec-tight">
        <div className="lx-inner">
          <nav className="c-collection-nav" aria-label="Gallery collections">
            {galleryCategories.map((g) => (
              <Link href={g.path} key={g.path}>
                {g.title}
              </Link>
            ))}
          </nav>
          <GalleryGrid assets={assets} />
        </div>
      </section>
    </>
  );
}

export function MediaPage() {
  return (
    <>
      <PageHero
        title="Media centre"
        intro="Films, project documents and moments from across the group."
        image="varanasi"
      />

      <section className="lx-sec lx-sec-tight">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Media / archive</span>
            <h2>
              Stories in motion <em>and stillness.</em>
            </h2>
          </div>
          <p className="lx-quote">
            A silent architectural film, the official documents, and the people
            who gathered around the work.
          </p>
        </div>
      </section>

      <section className="lx-sec lx-sec-tight">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">Film</span>
              <h2>Watch Sri Krishna Vilas.</h2>
            </div>
            <KnowMore href="/projects/sri-krishna-vilas">
              Explore the project
            </KnowMore>
          </div>
          <VideoExperience />
        </div>
      </section>

      <section className="lx-sec lx-sec-cream">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">Updates</span>
              <h2>News &amp; project information.</h2>
            </div>
            <KnowMore href="/news">All updates</KnowMore>
          </div>
          <NewsCards />
        </div>
      </section>

      <section className="lx-sec lx-sec-dark">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">The archive</span>
            <h2>
              Documents and <em>pictures.</em>
            </h2>
          </div>
          <div className="lx-index">
            <article>
              <span className="lx-num">01</span>
              <h3>Project documents</h3>
              <div>
                <p>
                  Browse the official Sri Krishna Vilas brochure and project
                  recognition.
                </p>
                <div style={{ marginTop: "var(--lx-s5)" }}>
                  <KnowMore href="/projects/sri-krishna-vilas#project-information">
                    View documents
                  </KnowMore>
                </div>
              </div>
            </article>
            <article>
              <span className="lx-num">02</span>
              <h3>In pictures</h3>
              <div>
                <p>
                  Explore project imagery, site photographs and SIPL events.
                </p>
                <div style={{ marginTop: "var(--lx-s5)" }}>
                  <KnowMore href="/gallery">View gallery</KnowMore>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export function NewsPage() {
  return (
    <>
      <PageHero
        title="News & updates"
        intro="Upcoming developments and useful information from the SIPL portfolio. Explore each project for more detail."
        image="exterior-aerial"
      />

      <section className="lx-sec lx-sec-tight">
        <div className="lx-inner lx-split is-flipped lx-ed-center">
          <figure className="lx-frame lx-ar-editorial">
            <MediaImage id="event-2" decorative />
          </figure>
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">
              Portfolio / updates
            </span>
            <h2>What is happening across the SIPL story.</h2>
            <p>
              Current project information, announcements and the gradual
              timeline of the group’s work.
            </p>
          </div>
        </div>
      </section>

      <section className="lx-sec lx-sec-tight">
        <div className="lx-inner">
          <NewsCards />
        </div>
      </section>

      <section className="lx-sec lx-sec-dark">
        <div className="lx-inner lx-ed lx-ed-center">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">On site</span>
            <h2>
              See the work <em>taking shape.</em>
            </h2>
          </div>
          <div className="lx-ed-body">
            <p>
              Browse the supplied construction photograph archive for Sri
              Krishna Vilas. Capture dates are not confirmed.
            </p>
            <KnowMore href="/gallery/current">View site photos</KnowMore>
          </div>
        </div>
      </section>
    </>
  );
}

export function BlogPage() {
  return (
    <>
      <PageHero
        title="Insights & project reading"
        intro="Explore SIPL’s projects, people and approach to development in Varanasi."
      />

      <section className="lx-sec lx-sec-tight">
        <div className="lx-inner lx-split is-flipped lx-ed-center">
          <figure className="lx-frame lx-ar-editorial">
            <MediaImage id={mediaSlots.readingCover} decorative />
            <figcaption className="lx-frame-cap">
              The SIPL reading room
            </figcaption>
          </figure>
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Reading room</span>
            <h2>Context before the decision.</h2>
            <p>
              Thoughtful material about SIPL, its portfolio and the principles
              that shape the work.
            </p>
          </div>
        </div>
      </section>

      <section className="lx-sec lx-sec-cream">
        <div className="lx-inner">
          {articles.length ? (
            <>
              <div className="lx-head">
                <div>
                  <span className="lx-eyebrow lx-eyebrow-rule">Articles</span>
                  <h2>Reading.</h2>
                </div>
              </div>
              <div className="lx-index">
                {articles
                  .filter((a) => a.verified)
                  .map((a, i) => (
                    <article key={a.slug}>
                      <span className="lx-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="lx-eyebrow">{a.category}</span>
                        <h3>{a.title}</h3>
                      </div>
                      <div>
                        <p>{a.description}</p>
                        <div style={{ marginTop: "var(--lx-s5)" }}>
                          <KnowMore href={"/blog/" + a.slug}>
                            Read article
                          </KnowMore>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </>
          ) : (
            <>
              <div className="lx-head">
                <div>
                  <span className="lx-eyebrow lx-eyebrow-rule">
                    People. Places. Principles.
                  </span>
                  <h2>
                    Start with <em>the source.</em>
                  </h2>
                </div>
                <p>
                  Read about the group’s philosophy, explore the project
                  portfolio and browse official project materials.
                </p>
              </div>
              <div className="lx-index">
                {[
                  [
                    "Our approach to quality",
                    "Company philosophy and the commitments behind Building Trust.",
                    "/about",
                  ],
                  [
                    "Sri Krishna Vilas, in detail",
                    "Architecture, plans, amenities and project documentation.",
                    "/projects/sri-krishna-vilas",
                  ],
                  [
                    "Our roots in Varanasi",
                    "The beginnings of SIPL and its development journey.",
                    "/about/legacy",
                  ],
                ].map(([h, p, l], i) => (
                  <article key={h}>
                    <span className="lx-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{h}</h3>
                    <div>
                      <p>{p}</p>
                      <div style={{ marginTop: "var(--lx-s5)" }}>
                        <KnowMore href={l}>Read more</KnowMore>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Customer relationships"
        intro="Our commitment continues through the conversations we have with our customers."
      />

      {testimonials.length > 0 ? (
        <section className="lx-sec">
          <div className="lx-inner lx-index">
            {testimonials
              .filter((t) => t.verified)
              .map((t, i) => (
                <blockquote key={t.id}>
                  <span className="lx-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="lx-quote">{t.quote}</p>
                  <div>
                    <cite style={{ fontStyle: "normal" }}>{t.name}</cite>
                    {t.sourceUrl && (
                      <a className="lx-link" href={t.sourceUrl}>
                        {t.source} <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>
                </blockquote>
              ))}
          </div>
        </section>
      ) : (
        <section className="lx-sec lx-sec-dark">
          <div className="lx-inner lx-ed">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                Your experience matters
              </span>
              <h2>
                Tell us about <em>your experience.</em>
              </h2>
            </div>
            <div className="lx-ed-body">
              <p>
                For feedback, a question about your home, or help with project
                information, connect with SIPL directly.
              </p>
              <p className="lx-cap">
                No customer quotations are published here without a verified
                source and permission.
              </p>
              <div className="lx-actions" style={{ marginTop: "var(--lx-s7)" }}>
                <a
                  className="lx-btn lx-btn-light"
                  href={
                    "mailto:" + contact.email + "?subject=Customer%20feedback"
                  }
                >
                  Share your feedback ↗
                </a>
                <Link className="lx-btn lx-btn-ghost" href="/contact">
                  Contact SIPL
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export function NRIPage() {
  return (
    <>
      <PageHero
        title="A connection to home"
        kicker="NRI CORNER"
        intro="Explore SIPL from wherever you are. Begin with the project information you need and a conversation about your next steps."
        image="varanasi"
      />

      <section className="lx-sec">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">
              NRI / OCI property guide
            </span>
            <h2>
              Start with <em>clarity.</em>
            </h2>
          </div>
          <div className="lx-ed-body">
            <p>
              SIPL’s real estate and hospitality portfolio is rooted in
              Varanasi. Overseas enquiries can begin with the official brochure,
              reference plans and a project film, followed by a discussion with
              the team.
            </p>
            <p>
              The Government of India’s OCI guidance includes purchase or sale
              of immovable property other than agricultural land, farmhouses or
              plantation property. Eligibility and transaction requirements
              depend on your circumstances and current rules.
            </p>
            <a
              className="lx-link"
              href="https://ociservices.gov.in/onlineOCI/faq"
              target="_blank"
              rel="noreferrer"
            >
              Official OCI guidance <span aria-hidden="true">→</span>
            </a>
            <p className="lx-cap" style={{ marginTop: "var(--lx-s6)" }}>
              General information only, checked 10 September 2026. Seek
              independent legal, tax and financial advice and confirm current
              FEMA requirements with an authorised dealer bank.
            </p>
          </div>
        </div>
      </section>

      <section className="lx-sec lx-sec-cream">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                The practical steps
              </span>
              <h2>Four moves, in order.</h2>
            </div>
            <KnowMore href="/emi-calculator">EMI calculator</KnowMore>
          </div>
          <div className="lx-index">
            {[
              [
                "Explore",
                "Review project documents, location, plans and current availability with SIPL.",
              ],
              [
                "Verify",
                "Ask your adviser for the identity, residency, PAN and property documents required for your specific transaction.",
              ],
              [
                "Plan financing",
                "Discuss eligibility, permitted payment routes, loan terms and documentation with your authorised dealer bank or lender.",
              ],
              [
                "Coordinate",
                "Agree the next steps with SIPL and your adviser, including any representation or power-of-attorney requirements.",
              ],
            ].map(([h, p], i) => (
              <article key={h}>
                <span className="lx-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lx-sec">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Common questions</span>
            <h2>Useful to know.</h2>
            <div style={{ marginTop: "var(--lx-s7)" }}>
              <KnowMore href="/emi-calculator">EMI calculator</KnowMore>
            </div>
          </div>
          <div>
            {[
              [
                "Can I begin without visiting?",
                "You can review the official brochure and film online, and contact SIPL to discuss a visit or further project information.",
              ],
              [
                "Can SIPL confirm my legal eligibility?",
                "Obtain advice from your independent legal adviser and authorised dealer bank. The website does not assess individual eligibility.",
              ],
              [
                "Where can I estimate a monthly payment?",
                "Use the EMI calculator for an indicative scenario, then confirm terms with your lender.",
              ],
            ].map(([q, a]) => (
              <details className="c-faq" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="lx-sec lx-sec-cream">
        <div className="lx-inner lx-enquiry">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Talk to SIPL</span>
            <h2>Start the conversation.</h2>
            <p>
              Include your country of residence and a convenient time to contact
              you in your message.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}

export function CareersPage() {
  return (
    <>
      <PageHero
        title="Build your career with SIPL"
        kicker="CAREERS"
        intro="Bring your experience, curiosity and commitment to our work in real estate and hospitality."
        image={mediaSlots.careersHero}
      />

      <section className="lx-sec">
        <div className="lx-inner lx-split is-flipped lx-ed-center">
          <figure className="lx-frame lx-ar-editorial">
            <MediaImage id="event-3" decorative />
          </figure>
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Why SIPL</span>
            <h2>Room to learn. People to learn with.</h2>
            <p>
              Our culture encourages initiative, innovation and teamwork. Our
              published team brings together sales and customer relationships,
              engineering and construction, finance, HR and administration.
            </p>
            <div style={{ marginTop: "var(--lx-s6)" }}>
              <KnowMore href="/about/corporate-culture">
                Explore our culture
              </KnowMore>
            </div>
          </div>
        </div>
      </section>

      <CultureRail />

      <section className="lx-sec lx-sec-dark">
        <div className="lx-inner lx-ed lx-ed-center">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Open positions</span>
            <h2>
              No vacancies listed <em>at present.</em>
            </h2>
          </div>
          <div className="lx-ed-body">
            <p>
              There are no specific vacancies published on this website at
              present. You can send a general application for the team’s
              consideration.
            </p>
          </div>
        </div>
      </section>

      <section className="lx-sec">
        <div className="lx-inner lx-enquiry">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">
              General application
            </span>
            <h2>Introduce yourself.</h2>
            <p>
              Tell us about your experience and the work that interests you.
            </p>
          </div>
          <LeadForm career />
        </div>
      </section>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero
        title="Let’s talk"
        kicker="CONTACT SIPL"
        intro="For project information, a site visit, hospitality or a corporate enquiry, start here."
      />

      <section className="lx-sec lx-sec-tight">
        <div className="lx-inner lx-ed">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">Helpdesk</span>
            <a className="lx-tel" href={"tel:" + contact.tel}>
              {contact.phone}
            </a>
            <div style={{ marginTop: "var(--lx-s5)" }}>
              <a className="lx-link" href={"mailto:" + contact.email}>
                {contact.email} <span aria-hidden="true">→</span>
              </a>
            </div>
            <ArchitecturalLineArt variant="plan" />
          </div>
          <div className="lx-plates">
            <div className="lx-panel">
              <h3>Registered Office</h3>
              <address>{contact.registeredOffice}</address>
            </div>
            <div className="lx-panel">
              <h3>Corporate Office</h3>
              <address>{contact.corporateOffice}</address>
              <p className="lx-cap" style={{ marginTop: "var(--lx-s4)" }}>
                Call before visiting to coordinate your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Bleed
        id="varanasi"
        eyebrow="Varanasi"
        line="The city we call home, and the reason the work looks the way it does."
      />

      <section className="lx-sec" id="enquire">
        <div className="lx-inner lx-enquiry">
          <div>
            <span className="lx-eyebrow lx-eyebrow-rule">How can we help?</span>
            <h2>Begin your enquiry.</h2>
            <p>Choose a project or ask us to help you explore the portfolio.</p>
            <div style={{ marginTop: "var(--lx-s6)" }}>
              <KnowMore href="/projects">Explore projects</KnowMore>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}

export function LegalPage({ privacy = false }: { privacy?: boolean }) {
  const sections = privacy
    ? [
        [
          "Enquiries and email drafts",
          "Forms on this website prepare an email draft on your device. They do not send a submission to SIPL automatically. Information is shared when you choose to send the email through your email provider. SIPL may use the details you send to respond to your request.",
        ],
        [
          "Career applications",
          "Selecting a resume does not upload it to a server. Attach the file yourself to your application email before sending.",
        ],
        [
          "Session preferences",
          "The website uses session storage to remember whether the introductory enquiry popup has appeared. This avoids repeated prompts during the same browsing session. Form contents are not stored by this feature.",
        ],
        [
          "External services",
          "Links to social platforms, video platforms and other websites are governed by their own privacy practices. Standard hosting logs may record technical request information for operation and security.",
        ],
        [
          "Your information",
          "Share only what is needed for your enquiry. For questions about information you have sent, or to request correction or deletion, contact email@siplgroup.in.",
        ],
      ]
    : [
        [
          "Project information",
          "Website material is general information and may change. Confirm availability, layouts, areas, specifications, delivery schedules and contractual terms with an authorised SIPL representative before making a decision.",
        ],
        [
          "Images and plans",
          "Architectural renderings, CGIs and illustrative plans communicate design intent. They may differ from the completed development. Actual site photographs are labelled separately; unconfirmed capture dates are not presented as current progress.",
        ],
        [
          "Documents and recognition",
          "Reference documents retain their own scope and conditions. Project precertification is not final certification, a corporate award, or a statement that renewal requirements have been met.",
        ],
        [
          "Calculators and guidance",
          "EMI results are indicative reducing-balance calculations and exclude lender-specific charges. NRI information is general guidance, not individual legal, tax or financial advice. Confirm current requirements with qualified advisers and your lender.",
        ],
        [
          "External links and enquiries",
          "External websites are managed by their respective operators. Preparing a website enquiry does not confirm a booking, site visit or property allocation. Confirm arrangements directly with SIPL.",
        ],
      ];
  return (
    <>
      <PageHero
        title={privacy ? "Privacy policy" : "Website disclaimer"}
        intro={
          privacy
            ? "Information about browsing, enquiries and your choices."
            : "Please read this alongside the project materials you explore."
        }
      />
      <section className="lx-sec">
        <div className="lx-inner">
          <div className="lx-head">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                Important notes
              </span>
              <h2>
                {privacy
                  ? "Responsible information handling"
                  : "Project and information guidance"}
              </h2>
            </div>
            <KnowMore href="/contact">Contact SIPL</KnowMore>
          </div>
          <div className="lx-index">
            {sections.map(([h, p], i) => (
              <article key={h}>
                <span className="lx-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function RouteContent({ path }: { path: string }) {
  if (path === "/about") return <AboutPage />;
  if (path === "/about/leadership") return <LeadershipPage />;
  if (path === "/about/legacy") return <LegacyPage />;
  if (path === "/about/corporate-culture") return <CulturePage />;
  if (path === "/about/awards")
    return (
      <>
        <PageHero
          title="Recognition & documentation"
          intro="Project sustainability documentation, presented with its proper scope and status."
          image="exterior-evening"
        />
        <section className="lx-sec lx-sec-tight">
          <div className="lx-inner lx-ed">
            <div>
              <span className="lx-eyebrow lx-eyebrow-rule">
                Project recognition
              </span>
              <h2>
                Proper context,
                <br />
                <em>without exaggeration.</em>
              </h2>
            </div>
            <p className="lx-quote">
              Precertification is not final certification. The scope is shown as
              issued.
            </p>
          </div>
        </section>
        <Recognition full />
        <CorporateCTA />
      </>
    );
  if (
    ["/projects", "/projects/real-estate", "/projects/hospitality"].includes(
      path,
    )
  )
    return (
      <ProjectsPage
        category={
          path.endsWith("real-estate")
            ? "Real Estate"
            : path.endsWith("hospitality")
              ? "Hospitality"
              : undefined
        }
      />
    );
  if (projects.some((p) => p.href === path))
    return <ProjectDetail path={path} />;
  if (path.startsWith("/gallery"))
    return <GalleryPage kind={path.split("/")[2]} />;
  if (path === "/media") return <MediaPage />;
  if (path === "/news") return <NewsPage />;
  if (path === "/blog") return <BlogPage />;
  if (path === "/testimonials") return <TestimonialsPage />;
  if (path === "/nri") return <NRIPage />;
  if (path === "/emi-calculator")
    return (
      <>
        <PageHero
          title="Plan your monthly outlay"
          kicker="EMI CALCULATOR"
          intro="Adjust the loan amount, interest rate and tenure to compare your own borrowing scenarios."
        />
        <section className="lx-sec">
          <div className="lx-inner">
            <EMICalculator />
          </div>
        </section>
        <CorporateCTA />
      </>
    );
  if (path === "/careers") return <CareersPage />;
  if (path === "/contact") return <ContactPage />;
  return <LegalPage privacy={path === "/privacy-policy"} />;
}
