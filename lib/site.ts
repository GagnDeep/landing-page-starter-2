import { Metadata } from "next"

export const siteConfig = {
  name: "Handpano",
  url: "https://handpano.com",
  description:
    "The independent, maker-agnostic price and wait-time comparison guide for buying a handpan.",
  links: {
    twitter: "https://twitter.com/handpano",
  },
}

export function buildMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteConfig.url}${path}`,
      images: [
        {
          url: `${siteConfig.url}/og.png`,
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
      images: [`${siteConfig.url}/og.png`],
    },
  }
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
  }
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  }
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.item}`,
    })),
  }
}
