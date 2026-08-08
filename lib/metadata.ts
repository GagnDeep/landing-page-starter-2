import { Metadata } from "next"
import { siteConfig } from "./site"

interface BuildMetadataParams {
  title: string
  description: string
  path: string
  type?: "website" | "article"
  image?: string
}

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  image,
}: BuildMetadataParams): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      ...(image && {
        images: [
          {
            url: image,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
  }
}
