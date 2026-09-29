import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pages } from "@/data/pages";
import { RouteContent } from "@/components/corporate/pages";
import { Breadcrumbs } from "@/components/corporate/shared";
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(pages).map((path) => ({ slug: path.slice(1).split("/") }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = "/" + slug.join("/");
  const page = pages[path];
  if (!page) return {};
  return {
    title: page.title + " | SIPL Group",
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: page.title + " | SIPL Group",
      description: page.description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title + " | SIPL Group",
      description: page.description,
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = "/" + slug.join("/");
  if (!pages[path]) notFound();
  return (
    <main id="main" className="corporate c-inner-page" data-page={slug.join("-")}>
      <Breadcrumbs path={path} title={pages[path].title} />
      <RouteContent path={path} />
    </main>
  );
}
