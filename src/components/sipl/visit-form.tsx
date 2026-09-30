"use client";
import { useState } from "react";
import { contact } from "@/data/sipl";
import { enquiryMailto } from "@/lib/enquiry";

const today = () => new Date().toISOString().slice(0, 10);

export function VisitForm() {
  const [done, setDone] = useState<string | null>(null);
  return (
    <div className="vf">
      {done ? (
        <div className="vf-done sp-card" role="status">
          <h3 className="s-display">Your visit request is ready.</h3>
          <p className="s-body">
            Your email app should have opened with the details filled in. Press send and we will confirm the day and
            time. If it did not open, copy the details below and email {contact.email}, or call {contact.phone}.
          </p>
          <pre className="vf-pre">{done}</pre>
          <button type="button" className="tl-link" onClick={() => setDone(null)}>
            Edit the request
          </button>
        </div>
      ) : (
        <form
          className="vf-form sp-card"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const values = {
              Name: String(f.get("name") || ""),
              Phone: String(f.get("phone") || ""),
              "Preferred date": String(f.get("date") || ""),
              "Preferred time": String(f.get("slot") || ""),
              "People visiting": String(f.get("people") || ""),
              "Interested in": String(f.get("plan") || ""),
              Note: String(f.get("note") || "-"),
            };
            setDone(Object.entries(values).map(([k, v]) => `${k}: ${v}`).join("\n"));
            window.location.href = enquiryMailto("Site visit request: Sri Krishna Vilas", values);
          }}
        >
          <label>
            Your name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Phone
            <input name="phone" required inputMode="tel" autoComplete="tel" />
          </label>
          <label>
            Preferred date
            <input name="date" type="date" required min={today()} />
          </label>
          <label>
            Preferred time
            <select name="slot" defaultValue="Morning (10am to 12pm)">
              <option>Morning (10am to 12pm)</option>
              <option>Afternoon (12pm to 4pm)</option>
              <option>Evening (4pm to 6pm)</option>
            </select>
          </label>
          <label>
            People visiting
            <select name="people" defaultValue="2">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </label>
          <label>
            Interested in
            <select name="plan" defaultValue="Help me choose">
              <option>Help me choose</option>
              <option>1 BHK</option>
              <option>1.5 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
            </select>
          </label>
          <label className="vf-wide">
            Anything you want us to prepare?
            <textarea name="note" rows={3} />
          </label>
          <label className="vf-check">
            <input type="checkbox" required /> I agree to be contacted about this request.
          </label>
          <button type="submit" className="s-pill s-pill-solid vf-go">
            <span>Request my visit</span>
          </button>
          <p className="tl-note vf-wide">
            This prepares an email to our team. Nothing is sent until you press send in your email app.
          </p>
        </form>
      )}
    </div>
  );
}
