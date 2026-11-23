import type { MetadataRoute } from "next";

import { contactLinks } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: contactLinks.site,
      lastModified: new Date("2026-11-23"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
