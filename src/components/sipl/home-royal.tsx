import Image from "next/image";
import Link from "next/link";
import { CountUp, Reveal } from "./motion";
import { WordScroll, SplitHeading } from "./word-motion";
import { Eyebrow, PillLink } from "./ui";
import { rera } from "@/data/verified";
import { LifeScroll } from "./life-scroll";
import { testimonials } from "@/data/testimonials";
import { groupCompanies } from "@/data/company";

/* ── Catchy lines that scroll past ─────────────────────────────────── */
const lines = [
  "Homes that keep their word",
  "Two towers, one promise",
  "Open ground, open gates, open books",
  "Built in Varanasi, for Varanasi",
  "Seen it? Now visit it",
  "Trust is not a tagline here",
];
export function HomeLines() {
  const row = [...lines, ...lines];
  return (
    <section className="rl" aria-label="What we stand for">
      <div className="rl-track">
        {[0, 1].map((k) => (
          <ul key={k} className="rl-row" aria-hidden={k === 1}>
            {row.map((t, i) => (
              <li key={i}>
                <span>{t}</span>
                <i aria-hidden="true">✦</i>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

/* ── Manifesto ─────────────────────────────────────────────────────── */
export function HomeManifesto() {
  return (
    <section className="s-section hm" aria-labelledby="mf-title">
      <div className="s-container hm-in">
        <Eyebrow>Our promise</Eyebrow>
        <h2 id="mf-title" className="sr-only">
          Our promise
        </h2>
        <WordScroll text="A brochure can promise anything. A site visit cannot. That is why every picture on this website says what it is: a render, or a photograph. Come and see the difference for yourself." />
        <div className="hm-sign">
          <span aria-hidden="true" />
          SIPL Group · Building Trust since 2013
        </div>
      </div>
    </section>
  );
}

/* ── Why SIPL ──────────────────────────────────────────────────────── */
const why = [
  {
    k: "01",
    t: "A RERA number you can actually look up",
    p: `Registered as ${rera.number}. Check it on the UP RERA portal yourself. We would rather you did.`,
  },
  {
    k: "02",
    t: "Green on paper, and on site",
    p: "IGBC Green Homes precertified Gold for Sri Krishna Vilas, registration GH240670, November 2025.",
  },
  {
    k: "03",
    t: "Open ground measured in percent, not adjectives",
    p: "70% open area across 2.65 acres. Two towers with room to breathe between them.",
  },
  {
    k: "04",
    t: "Renders that admit they are renders",
    p: "Every visualisation is labelled an artist's impression. Site photographs are labelled site photographs. Revolutionary, we know.",
  },
  {
    k: "05",
    t: "Neighbours, not a call centre",
    p: "Two offices in Varanasi and a site you can walk through. Come and ask us your questions in person.",
  },
  {
    k: "06",
    t: "Security with a tier list",
    p: "A gated community with 3 tier security and 24x7 power backup. Sleep first, ask questions later.",
  },
];
export function HomeWhy() {
  return (
    <section className="s-section hw" aria-labelledby="why-title">
      <div className="s-container">
        <Reveal>
          <Eyebrow>Why families choose SIPL</Eyebrow>
        </Reveal>
        <SplitHeading
          id="why-title"
          className="s-display hw-h"
          lines={[{ text: "Because “trust me” should" }, { text: "come with a RERA number.", em: true }]}
        />
        <Reveal delay={80}>
          <p className="hw-lead">
            Big promises are cheap. Registered projects, certified sustainability and open gates are not. Here is what
            you can check for yourself before you decide.
          </p>
        </Reveal>
        <div className="hw-grid">
          {why.map((w, i) => (
            <Reveal key={w.k} delay={(i % 3) * 90}>
              <article className="hw-card">
                <span className="hw-k">{w.k}</span>
                <h3 className="s-display">{w.t}</h3>
                <p>{w.p}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Our story ─────────────────────────────────────────────────────── */
const commitments = [
  "Quality construction",
  "Investor relations",
  "Customer relations",
  "Employee relations",
  "Timely delivery",
  "Fulfilling commitments",
];
export function HomeStory() {
  return (
    <section className="s-section hs" aria-labelledby="story-title">
      <div className="s-container hs-grid">
        <div className="hs-copy">
          <Reveal>
            <Eyebrow>The SIPL story</Eyebrow>
          </Reveal>
          <SplitHeading
            id="story-title"
            className="s-display s-h2"
            lines={[{ text: "Rooted in Varanasi," }, { text: "since 2013.", em: true }]}
          />
          <Reveal delay={80}>
            <p className="s-body">
              SIPL Group brings real estate and hospitality together in Varanasi. Devesh Tripathi founded the group in
              2013 with trust, truth and transparency at the centre of the organisation, and those three words still
              decide how we build, how we sell and how we answer your calls.
            </p>
            <p className="s-body">
              Our primary business is the development of residential and commercial projects. Alongside it, our
              hospitality vertical runs The Kashi Residency, with Manasi Ganga to follow. Two verticals, one principle:
              Building Trust.
            </p>
            <p className="s-body">
              We hold ourselves to six commitments, in this order of importance, which is to say all of them equally:
            </p>
            <ul className="hs-commit">
              {commitments.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div className="s-actions">
              <PillLink href="/about" variant="light">
                About SIPL Group
              </PillLink>
              <Link className="s-textlink" href="/about/legacy">
                Our journey
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <div className="hs-side">
            <div className="hs-stats">
              <div>
                <b>
                  <CountUp to={2013} />
                </b>
                <span>Founded in Varanasi</span>
              </div>
              <div>
                <b>
                  <CountUp to={5} />
                </b>
                <span>Projects across two verticals</span>
              </div>
              <div>
                <b>
                  <CountUp to={3} />
                </b>
                <span>Group companies</span>
              </div>
            </div>
            <div className="hs-group">
              <p className="s-eyebrow">The group companies</p>
              <ul>
                {groupCompanies.names.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Recognition (awards, made visible) ────────────────────────────── */
export function HomeRecognition() {
  return (
    <section className="s-section hr" aria-labelledby="rec-title">
      <div className="s-container hr-grid">
        <Reveal>
          <figure className="hr-cert">
            <div className="hr-cert-img">
              <Image
                src="/assets/skv-igbc-precertificate.jpg"
                alt="IGBC Green Homes precertificate, Gold, for Sri Krishna Vilas, November 2025"
                fill
                sizes="(max-width: 900px) 90vw, 560px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <figcaption>IGBC registration GH240670 · November 2025</figcaption>
          </figure>
        </Reveal>
        <div className="hr-copy">
          <Reveal>
            <Eyebrow>Recognition</Eyebrow>
          </Reveal>
          <SplitHeading
            id="rec-title"
            className="s-display s-h2"
            lines={[{ text: "Certified Gold." }, { text: "Not just golden words.", em: true }]}
          />
          <Reveal delay={80}>
            <p className="s-body">
              Sri Krishna Vilas has been precertified Gold under the IGBC Green Homes Rating System, the Indian Green
              Building Council&apos;s benchmark for homes designed and built to high sustainability standards.
            </p>
            <p className="s-small">
              Precertification is issued at design stage and is not final certification. We say so because a proud
              certificate should never need fine print to hide behind.
            </p>
            <div className="hr-badges">
              <div>
                <b>IGBC</b>
                <span>Green Homes · Precertified Gold</span>
              </div>
              <div>
                <b>UP RERA</b>
                <span>{rera.number}</span>
              </div>
            </div>
            <PillLink href="/about/awards" variant="light">
              View recognition
            </PillLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Leadership ────────────────────────────────────────────────────── */
const leaders = [
  {
    name: "Devesh Tripathi",
    role: "Chairman & Managing Director",
    img: "/assets/corporate/devesh-tripathi.webp",
    text: "Founder of SIPL. He started the group in 2013 with trust, truth and transparency at the centre of the organisation.",
  },
  {
    name: "Shailesh Tripathi",
    role: "Managing Director",
    img: "/assets/corporate/shailesh-tripathi.webp",
    text: "A director on the board of Shreemaa Infrarealty Private Limited, working alongside the founder across the group.",
  },
  {
    name: "Deepak Arya",
    role: "Chief Executive Officer",
    img: "/assets/corporate/deepak-arya.webp",
    text: "Leads the executive team that turns the group's principles into projects, schedules and site visits.",
  },
];
export function HomeLeadership() {
  return (
    <section className="s-section hl" aria-labelledby="lead-title">
      <div className="s-container">
        <Reveal>
          <Eyebrow>The people behind it</Eyebrow>
        </Reveal>
        <SplitHeading
          id="lead-title"
          className="s-display s-h2"
          lines={[{ text: "A family-led group," }, { text: "with a team you can meet.", em: true }]}
        />
        <div className="hl-grid">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 110}>
              <article className="hl-card">
                <div className="hl-photo">
                  <Image src={l.img} alt={`${l.name}, ${l.role}`} fill sizes="(max-width: 900px) 80vw, 380px" style={{ objectFit: "cover", objectPosition: "50% 20%" }} />
                </div>
                <p className="hl-role">{l.role}</p>
                <h3 className="s-display">{l.name}</h3>
                <p>{l.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="hl-more">
            Behind the founders sit architects, engineers, finance, legal and customer teams, twelve named people in all.{" "}
            <Link href="/about/leadership">Meet the whole team</Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── A day, in four scenes ─────────────────────────────────────────── */
const day = [
  {
    id: "balconyPoolView",
    title: "Start on the balcony",
    text: "Coffee, a quiet horizon and the pool below. The day begins before the city does.",
  },
  {
    id: "gardenAmphitheatre",
    title: "Step into the garden",
    text: "A circle of stepped seating among the trees. Somewhere to sit, walk or simply be outdoors.",
  },
  {
    id: "livingDining",
    title: "Gather at the table",
    text: "Timber, soft light and room to seat everyone who matters.",
  },
  {
    id: "bedroom",
    title: "End it in calm",
    text: "A warm, uncluttered bedroom. The kind of quiet a busy city rarely offers.",
  },
] as const;
export function HomeDay() {
  return (
    <section className="s-section hd" aria-labelledby="day-title">
      <div className="s-container">
        <Reveal>
          <Eyebrow>A day at Sri Krishna Vilas</Eyebrow>
        </Reveal>
        <SplitHeading
          id="day-title"
          className="s-display s-h2"
          lines={[{ text: "Four scenes," }, { text: "one ordinary, lovely day.", em: true }]}
        />
        <LifeScroll items={[...day]} />
        <p className="s-caption">Architectural visualisations. Artist&apos;s impressions.</p>
      </div>
    </section>
  );
}

/* ── Real voices: renders only when verified testimonials exist ────── */
export function HomeVoices() {
  const real = testimonials.filter((t) => t.verified);
  if (!real.length) return null;
  return (
    <section className="s-section hv" aria-labelledby="voices-title">
      <div className="s-container">
        <Eyebrow>In their words</Eyebrow>
        <SplitHeading
          id="voices-title"
          className="s-display s-h2"
          lines={[{ text: "Homes are judged" }, { text: "by the people in them.", em: true }]}
        />
        <div className="hv-grid">
          {real.map((t) => (
            <figure key={t.id} className="hv-card">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <b>{t.name}</b>
                {t.project ? <span>{t.project}</span> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
