export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Battery Passport Reference",
    url: "https://batterydigitalpassport.com",
  }
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Battery Passport Reference",
    url: "https://batterydigitalpassport.com",
  }
}

export function buildBreadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }
}

export function buildArticleJsonLd({
  headline,
  datePublished,
  dateModified,
}: {
  headline: string
  datePublished: string
  dateModified: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    datePublished,
    dateModified,
  }
}
