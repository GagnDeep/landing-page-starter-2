import { Metadata } from "next"

export const siteConfig = {
  name: "Battery Passport Reference",
  description:
    "The independent plain-English reference layer for the EU digital battery passport.",
  url: "https://batterydigitalpassport.com",
}

export function buildMetadata({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image?: string
}): Metadata {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: description || siteConfig.description,
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image || "/og.jpg",
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || "/og.jpg"],
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
    },
  }
}
