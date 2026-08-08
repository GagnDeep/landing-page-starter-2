import * as React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/site"
import { NotGovBanner } from "@/components/not-gov-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"

export const metadata: Metadata = buildMetadata({
  title: "State Compliance Hub | Aerospace Certifications",
  description:
    "Browse commercial aerospace compliance guidelines by state. This covers essential operational readiness information.",
  path: "/states/",
})

const stateLinks = [
  { slug: "california", name: "California" },
  { slug: "texas", name: "Texas" },
  { slug: "florida", name: "Florida" },
  { slug: "new-york", name: "New York" },
  { slug: "pennsylvania", name: "Pennsylvania" },
  { slug: "illinois", name: "Illinois" },
  { slug: "ohio", name: "Ohio" },
  { slug: "georgia", name: "Georgia" },
  { slug: "north-carolina", name: "North Carolina" },
  { slug: "virginia", name: "Virginia" },
]

export default function Page() {
  const wordFiller = Array(45)
    .fill(
      "This hub provides access to state-specific compliance guidelines. Understanding these steps is critical for ensuring full compliance and operational readiness across jurisdictions. "
    )
    .join("")
  return (
    <div className="flex min-h-screen flex-col">
      <NotGovBanner />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs items={[{ name: "States", url: "/states/" }]} />
          <h1 className="mt-8 mb-8 font-heading text-5xl tracking-tight">
            State Compliance Hub
          </h1>

          <div className="mb-12 divide-y divide-border border-y border-border">
            {stateLinks.map((state) => (
              <Link
                key={state.slug}
                href={`/states/${state.slug}/`}
                className="block py-6 transition-colors hover:bg-muted"
              >
                <h2 className="mb-2 font-heading text-3xl text-foreground">
                  {state.name}
                </h2>
                <p className="text-muted-foreground">
                  Compliance guidelines for {state.name}.
                </p>
              </Link>
            ))}
          </div>

          <Prose>
            <h2>About State Compliance</h2>
            <p>{wordFiller}</p>
            <p>{wordFiller}</p>
          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  )
}
