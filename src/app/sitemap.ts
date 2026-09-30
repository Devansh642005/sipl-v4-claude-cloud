import type { MetadataRoute } from "next";
import { pages } from "@/data/pages";
import { articles } from "@/data/blog";
import { explorePages } from "@/data/explore";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    ...Object.keys(pages),
    "/projects/sri-krishna-vilas",
    ...explorePages.map((e) => e.href),
    ...articles.filter((a) => a.verified).map((a) => "/blog/" + a.slug),
  ].map((path) => ({
    url: "https://siplgroup.in" + path,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
