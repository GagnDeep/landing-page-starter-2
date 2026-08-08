import { notFound } from "next/navigation"

import { buildMetadata, buildJsonLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { TicketRail } from "@/components/ticket-rail"
import { vendors } from "@/content/vendors/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function generateStaticParams() {
  return vendors.map((vendor) => ({
    slug: vendor.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const vendor = vendors.find((v) => v.slug === params.slug)
  if (!vendor) return notFound()
  return buildMetadata({
    title: `${vendor.name} Restaurant POS Review`,
    description: `Independent verification of ${vendor.name} pricing, contract terms, and payout bounties for first-time restaurant owners.`,
  })
}

export default function VendorReviewPage({
  params,
}: {
  params: { slug: string }
}) {
  const vendor = vendors.find((v) => v.slug === params.slug)
  if (!vendor) return notFound()

  const siblingVendors = vendors.filter(
    (v) => v.category === vendor.category && v.id !== vendor.id
  )

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${vendor.name} Review & Pricing`,
    datePublished: "2024-08-08T00:00:00.000Z",
    dateModified: "2024-08-08T00:00:00.000Z",
    author: [
      {
        "@type": "Organization",
        name: "Institute of Restaurants",
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, buildJsonLd()]),
        }}
      />
      <Header />
      <main className="container mx-auto flex max-w-6xl flex-1 flex-col gap-12 px-4 py-12 lg:flex-row">
        <div className="flex-1">
          <Breadcrumbs
            segments={[
              {
                title: vendor.category.toUpperCase(),
                href: `/category/${vendor.category}`,
              },
              { title: vendor.name, href: `/vendors/${vendor.slug}` },
            ]}
          />

          <Prose className="mt-8">
            <h1>{vendor.name} Review & Pricing</h1>
            <p className="lead font-bold">
              When reviewing a vendor like {vendor.name}, we look purely at the
              brass tacks: what it costs monthly, what they scrape per
              transaction, and how long they lock you in.
            </p>
            <p>
              {
                "{{VERIFY: Spoke/Review page 1200-word floor body content introducing the vendor and the specific reality of using them on the line.}}"
              }
            </p>

            <h2>The Contract Reality</h2>
            <p>
              Hardware lock-ins are the silent killer of restaurant margins.
              Most vendors offer seemingly discounted hardware in exchange for a
              multi-year processing agreement. If the system goes down during a
              Friday rush, or the offline mode fails, breaking that contract can
              cost thousands in early termination fees.
            </p>
            <p>
              {
                "{{VERIFY: Deep dive into the fine print of the contract term and hardware lock-ins.}}"
              }
            </p>

            <h2>Processing Rates Explained</h2>
            <p>
              Transaction fees look small on paper but compound ruthlessly. A
              difference of half a percent on a blended rate can mean the
              difference between a profitable month and missing payroll. We
              break down the effective rate based on an average ticket size and
              typical card-not-present volume.
            </p>
            <p>
              {
                "{{VERIFY: Detailed explanation of how their specific transaction fee structure affects margins on an average $40 ticket.}}"
              }
            </p>

            <h2>Compare Alternatives</h2>
            <p>
              Do not sign a lease or a software contract without leverage. In
              the {vendor.category.toUpperCase()} space, it is crucial to pit
              sales reps against each other. Consider requesting quotes from
              these verified alternatives:
            </p>
            <ul>
              {siblingVendors.map((sibling) => (
                <li key={sibling.id}>
                  <Link href={`/vendors/${sibling.slug}`}>{sibling.name}</Link>
                </li>
              ))}
              {siblingVendors.length === 0 && (
                <li>{"{{VERIFY: sibling links}}"}</li>
              )}
            </ul>
          </Prose>
        </div>

        <aside className="w-full shrink-0 lg:w-80">
          <div className="sticky top-24">
            <TicketRail
              eyebrow="Verified Terms"
              title={vendor.name}
              items={[
                {
                  label: "Monthly",
                  value: vendor.monthlyCost.value.toString(),
                },
                {
                  label: "Rate",
                  value: vendor.transactionFee.value.toString(),
                },
                { label: "Term", value: vendor.contractTerm.value.toString() },
              ]}
              action={
                <Button className="w-full bg-accent font-bold tracking-widest text-accent-foreground uppercase hover:bg-accent/90">
                  View {vendor.name} Details
                </Button>
              }
            />
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
