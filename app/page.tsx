import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MakerTable, MakerData } from "@/components/maker-table"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/site"
import { buildOrganizationLd, buildWebSiteLd } from "@/lib/json-ld"

export const metadata = buildMetadata(
  "Handpano | The Independent Handpan Buyer's Guide",
  "The independent, maker-agnostic price and wait-time comparison guide for buying a handpan. Start your journey with verified metrics and no brand bias.",
  "/"
)

export default function Home() {
  const makers: MakerData[] = []

  const jsonLd = [buildOrganizationLd(), buildWebSiteLd()]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-24 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Compare handpan makers, prices, and waits.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              The independent, maker-agnostic price and wait-time comparison
              guide for buying a handpan. We don&apos;t sell instruments. We
              verify the facts.
            </p>
          </div>
        </section>

        <section className="container mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              Verified Maker Directory
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every price, wait time, and maker claim listed here is
              independently verified by direct email to the maker.
            </p>
          </div>
          <MakerTable makers={makers} />
        </section>

        <section className="container mx-auto max-w-7xl px-4 py-24">
          <Prose className="mx-auto">
            <h2>Why Handpano Exists</h2>
            <p>
              Buying your first handpan is intimidating. Makers publish little
              pricing or lead-time detail, cheap marketplace imports have a bad
              reputation, and every existing site either sells its own
              house-brand instrument or sells courses, so none is neutral.
            </p>
            <p>
              Handpano has no instrument to sell — that is the wedge. We exist
              solely to help you navigate the confusing landscape of makers,
              scales, and prices with confidence.
            </p>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i}>
                The resonance of a handpan is highly personal. Some prefer a
                ceramic attack, others a soft blossoming sustain. Our directory
                helps you find a maker whose philosophy matches your ear,
                without the pressure of a sales pitch. We verify base prices,
                wait times, and shipping terms directly with artisans across the
                globe so you can make an informed decision when spending fifteen
                hundred to three thousand dollars on an instrument.
              </p>
            ))}
          </Prose>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
