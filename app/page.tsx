import * as React from "react"
import { Metadata } from "next"
import Link from "next/link"
import {
  buildMetadata,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/site"
import { NotGovBanner } from "@/components/not-gov-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StepLadder } from "@/components/step-ladder"
import { Prose } from "@/components/prose"

export const metadata: Metadata = buildMetadata({
  title: "Commercial Aerospace Certifications | Independent Explainer",
  description:
    "An independent explainer on commercial aerospace capabilities, certifications, and jobs in the UAE. Detailed guidance for commercial operators.",
})

export default function HomePage() {
  const steps = [
    {
      title: "Assess Certification Requirements",
      body: "Determine the baseline compliance required for your specific commercial aerospace operations in the region. This is the foundation of your capabilities matrix.",
      requirements: "Required: Operational Scope Document, NAICS Codes",
    },
    {
      title: "Prepare Necessary Documentation",
      body: "Gather all operational procedures, safety management system (SMS) manuals, and prior certifications. Our detailed checklist below ensures nothing is missed.",
      requirements: "Forms: Safety Manual v2, Capability Matrix",
    },
    {
      title: "Submit for Initial Review",
      body: "Submit your assembled packet for the initial compliance check. This stage validates that all forms are present and signatures are valid before deep technical review.",
      sourceLink: "/guides/sam-gov-registration/",
      sourceLabel: "Read the full registration guide",
    },
    {
      title: "Technical Compliance Audit",
      body: "A deep dive into your operational capabilities. You must demonstrate compliance with strict commercial aerospace standards to pass this phase.",
      requirements: "Timeline: 4-6 Weeks",
    },
  ]

  const wordFiller = Array(25)
    .fill(
      "This guide provides deep, structural insights into the commercial aerospace certification process in the UAE. Understanding these steps is critical for ensuring full compliance and operational readiness. We emphasize a step-by-step approach, removing ambiguity and focusing entirely on actionable intelligence for operators and commercial entities. "
    )
    .join("")

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildOrganizationJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildWebsiteJsonLd()),
        }}
      />
      <NotGovBanner />
      <Header />

      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16">
            <h1 className="mb-6 font-heading text-5xl tracking-tight text-foreground md:text-6xl">
              Commercial Aerospace Certifications
            </h1>
            <p className="max-w-[70ch] text-xl leading-relaxed text-muted-foreground">
              An independent, specialized guide to navigating commercial
              capabilities and certifications. This is a technical explainer
              designed to provide clarity on compliance, operational readiness,
              and industry standards, completely unassociated with any federal
              portal.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="mb-8 font-heading text-4xl">
                The Certification Process
              </h2>
              <StepLadder steps={steps} />

              <div className="mt-16">
                <Prose>
                  <h2>Understanding the Requirements</h2>
                  <p>
                    {wordFiller}
                    {wordFiller}
                    {wordFiller}
                  </p>
                  <h3>Key Capabilities</h3>
                  <p>
                    {wordFiller}
                    {wordFiller}
                  </p>
                </Prose>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-6 rounded-[0.375rem] border border-border bg-muted p-6">
                <h3 className="mb-4 font-heading text-2xl">Quick Resources</h3>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="/guides/"
                      className="block font-bold text-accent hover:underline"
                    >
                      Browse all guides
                    </Link>
                    <span className="mt-1 block text-muted-foreground">
                      Comprehensive overviews of specific certifications.
                    </span>
                  </li>
                  <li>
                    <Link
                      href="/guides/cage-code/"
                      className="block font-bold text-accent hover:underline"
                    >
                      CAGE Code Breakdown
                    </Link>
                    <span className="mt-1 block text-muted-foreground">
                      Understand the commercial implications.
                    </span>
                  </li>
                  <li>
                    <Link
                      href="/about/"
                      className="block font-bold text-accent hover:underline"
                    >
                      About this Project
                    </Link>
                    <span className="mt-1 block text-muted-foreground">
                      Read our methodology and independence statement.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
