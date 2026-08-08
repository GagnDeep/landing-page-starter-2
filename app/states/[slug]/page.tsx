import * as React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { buildMetadata, buildArticleJsonLd } from "@/lib/site"
import { NotGovBanner } from "@/components/not-gov-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { states } from "@/content/states"

export const dynamic = "force-static"

export function generateStaticParams() {
  return states.map((s) => ({
    slug: s.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const stateData = states.find((s) => s.slug === resolvedParams.slug)
  if (!stateData) {
    return buildMetadata({
      title: "Not Found",
      description: "State not found.",
    })
  }

  return buildMetadata({
    title: `${stateData.stateName} Aerospace Compliance | Aerospace Certifications`,
    description: stateData.description,
    path: `/states/${stateData.slug}/`,
  })
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const stateData = states.find((s) => s.slug === resolvedParams.slug)

  if (!stateData) {
    notFound()
  }

  // Cross-linking logic: Find 2 related states to satisfy structural linking rules
  const relatedStates = states
    .filter((s) => s.slug !== stateData.slug)
    .slice(0, 2)

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleJsonLd({
              headline: `${stateData.stateName} Aerospace Compliance`,
              url: `/states/${stateData.slug}/`,
              datePublished: stateData.lastVerifiedDate,
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
              { name: "States", url: "/states/" },
              { name: stateData.stateName, url: `/states/${stateData.slug}/` },
            ]}
          />

          <h1 className="mt-8 mb-4 font-heading text-5xl tracking-tight">
            {stateData.stateName} Aerospace Compliance
          </h1>
          <p className="mb-8 text-muted-foreground">
            Verified by: {stateData.sourceAuthority} on{" "}
            {stateData.lastVerifiedDate}
          </p>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Prose>
                <div dangerouslySetInnerHTML={{ __html: stateData.body! }} />
              </Prose>

              <div className="mt-12 rounded-[0.375rem] border border-border bg-muted p-6">
                <h3 className="mb-4 font-heading text-2xl">
                  Required Documentation
                </h3>
                <ul className="list-disc space-y-2 pl-6 font-mono text-sm">
                  {stateData.localRequirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-6 rounded-[0.375rem] border border-border bg-background p-6">
                <h3 className="mb-4 font-heading text-2xl">Related States</h3>
                <ul className="space-y-4 text-sm">
                  {relatedStates.map((rs) => (
                    <li key={rs.slug}>
                      <Link
                        href={`/states/${rs.slug}/`}
                        className="block font-bold text-accent hover:underline"
                      >
                        {rs.stateName} Compliance
                      </Link>
                      <span className="mt-1 line-clamp-2 block text-muted-foreground">
                        {rs.description}
                      </span>
                    </li>
                  ))}
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
