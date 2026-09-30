import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="nf">
      <div className="s-container nf-in">
        <p className="s-eyebrow">Error 404</p>
        <h1 className="s-display nf-h">
          This page isn&apos;t built yet.
          <em>Unlike our towers.</em>
        </h1>
        <p className="s-lead">The page you asked for has moved or never existed. Here are some places that do.</p>
        <div className="s-actions">
          <Link href="/" className="s-pill s-pill-solid">
            <span>Back to home</span>
          </Link>
          <Link href="/projects/sri-krishna-vilas" className="s-textlink">
            Sri Krishna Vilas
          </Link>
          <Link href="/book-visit" className="s-textlink">
            Book a site visit
          </Link>
        </div>
      </div>
    </main>
  );
}
