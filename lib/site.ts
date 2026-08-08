import { Metadata } from "next"

import { siteConfig } from "@/content"

export function buildMetadata(
  title?: string,
  description?: string,
  image?: string
): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      url: `https://${siteConfig.domain}`,
      siteName: siteConfig.name,
      images: image ? [{ url: image }] : [],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      images: image ? [image] : [],
    },
    metadataBase: new URL(`https://${siteConfig.domain}`),
  }
}
