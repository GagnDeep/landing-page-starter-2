import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/roadmap", "/about"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes]
}
