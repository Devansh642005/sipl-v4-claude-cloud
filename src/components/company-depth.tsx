import Image from "next/image";
import { ImageViewer } from "./image-viewer";
import { companyStory, projectEvidence } from "@/data/company";
export function CompanyIntroduction() {
  return (
    <section id="about" className="section corporate-positioning">
      <div className="section-label">
        SIPL GROUP / BUILDING TRUST <span>02 /</span>
      </div>
      <div className="reveal-grid">
        <h2>
          Places take shape.
          <br />
          <em>Trust takes time.</em>
        </h2>
        <div className="reveal-copy">
          <span className="eyebrow red">
            A REAL ESTATE DEVELOPER IN VARANASI
          </span>
          <p className="reveal-statement">
            Considered spaces.
            <br />
            Lasting connections.
          </p>
          <p>{companyStory.introduction}</p>
          <p>{companyStory.approach}</p>
          <a className="arrow-link" href="#projects">
            Explore our projects <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className="company-detail">
        <figure>
          <div className="company-detail-image">
            <Image
              src="/assets/architecture.webp"
              alt="Sri Krishna Vilas architectural visualisation from SIPL’s supplied project material"
              fill
              sizes="(max-width: 767px) 90vw, 52vw"
            />
          </div>
          <figcaption>THE ARCHITECTURAL VISION / SRI KRISHNA VILAS</figcaption>
        </figure>
        <div>
          <span className="eyebrow red">THE WAY WE APPROACH OUR WORK</span>
          <h3>
            Thought in the planning.
            <br />
            <em>Care in the detail.</em>
          </h3>
          <p>{companyStory.quality}</p>
          <p className="source-note">
            From SIPL’s supplied company introduction and quality policy.
          </p>
          <a className="arrow-link" href="#credibility">
            Read the supporting material <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export function Credibility() {
  const certificate = projectEvidence.certificate;
  return (
    <section id="credibility" className="section credibility-section">
      <div className="section-label">
        WHY SIPL / THE SUPPORTING MATERIAL <span>08 /</span>
      </div>
      <div className="depth-heading">
        <h2>
          Trust, with
          <br />
          <em>something to show.</em>
        </h2>
        <p>
          Company principles, project documentation and a view from the site. A
          closer look at the material behind the story.
        </p>
      </div>
      <div className="evidence-layout">
        <figure>
          <Image
            src={certificate.image}
            alt="Supplied IGBC certificate recording Sri Krishna Vilas as Precertified Gold in November 2025, registration GH240670"
            width={1000}
            height={774}
            sizes="(max-width: 767px) 90vw, 48vw"
          />
          <figcaption>SUPPLIED PROJECT DOCUMENT / NOVEMBER 2025</figcaption>
          <ImageViewer
            src={certificate.image}
            label="Sri Krishna Vilas supplied IGBC precertificate"
          />
        </figure>
        <div className="evidence-copy">
          <span className="eyebrow red">SRI KRISHNA VILAS</span>
          <h3>{certificate.title}</h3>
          <p>
            The supplied IGBC document records Precertified Gold under the Green
            Homes Rating System, dated {certificate.date}.
          </p>
          <dl>
            <div>
              <dt>Registration</dt>
              <dd>{certificate.registration}</dd>
            </div>
            <div>
              <dt>Document stage</dt>
              <dd>Precertification</dd>
            </div>
          </dl>
          <p className="source-note">
            This records design intent, not final building certification. The
            document states three-year validity with renewal based on
            six-monthly progress updates. Current renewal status is to be
            confirmed.
          </p>
          <div className="principle-note">
            <h4>A stated commitment to quality</h4>
            <p>
              SIPL’s supplied quality policy sets out continual process
              improvement, customer needs and team development as priorities.
            </p>
          </div>
          <a className="arrow-link" href="#updates">
            See actual site photography <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export function GroupHospitality() {
  return (
    <section id="group" className="section group-hospitality">
      <div className="section-label">
        THE GROUP / HOSPITALITY <span>10 /</span>
      </div>
      <div className="depth-heading">
        <h2>
          A sense
          <br />
          <em>of welcome.</em>
        </h2>
        <p>
          SIPL’s supplied company material extends its story from real estate to
          hospitality, with The Kashi Residency listed in the group’s
          hospitality navigation.
        </p>
      </div>
      <div className="hospitality-layout">
        <figure>
          <div className="hospitality-image">
            <Image
              src="/assets/hospitality.webp"
              alt="Supplied image identified as The Kashi Residency"
              fill
              sizes="(max-width: 767px) 90vw, 56vw"
            />
          </div>
          <figcaption>
            THE KASHI RESIDENCY / SUPPLIED HOSPITALITY IMAGE
          </figcaption>
        </figure>
        <div>
          <span className="eyebrow">THE KASHI RESIDENCY</span>
          <h3>
            Another expression
            <br />
            <em>of place.</em>
          </h3>
          <p>
            A hospitality chapter within the supplied SIPL group material.
            Explore its introduction here while current property information and
            booking contacts are confirmed.
          </p>
          <a className="arrow-link" href="#enquire?project=SIPL%20Group">
            Enquire about the group <span aria-hidden="true">↗</span>
          </a>
          <div className="group-pending">
            <span className="eyebrow">MANASI GANGA</span>
            <p>
              Also named in the supplied group material. Its project category
              and current introduction are being reconciled before further
              details are published.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
