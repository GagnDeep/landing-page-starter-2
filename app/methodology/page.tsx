import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata, buildArticleJsonLd } from "@/lib/site"

const TITLE = "Methodology"
const DESCRIPTION =
  "Learn exactly how we track, verify, and publish the performance data of the various AI stock-picking tools reviewed on this independent platform."
const PATH = "/methodology/"

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

export default function MethodologyPage() {
  const jsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Methodology", url: PATH },
            ]}
          />
          <h1 className="mb-8 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {TITLE}
          </h1>
          <Prose>
            <p>
              This methodology document outlines exactly how we track, verify,
              and publish the performance data of the various AI stock-picking
              tools reviewed on this site.
            </p>
            <h2>1. Core Principles</h2>
            <p>
              We prioritize transparency and independent verification. We do not
              accept performance data supplied directly by the vendors without
              running our own reproducible tests against a benchmark.
            </p>
            <h2>2. The Benchmark</h2>
            <p>
              All claims are measured against a buy-and-hold strategy using the
              S&P 500 total return index over the exact same time period.
            </p>
            <h2>3. Tracking Process</h2>
            <p>
              When a new tool is added, we initiate a tracking period. The
              tracking period start date is recorded, and returns are calculated
              based on closing prices.
            </p>
            <h2>4. Empty States</h2>
            <p>
              If a tool has not completed a minimum tracking period or data is
              unavailable, we explicitly show a &quot;NO DATA YET&quot; state.
              We will never fabricate or estimate missing data.
            </p>
            <p className="mt-8 text-sm text-muted-foreground italic">
              Last updated: November 2023
            </p>
          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  )
}
