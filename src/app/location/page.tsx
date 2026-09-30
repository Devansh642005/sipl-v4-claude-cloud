import type { Metadata } from "next";
import { EnquiryBand, SubHero } from "@/components/sipl/subpage";
import { contact, project } from "@/data/sipl";
import { mapsLink } from "@/data/verified";

export const metadata: Metadata = {
  title: "Location | Sri Krishna Vilas | SIPL Group",
  description: "Sri Krishna Vilas is on Lahartara–Bhitari Road, Varanasi. Map, directions and office addresses.",
  alternates: { canonical: "/location" },
};

export default function Location() {
  return (
    <main id="main" className="sp">
      <SubHero
        kicker="Location"
        title="Lahartara–Bhitari Road,"
        em="Varanasi."
        lead="Find Sri Krishna Vilas on the map, get directions, or visit our corporate office."
        image="frontageLandscapeRoad"
      />
      <section className="s-section s-bg-sand" aria-label="Map and addresses">
        <div className="s-container lc-grid">
          <div className="lc-map sp-frame">
            <iframe
              title="Map of Sri Krishna Vilas, Lahartara–Bhitari Road, Varanasi"
              src="https://www.google.com/maps?q=Sri+Krishna+Vilas+Lahartara+Bhitari+Road+Varanasi&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lc-side">
            <dl className="s-loc-card">
              <div>
                <dt>Project</dt>
                <dd>
                  {project.name}, {project.address}
                </dd>
              </div>
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
            <a className="s-pill s-pill-solid" href={mapsLink} target="_blank" rel="noreferrer">
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </section>
      <EnquiryBand title="Plan your visit" em="with us." />
    </main>
  );
}
