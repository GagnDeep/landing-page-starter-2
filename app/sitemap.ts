import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bro.tax"

  const staticRoutes = [
    "",
    "/calculator",
    "/deductions",
    "/guides",
    "/blog",
    "/pricing",
    "/glossary",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  const deductionSlugs = [
    "home-office",
    "hardware-gear",
    "software-subscriptions",
    "vehicle-mileage",
    "travel-meals",
    "health-insurance",
    "education-courses",
    "marketing-ads",
    "contractor-fees",
    "internet-phone",
    "professional-services",
    "crypto-losses",
  ].map((slug) => ({
    url: `${baseUrl}/deductions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const guideSlugs = [
    "freelance-software-engineer",
    "content-creator-youtuber",
    "graphic-designer",
    "ubereats-doordash-driver",
    "crypto-trader",
    "onlyfans-creator",
    "copywriter-consultant",
    "e-commerce-seller",
    "photographer-videographer",
    "fitness-coach",
  ].map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const blogSlugs = [
    "quarterly-estimated-tax-deadlines",
    "1099-vs-w2-tax-difference",
    "how-to-calculate-self-employment-tax",
    "schedule-c-write-offs-explained",
    "home-office-deduction-simplified-vs-actual",
    "crypto-tax-loss-harvesting-rules",
    "what-happens-if-you-pay-taxes-late",
    "qbi-deduction-freelancers-guide",
    "how-to-track-mileage-for-taxes",
    "top-1099-deductions-people-forget",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...deductionSlugs, ...guideSlugs, ...blogSlugs]
}
