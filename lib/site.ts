export const site = {
  name: "Washington DC Review",
  url: "https://washingtondcreview.com",
  description:
    "An independent guide to federal contracting for small businesses.",
}

export function buildMetadata(overrides: Record<string, unknown> = {}) {
  const title =
    typeof overrides.title === "string"
      ? `${overrides.title} | ${site.name}`
      : site.name
  const description =
    typeof overrides.description === "string"
      ? overrides.description
      : site.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: typeof overrides.url === "string" ? overrides.url : site.url,
      type: "website",
      images: typeof overrides.image === "string" ? [overrides.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...overrides,
  }
}

export function buildJsonLd(overrides: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    ...overrides,
  }
}
