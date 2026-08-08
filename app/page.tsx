import { TrackingTable } from "@/components/tracking-table"
import { JsonLd } from "@/components/json-ld"
import { buildMetadata, siteConfig } from "@/lib/site"

export const metadata = buildMetadata(
  "AI Stock Picking Tracker",
  "Independent lab tracking AI stock-picking tools' claims and their performance against a buy-and-hold S&P 500 benchmark. We verify with data.",
  "/"
)

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  }

  return (
    <>
      <JsonLd data={orgSchema} />
      <JsonLd data={websiteSchema} />
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="mx-auto mb-16 max-w-3xl space-y-8 text-center">
          <h1 className="font-heading text-4xl tracking-tight sm:text-5xl">
            Does AI Stock Picking Actually Work?
          </h1>
          <p className="text-xl leading-loose text-muted-foreground">
            An independent lab tracking what AI stock-picking tools claim, and
            how those claims perform against a simple buy-and-hold S&amp;P 500
            benchmark. We bring visible, dated methodology to an industry of
            unverified opinion rankings.
          </p>
        </div>

        <div className="mb-8">
          <TrackingTable />
        </div>
      </div>
    </>
  )
}
