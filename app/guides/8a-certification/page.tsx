import * as React from "react"
import { Metadata } from "next"
import { buildMetadata, buildArticleJsonLd } from "@/lib/site"
import { NotGovBanner } from "@/components/not-gov-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"

export const metadata: Metadata = buildMetadata({
  title: "8(a) Certification Guide | Aerospace Certifications",
  description:
    "Detailed compliance guidelines and operational requirements for obtaining the 8(a) certification as a commercial aerospace entity in the UAE.",
  path: "/guides/8a-certification/",
})

export default function Page() {
  const wordFiller = Array(45)
    .fill(
      "This guide provides details on 8(a) certification. Understanding these steps is critical for ensuring full compliance and operational readiness. We emphasize a step-by-step approach. "
    )
    .join("")
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleJsonLd({
              headline: "8(a) Certification Guide",
              url: "/guides/8a-certification/",
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
              { name: "8(a) Certification", url: "/guides/8a-certification/" },
            ]}
          />
          <h1 className="mt-8 mb-8 font-heading text-5xl tracking-tight">
            8(a) Certification Guide
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
