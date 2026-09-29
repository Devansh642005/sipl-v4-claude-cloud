import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(process.env.SIPL_ALLOW_INDEXING === "true"
        ? { allow: "/" }
        : { disallow: "/" }),
    },
    sitemap: "https://siplgroup.in/sitemap.xml",
  };
}
