import { Metadata } from "next"

export const siteConfig = {
  name: "Institute of Humanoids",
  url: "https://instituteofhumanoids.com",
  description: "The supply chain index for humanoid robotics.",
  twitter: "@humanoidsinst",
}

export function buildMetadata({
  title,
  description,
  image,
  path = "",
}: {
  title?: string
  description?: string
  image?: string
  path?: string
} = {}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteConfig.url}${path}`,
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: image || `${siteConfig.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      images: [image || `${siteConfig.url}/og-image.png`],
      creator: siteConfig.twitter,
    },
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
  }
}
