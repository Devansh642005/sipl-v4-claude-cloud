"use client";
import { useEffect, useState } from "react";
import { enquiryMailto } from "@/lib/enquiry";
import { configurations, contact, portfolio } from "@/data/sipl";
export type EnquiryRequest = {
  name: string;
  phone: string;
  email: string;
  project: string;
  configuration: string;
  intent: string;
  preferredDate: string;
  timeWindow: string;
  message: string;
};
// Replace this boundary with a verified endpoint; the default only prepares a local summary.
export function EnquiryForm({
  defaultProject = "Sri Krishna Vilas",
}: {
  defaultProject?: string;
}) {
  const [intent, setIntent] = useState("Enquire");
  const [configuration, setConfiguration] = useState("Not decided");
  const [project, setProject] = useState(defaultProject);
  const [priority, setPriority] = useState("");
  const [ready, setReady] = useState<EnquiryRequest | null>(null);
  const [today, setToday] = useState("");
  useEffect(() => {
    const date = new Date();
    setToday(
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
    );
    const sync = () => {
      if (!location.hash.startsWith("#enquire")) return;
      const q = new URLSearchParams(location.hash.split("?")[1]);
      setIntent(
        q.get("intent") === "visit" ? "Request a site visit" : "Enquire",
      );
      const c = q.get("configuration");
      if (c && configurations.some((v) => v.label === c)) setConfiguration(c);
      const p = q.get("project");
      if (p && ["SIPL Group", ...portfolio.map((v) => v.name)].includes(p))
        setProject(p);
      setPriority(q.get("priority") ?? "");
      setReady(null);
      document.getElementById("enquire")?.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const mail = ready ? enquiryMailto(ready.intent + " — " + ready.project, ready) : "";
  return (
    <form
      className="enquiry-form"
      onChange={() => setReady(null)}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setReady({
          name: String(data.get("name")),
          phone: String(data.get("phone")),
          email: String(data.get("email")),
          project,
          configuration,
          intent,
          preferredDate: String(data.get("visitDate") ?? ""),
          timeWindow: String(data.get("timeWindow") ?? ""),
          message: String(data.get("message") ?? ""),
        });
      }}
    >
      <div className="enquiry-intents" role="group" aria-label="Enquiry type">
        {["Enquire", "Request a site visit"].map((v) => (
          <button
            key={v}
            type="button"
            aria-pressed={intent === v}
            onClick={() => {
              setIntent(v);
              setReady(null);
            }}
          >
            {v}
          </button>
        ))}
      </div>
      {priority && <p className="form-note">Your priorities: {priority}</p>}
      <div className="form-row">
        <label>
          Full name
          <input
            name="name"
            autoComplete="name"
            required
            pattern=".*\S.*"
            maxLength={100}
            placeholder="Your full name"
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            pattern={"(?=(?:\\D*\\d){7,15}\\D*$)[+0-9 \\(\\)\\-]{7,22}"}
            minLength={7}
            maxLength={22}
            placeholder="Your phone number"
            title="Enter 7–22 characters using numbers, spaces, +, parentheses or hyphens."
          />
        </label>
      </div>
      <label>
        Email address
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="you@example.com"
        />
      </label>
      <div className="form-row">
        <label>
          Project
          <select
            name="project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          >
            <option>SIPL Group</option>
            {portfolio.map((p) => (
              <option key={p.name}>{p.name}</option>
            ))}
          </select>
        </label>
        <label>
          Interested configuration
          <select
            name="configuration"
            value={configuration}
            onChange={(e) => setConfiguration(e.target.value)}
          >
            <option>Not decided</option>
            {configurations.map((c) => (
              <option key={c.label}>{c.label}</option>
            ))}
          </select>
        </label>
      </div>
      {intent === "Request a site visit" && (
        <>
          <div className="form-row">
            <label>
              Preferred date
              <input name="visitDate" type="date" min={today} required />
            </label>
            <label>
              Preferred time window
              <select name="timeWindow" required>
                <option value="">Choose a preference</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Please call to arrange</option>
              </select>
            </label>
          </div>
          <p className="form-note">
            Date and time are your preferences. SIPL will need to confirm the
            appointment.
          </p>
        </>
      )}
      <label>
        Message <span className="optional">(optional)</span>
        <textarea
          name="message"
          maxLength={2000}
          rows={3}
          placeholder="Tell us what you would like to know."
        />
      </label>
      <p className="form-note">
        This form prepares your request locally. Online submission is not
        connected yet. Call or email SIPL to send your enquiry.
      </p>
      <button className="button button-ivory" type="submit">
        {intent === "Enquire" ? "Prepare enquiry" : "Prepare visit request"}
        <span aria-hidden="true">↗</span>
      </button>
      <div className="form-status" role="status">
        {ready && (
          <>
            <p>
              Thank you. Your request is ready for SIPL follow-up. Direct
              submission integration will be enabled before production launch.
            </p>
            <p>
              Your details have not been sent or stored. Use email or call to
              contact SIPL now.
            </p>
            <a className="arrow-link light" href={mail}>
              Open request in your email app <span aria-hidden="true">↗</span>
            </a>
          </>
        )}
      </div>
      <div className="contact-actions">
        <a href={`tel:${contact.tel}`}>Call {contact.phone} ↗</a>
        <a href={`mailto:${contact.email}`}>Email SIPL ↗</a>
      </div>
    </form>
  );
}
