import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"
import { vendors } from "@/content/vendors/data"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ["", "/about"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  const categories = ["pos", "payroll", "reservations", "online-ordering"]
  const categoryRoutes = categories.map((slug) => ({
    url: `${siteConfig.url}/category/${slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  const vendorRoutes = vendors.map((vendor) => ({
    url: `${siteConfig.url}/vendors/${vendor.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...baseRoutes, ...categoryRoutes, ...vendorRoutes]
}
