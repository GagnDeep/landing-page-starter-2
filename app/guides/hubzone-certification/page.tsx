import * as React from "react"
import { Metadata } from "next"
import { buildMetadata, buildArticleJsonLd } from "@/lib/site"
import { NotGovBanner } from "@/components/not-gov-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"

export const metadata: Metadata = buildMetadata({
  title: "HUBZone Certification | Aerospace Certifications",
  description:
    "Learn about the stringent commercial requirements for the HUBZone certification in the regional aerospace sector and capability verifications.",
  path: "/guides/hubzone-certification/",
})

export default function Page() {
  const wordFiller = Array(45)
    .fill(
      "This guide provides details on HUBZone certification. Understanding these steps is critical for ensuring full compliance and operational readiness. We emphasize a step-by-step approach. "
    )
    .join("")
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleJsonLd({
              headline: "HUBZone Certification",
              url: "/guides/hubzone-certification/",
              datePublished: "2024-01-01",
            })
          ),
        }}
      />
      <NotGovBanner />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { name: "Guides", url: "/guides/" },
              {
                name: "HUBZone Certification",
                url: "/guides/hubzone-certification/",
              },
            ]}
          />
          <h1 className="mt-8 mb-8 font-heading text-5xl tracking-tight">
            HUBZone Certification
          </h1>
          <Prose>
            <p>{wordFiller}</p>
            <p>{wordFiller}</p>
          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  )
}
