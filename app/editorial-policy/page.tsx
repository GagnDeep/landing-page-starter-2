import * as React from "react"
import { Metadata } from "next"
import { buildMetadata } from "@/lib/site"
import { NotGovBanner } from "@/components/not-gov-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"

export const metadata: Metadata = buildMetadata({
  title: "Editorial Policy | Aerospace Certifications",
  description:
    "Read our strict editorial guidelines on creating educational resources for commercial aerospace capabilities, compliance regulations, and certifications.",
  path: "/editorial-policy/",
})

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <NotGovBanner />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs
            items={[{ name: "Editorial Policy", url: "/editorial-policy/" }]}
          />
          <h1 className="mt-8 mb-8 font-heading text-5xl tracking-tight">
            Editorial Policy
          </h1>
          <Prose>
            <p>
              Our editorial approach is strictly educational and independent. We
              focus on providing accurate compliance information.
            </p>
          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  )
}
