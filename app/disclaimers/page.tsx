import * as React from "react"
import { Metadata } from "next"
import { buildMetadata } from "@/lib/site"
import { NotGovBanner } from "@/components/not-gov-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"

export const metadata: Metadata = buildMetadata({
  title: "Disclaimers | Aerospace Certifications",
  description:
    "Legal and independence disclaimers regarding our independent educational resources for commercial aerospace capabilities and certifications in the region.",
  path: "/disclaimers/",
})

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <NotGovBanner />
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs
            items={[{ name: "Disclaimers", url: "/disclaimers/" }]}
          />
          <h1 className="mt-8 mb-8 font-heading text-5xl tracking-tight">
            Disclaimers
          </h1>
          <Prose>
            <p>
              This site is not affiliated with the government. It is provided
              for informational and educational purposes only.
            </p>
          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  )
}
