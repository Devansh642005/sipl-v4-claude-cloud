import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles } from "@/data/blog";
import {
  Breadcrumbs,
  PageHero,
  MediaImage,
  CorporateCTA,
  KnowMore,
} from "@/components/corporate/shared";
export function generateStaticParams() {
  return articles.filter((a) => a.verified).map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug && a.verified);
  return a
    ? {
        title: a.title + " | SIPL Group",
        description: a.description,
        alternates: { canonical: "/blog/" + slug },
        openGraph: {
          title: a.title,
          description: a.description,
          type: "article",
          publishedTime: a.date,
        },
        twitter: {
          title: a.title,
          description: a.description,
          card: "summary_large_image",
        },
      }
    : {};
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug && a.verified);
  if (!a) notFound();
  return (
    <main id="main" className="corporate">
      <Breadcrumbs path={"/blog/" + slug} title={a.title} />
      <PageHero title={a.title} intro={a.description} kicker={a.category} />
      <article className="c-section c-legal">
        <time dateTime={a.date}>{a.date}</time>
        {a.media && <MediaImage id={a.media} />}{" "}
        {a.body.map((b, i) => (
          <section key={i}>
            {b.heading && <h2>{b.heading}</h2>}
            <p>{b.text}</p>
          </section>
        ))}
        <KnowMore href="/blog">More Insights</KnowMore>
      </article>
      <CorporateCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            datePublished: a.date,
            author: { "@type": "Organization", name: "SIPL Group" },
          }).replaceAll("<", "\\u003c"),
        }}
      />
    </main>
  );
}
