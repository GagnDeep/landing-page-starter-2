import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComparisonTable } from "@/components/comparison-table"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Federal Contracting Guide for Small Businesses",
})

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl space-y-6">
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                The independent guide to federal contracting for small
                businesses
              </h1>
              <p className="text-xl text-muted-foreground">
                A reference hub that walks small businesses through winning
                federal contracts: SAM.gov registration, set-aside
                certifications, and GSA Schedule entry. No consultants, no gated
                content.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 space-y-4 text-center">
              <h2 className="font-heading text-3xl font-bold">
                Small Business Set-Aside Programs
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                The federal government aims to award at least 23% of all prime
                government contract dollars to small businesses. Here are the
                main certification programs.
              </p>
            </div>
            <ComparisonTable />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
