"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { answerConcierge, type ConciergeAnswer } from "@/data/concierge";
import { media } from "@/data/media";
import { contact, contactConfig } from "@/data/contact";
import { ImageViewer } from "@/components/image-viewer";
import { openProjectFilm } from "./video-theatre";
import { ArchitecturalLineArt } from "./architectural-art";
type Exchange = { id: number; question: string; answer: ConciergeAnswer };
export function KrishnaConcierge() {
  const path = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState<Exchange[]>([]);
  useEffect(() => {
    dialog.current?.close();
  }, [path]);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  useEffect(() => {
    body.current?.scrollTo({
      top: body.current.scrollHeight,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }, [messages, pending]);
  function ask(q: string) {
    if (!q.trim() || pending) return;
    setInput("");
    setPending(true);
    const answer = answerConcierge(q);
    timer.current = setTimeout(
      () => {
        setMessages((m) =>
          [...m, { id: Date.now(), question: q.slice(0, 300), answer }].slice(
            -12,
          ),
        );
        setPending(false);
      },
      matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 320,
    );
  }
  function action(type: "film" | "enquire") {
    dialog.current?.close();
    trigger.current?.focus();
    requestAnimationFrame(() => {
      if (type === "film") openProjectFilm();
      else
        window.dispatchEvent(
          new CustomEvent("sipl-enquire", {
            detail: {
              project: path.includes("sri-krishna-vilas")
                ? "Sri Krishna Vilas"
                : "",
              intent: "Site Visit",
            },
          }),
        );
    });
  }
  const chips = [
    "Explore Projects",
    "Show pool",
    "Residence Types",
    "View Master Plan",
    "Watch Project Film",
    "IGBC / Recognition",
    "Plan a Visit",
  ];
  return (
    <>
      <div className="c-contact-launcher v-concierge-launcher">
        <button
          ref={trigger}
          className="c-launch-button"
          aria-label="Contact SIPL"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => {
            dialog.current?.showModal();
            setOpen(true);
          }}
        >
          <svg viewBox="0 0 24 30" aria-hidden="true">
            <path
              d="M13 2C22 13 23 19 17 25C20 17 12 17 12 10C4 18 4 23 10 28C-1 24 0 14 13 2Z"
              fill="currentColor"
            />
          </svg>
          <span>Ask Krishna</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
      <dialog
        ref={dialog}
        className="v-concierge"
        aria-label="Krishna — SIPL concierge"
        onClose={() => setOpen(false)}
      >
        <div className="v-concierge-head">
          <ArchitecturalLineArt variant="elevation" />
          <div>
            <span className="c-kicker">SIPL GROUP / DIGITAL GUIDE</span>
            <h2>
              Krishna{" "}
              <em>
                {path.includes("sri-krishna-vilas")
                  ? "Project Concierge"
                  : "SIPL Concierge"}
              </em>
            </h2>
          </div>
          <button
            onClick={() => dialog.current?.close()}
            aria-label="Close Krishna concierge"
          >
            ×
          </button>
        </div>
        <div className="v-concierge-body" ref={body}>
          <p className="v-concierge-intro">
            Your guide to SIPL’s published project information. I’m a digital
            assistant, not a SIPL employee.
          </p>
          <div className="v-concierge-quick">
            {chips.map((q) => (
              <button key={q} onClick={() => ask(q)} disabled={pending}>
                {q} ↗
              </button>
            ))}
          </div>
          <div
            role="log"
            aria-live="polite"
            aria-relevant="additions"
            aria-label="Conversation with Krishna"
          >
            {messages.map(({ id, question, answer: a }) => (
              <div className="v-exchange" key={id}>
                <p className="v-question">{question}</p>
                <div className="v-answer">
                  <span className="v-answer-by">KRISHNA / SIPL GUIDE</span>
                  <p>{a.text}</p>
                  {a.image && media[a.image] && (
                    <figure>
                      <Image
                        src={media[a.image].src}
                        alt={media[a.image].alt}
                        width={640}
                        height={400}
                        sizes="(max-width:600px) 90vw,440px"
                        style={{
                          objectFit:
                            media[a.image].type === "logo"
                              ? "contain"
                              : "cover",
                        }}
                      />
                      <figcaption>{media[a.image].caption}</figcaption>
                      <ImageViewer
                        src={media[a.image].src}
                        label={media[a.image].alt}
                        triggerLabel="Enlarge image"
                      />
                      <Link
                        href={
                          a.image === "skv-igbc-precertificate"
                            ? "/about/awards"
                            : "/gallery/project"
                        }
                        onClick={() => dialog.current?.close()}
                      >
                        Open Gallery ↗
                      </Link>
                    </figure>
                  )}
                  {a.href && (
                    <Link
                      className="v-answer-link"
                      href={a.href}
                      onClick={() => dialog.current?.close()}
                    >
                      {a.label || "Explore Section"} ↗
                    </Link>
                  )}
                  {a.action && (
                    <button
                      className="v-answer-link"
                      onClick={() => action(a.action!)}
                    >
                      {a.label} ↗
                    </button>
                  )}
                  <small>Source: {a.source}</small>
                </div>
              </div>
            ))}
          </div>
          {pending && (
            <div
              className="v-typing"
              role="status"
              aria-label="Krishna is preparing a response"
            >
              <i />
              <i />
              <i />
            </div>
          )}
        </div>
        <form
          className="v-concierge-compose"
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
        >
          <label htmlFor="krishna-question">Ask Krishna</label>
          <div>
            <input
              id="krishna-question"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={300}
              placeholder="Try “show pool” or “view brochure”"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={pending || !input.trim()}
              aria-label="Send question"
            >
              ↗
            </button>
          </div>
          <div className="v-concierge-contact">
            <a href={"tel:" + contact.tel}>Call SIPL</a>
            <button type="button" onClick={() => action("enquire")}>
              Enquire
            </button>
            {contactConfig.whatsapp && (
              <a href={`https://wa.me/${contactConfig.whatsapp}`}>WhatsApp</a>
            )}
            <button type="button" onClick={() => setMessages([])}>
              Clear chat
            </button>
          </div>
          <small>
            Prices, availability and legal details must be confirmed with SIPL.
          </small>
        </form>
      </dialog>
    </>
  );
}
