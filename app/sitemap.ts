import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/matrix",
    "/platforms",
    "/components",
    "/components/actuators",
    "/suppliers",
    "/jobs",
    "/jobs/post",
    "/methodology",
  ].map((route) => ({
    url: `${siteConfig.url}${route}/`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return routes
}
