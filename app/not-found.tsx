import * as React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NotGovBanner } from "@/components/not-gov-banner"
import { buildMetadata, buildOrganizationJsonLd } from "@/lib/site"

export const metadata: Metadata = buildMetadata({
  title: "Page Not Found",
  description:
    "The requested document could not be located. This is an independent specialized guide to navigating commercial capabilities and certifications.",
})

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildOrganizationJsonLd()),
        }}
      />
      <NotGovBanner />
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="mb-4 font-heading text-6xl text-primary">404</h1>
        <h2 className="mb-6 text-2xl font-semibold">Document Not Located</h2>
        <p className="mx-auto mb-8 max-w-[50ch] text-[18px] leading-[1.7] text-muted-foreground">
          The certification guide or resource you are looking for does not exist
          or has been moved. Please return to the home page or browse our
          directory of guides.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-[0.375rem] bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
