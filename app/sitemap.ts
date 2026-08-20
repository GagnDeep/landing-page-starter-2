import type { MetadataRoute } from "next"
import {
  CONDITIONS_DATA,
  TREATMENTS_DATA,
  SYMPTOMS_DATA,
  BLOG_POSTS_DATA,
} from "@/lib/clinical-data"

const BASE_URL = "https://doctorameena.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/conditions",
    "/treatments",
    "/symptoms",
    "/booking",
    "/location",
    "/press",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  const conditionRoutes = CONDITIONS_DATA.map((cond) => ({
    url: `${BASE_URL}/conditions/${cond.slug}`,
    lastModified: new Date(cond.lastReviewed),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  const treatmentRoutes = TREATMENTS_DATA.map((trt) => ({
    url: `${BASE_URL}/treatments/${trt.slug}`,
    lastModified: new Date(trt.lastReviewed),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  const symptomRoutes = SYMPTOMS_DATA.map((sym) => ({
    url: `${BASE_URL}/symptoms/${sym.slug}`,
    lastModified: new Date(sym.lastReviewed),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  const blogRoutes = BLOG_POSTS_DATA.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.lastReviewedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    ...routes,
    ...conditionRoutes,
    ...treatmentRoutes,
    ...symptomRoutes,
    ...blogRoutes,
  ]
}
