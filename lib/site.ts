import { Metadata } from "next"

export const siteConfig = {
  name: "Aerospace Certifications UAE",
  description:
    "Specialist explainer focusing on commercial aerospace capabilities, certifications, and jobs in the UAE.",
  url: "https://example.com", // {{VERIFY: Set to actual site domain}}
}

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      images: [
        {
          url: `${siteConfig.url}/og-image.png`, // {{VERIFY: Update OG image URL}}
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/og-image.png`],
    },
  }
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`, // {{VERIFY: Update logo URL}}
  }
}

export function buildWebsiteJsonLd() {
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
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

export function buildArticleJsonLd({
  headline,
  url,
  datePublished,
  dateModified,
}: {
  headline: string
  url: string
  datePublished: string
  dateModified?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    url: `${siteConfig.url}${url}`,
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  }
}
