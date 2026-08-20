import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"
import { DEDUCTIONS_DATA } from "@/lib/deductions-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain

  const staticRoutes = [
    "",
    "/calculator",
    "/deductions",
    "/pricing",
    "/about",
    "/faq",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  const deductionRoutes = Object.keys(DEDUCTIONS_DATA).map((slug) => ({
    url: `${baseUrl}/deductions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...deductionRoutes]
}
