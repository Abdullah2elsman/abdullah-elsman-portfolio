import type { MetadataRoute } from "next";
import { getSiteUrl, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return [];
  }

  return siteConfig.routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
