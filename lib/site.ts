import { Metadata } from "next"

export const siteConfig = {
  name: "The Restaurant Stack Guide",
  url: "https://instituteofrestaurants.com",
  description:
    "A pre-opening buying guide for first-time independent restaurant owners choosing POS, payroll, online-ordering and reservation systems.",
  ogImage: "https://instituteofrestaurants.com/og.png",
  links: {
    twitter: "https://twitter.com/instituteofrestaurants",
  },
}

export function buildMetadata({
  title,
  description,
  image,
  noIndex = false,
  ...props
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} & Partial<Metadata>): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    keywords: [
      "restaurant pos",
      "restaurant payroll",
      "restaurant stack",
      "restaurant buying guide",
    ],
    authors: [
      {
        name: "Institute of Restaurants",
        url: siteConfig.url,
      },
    ],
    creator: "Institute of Restaurants",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage],
      creator: "@instituteofrestaurants",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...props,
  }
}

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  }
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Institute of Restaurants",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
  }
}
