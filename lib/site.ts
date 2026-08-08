export const siteConfig = {
  name: "Institute of RIA",
  url: "https://instituteofria.com",
  description:
    "B2B media for people launching, registering or selling a Registered Investment Adviser firm.",
  ogImage: "https://instituteofria.com/og.jpg",
}

export function buildMetadata({
  title,
  description,
  path,
}: {
  title?: string
  description?: string
  path: string
}) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const finalDescription = description || siteConfig.description
  const url = `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`

  return {
    title: fullTitle,
    description: finalDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: finalDescription,
      url,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: finalDescription,
      images: [siteConfig.ogImage],
    },
  }
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  }
}

export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  }
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
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
