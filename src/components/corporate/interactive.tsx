"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DiscoveryStage } from "./experience";
import { KrishnaConcierge } from "./krishna-concierge";
import { openProjectFilm } from "./video-theatre";
import { usePathname } from "next/navigation";
import { projects, type Project } from "@/data/projects";
import { media, approvedFilm, type MediaAsset } from "@/data/media";
import { contact, contactConfig } from "@/data/contact";
import { enquiryMailto } from "@/lib/enquiry";
export function EnquireButton({
  children = "Enquire",
  project = "",
  intent = "Project Information",
  className = "c-button",
}: {
  children?: React.ReactNode;
  project?: string;
  intent?: string;
  className?: string;
}) {
  return (
    <button
      className={className}
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent("sipl-enquire", { detail: { project, intent } }),
        )
      }
    >
      {children}
    </button>
  );
}
export function CorporateHeader() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [preview, setPreview] = useState(projects[0]);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const path = usePathname();
  const drawer = useRef<HTMLDialogElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    setOpen(false);
    setMega(false);
    drawer.current?.close();
  }, [path]);
  useEffect(() => {
    function close(e: PointerEvent) {
      if (!nav.current?.contains(e.target as Node)) setMega(false);
    }
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);
  const groups = [
    ["About", "/about"],
    ["Hospitality", "/projects/hospitality"],
    ["Gallery", "/gallery"],
    ["Media", "/media"],
    ["NRI", "/nri"],
    ["Contact", "/contact"],
  ];
  return (
    <header className={`c-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="c-utility">
        <span>REAL ESTATE & HOSPITALITY · VARANASI</span>
        <div>
          <a href={"tel:" + contact.tel}>{contact.phone}</a>
          <a href={"mailto:" + contact.email}>{contact.email}</a>
          <Link href="/nri">NRI Corner</Link>
          <Link href="/emi-calculator">EMI Calculator</Link>
          <Link href="/careers">Careers</Link>
        </div>
      </div>
      <div className="c-main-nav">
        <Link href="/" aria-label="SIPL Group home">
          <Image
            src={media.logo.src}
            alt={media.logo.alt}
            width={120}
            height={62}
            priority
          />
        </Link>
        <nav
          ref={nav}
          aria-label="Main navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setMega(false);
              nav.current?.querySelector("button")?.focus();
            }
          }}
        >
          <Link href="/about">About</Link>
          <button
            aria-expanded={mega}
            aria-controls="project-menu"
            onClick={() => setMega(!mega)}
          >
            Projects <span aria-hidden="true">⌄</span>
          </button>
          {groups.slice(1).map(([n, h]) => (
            <Link key={h} href={h}>
              {n}
            </Link>
          ))}
          {mega && (
            <div id="project-menu" className="c-mega">
              {["Real Estate", "Hospitality"].map((c) => (
                <div key={c}>
                  <Link
                    className="c-kicker"
                    href={
                      c === "Real Estate"
                        ? "/projects/real-estate"
                        : "/projects/hospitality"
                    }
                  >
                    {c}
                  </Link>
                  {projects
                    .filter((p) => p.category === c)
                    .map((p) => (
                      <Link
                        href={p.href}
                        key={p.id}
                        onMouseEnter={() => setPreview(p)}
                        onFocus={() => setPreview(p)}
                        data-preview-active={preview.id === p.id}
                      >
                        <span>{p.name}</span>
                        <small>{p.status}</small>
                      </Link>
                    ))}
                </div>
              ))}
              <aside
                className="r-menu-preview"
                aria-label="SIPL portfolio introduction"
              >
                <Image
                  key={preview.id}
                  src={media[preview.image].src}
                  alt={media[preview.image].alt}
                  width={220}
                  height={180}
                  style={{
                    objectFit:
                      media[preview.image].type === "logo"
                        ? "contain"
                        : "cover",
                  }}
                />
                <span className="v-menu-number">
                  0{projects.indexOf(preview) + 1} / {preview.status}
                </span>
                <p>{preview.name}</p>
              </aside>
              <Link className="c-mega-all" href="/projects">
                View all projects →
              </Link>
              <div className="v-menu-contact">
                <a href={"tel:" + contact.tel}>{contact.phone}</a>
                <a href={"mailto:" + contact.email}>{contact.email}</a>
              </div>
            </div>
          )}
        </nav>
        <EnquireButton />
        <button
          className="c-menu-toggle"
          aria-expanded={open}
          aria-label="Open navigation"
          onClick={() => {
            drawer.current?.showModal();
            setOpen(true);
          }}
        >
          Menu ☰
        </button>
      </div>
      <dialog
        ref={drawer}
        className="c-mobile-drawer"
        aria-label="Mobile navigation"
        onClose={() => setOpen(false)}
      >
        <div className="c-drawer-top">
          <strong>SIPL GROUP</strong>
          <button
            onClick={() => drawer.current?.close()}
            aria-label="Close navigation"
          >
            Close ×
          </button>
        </div>
        <nav
          aria-label="Mobile main navigation"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) drawer.current?.close();
          }}
        >
          <Link href="/">Home</Link>
          <details>
            <summary>About SIPL</summary>
            {[
              ["About", "/about"],
              ["Leadership", "/about/leadership"],
              ["Legacy", "/about/legacy"],
              ["Recognition", "/about/awards"],
              ["Corporate Culture", "/about/corporate-culture"],
            ].map(([n, h]) => (
              <Link href={h} key={h}>
                {n}
              </Link>
            ))}
          </details>
          <details>
            <summary>Projects</summary>
            {projects.map((p) => (
              <Link key={p.id} href={p.href}>
                {p.name}
                <small>
                  {p.category} · {p.status}
                </small>
              </Link>
            ))}
            <Link href="/projects">View All Projects →</Link>
          </details>
          {groups.slice(1).map(([n, h]) => (
            <Link key={h} href={h}>
              {n}
            </Link>
          ))}
          <Link href="/emi-calculator">EMI Calculator</Link>
          <Link href="/careers">Careers</Link>
          <button
            className="v-drawer-enquire"
            onClick={() => {
              drawer.current?.close();
              window.dispatchEvent(new CustomEvent("sipl-enquire"));
            }}
          >
            Enquire / Contact SIPL ↗
          </button>
        </nav>
      </dialog>
    </header>
  );
}
export function LeadForm({
  career = false,
  initialProject = "",
  initialIntent = "Project Information",
}: {
  career?: boolean;
  initialProject?: string;
  initialIntent?: string;
}) {
  const [draft, setDraft] = useState("");
  const [file, setFile] = useState("");
  return (
    <form
      className="c-form"
      onChange={() => setDraft("")}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const values: Record<string, string> = {};
        data.forEach((v, k) => {
          if (typeof v === "string") values[k] = v;
        });
        if (file) values["Resume to attach manually"] = file;
        setDraft(
          enquiryMailto(
            career ? "Career application — SIPL Group" : "SIPL Group enquiry",
            values,
          ),
        );
      }}
    >
      <div className="c-form-grid">
        <label>
          Name
          <input
            name="Name"
            autoComplete="name"
            required
            pattern={".*\\S.*"}
            maxLength={100}
          />
        </label>
        <label>
          Phone
          <input
            name="Phone"
            type="tel"
            autoComplete="tel"
            required
            pattern={"(?=(?:\\D*\\d){7,15}\\D*$)[+0-9 \\(\\)\\-]{7,25}"}
            title="Enter 7–25 characters using digits, spaces, +, brackets or hyphens"
          />
        </label>
        <label>
          Email{!career ? " (optional)" : ""}
          <input
            name="Email"
            type="email"
            autoComplete="email"
            required={career}
          />
        </label>
        {career ? (
          <>
            <label>
              Role of interest
              <input name="Role" required maxLength={120} />
            </label>
            <label>
              Experience (years)
              <input
                name="Experience"
                type="number"
                min="0"
                max="60"
                step="0.5"
                required
              />
            </label>
            <label>
              Resume
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFile(e.target.files?.[0]?.name || "")}
              />
            </label>
          </>
        ) : (
          <>
            <label>
              Interested in
              <select name="Interest" defaultValue={initialIntent}>
                {[
                  "Residential",
                  "Hospitality",
                  "Site Visit",
                  "Project Information",
                ].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label>
              Project
              <select name="Project" defaultValue={initialProject}>
                <option value="">Help me explore</option>
                {projects.map((p) => (
                  <option key={p.id}>{p.name}</option>
                ))}
              </select>
            </label>
          </>
        )}
      </div>
      <label>
        Message (optional)
        <textarea name="Message" rows={3} maxLength={2000} />
      </label>
      <label className="c-consent">
        <input
          type="checkbox"
          required
          name="Consent"
          value="Agreed to be contacted about this request"
        />{" "}
        <span>
          I agree to be contacted about this request.{" "}
          <Link href="/privacy-policy">Privacy policy</Link>
        </span>
      </label>
      <p className="c-small">
        This prepares an email draft. Nothing is submitted until you send it
        from your email app.
        {career
          ? " Attach your resume to that email; this website does not upload files."
          : ""}
      </p>
      <button className="c-button" type="submit">
        Prepare email draft →
      </button>
      {draft && (
        <div className="c-draft" role="status">
          <p>
            Your draft is ready. Open it, review the details
            {career ? " and attach your resume" : ""}, then send.
          </p>
          <a className="c-button" href={draft}>
            Open email draft ↗
          </a>
          <p>
            Or call <a href={"tel:" + contact.tel}>{contact.phone}</a>.
          </p>
        </div>
      )}
    </form>
  );
}
export function GlobalContact() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selection, setSelection] = useState({
    project: "",
    intent: "Project Information",
  });

  useEffect(() => {
    const show = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setSelection(detail || { project: "", intent: "Project Information" });
      try {
        sessionStorage.setItem("sipl-lead-seen", "1");
      } catch {}
      dialog.current?.showModal();
    };
    window.addEventListener("sipl-enquire", show);
    const timer = setTimeout(() => {
      try {
        if (sessionStorage.getItem("sipl-lead-seen")) return;
      } catch {}
      if (
        document.querySelector("dialog[open]") ||
        document.activeElement?.matches("input,textarea,select") ||
        document.visibilityState !== "visible"
      )
        return;
      show(new Event("auto"));
    }, 13000);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("sipl-enquire", show);
    };
  }, []);
  return (
    <>
      <dialog
        ref={dialog}
        className="c-dialog c-lead-dialog"
        aria-labelledby="lead-title"
      >
        <button
          className="c-close"
          aria-label="Close enquiry"
          onClick={() => dialog.current?.close()}
        >
          Close ×
        </button>
        <span className="c-kicker">SIPL GROUP · BUILDING TRUST</span>
        <h2 id="lead-title">Let’s start a conversation.</h2>
        <p>Tell us what you’re looking for.</p>
        <LeadForm
          key={selection.project + selection.intent}
          initialProject={selection.project}
          initialIntent={selection.intent}
        />
      </dialog>
      <KrishnaConcierge />
    </>
  );
}
export function ProjectCard({ project: p }: { project: Project }) {
  const m = media[p.image];
  return (
    <article
      className={"c-project-card " + (m?.type === "logo" ? "is-identity" : "")}
    >
      <Link
        href={p.href}
        className="c-project-image"
        aria-label={"Explore " + p.name}
      >
        {m && (
          <Image
            src={m.src}
            alt={m.alt}
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        )}
        <span className="c-status">{p.status}</span>
      </Link>
      <div className="c-project-copy">
        <span className="c-kicker">
          {p.category}
          {p.location ? " · " + p.location : ""}
        </span>
        <h3>
          <Link href={p.href}>{p.name}</Link>
        </h3>
        <p>{p.description}</p>
        <Link className="c-link" href={p.href}>
          Know More <span>↗</span>
        </Link>
      </div>
    </article>
  );
}
export function ProjectFilter({ category }: { category?: string }) {
  const [cat, setCat] = useState(category || "All");
  const [status, setStatus] = useState("All");
  const list = projects.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      (status === "All" || p.status === status),
  );
  return (
    <>
      <div className="c-filters">
        {!category && (
          <div role="group" aria-label="Project category">
            {["All", "Real Estate", "Hospitality"].map((x) => (
              <button
                key={x}
                aria-pressed={cat === x}
                onClick={() => setCat(x)}
              >
                {x}
              </button>
            ))}
          </div>
        )}
        <div role="group" aria-label="Project status">
          {["All", "Running", "Upcoming"].map((x) => (
            <button
              key={x}
              aria-pressed={status === x}
              onClick={() => setStatus(x)}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <p className="c-small" role="status">
        {list.length} projects
      </p>
      <DiscoveryStage list={list} />
      {!list.length && (
        <p>
          No projects match these filters. Choose another category or status.
        </p>
      )}
    </>
  );
}
export function VideoExperience() {
  const poster = media[approvedFilm.poster];
  return (
    <button
      className="c-video-poster"
      aria-label="Watch Sri Krishna Vilas film"
      onClick={openProjectFilm}
    >
      <Image
        src={poster.src}
        alt={poster.alt}
        fill
        sizes="(max-width: 800px) 100vw, 80vw"
      />
      <span className="c-play">▶</span>
      <span className="c-video-caption">
        SRI KRISHNA VILAS{" "}
        <span>{approvedFilm.durationLabel} · Silent film</span>
      </span>
    </button>
  );
}
export function GalleryGrid({ assets }: { assets: MediaAsset[] }) {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const touch = useRef(0);
  const types = [...new Set(assets.map((a) => a.actualOrRender))];
  const list = assets.filter(
    (a) => filter === "All" || a.actualOrRender === filter,
  );
  const current = list[index];
  function move(n: number) {
    setIndex((i) => (i + n + list.length) % list.length);
  }
  return (
    <>
      {types.length > 1 && (
        <div className="c-filters" role="group" aria-label="Image type">
          {["All", ...types].map((t) => (
            <button
              key={t}
              aria-pressed={filter === t}
              onClick={() => {
                setFilter(t);
                setIndex(0);
              }}
            >
              {t === "render"
                ? "Visualisations"
                : t === "actual"
                  ? "Photographs"
                  : t}
            </button>
          ))}
        </div>
      )}
      <div className="c-gallery-grid">
        {list.map((m, i) => (
          <button
            key={m.id}
            onClick={() => {
              setIndex(i);
              dialog.current?.showModal();
            }}
          >
            <Image
              src={m.src}
              alt={m.alt}
              width={900}
              height={600}
              sizes="(max-width: 700px) 100vw, 33vw"
            />
            <span>{m.caption}</span>
            <small>
              {m.actualOrRender === "render"
                ? "Architectural visualisation"
                : m.actualOrRender === "actual"
                  ? "Actual photograph"
                  : "Project document"}{" "}
              ·{" "}
              {m.project === "sri-krishna-vilas"
                ? "Sri Krishna Vilas"
                : "SIPL Group"}
            </small>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="c-dialog c-gallery-dialog"
        aria-label="Gallery image viewer"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") move(1);
          if (e.key === "ArrowLeft") move(-1);
        }}
      >
        <button className="c-close" onClick={() => dialog.current?.close()}>
          Close gallery ×
        </button>
        {current && (
          <>
            <div
              onTouchStart={(e) => {
                touch.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                const dx = e.changedTouches[0].clientX - touch.current;
                if (Math.abs(dx) > 45) move(dx < 0 ? 1 : -1);
              }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={1600}
                height={1100}
                sizes="90vw"
              />
            </div>
            <p aria-live="polite">
              {current.caption} · {index + 1} / {list.length}
            </p>
            <div className="c-actions">
              <button className="c-button" onClick={() => move(-1)}>
                ← Previous
              </button>
              <button className="c-button" onClick={() => move(1)}>
                Next →
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
export function EMICalculator() {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(20);
  const months = years * 12;
  const r = rate / 1200;
  const emi =
    r === 0 ? amount / months : (amount * r) / (1 - Math.pow(1 + r, -months));
  const total = emi * months;
  const inr = (n: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);
  return (
    <div className="c-calculator">
      <div>
        {[
          {
            label: "Loan amount (₹)",
            value: amount,
            set: setAmount,
            min: 100000,
            max: 100000000,
            step: 100000,
          },
          {
            label: "Interest rate (% p.a.)",
            value: rate,
            set: setRate,
            min: 0,
            max: 25,
            step: 0.1,
          },
          {
            label: "Loan tenure (years)",
            value: years,
            set: setYears,
            min: 1,
            max: 30,
            step: 1,
          },
        ].map((x, i) => (
          <div className="c-calc-field" key={x.label}>
            <label htmlFor={"emi-" + i}>{x.label}</label>
            <input
              id={"emi-" + i}
              type="number"
              min={x.min}
              max={x.max}
              step={x.step}
              value={x.value}
              onChange={(e) =>
                x.set(Math.min(x.max, Math.max(x.min, Number(e.target.value))))
              }
            />
            <input
              type="range"
              aria-label={x.label + " slider"}
              min={x.min}
              max={x.max}
              step={x.step}
              value={x.value}
              onChange={(e) => x.set(Number(e.target.value))}
            />
          </div>
        ))}
        <p className="c-small">
          Illustrative inputs only; the interest rate is not a lender quote.
          Adjust the values to your own loan scenario.
        </p>
      </div>
      <div className="c-calc-results" aria-live="polite">
        <span className="c-kicker">ESTIMATED MONTHLY EMI</span>
        <output>{inr(emi)}</output>
        <div className="c-payment-bar" aria-hidden="true">
          <span style={{ width: (amount / total) * 100 + "%" }} />
        </div>
        <dl>
          <div>
            <dt>Principal</dt>
            <dd>{inr(amount)}</dd>
          </div>
          <div>
            <dt>Total interest</dt>
            <dd>{inr(total - amount)}</dd>
          </div>
          <div>
            <dt>Total payment</dt>
            <dd>{inr(total)}</dd>
          </div>
        </dl>
        <p>
          Indicative reducing-balance calculation. Actual loan terms, fees and
          eligibility depend on your lender.
        </p>
      </div>
    </div>
  );
}
