import type { Metadata } from "next"

export const siteConfig = {
  name: "The Caterer's Business Toolkit",
  url: "https://instituteofcatering.com",
  description:
    "A practical resource for people who already run a catering business - licensing, cottage-food law, pricing, contracts, software and food-safety certification.",
  ogImage: "https://instituteofcatering.com/og.jpg",
}

export function buildMetadata({
  title,
  description,
  image,
  noIndex = false,
  path = "",
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  path?: string
} = {}): Metadata {
  const mergedTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const mergedDescription = description || siteConfig.description
  const url = `${siteConfig.url}${path}`

  return {
    title: mergedTitle,
    description: mergedDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: mergedTitle,
      description: mergedDescription,
      type: "website",
      url,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: mergedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: mergedTitle,
      description: mergedDescription,
      images: [image || siteConfig.ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  }
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  }
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildArticleJsonLd({
  headline,
  datePublished,
  dateModified,
  url,
}: {
  headline: string
  datePublished: string
  dateModified: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    url,
  }
}
