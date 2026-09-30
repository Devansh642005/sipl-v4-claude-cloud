"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "@/data/contact";
import { projects } from "@/data/projects";
import { siteImages } from "@/data/site-images";
import { explorePages } from "@/data/explore";
import { ArrowIcon } from "./ui";

const primary = [
  ["About", "/about"],
  ["Hospitality", "/projects/hospitality"],
  ["Gallery", "/gallery"],
  ["Media", "/media"],
  ["NRI", "/nri"],
  ["Contact", "/contact"],
] as const;

function openEnquiry() {
  window.dispatchEvent(
    new CustomEvent("sipl-enquire", {
      detail: { project: "", intent: "Project Information" },
    }),
  );
}

export function SiteHeader() {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const sheet = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setMenu(false);
    sheet.current?.close();
  }, [path]);

  useEffect(() => {
    const close = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenu(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);

  const logo = siteImages.logo;
  const isActive = (href: string) =>
    href === "/" ? path === "/" : path === href || path.startsWith(href + "/");

  return (
    <>
      <div className="s-utility">
        <div className="s-utility-inner">
          <span>Real estate &amp; hospitality · Varanasi</span>
          <div className="s-utility-links">
            <a href={"tel:" + contact.tel}>{contact.phone}</a>
            <a href={"mailto:" + contact.email}>{contact.email}</a>
            <Link href="/nri">NRI Corner</Link>
            <Link href="/emi-calculator">EMI Calculator</Link>
            <Link href="/careers">Careers</Link>
          </div>
        </div>
      </div>
      <header className="s-nav-wrap">
        <div className="s-nav">
          <Link href="/" className="s-nav-logo" aria-label="SIPL Group home">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              priority
              sizes="120px"
            />
          </Link>
          <nav aria-label="Main navigation" className="s-nav-links">
            <ul>
              <li>
                <Link
                  href="/about"
                  aria-current={isActive("/about") ? "page" : undefined}
                >
                  About
                </Link>
              </li>
              <li
                ref={menuRef}
                className="s-nav-drop"
                onKeyDown={(e) => {
                  if (e.key === "Escape") setMenu(false);
                }}
              >
                <button
                  type="button"
                  aria-expanded={menu}
                  aria-controls="s-projects-menu"
                  onClick={() => setMenu((m) => !m)}
                >
                  Projects <span className="s-chevron" aria-hidden="true" />
                </button>
                {menu && (
                  <div id="s-projects-menu" className="s-dropdown">
                    {projects.map((p) => (
                      <Link key={p.id} href={p.href}>
                        <span>{p.name}</span>
                        <small>
                          {p.category} · {p.status}
                        </small>
                      </Link>
                    ))}
                    <div className="s-dropdown-explore">
                      <small>Explore Sri Krishna Vilas</small>
                      {explorePages.map((e) => (
                        <Link key={e.href} href={e.href}>
                          <span>{e.title}</span>
                        </Link>
                      ))}
                    </div>
                    <Link href="/projects" className="s-dropdown-all">
                      <span>All projects</span>
                      <ArrowIcon />
                    </Link>
                  </div>
                )}
              </li>
              {primary.slice(1).map(([name, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive(href) ? "page" : undefined}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button type="button" className="s-nav-enquire" onClick={openEnquiry}>
            Enquire
          </button>
          <button
            type="button"
            className="s-nav-burger"
            aria-label="Open navigation"
            onClick={() => sheet.current?.showModal()}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>
      <dialog
        ref={sheet}
        className="s-sheet"
        aria-label="Mobile navigation"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) sheet.current?.close();
        }}
      >
        <div className="s-sheet-top">
          <span className="s-eyebrow">SIPL Group</span>
          <button
            type="button"
            onClick={() => sheet.current?.close()}
            aria-label="Close navigation"
          >
            Close ×
          </button>
        </div>
        <nav aria-label="Mobile main navigation" className="s-sheet-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <div className="s-sheet-sub">
            {projects.map((p) => (
              <Link key={p.id} href={p.href}>
                {p.name}
              </Link>
            ))}
            {explorePages.map((e) => (
              <Link key={e.href} href={e.href}>
                {e.title}
              </Link>
            ))}
          </div>
          {primary.slice(1).map(([name, href]) => (
            <Link key={href} href={href}>
              {name}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="s-nav-enquire s-sheet-enquire"
          onClick={() => {
            sheet.current?.close();
            openEnquiry();
          }}
        >
          Enquire
        </button>
        <div className="s-sheet-contact">
          <a href={"tel:" + contact.tel}>{contact.phone}</a>
          <a href={"mailto:" + contact.email}>{contact.email}</a>
        </div>
      </dialog>
    </>
  );
}
