import Image from "next/image";
import { amenities, contact } from "@/data/sipl";
import { mapsLink, rera } from "@/data/verified";
import { CountUp, Reveal } from "./motion";
import { LifeScroll } from "./life-scroll";
import { ResidenceTabs } from "./residence-tabs";
import { Eyebrow, PillLink, SiteImg } from "./ui";

export function HomeTrust() {
  return (
    <section className="s-trust" aria-label="Sri Krishna Vilas at a glance">
      <div className="s-container s-trust-grid">
        <Reveal>
          <p className="s-trust-k">Registered project</p>
          <p className="s-trust-v s-trust-rera">{rera.number}</p>
          <a className="s-trust-s" href={rera.portal} target="_blank" rel="noreferrer">
            {rera.authority} · verify on the portal
          </a>
        </Reveal>
        <Reveal delay={80}>
          <p className="s-trust-k">Green certification</p>
          <p className="s-trust-v">IGBC Gold</p>
          <p className="s-trust-s">Green Homes · precertified, Nov 2025</p>
        </Reveal>
        <Reveal delay={160}>
          <p className="s-trust-k">Site</p>
          <p className="s-trust-v">
            <CountUp to={2.65} decimals={2} /> <small>acres</small>
          </p>
          <p className="s-trust-s">Gated community</p>
        </Reveal>
        <Reveal delay={240}>
          <p className="s-trust-k">Open ground</p>
          <p className="s-trust-v">
            <CountUp to={70} suffix="%" />
          </p>
          <p className="s-trust-s">Planned around landscape</p>
        </Reveal>
      </div>
    </section>
  );
}

const life = [
  {
    id: "gardenAmphitheatre",
    title: "Garden and amphitheatre",
    text: "A circular landscape feature with stepped seating, set in 70% open ground with a jogging track and a kids' play area.",
  },
  {
    id: "balconyPoolView",
    title: "Balconies over the pool",
    text: "An exclusive pool and garden area, seen from timber-ceilinged balconies.",
  },
  {
    id: "atriumSkylight",
    title: "Light at the centre",
    text: "A skylit atrium with a glass lift shaft, bringing daylight deep into the building.",
  },
  {
    id: "lobbyReception",
    title: "A considered arrival",
    text: "Marble and timber reception, within a gated community with 3 tier security and 24x7 power backup.",
  },
] as const;

export function HomeLife() {
  return (
    <section className="s-section s-bg-ivory" aria-labelledby="life-title">
      <div className="s-container">
        <Reveal>
          <Eyebrow>Life at Sri Krishna Vilas</Eyebrow>
          <h2 id="life-title" className="s-display s-h2">
            Space to breathe,
            <em>close to home.</em>
          </h2>
        </Reveal>
        <LifeScroll items={[...life]} />
        <Reveal>
          <ul className="s-chips" aria-label="Amenities">
            {amenities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <p className="s-caption">Architectural visualisations · artist&apos;s impressions</p>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeResidences() {
  return (
    <section className="s-section s-bg-sand" aria-labelledby="res-title">
      <div className="s-container">
        <Reveal>
          <Eyebrow>Residences</Eyebrow>
          <h2 id="res-title" className="s-display s-h2">
            1, 1.5, 2 and 3 BHK,
            <em>choose your plan.</em>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ResidenceTabs />
        </Reveal>
      </div>
    </section>
  );
}

const rooms = [
  { id: "livingDining", label: "Living and dining" },
  { id: "bedroom", label: "Bedroom" },
  { id: "lobbyReception", label: "Reception" },
  { id: "atriumSkylight", label: "Atrium" },
] as const;

export function HomeInteriors() {
  return (
    <section className="s-section s-bg-cocoa" aria-labelledby="int-title">
      <div className="s-container">
        <Reveal>
          <Eyebrow>Interiors</Eyebrow>
          <h2 id="int-title" className="s-display s-h2">
            Warm timber,
            <em>quiet light.</em>
          </h2>
        </Reveal>
      </div>
      <div className="s-strip" tabIndex={0} aria-label="Interior renders, scroll sideways">
        {rooms.map((r) => (
          <figure key={r.id} className="s-strip-card">
            <SiteImg id={r.id} sizes="(max-width: 900px) 80vw, 560px" />
            <figcaption>{r.label}</figcaption>
          </figure>
        ))}
      </div>
      <div className="s-container">
        <p className="s-caption">Artist&apos;s impressions. Furniture and finishes are indicative.</p>
      </div>
    </section>
  );
}

const progress = [
  { src: "/assets/progress-wide.webp", alt: "Sri Krishna Vilas site photograph, wide view" },
  { src: "/assets/progress-courtyard.webp", alt: "Sri Krishna Vilas site photograph, courtyard" },
  { src: "/assets/progress.webp", alt: "Sri Krishna Vilas site photograph" },
];

export function HomeProgress() {
  return (
    <section className="s-section s-bg-ivory" aria-labelledby="prog-title">
      <div className="s-container">
        <Reveal>
          <Eyebrow>On site</Eyebrow>
          <h2 id="prog-title" className="s-display s-h2">
            See it as it stands,
            <em>not only as rendered.</em>
          </h2>
        </Reveal>
        <div className="s-prog">
          {progress.map((p, i) => (
            <Reveal key={p.src} delay={i * 90}>
              <div className="s-prog-img">
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 900px) 90vw, 420px" style={{ objectFit: "cover" }} />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="s-caption">Site photographs. Book a visit to see progress in person.</p>
      </div>
    </section>
  );
}

export function HomeLocation() {
  return (
    <section className="s-section s-bg-sand" aria-labelledby="loc-title">
      <div className="s-container s-loc">
        <Reveal>
          <Eyebrow>Location</Eyebrow>
          <h2 id="loc-title" className="s-display s-h2">
            Lahartara–Bhitari Road,
            <em>Varanasi.</em>
          </h2>
          <p className="s-body">
            Sri Krishna Vilas sits on Lahartara–Bhitari Road. Visit the site, or the corporate
            office, and we will walk you through the project.
          </p>
          <div className="s-actions">
            <a className="s-pill s-pill-solid" href={mapsLink} target="_blank" rel="noreferrer">
              <span>Get directions</span>
            </a>
            <PillLink href="/contact" variant="outline">
              Contact us
            </PillLink>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <dl className="s-loc-card">
            <div>
              <dt>Corporate office</dt>
              <dd>{contact.corporateOffice}</dd>
            </div>
            <div>
              <dt>Registered office</dt>
              <dd>{contact.registeredOffice}</dd>
            </div>
            <div>
              <dt>Helpdesk</dt>
              <dd>
                <a href={`tel:${contact.tel}`}>{contact.phone}</a> ·{" "}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
