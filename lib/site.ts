import { Metadata } from "next"

export const siteConfig = {
  name: "Institute of DNA",
  url: "https://instituteofdna.com",
  ogImage: "https://instituteofdna.com/og.jpg",
  description:
    "Comparing consumer DNA test privacy policies and chain of custody.",
  links: {
    twitter: "https://twitter.com/instituteofdna",
  },
}

export function buildMetadata({
  title,
  description,
  path = "",
  openGraph = {},
}: {
  title: string
  description: string
  path?: string
  openGraph?: Metadata["openGraph"]
}): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    authors: [
      {
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
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
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: "@instituteofdna",
    },
  }
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.ogImage,
    sameAs: [siteConfig.links.twitter],
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

export function buildFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
