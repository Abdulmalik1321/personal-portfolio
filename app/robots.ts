import type { MetadataRoute } from "next";

import { contactLinks } from "@/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${contactLinks.site}/sitemap.xml`,
    host: contactLinks.site,
  };
}
