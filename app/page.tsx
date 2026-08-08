import { buildMetadata } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InstrumentPanel, ReadoutCell } from "@/components/instrument-panel"
import { buildOrganizationJsonLd, buildWebSiteJsonLd } from "@/lib/json-ld"

export const metadata = buildMetadata({
  title: "Home",
  description:
    "The independent plain-English reference layer for the EU digital battery passport — the Article 77 obligation under Regulation (EU) 2023/1542.",
})

export default function Page() {
  const orgJsonLd = buildOrganizationJsonLd()
  const webSiteJsonLd = buildWebSiteJsonLd()

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-start gap-6">
            <h1 className="font-heading text-3xl leading-tight font-bold sm:text-5xl md:text-6xl">
              Battery Passport Reference
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              The independent plain-English reference layer for the EU digital
              battery passport — the Article 77 obligation under Regulation (EU)
              2023/1542.
            </p>
          </div>

          <div className="mt-16 w-full overflow-x-auto pb-4">
            <div className="min-w-[820px]">
              <InstrumentPanel>
                <ReadoutCell
                  label="Deadline"
                  value="18 February 2027"
                  status="deadline"
                />
                <ReadoutCell
                  label="Regulation"
                  value="(EU) 2023/1542"
                  status="compliant"
                />
                <ReadoutCell label="Obligation" value="Article 77" />
                <ReadoutCell label="QR Code" value="Article 44" />
                <ReadoutCell label="Industrial Threshold" value="> 2 kWh" />
                <ReadoutCell
                  label="Categories Scope"
                  value="EV, LMT, Industrial"
                  status="compliant"
                />
              </InstrumentPanel>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
