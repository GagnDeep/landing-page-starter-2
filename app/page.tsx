import { Metadata } from "next"
import {
  buildMetadata,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MakerTable } from "@/components/maker-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = buildMetadata(
  "Handpan Price & Wait Time Comparison Guide",
  "The independent, maker-agnostic price and wait-time comparison guide for buying a handpan. Discover verified prices and lead times across top handpan makers.",
  "/"
)

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([getOrganizationSchema(), getWebsiteSchema()]),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="container mx-auto px-6 py-24 md:py-32">
            <div className="max-w-3xl space-y-6">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-6xl">
                Find the right handpan maker.
              </h1>
              <p className="text-xl text-muted-foreground">
                The independent, maker-agnostic price and wait-time comparison
                guide for buying a handpan. No courses to sell, no house brands.
                Just verified data.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild size="lg">
                  <Link href="/roadmap">Get the Buyer&apos;s Roadmap</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#compare">Compare Makers</Link>
                </Button>
              </div>
            </div>
          </section>

          <section id="compare" className="container mx-auto px-6 py-12">
            <h2 className="mb-8 font-heading text-3xl font-bold">
              Maker Comparison
            </h2>
            <MakerTable />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
