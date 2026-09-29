import Image from "next/image";
import { navigation } from "@/data/site";
import { contact, portfolio } from "@/data/sipl";
export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="footer-brand" href="/" aria-label="SIPL Group home">
          <Image
            src="/assets/logo-light.png"
            alt="SIPL — Building Trust"
            fill
            sizes="180px"
          />
        </a>
        <p>
          Considered spaces.
          <br />
          <em>Lasting connections.</em>
        </p>
      </div>
      <div className="footer-links">
        <div>
          <span className="eyebrow">EXPLORE SIPL</span>
          {navigation.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div>
          <span className="eyebrow">OUR PLACES</span>
          {portfolio.map((p) => (
            <a key={p.name} href={p.href}>
              {p.name}
            </a>
          ))}
        </div>
        <div>
          <span className="eyebrow">GET IN TOUCH</span>
          <a href={`tel:${contact.tel}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span className="eyebrow">REGISTERED OFFICE</span>
          <address>{contact.registeredOffice}</address>
          <span className="eyebrow">CORPORATE OFFICE</span>
          <address>{contact.corporateOffice}</address>
        </div>
      </div>
      <div id="policies" className="footer-policies">
        <details>
          <summary>Privacy & enquiry information</summary>
          <p>
            The request form prepares your details locally and does not submit
            or store them. The email action opens your email application with a
            prepared draft. No account is required. Official privacy terms and
            submission routing will be completed before online submission is
            enabled.
          </p>
        </details>
        <details>
          <summary>Project information & visualisation disclaimer</summary>
          <p>
            Architectural visuals are representative design material. Actual
            site photographs are separately labelled. Plan references may
            reflect different document editions. Confirm current specifications,
            availability and project documentation with SIPL. No prices, offers
            or completion dates are represented here.
          </p>
        </details>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        BUILDING TRUST.
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SIPL Group</span>
        <span>Real Estate · Hospitality · Varanasi</span>
        <a href="#policies">Privacy & project information ↗</a>
      </div>
    </footer>
  );
}
