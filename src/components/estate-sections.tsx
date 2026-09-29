import Image from "next/image";
import {
  amenities,
  contact,
  nearbyDevelopment,
  portfolio,
  project,
} from "@/data/sipl";
import { ImageViewer } from "./image-viewer";
export function ArchitectureShowcase() {
  return (
    <section id="architecture" className="section architecture-showcase">
      <div className="depth-heading">
        <div>
          <span className="eyebrow red">THE ARCHITECTURE</span>
          <h2>
            Considered from
            <br />
            <em>every side.</em>
          </h2>
        </div>
        <p>
          Two towers. An emphasis on light, ventilation and privacy. Explore the
          architectural perspectives of Sri Krishna Vilas. Each view offers a
          different reading of the building form, orientation and shared spaces.
        </p>
      </div>
      <div className="architecture-composition">
        {[
          ["architecture", "01 / West–north perspective"],
          ["east", "02 / East-side perspective"],
          ["exterior-evening", "03 / An evening perspective"],
        ].map(([asset, label], i) => (
          <figure
            key={asset}
            className={`architecture-frame architecture-frame-${i}`}
          >
            <div className="architecture-image">
              <Image
                src={`/assets/${asset}.webp`}
                alt={`${label} — Sri Krishna Vilas architectural visualisation`}
                fill
                sizes={i === 0 ? "90vw" : "(max-width: 767px) 90vw, 43vw"}
              />
            </div>
            <figcaption>
              {label}
              <span>ARCHITECTURAL VISUALISATION</span>
            </figcaption>
            <ImageViewer src={`/assets/${asset}.webp`} label={label} />
          </figure>
        ))}
      </div>
    </section>
  );
}
export function AmenityIndex() {
  return (
    <div id="amenity-index" className="amenity-index">
      <div>
        <span className="eyebrow red">THE COMPLETE PICTURE</span>
        <h3>
          Thoughtful features.
          <br />
          <em>Every day.</em>
        </h3>
        <p>
          Project highlights from SIPL’s official Sri Krishna Vilas information.
        </p>
      </div>
      <ul>
        {amenities.map((item, i) => (
          <li key={item}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export function Lifestyle() {
  return (
    <section id="lifestyle" className="lifestyle-feature">
      <Image
        src="/assets/living.webp"
        alt="Architectural visualisation of the Sri Krishna Vilas living room"
        fill
        sizes="100vw"
      />
      <div className="lifestyle-shade" />
      <div className="lifestyle-copy">
        <span className="eyebrow">THE FEELING OF HOME</span>
        <h2>
          A little more room.
          <br />
          <em>For what matters.</em>
        </h2>
        <p>
          For quiet mornings. Shared evenings.
          <br />
          And the everyday moments in between.
        </p>
        <a className="arrow-link light" href="#living">
          Discover the lifestyle <span aria-hidden="true">↓</span>
        </a>
      </div>
      <span className="image-note">ILLUSTRATIVE INTERIOR</span>
    </section>
  );
}
export function LocationChapter() {
  return (
    <section id="location" className="section estate-location">
      <div className="depth-heading">
        <div>
          <span className="eyebrow red">VARANASI / ROOTED IN PLACE</span>
          <h2>
            A city with soul.
            <br />
            <em>A place called home.</em>
          </h2>
        </div>
        <p>
          Sri Krishna Vilas is located on {project.address}. Discover the
          project in the context of SIPL’s home city. Use the address and Maps
          action to plan your approach, and contact the team to confirm the site
          entrance before your visit.
        </p>
      </div>
      <div className="location-composition">
        <figure>
          <div className="varanasi-image">
            <Image
              src="/assets/varanasi.webp"
              alt="Supplied photograph of the riverfront ghats in Varanasi"
              fill
              sizes="(max-width: 767px) 90vw, 53vw"
            />
          </div>
          <figcaption>
            VARANASI / CITY CONTEXT · NOT THE PROJECT SITE
          </figcaption>
        </figure>
        <div className="location-address">
          <span className="eyebrow">SRI KRISHNA VILAS</span>
          <h3>Lahartara–Bhitari Road</h3>
          <p>Varanasi, Uttar Pradesh</p>
          <div className="location-line" aria-hidden="true">
            <span>Varanasi</span>
            <i />
            <span>Lahartara</span>
            <i />
            <span>Bhitari Road</span>
          </div>
          <p className="source-note">
            Schematic address context, not a scaled map. Contact SIPL for the
            exact site entrance.
          </p>
          <a
            className="arrow-link"
            href="https://www.google.com/maps/search/?api=1&query=Sri+Krishna+Vilas+Lahartara+Bhitari+Road+Varanasi"
            target="_blank"
            rel="noreferrer"
          >
            Search project address on Maps <span aria-hidden="true">↗</span>
          </a>
          <a className="arrow-link" href="#enquire?intent=visit">
            Plan your visit <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div id="nearby-development" className="nearby-development">
        <div>
          <span className="eyebrow red">THE WIDER CONTEXT</span>
          <h3>
            A city.
            <br />
            <em>Moving forward.</em>
          </h3>
          <p>
            Connectivity and development references published by SIPL. Source
            qualifiers are retained; current delivery status and journey details
            are available on request.
          </p>
        </div>
        <div>
          {nearbyDevelopment.map((item) => (
            <div className="nearby-row" key={item.name}>
              <span>{item.status}</span>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Portfolio() {
  return (
    <section id="projects" className="section estate-portfolio">
      <div className="depth-heading">
        <div>
          <span className="eyebrow red">SIPL GROUP / OUR PORTFOLIO</span>
          <h2>
            Places to live.
            <br />
            <em>Places to belong.</em>
          </h2>
        </div>
        <p>
          Real estate and hospitality.
          <br />
          Discover the places within SIPL Group.
        </p>
      </div>
      <div className="portfolio-featured">
        <div className="portfolio-featured-image">
          <Image
            src="/assets/exterior-evening.webp"
            alt="Sri Krishna Vilas evening architectural visualisation"
            fill
            sizes="(max-width: 767px) 90vw, 50vw"
          />
        </div>
        <div>
          <span className="eyebrow">REAL ESTATE / RUNNING</span>
          <h3>Sri Krishna Vilas</h3>
          <p>{portfolio[0].description}</p>
          <a className="arrow-link" href={portfolio[0].href}>
            Explore Sri Krishna Vilas <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="portfolio-rows">
        {portfolio.slice(1).map((p, i) => (
          <a key={p.name} href={p.href} className="portfolio-row">
            <span className="portfolio-row-number">0{i + 2}</span>
            <div className={`portfolio-row-image ${p.logo ? "is-logo" : ""}`}>
              <Image
                src={`/assets/${p.image}.webp`}
                alt={
                  p.name +
                  (p.logo
                    ? " project identity"
                    : " supplied hospitality photograph")
                }
                fill
                sizes="160px"
              />
            </div>
            <div>
              <span className="eyebrow">
                {p.vertical} / {p.status}
              </span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
export function CorporateContact() {
  return (
    <section id="corporate-contact" className="section corporate-contact">
      <div>
        <span className="eyebrow">SIPL GROUP / LET’S CONNECT</span>
        <h2>
          Here for
          <br />
          <em>the conversation.</em>
        </h2>
        <a className="contact-phone" href={`tel:${contact.tel}`}>
          {contact.phone}
        </a>
        <a href={`mailto:${contact.email}`}>{contact.email} ↗</a>
      </div>
      <div className="office-list">
        <div>
          <span className="eyebrow">REGISTERED OFFICE</span>
          <address>{contact.registeredOffice}</address>
        </div>
        <div>
          <span className="eyebrow">CORPORATE OFFICE</span>
          <address>{contact.corporateOffice}</address>
        </div>
      </div>
    </section>
  );
}
