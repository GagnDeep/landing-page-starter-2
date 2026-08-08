import { Metadata } from "next"
import { site } from "./site"

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}: {
  title?: string
  description?: string
  path?: string
  image?: string
} = {}): Metadata {
  const url = `${site.url}${path}`
  return {
    metadataBase: new URL(site.url),
    title: title ? `${title} | ${site.name}` : site.name,
    description: description || site.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title || site.name,
      description: description || site.description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: title || site.name,
      description: description || site.description,
      images: [image],
    },
  }
}
