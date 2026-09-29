"use client";
import { useRef, useState } from "react";
import { configurations, priorities, faqs } from "@/data/sipl";
export function CustomerExperience() {
  const [selected, setSelected] = useState<string[]>(["Open Space"]);
  const [configuration, setConfiguration] = useState("");
  const [household, setHousehold] = useState("");
  const [visit, setVisit] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const overflow = useRef("");
  const features = [
    ...new Set(
      priorities
        .filter((p) => selected.includes(p.name))
        .flatMap((p) => p.features),
    ),
  ];
  const href = `#enquire?project=Sri%20Krishna%20Vilas&configuration=${encodeURIComponent(configuration)}&intent=${visit ? "visit" : "enquire"}&priority=${encodeURIComponent(selected.join(", "))}`;
  return (
    <section id="customer-experience" className="section customer-experience">
      <div className="depth-heading">
        <div>
          <span className="eyebrow">YOUR HOME / YOUR PRIORITIES</span>
          <h2>
            What matters most
            <br />
            <em>to your home?</em>
          </h2>
        </div>
        <p>
          Start with what matters to you. Discover the project features that
          relate to your priorities, then choose your next step.
        </p>
      </div>
      <div className="customer-layout">
        <div>
          <div
            className="priority-options"
            role="group"
            aria-label="Home priorities"
          >
            {priorities.map((p) => (
              <button
                key={p.name}
                aria-pressed={selected.includes(p.name)}
                onClick={() =>
                  setSelected((values) =>
                    values.includes(p.name)
                      ? values.filter((v) => v !== p.name)
                      : [...values, p.name],
                  )
                }
              >
                {p.name}
                <span>{selected.includes(p.name) ? "✓" : "+"}</span>
              </button>
            ))}
          </div>
          <div className="priority-results" aria-live="polite">
            <span className="eyebrow">FEATURES TO EXPLORE</span>
            {features.length ? (
              <ul>
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            ) : (
              <p>Select a priority to explore related project features.</p>
            )}
            <a className="arrow-link light" href="#living">
              Explore life at Sri Krishna Vilas{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="smart-guide">
          <span className="eyebrow">A LITTLE GUIDANCE</span>
          <h3>Your next useful step.</h3>
          <label htmlFor="guide-configuration">
            Preferred configuration <span>(optional)</span>
          </label>
          <select
            id="guide-configuration"
            value={configuration}
            onChange={(e) => setConfiguration(e.target.value)}
          >
            <option value="">I’m exploring</option>
            {configurations.map((c) => (
              <option key={c.label}>{c.label}</option>
            ))}
          </select>
          <label htmlFor="guide-household">
            Who will the home be for? <span>(optional)</span>
          </label>
          <select
            id="guide-household"
            value={household}
            onChange={(e) => setHousehold(e.target.value)}
          >
            <option value="">Prefer not to say</option>
            <option>Myself</option>
            <option>My family</option>
            <option>Someone close to me</option>
          </select>
          <label className="guide-check">
            <input
              type="checkbox"
              checked={visit}
              onChange={(e) => setVisit(e.target.checked)}
            />
            I’d like to request a site visit
          </label>
          <div className="guide-result" aria-live="polite">
            <p>
              {configuration
                ? `Explore ${configuration} and ask SIPL for a detailed plan.`
                : "Explore the configurations or speak with SIPL."}
            </p>
            <small>
              Your preferences guide the next action; they do not indicate unit
              availability.
            </small>
          </div>
          <a className="button button-ivory" href={href}>
            {visit
              ? "Plan a site visit"
              : configuration
                ? "Request a detailed plan"
                : "Speak with SIPL"}
            <span aria-hidden="true">↗</span>
          </a>
          <button
            ref={trigger}
            className="concierge-trigger"
            onClick={() => {
              overflow.current = document.body.style.overflow;
              document.body.style.overflow = "hidden";
              dialog.current?.showModal();
            }}
          >
            Ask SIPL · Project questions <span>+</span>
          </button>
        </div>
      </div>
      <dialog
        ref={dialog}
        className="concierge-dialog"
        aria-label="Ask SIPL"
        onClose={() => {
          document.body.style.overflow = overflow.current;
          trigger.current?.focus();
        }}
      >
        <div className="concierge-top">
          <div>
            <span className="eyebrow red">PROJECT INFORMATION</span>
            <h2>Ask SIPL</h2>
          </div>
          <button
            autoFocus
            onClick={() => dialog.current?.close()}
            aria-label="Close Ask SIPL"
          >
            Close ×
          </button>
        </div>
        <p>Answers from official SIPL project information.</p>
        {faqs.map((faq) => (
          <details key={faq.q}>
            <summary>{faq.q}</summary>
            <p>{faq.a}</p>
            <a
              className="arrow-link"
              href={faq.href}
              onClick={() => dialog.current?.close()}
            >
              {faq.action}
              <span aria-hidden="true">↗</span>
            </a>
          </details>
        ))}
        <p className="source-note">
          A project FAQ guide. No live agent or AI service is connected.
        </p>
      </dialog>
    </section>
  );
}
