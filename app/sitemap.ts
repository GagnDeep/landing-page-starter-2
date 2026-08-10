import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"
import { statesData } from "@/content/states"
import { softwareData } from "@/content/software"
import { templatesData } from "@/content/templates"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/states",
    "/software",
    "/templates",
    "/pricing-calculator",
  ]

  const stateRoutes = statesData.map((s) => `/states/${s.slug}`)
  const softwareRoutes = softwareData.map((s) => `/software/${s.slug}`)
  const templateRoutes = templatesData.map((s) => `/templates/${s.slug}`)

  const allRoutes = [
    ...routes,
    ...stateRoutes,
    ...softwareRoutes,
    ...templateRoutes,
  ]

  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}
