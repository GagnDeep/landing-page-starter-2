export const dynamic = "force-static"
import { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/compare",
    "/matrix",
    "/bankruptcy",
    "/deletion",
    "/police-access",
    "/if-sold",
    "/raw-data",
    "/providers/23andme",
    "/privacy-picks",
    "/about",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return routes
}
