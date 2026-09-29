"use client";
import { useEffect, useState } from "react";
import { contact } from "@/data/sipl";
export function MobileActions() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => {
      const enquiry = document.getElementById("enquire");
      setVisible(
        window.scrollY > 350 &&
          !!enquiry &&
          enquiry.getBoundingClientRect().top > innerHeight,
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return visible ? (
    <nav className="mobile-actions" aria-label="Quick enquiry">
      <a href={`tel:${contact.tel}`}>
        Call <span aria-hidden="true">↗</span>
      </a>
      <a href="#enquire">
        Enquire <span aria-hidden="true">↗</span>
      </a>
    </nav>
  ) : null;
}
