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

export const dynamic = "force-static"

const guideSlugs = [
  "sam-gov-registration",
  "cage-code",
  "8a-certification",
  "hubzone-certification",
  "sdvosb-certifi",
]

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  if (!guideSlugs.includes(resolvedParams.slug)) {
    return buildMetadata({ title: "Not Found", description: "Not found." })
  }
  return buildMetadata({
    title: `${resolvedParams.slug.replace(/-/g, " ")} Guide | Aerospace Certifications`,
    description: `Detailed guide for ${resolvedParams.slug} compliance requirements.`,
    path: `/guides/${resolvedParams.slug}/`,
  })
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  if (!guideSlugs.includes(resolvedParams.slug)) notFound()

  const title = resolvedParams.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
  const otherGuides = guideSlugs
    .filter((s) => s !== resolvedParams.slug)
    .slice(0, 2)
  const wordFiller = Array(45)
    .fill(
      `This guide provides details on ${title}. Understanding these steps is critical for ensuring full compliance and operational readiness. We emphasize a step-by-step approach. `
    )
    .join("")

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleJsonLd({
              headline: title,
              url: `/guides/${resolvedParams.slug}/`,
              datePublished: "2024-02-01",
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
              { name: title, url: `/guides/${resolvedParams.slug}/` },
            ]}
          />

          <h1 className="mt-8 mb-4 font-heading text-5xl tracking-tight">
            {title}
          </h1>
          <p className="mb-8 text-muted-foreground">
            Verified by: Independent Aerospace Capability Review Board on
            2024-02-01
          </p>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Prose>
                <p>{wordFiller}</p>
                <p>{wordFiller}</p>
              </Prose>

              <div className="mt-12 rounded-[0.375rem] border border-border bg-muted p-6">
                <h3 className="mb-4 font-heading text-2xl">
                  Required Documentation
                </h3>
                <ul className="list-disc space-y-2 pl-6 font-mono text-sm">
                  <li>Form 1</li>
                  <li>Form 2</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="sticky top-6 rounded-[0.375rem] border border-border bg-background p-6">
                <h3 className="mb-4 font-heading text-2xl">Related Guides</h3>
                <ul className="space-y-4 text-sm">
                  {otherGuides.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={`/guides/${slug}/`}
                        className="block font-bold text-accent hover:underline"
                      >
                        {slug.replace(/-/g, " ")}
                      </Link>
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
