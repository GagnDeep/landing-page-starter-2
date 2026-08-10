import { Metadata } from "next"
import React from "react"

export const siteConfig = {
  name: "The Restaurant Stack Guide",
  url: "https://instituteofrestaurants.com",
  description: "A pre-opening buying guide for first-time independent restaurant owners choosing point-of-sale, payroll, online-ordering and reservation systems.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://instituteofrestaurants.com",
    title: "The Restaurant Stack Guide",
    description: "A pre-opening buying guide for first-time independent restaurant owners choosing point-of-sale, payroll, online-ordering and reservation systems.",
    siteName: "The Restaurant Stack Guide",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Restaurant Stack Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Restaurant Stack Guide",
    description: "A pre-opening buying guide for first-time independent restaurant owners choosing point-of-sale, payroll, online-ordering and reservation systems.",
    images: ["/og-image.jpg"],
  },
  links: {
    home: "/",
    about: "/about/",
  }
}

export function buildMetadata(
  title: string,
  description: string,
  path: string,
  image?: string
): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...siteConfig.openGraph,
      title,
      description,
      url: path,
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : siteConfig.openGraph.images,
    },
    twitter: {
      ...siteConfig.twitter,
      title,
      description,
      images: image ? [image] : siteConfig.twitter.images,
    },
  }
}

export function buildJsonLd(schema: unknown) {
  return React.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
  })
}
