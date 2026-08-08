import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComparisonTable } from "@/components/comparison-table"
import { DecisionTree } from "@/components/decision-tree"
import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata({
  title: "Federal Contracting Guide for Small Businesses",
})

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-primary/20">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-muted/30 py-20 md:py-32 lg:py-40">
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="max-w-4xl space-y-8">
              <h1 className="font-heading text-5xl leading-tight font-bold tracking-tight md:text-6xl lg:text-7xl">
                The independent guide to federal contracting for small
                businesses
              </h1>
              <p className="max-w-3xl border-l-4 border-primary py-2 pl-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
                A reference hub that walks small businesses through winning
                federal contracts: SAM.gov registration, set-aside
                certifications, and GSA Schedule entry. No consultants, no gated
                content.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute top-0 right-0 translate-x-1/3 -translate-y-12 opacity-10 select-none">
            <svg
              width="600"
              height="600"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <polygon points="50,0 100,50 50,100 0,50" />
            </svg>
          </div>
        </section>

        <section className="border-b bg-card py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
              <h2 className="font-heading text-4xl font-bold tracking-tight">
                Find Your Path
              </h2>
              <p className="text-lg text-muted-foreground">
                Use our interactive decision tree to determine which small
                business set-aside certifications you may qualify for based on
                the latest SBA eligibility criteria.
              </p>
            </div>
            <DecisionTree />
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 max-w-3xl space-y-6">
              <h2 className="font-heading text-4xl font-bold tracking-tight">
                Small Business Set-Aside Programs
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The federal government aims to award at least 23% of all prime
                government contract dollars to small businesses. Here are the
                main certification programs currently active.
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
