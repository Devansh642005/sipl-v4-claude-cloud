"use client";
import { useState } from "react";

export function ReferralShare() {
  const [copied, setCopied] = useState(false);
  const text = "Have a look at Sri Krishna Vilas, a residential project by SIPL Group in Varanasi:";
  const url = () => `${window.location.origin}/projects/sri-krishna-vilas`;
  return (
    <div className="tl-card sp-card rf">
      <p className="s-body">
        Choose how to send it. We do not collect names or numbers on this page. Sharing happens through your own
        WhatsApp or email.
      </p>
      <div className="pe-actions">
        <button type="button" className="s-pill s-pill-solid" onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url()}`)}`, "_blank", "noopener")}>
          <span>Share on WhatsApp</span>
        </button>
        <button type="button" className="pe-heart" onClick={() => (window.location.href = `mailto:?subject=${encodeURIComponent("Sri Krishna Vilas, Varanasi")}&body=${encodeURIComponent(`${text}\n${url()}`)}`)}>
          Share by email
        </button>
        <button
          type="button"
          className="pe-heart"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(url());
              setCopied(true);
              window.setTimeout(() => setCopied(false), 2000);
            } catch {}
          }}
        >
          {copied ? "Link copied" : "Copy the link"}
        </button>
      </div>
    </div>
  );
}
