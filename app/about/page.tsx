import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { Prose } from "@/components/prose"
import { buildMetadata, siteConfig } from "@/lib/site"

export const metadata = buildMetadata(
  "About Our Methodology",
  "How we track and verify AI stock picking tools against the S&P 500 benchmark. Independent, reproducible, and unflattering when the data demands it.",
  "/about/"
)

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${siteConfig.url}/about/`,
      },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-24">
        <Breadcrumbs items={[{ label: "About", href: "/about/" }]} />
        <h1 className="mb-8 font-heading text-4xl tracking-tight sm:text-5xl">
          About the Lab
        </h1>
        <Prose>
          <p>
            We are an independent lab publishing dated, reproducible tracking of
            what AI stock-picking tools claim and how those claims perform
            against a buy-and-hold S&amp;P 500 benchmark.
          </p>
          <p>
            Every major roundup site publishes opinion rankings with zero
            independent verification, leaving the does-it-actually-work query
            cluster genuinely unclaimed. Monetised by affiliate links to the
            same tools it evaluates, which is exactly why the methodology must
            be visible, dated and unflattering when the data is unflattering.
          </p>
          <p>
            The SEC brought its first AI-washing enforcement actions in March
            2024 against Delphia and Global Predictions. We track tools that
            exist and make verifiable claims.
          </p>
        </Prose>
      </div>
    </>
  )
}
