import { siteConfig } from "./site"

export function buildOrganizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  }
}

export function buildWebSiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  }
}

export function buildBreadcrumbLd(items: { name: string; url: string }[]) {
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

export function buildArticleLd({
  headline,
  description,
  url,
  datePublished,
  dateModified,
}: {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${siteConfig.url}${url}`,
    datePublished,
    dateModified,
  }
}
