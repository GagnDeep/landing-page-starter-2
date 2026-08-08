import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about/",
    "/editorial-policy/",
    "/disclaimers/",
    "/disclosures/",
    "/guides/",
    "/guides/sam-gov-registration/",
    "/guides/cage-code/",
    "/guides/8a-certification/",
    "/guides/hubzone-certification/",
    "/guides/sdvosb-certifi/",
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }))
}
