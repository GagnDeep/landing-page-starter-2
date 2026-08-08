import { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { getAllContent } from "@/lib/content"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const allContent = getAllContent()

  const contentRoutes = allContent.map((page) => ({
    url:
      page.type === "hub"
        ? `${site.url}/${page.slug}/`
        : `${site.url}/guides/${page.slug}/`,
    lastModified: new Date(page.modifiedAt),
    changeFrequency: "weekly" as const,
    priority: page.type === "hub" ? 0.9 : 0.7,
  }))

  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...contentRoutes,
  ]
}
