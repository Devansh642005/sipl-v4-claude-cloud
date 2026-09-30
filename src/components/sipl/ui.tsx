import Image from "next/image";
import Link from "next/link";
import { siteImages, type SiteImageKey } from "@/data/site-images";

export function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="s-arrow-icon"
    >
      <path
        d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`s-eyebrow ${className}`}>{children}</p>;
}

export function SiteImg({
  id,
  sizes,
  priority = false,
  className = "",
}: {
  id: SiteImageKey;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const img = siteImages[id];
  return (
    <Image
      src={img.src}
      alt={img.alt}
      width={img.width}
      height={img.height}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={`s-img ${className}`}
      style={{
        objectFit: "fit" in img && img.fit ? img.fit : "cover",
        objectPosition: "position" in img ? img.position : undefined,
      }}
    />
  );
}

export function PillLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
}) {
  return (
    <Link href={href} className={`s-pill s-pill-${variant}`}>
      <span>{children}</span>
      <span className="s-pill-arrow" aria-hidden="true">
        <ArrowIcon />
      </span>
    </Link>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="s-textlink">
      {children} <ArrowIcon size={13} />
    </Link>
  );
}

export function Arch({
  id,
  sizes,
  priority,
  className = "",
}: {
  id: SiteImageKey;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`s-arch ${className}`}>
      <div className="s-arch-window">
        <SiteImg id={id} sizes={sizes} priority={priority} />
      </div>
    </div>
  );
}

export function KeyTag({
  id,
  name,
  tilt,
}: {
  id: SiteImageKey;
  name: string;
  tilt: "left" | "right";
}) {
  return (
    <article className={`s-keytag s-keytag-${tilt}`}>
      <span className="s-keytag-hole" aria-hidden="true" />
      <div className="s-keytag-window">
        <SiteImg id={id} sizes="(max-width: 768px) 40vw, 280px" />
      </div>
      <h3 className="s-keytag-name">{name}</h3>
      <p className="s-keytag-sub">Sri Krishna Vilas</p>
    </article>
  );
}

export function Ribbon({
  items,
  tone = "terracotta",
}: {
  items: string[];
  tone?: "terracotta" | "gold";
}) {
  const row = (hidden: boolean) => (
    <ul className="s-ribbon-row" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i}>
          <span>{item}</span>
          <span className="s-ribbon-star" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`s-ribbon s-ribbon-${tone}`}>
      <div className="s-ribbon-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
