import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"
import { getHubs, getVendors, getJobs } from "@/lib/content"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const hubs = getHubs().map((h) => `/hubs/${h.slug}`)
  const vendors = getVendors().map((v) => `/vendors/${v.slug}`)
  const jobs = getJobs().map((j) => `/jobs/${j.slug}`)

  const routes = [
    "",
    "/about",
    "/hubs",
    "/vendors",
    "/jobs",
    ...hubs,
    ...vendors,
    ...jobs,
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return routes
}
