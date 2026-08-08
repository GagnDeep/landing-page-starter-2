import * as React from "react"
import { Metadata } from "next"
import { buildMetadata } from "@/lib/site"
import { NotGovBanner } from "@/components/not-gov-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"

export const metadata: Metadata = buildMetadata({
  title: "Disclosures | Aerospace Certifications",
  description:
    "Financial and operational disclosures. We maintain strict transparency regarding the information provided about commercial aerospace certifications.",
  path: "/disclosures/",
})

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <NotGovBanner />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs
            items={[{ name: "Disclosures", url: "/disclosures/" }]}
          />
          <h1 className="mt-8 mb-8 font-heading text-5xl tracking-tight">
            Disclosures
          </h1>
          <Prose>
            <p>
              We maintain full transparency about our operations and the scope
              of our educational services.
            </p>
          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  )
}
