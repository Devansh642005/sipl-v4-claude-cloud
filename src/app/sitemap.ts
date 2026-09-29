import type { MetadataRoute } from "next";
import { pages } from "@/data/pages";
import { articles } from "@/data/blog";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    ...Object.keys(pages),
    "/projects/sri-krishna-vilas",
    ...articles.filter((a) => a.verified).map((a) => "/blog/" + a.slug),
  ].map((path) => ({
    url: "https://siplgroup.in" + path,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
