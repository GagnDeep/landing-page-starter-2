import {
  buildMetadata,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StateDirectory } from "@/components/state-directory"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = buildMetadata({
  title: "Catering Business Toolkit",
})

export default function HomePage() {
  const orgJsonLd = buildOrganizationJsonLd()
  const webSiteJsonLd = buildWebSiteJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="border-b bg-muted/30">
            <div className="container px-4 py-16 md:px-8 md:py-24 lg:py-32">
              <div className="max-w-3xl">
                <h1 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
                  Run your catering business legally and profitably.
                </h1>
                <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                  A practical resource for catering operators. We provide
                  up-to-date information on state licensing, cottage-food laws,
                  pricing strategies, and rock-solid contracts to protect your
                  business.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="container px-4 py-16 md:px-8 lg:py-24">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                State Licensing & Cottage Food Law
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Cottage-food law has been loosening across a growing number of
                US states since 2023. Select your state to see the latest
                requirements, permits, and fees.
              </p>
            </div>
            <StateDirectory />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
