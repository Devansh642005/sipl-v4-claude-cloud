import Image from "next/image";
import { ImageViewer } from "./image-viewer";
import { project } from "@/data/sipl";
import { projectEvidence } from "@/data/company";
export function ProjectOverview() {
  return (
    <section id="overview" className="section project-overview">
      <div className="section-label">
        SRI KRISHNA VILAS / THE PROJECT STORY <span>02 /</span>
      </div>
      <div className="reveal-grid">
        <h2>
          A place to arrive.
          <br />
          <em>A place to belong.</em>
        </h2>
        <div className="reveal-copy">
          <span className="eyebrow red">LAHARTARA–BHITARI ROAD / VARANASI</span>
          <p className="reveal-statement">
            Architecture for
            <br />
            <em>the everyday.</em>
          </p>
          <p>
            Sri Krishna Vilas is a residential project on Lahartara–Bhitari Road
            in Varanasi. The supplied project introduction identifies its
            developer as Shreemaa Infrarealty Private Limited, a SIPL Group
            company.
          </p>
          <p>
            The design description centres on two towers, light and ventilation,
            shared green spaces and internal circulation. Landscaped areas and
            shared spaces connect the arrival experience with everyday
            residential life. The supplied imagery offers a closer look at that
            architectural intent, from the arrival to the residence.
          </p>
          <p className="source-note">
            Project overview from supplied company material. Final
            specifications and sales details require confirmation.
          </p>
        </div>
      </div>
      <figure className="overview-panorama">
        <div className="depth-panorama">
          <Image
            src="/assets/exterior-front.webp"
            alt="Architectural visualisation of the residential frontage at Sri Krishna Vilas"
            fill
            sizes="90vw"
          />
        </div>
        <figcaption>
          THE RESIDENTIAL FRONTAGE / ARCHITECTURAL VISUALISATION
        </figcaption>
      </figure>
    </section>
  );
}
export function InteriorGallery() {
  return (
    <section id="interiors" className="section interior-gallery">
      <div className="section-label">
        THE RESIDENCE / INTERIOR PERSPECTIVES <span>08 /</span>
      </div>
      <div className="depth-heading">
        <h2>
          The most
          <br />
          <em>personal spaces.</em>
        </h2>
        <p>
          Explore the supplied interior imagery at your own pace. Open each
          image to see the detail, zoom and look around the composition.
        </p>
      </div>
      <div className="interior-composition">
        {[
          {
            image: "living",
            title: "Room for everyday life",
            label: "Living room",
          },
          { image: "bedroom", title: "A quieter chapter", label: "Bedroom" },
          { image: "lobby", title: "The welcome home", label: "Lobby" },
        ].map((item, i) => (
          <figure
            key={item.image}
            className={`interior-frame interior-frame-${i}`}
          >
            <div className="interior-image">
              <Image
                src={`/assets/${item.image}.webp`}
                alt={`${item.label} architectural interior visualisation`}
                fill
                sizes={i === 0 ? "90vw" : "(max-width: 767px) 90vw, 43vw"}
              />
            </div>
            <figcaption>
              <span>
                0{i + 1} / {item.label.toUpperCase()}
              </span>
              <h3>{item.title}</h3>
            </figcaption>
            <ImageViewer
              src={`/assets/${item.image}.webp`}
              label={`${item.label} interior visualisation`}
            />
          </figure>
        ))}
      </div>
      <p className="source-note">
        Architectural visualisations with illustrative finishes and furnishings.
        These images are not unit-specific plans or a 360° walkthrough.
      </p>
    </section>
  );
}
export function ProjectInformation() {
  const brochure = projectEvidence.brochure;
  return (
    <section id="project-information" className="section project-information">
      <div className="section-label">
        TAKE A CLOSER LOOK / PROJECT INFORMATION <span>12 /</span>
      </div>
      <div className="brochure-layout">
        <figure>
          <Image
            src={brochure.cover}
            alt="Cover of the supplied Sri Krishna Vilas project brochure"
            width={710}
            height={1000}
            sizes="(max-width: 767px) 75vw, 32vw"
          />
          <figcaption>{brochure.status}</figcaption>
        </figure>
        <div>
          <span className="eyebrow red">SRI KRISHNA VILAS / THE BROCHURE</span>
          <h2>
            The details.
            <br />
            <em>At your pace.</em>
          </h2>
          <p>
            Keep the supplied project brochure for a closer look at the
            architectural vision and original project presentation.
          </p>
          <a className="arrow-link" href={project.brochure} download>
            View Brochure <span aria-hidden="true">↓</span>
          </a>
          <p className="source-note">
            Official linked PDF · Approximately 5.5 MB. Confirm the current
            edition, specifications and plans with the company before relying on
            its details.
          </p>
          <div className="project-information-details">
            <details>
              <summary>Plans & residence information</summary>
              <p>
                Explore configuration reference plans in the residence section.
                Detailed plans and current availability are available on
                request.
              </p>
              <a href="#residences">Open the residence explorer ↗</a>
            </details>
            <details>
              <summary>Project documentation</summary>
              <p>
                A supplied IGBC precertificate dated November 2025 records
                Precertified Gold. Current renewal status and other approval
                documentation need company confirmation.
              </p>
              <a href={projectEvidence.certificate.image}>
                View supplied precertificate ↗
              </a>
            </details>
            <details>
              <summary>Planning a site visit</summary>
              <p>
                Choose your preferred date and time in the request form, then
                call or email SIPL to arrange the visit. The team can confirm
                access and the exact entrance.
              </p>
              <a href="#enquire?intent=visit">Request a site visit ↗</a>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
