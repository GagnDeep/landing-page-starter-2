import { Metadata } from "next"

export const siteConfig = {
  name: "AI and Investing",
  url: "https://aiandinvesting.com",
  description:
    "Independent lab tracking what AI stock-picking tools claim and how those claims perform against a buy-and-hold S&P 500 benchmark.",
}

export function buildMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
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
          url: `${siteConfig.url}/og-image.jpg`,
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
      images: [`${siteConfig.url}/og-image.jpg`],
    },
  }
}
