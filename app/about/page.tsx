import * as React from "react"
import { Metadata } from "next"
import { buildMetadata } from "@/lib/site"
import { NotGovBanner } from "@/components/not-gov-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"

export const metadata: Metadata = buildMetadata({
  title: "About Us | Aerospace Certifications",
  description:
    "Learn about our independent mission to clarify commercial aerospace certifications. We aim to provide clear, actionable intelligence to commercial operators.",
  path: "/about/",
})

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NotGovBanner />
      <Header />

      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs items={[{ name: "About", url: "/about/" }]} />

          <h1 className="mt-8 mb-8 font-heading text-5xl tracking-tight">
            About This Resource
          </h1>

          <Prose>
            <p>
              This site is a specialized, independent educational resource
              dedicated to explaining the commercial aerospace certification
              landscape in the UAE. Our mission is to provide clear, actionable
              intelligence to commercial operators navigating complex compliance
              requirements.
            </p>
            <p>
              We are deliberately unaffiliated with any government agency,
              portal, or defense entity. The content here is focused strictly on
              commercial capabilities, certifications, and related
              opportunities.
            </p>
            <h2>Our Methodology</h2>
            <p>
              Our guides are constructed through rigorous analysis of publicly
              available compliance frameworks. We translate bureaucratic and
              technical requirements into plain language, structuring the
              information in a way that prioritizes understanding and action.
            </p>
          </Prose>
        </div>
      </main>

      <Footer />
    </div>
  )
}
