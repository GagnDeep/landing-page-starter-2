import { Metadata } from "next"

export const siteConfig = {
  name: "Handpano",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://handpano.com",
  description:
    "The independent, maker-agnostic price and wait-time comparison guide for buying a handpan.",
}

export function buildMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description: description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/og-image.jpg`],
    },
  }
}
