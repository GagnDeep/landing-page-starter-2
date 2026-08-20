import { siteConfig } from "@/lib/site-config"

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.domain}/#organization`,
        name: "bro.tax",
        url: siteConfig.domain,
        logo: `${siteConfig.domain}/images/hero-freelancer.webp`,
        description: siteConfig.description,
        founder: {
          "@type": "Person",
          name: "bro.tax CPA & Engineering Team",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: "bro.tax",
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.domain}/#organization`,
        },
      },
      {
        "@type": "FinancialProduct",
        "@id": `${siteConfig.domain}/#service`,
        name: "1099 Tax Estimator & CPA Filing",
        description:
          "Flat $199 Schedule C tax filing and automated 1099 write-off calculator for freelancers.",
        provider: {
          "@id": `${siteConfig.domain}/#organization`,
        },
        offers: {
          "@type": "Offer",
          price: "199.00",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
