import type { Metadata } from "next"

export const siteConfig = {
  name: "The Caterer's Business Toolkit",
  description:
    "A practical resource for people who already run a catering business — licensing, cottage-food law, pricing, contracts, software and food-safety certification.",
  url: "https://instituteofcatering.com",
}

export function buildMetadata({
  title,
  description,
  path,
  openGraph,
}: {
  title: string
  description: string
  path: string
  openGraph?: Partial<Metadata["openGraph"]>
}): Metadata {
  const url = `${siteConfig.url}${path}`
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: siteConfig.name,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}
