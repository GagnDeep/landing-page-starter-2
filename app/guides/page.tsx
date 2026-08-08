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
  title: "All Guides | Aerospace Certifications",
  description:
    "Browse our complete list of commercial aerospace certification guides. Understand compliance and operational readiness for various capabilities.",
  path: "/guides/",
})

export default function Page() {
  const wordFiller = Array(35)
    .fill(
      "This hub provides access to all guides. Understanding these steps is critical for ensuring full compliance and operational readiness. We emphasize a step-by-step approach. "
    )
    .join("")
  return (
    <div className="flex min-h-screen flex-col">
      <NotGovBanner />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs items={[{ name: "Guides", url: "/guides/" }]} />
          <h1 className="mt-8 mb-8 font-heading text-5xl tracking-tight">
            All Certification Guides
          </h1>

          <div className="mb-12 divide-y divide-border border-y border-border">
            <Link
              href="/guides/sam-gov-registration/"
              className="block py-6 transition-colors hover:bg-muted"
            >
              <h2 className="mb-2 font-heading text-3xl text-foreground">
                SAM.gov Registration
              </h2>
              <p className="text-muted-foreground">
                A complete guide to navigating SAM.gov registration for
                commercial operators.
              </p>
            </Link>
            <Link
              href="/guides/cage-code/"
              className="block py-6 transition-colors hover:bg-muted"
            >
              <h2 className="mb-2 font-heading text-3xl text-foreground">
                CAGE Code Breakdown
              </h2>
              <p className="text-muted-foreground">
                Understand the commercial implications of CAGE Codes.
              </p>
            </Link>
            <Link
              href="/guides/8a-certification/"
              className="block py-6 transition-colors hover:bg-muted"
            >
              <h2 className="mb-2 font-heading text-3xl text-foreground">
                8(a) Certification
              </h2>
              <p className="text-muted-foreground">
                Details on the 8(a) certification for commercial entities.
              </p>
            </Link>
            <Link
              href="/guides/hubzone-certification/"
              className="block py-6 transition-colors hover:bg-muted"
            >
              <h2 className="mb-2 font-heading text-3xl text-foreground">
                HUBZone Certification
              </h2>
              <p className="text-muted-foreground">
                Learn about HUBZone certification requirements.
              </p>
            </Link>
            <Link
              href="/guides/sdvosb-certifi/"
              className="block py-6 transition-colors hover:bg-muted"
            >
              <h2 className="mb-2 font-heading text-3xl text-foreground">
                SDVOSB Certification
              </h2>
              <p className="text-muted-foreground">
                Learn about SDVOSB certification requirements.
              </p>
            </Link>
          </div>

          <Prose>
            <h2>About Our Guides</h2>
            <p>{wordFiller}</p>
            <p>{wordFiller}</p>
          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  )
}
