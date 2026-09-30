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
      <section className="s-section s-bg-ivory" aria-labelledby="nb-t">
        <div className="s-container nb">
          <div>
            <p className="s-eyebrow">The neighbourhood</p>
            <h2 id="nb-t" className="s-display s-h2">
              Life on
              <em>Lahartara–Bhitari Road.</em>
            </h2>
            <p className="s-body">
              Public property listings describe the area as well connected, close to Varanasi&apos;s Ring Road and the
              highways towards Prayagraj and Lucknow, with railway stations, universities including BHU, schools and
              markets within an easy drive.
            </p>
            <p className="s-body">
              We do not print drive times on a website, because they change with the hour and the traffic. The honest
              way to judge a location is to drive it. Book a visit, and come at the hour you would actually travel.
            </p>
            <div className="s-actions">
              <a className="s-pill s-pill-solid" href="/book-visit">
                <span>Book a site visit</span>
              </a>
            </div>
            <p className="s-caption">Neighbourhood details are drawn from public listings. Please confirm on your visit.</p>
          </div>
          <ul className="nb-list">
            <li>
              <b>Getting around</b>
              <span>Ring Road and the Prayagraj and Lucknow highways, as reported in public listings.</span>
            </li>
            <li>
              <b>Learning</b>
              <span>Universities including BHU, and schools across the city.</span>
            </li>
            <li>
              <b>Everyday needs</b>
              <span>Markets, banks and hospitals within an easy drive of Varanasi.</span>
            </li>
            <li>
              <b>The city</b>
              <span>The ghats and old Kashi, a drive away. Your weekends are sorted.</span>
            </li>
          </ul>
        </div>
      </section>
      <EnquiryBand title="Plan your visit" em="with us." />
    </main>
  );
}
