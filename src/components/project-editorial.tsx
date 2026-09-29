import Image from "next/image";
import { AmenityIndex } from "./estate-sections";
function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a href={href} className={`arrow-link ${light ? "light" : ""}`}>
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
export function Amenities() {
  return (
    <section id="living" className="section living">
      <div className="section-label">
        MOVE / UNWIND / CONNECT / GROW <span>06 /</span>
      </div>
      <div className="living-title">
        <h2>
          Find your
          <br />
          <em>own rhythm.</em>
        </h2>
        <p>
          A morning on the jogging track, time by the pool, or a game of
          badminton. Explore shared spaces for movement, quieter moments and
          time together.
        </p>
      </div>
      <figure className="pool-feature">
        <div className="depth-panorama">
          <Image
            src="/assets/pool.webp"
            alt="Architectural visualisation of the proposed Sri Krishna Vilas pool"
            fill
            sizes="90vw"
          />
        </div>
        <figcaption>
          <span>01 / A MOMENT BY THE WATER</span>
          <span>ARCHITECTURAL VISUALISATION</span>
        </figcaption>
        <div className="pool-caption">
          <h3>
            Make time
            <br />
            <em>to slow down.</em>
          </h3>
          <p>
            The pool visual offers a different rhythm to the day. A quieter
            perspective on the proposed shared spaces at Sri Krishna Vilas.
          </p>
        </div>
      </figure>
      <div className="editorial-grid">
        <figure className="editorial-large">
          <div className="editorial-image">
            <Image
              src="/assets/jogging.webp"
              alt="Architectural visual of the proposed jogging track beside the residences"
              fill
              sizes="(max-width: 767px) 90vw, 53vw"
            />
          </div>
          <figcaption>
            <span>01 — A LITTLE MOVEMENT</span>
            <span>Jogging track visual</span>
          </figcaption>
        </figure>
        <figure className="editorial-small">
          <div className="editorial-image">
            <Image
              src="/assets/gym.webp"
              alt="Architectural visual of the proposed outdoor gym"
              fill
              sizes="(max-width: 767px) 80vw, 34vw"
            />
          </div>
          <figcaption>
            <span>02 — IN THE OPEN</span>
            <span>Outdoor gym visual</span>
          </figcaption>
          <p>
            Everyday spaces.
            <br />A different pace.
          </p>
        </figure>
        <figure className="editorial-wide">
          <div className="editorial-image">
            <Image
              src="/assets/theatre.webp"
              alt="Architectural visual of the proposed open-air theatre and landscape"
              fill
              sizes="(max-width: 767px) 90vw, 58vw"
            />
          </div>
          <figcaption>
            <span>03 — COME TOGETHER</span>
            <span>Open-air theatre visual</span>
          </figcaption>
        </figure>
        <div className="editorial-aside">
          <span className="serif-mark">“</span>
          <p>
            Make room
            <br />
            for the everyday.
          </p>
          <span className="image-disclaimer">
            Architectural visuals of proposed amenities. Final specifications
            and availability require confirmation.
          </span>
        </div>
      </div>
      <div className="shared-space-story">
        <div className="shared-space-intro">
          <span className="eyebrow red">ROOM TO PLAY / ROOM TO PAUSE</span>
          <h3>
            Life between
            <br />
            <em>the everyday.</em>
          </h3>
          <p>
            From a game outdoors to the transition through the lobby, explore
            the different scales of the proposed shared spaces.
          </p>
        </div>
        <figure className="badminton-feature">
          <div className="shared-space-image">
            <Image
              src="/assets/badminton.webp"
              alt="Architectural visualisation of the proposed badminton court"
              fill
              sizes="(max-width: 767px) 90vw, 52vw"
            />
          </div>
          <figcaption>BADMINTON / ARCHITECTURAL VISUALISATION</figcaption>
        </figure>
        <figure className="atrium-feature">
          <div className="shared-space-image">
            <Image
              src="/assets/atrium.webp"
              alt="Architectural visualisation looking into the Sri Krishna Vilas atrium"
              fill
              sizes="(max-width: 767px) 90vw, 35vw"
            />
          </div>
          <figcaption>ATRIUM / ARCHITECTURAL VISUALISATION</figcaption>
        </figure>
        <figure className="lobby-feature">
          <div className="shared-space-image">
            <Image
              src="/assets/lobby.webp"
              alt="Architectural visualisation of the proposed lobby interior"
              fill
              sizes="(max-width: 767px) 90vw, 47vw"
            />
          </div>
          <figcaption>LOBBY / ARCHITECTURAL VISUALISATION</figcaption>
          <p className="source-note">
            Proposed spaces shown through supplied project imagery. Final
            amenities, finishes and specifications require confirmation.
          </p>
        </figure>
      </div>
      <AmenityIndex />
    </section>
  );
}
export function ConstructionProof() {
  return (
    <section id="updates" className="construction">
      <div className="vision-intro">
        <span className="eyebrow">
          SRI KRISHNA VILAS / FROM VISION TO REALITY
        </span>
        <h2>
          The vision.
          <br />
          <em>The work taking shape.</em>
        </h2>
        <p>
          Two kinds of evidence. The architectural visual presents the design
          intent; the supplied site photograph records construction. These are
          different viewpoints, not a matched before-and-after comparison.
        </p>
      </div>
      <figure className="vision-reference">
        <div className="vision-reference-image">
          <Image
            src="/assets/architecture.webp"
            alt="Architectural visualisation of Sri Krishna Vilas, shown separately from actual site photography"
            fill
            sizes="90vw"
          />
        </div>
        <figcaption>ARCHITECTURAL VISUALISATION / DESIGN INTENT</figcaption>
      </figure>
      <div className="construction-photo">
        <Image
          src="/assets/progress.webp"
          alt="Actual supplied site photograph looking up at Sri Krishna Vilas under construction"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
        />
        <span className="photo-tag">ACTUAL SITE PROGRESS</span>
      </div>
      <div className="construction-copy">
        <span className="eyebrow">BUILDING TRUST, IN VIEW</span>
        <h2>
          From vision
          <br />
          <em>to form.</em>
        </h2>
        <p>
          Behind every architectural vision is the work of bringing it to life.
        </p>
        <p className="muted-light">
          A view of Sri Krishna Vilas from the site. Follow the details taking
          shape, beyond the visualisations.
        </p>
        <span className="construction-caption">
          Supplied construction photograph · Capture date to be confirmed
        </span>
        <ArrowLink href="#enquire" light>
          Ask for the latest project update
        </ArrowLink>
      </div>
    </section>
  );
}
export function ProjectLocation() {
  return (
    <section id="location" className="section place location-section">
      <div className="section-label">
        SRI KRISHNA VILAS / ROOTED IN VARANASI
      </div>
      <span className="place-name" aria-hidden="true">
        Varanasi
      </span>
      <div className="place-bottom">
        <div>
          <span className="eyebrow">THE PROJECT ADDRESS</span>
          <p>
            Lahartara–Bhitari Road
            <br />
            Varanasi, Uttar Pradesh
          </p>
          <span className="location-note">
            From supplied project material.
            <br />
            Exact site entrance to be confirmed.
          </span>
        </div>
        <div>
          <h2>
            A city that stays
            <br />
            <em>with you.</em>
          </h2>
          <p>
            Our connection to Varanasi is the starting point. A place of daily
            rituals and enduring relationships. A city we call home.
          </p>
          <div className="location-rows">
            <div>
              <span>Nearby destinations</span>
              <span>Details being verified</span>
            </div>
            <div>
              <span>Routes & connectivity</span>
              <span>Details being verified</span>
            </div>
            <div>
              <span>Directions</span>
              <span>Verified map pin pending</span>
            </div>
          </div>
          <ArrowLink href="#enquire?intent=visit">
            Ask about visiting the site
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
