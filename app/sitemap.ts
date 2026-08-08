import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const stateSlugs = [
    "california",
    "texas",
    "florida",
    "new-york",
    "pennsylvania",
    "illinois",
    "ohio",
    "georgia",
    "north-carolina",
    "virginia",
  ]
  const guideSlugs = [
    "sam-gov-registration",
    "cage-code",
    "8a-certification",
    "hubzone-certification",
    "sdvosb-certifi",
  ]

  const routes = [
    "/",
    "/about/",
    "/editorial-policy/",
    "/disclaimers/",
    "/disclosures/",
    "/guides/",
    "/states/",
    ...guideSlugs.map((slug) => `/guides/${slug}/`),
    ...stateSlugs.map((slug) => `/states/${slug}/`),
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }))
}
