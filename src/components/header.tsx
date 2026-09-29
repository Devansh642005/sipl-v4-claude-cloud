"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/site";
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const overflow = useRef("");
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const media = window.matchMedia("(min-width:1024px)");
    const change = () => {
      if (media.matches) dialog.current?.close();
    };
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);
  const close = () => {
    setOpen(false);
    document.body.style.overflow = overflow.current;
    toggle.current?.focus();
  };
  return (
    <>
      <header className={`header ${scrolled ? "header-solid" : ""}`}>
        <a className="brand" href="/" aria-label="SIPL Group home">
          <Image
            src={scrolled ? "/assets/logo-dark.png" : "/assets/logo-light.png"}
            alt="SIPL — Building Trust"
            fill
            sizes="160px"
            preload
          />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#enquire" className="header-enquire">
          Enquire <span aria-hidden="true">↗</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => {
            overflow.current = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            setOpen(true);
            dialog.current?.showModal();
          }}
        >
          Menu <span>+</span>
        </button>
      </header>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-nav-dialog"
        aria-label="Navigation"
        onClose={close}
      >
        <div className="mobile-nav-top">
          <span className="eyebrow">SIPL / BUILDING TRUST</span>
          <button autoFocus onClick={() => dialog.current?.close()}>
            Close ×
          </button>
        </div>
        <span className="eyebrow red">EXPLORE SIPL GROUP</span>
        <nav>
          {navigation.map(([label, href], i) => (
            <a key={label} href={href} onClick={() => dialog.current?.close()}>
              <small>0{i + 1}</small>
              {label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
        <a
          className="button button-dark"
          href="#enquire?intent=visit"
          onClick={() => dialog.current?.close()}
        >
          Request a site visit <span aria-hidden="true">↗</span>
        </a>
        <p>
          Considered living.
          <br />
          <em>Rooted in Varanasi.</em>
        </p>
      </dialog>
    </>
  );
}
