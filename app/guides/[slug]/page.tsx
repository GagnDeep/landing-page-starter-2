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
import { guides } from "@/content/guides"

export const dynamic = "force-static"

export function generateStaticParams() {
  return guides.map((g) => ({
    slug: g.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const guide = guides.find((g) => g.slug === resolvedParams.slug)
  if (!guide) {
    return buildMetadata({
      title: "Not Found",
      description: "Guide not found.",
    })
  }

  return buildMetadata({
    title: `${guide.title} | Aerospace Certifications`,
    description: guide.description,
    path: `/guides/${guide.slug}/`,
  })
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const guide = guides.find((g) => g.slug === resolvedParams.slug)

  if (!guide) {
    notFound()
  }

  // Cross-linking logic: Find the related guides based on slugs
  const relatedGuidesData = guide.relatedGuides
    .map((relSlug) => guides.find((g) => g.slug === relSlug))
    .filter(Boolean)

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleJsonLd({
              headline: guide.title,
              url: `/guides/${guide.slug}/`,
              datePublished: guide.lastVerifiedDate,
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
              { name: guide.title, url: `/guides/${guide.slug}/` },
            ]}
          />

          <h1 className="mt-8 mb-4 font-heading text-5xl tracking-tight">
            {guide.title}
          </h1>
          <p className="mb-8 text-muted-foreground">
            Verified by: {guide.sourceAuthority} on {guide.lastVerifiedDate}
          </p>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Prose>
                <div dangerouslySetInnerHTML={{ __html: guide.body }} />
              </Prose>

              <div className="mt-12 rounded-[0.375rem] border border-border bg-muted p-6">
                <h3 className="mb-4 font-heading text-2xl">
                  Required Documentation
                </h3>
                <ul className="list-disc space-y-2 pl-6 font-mono text-sm">
                  {guide.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-6 rounded-[0.375rem] border border-border bg-background p-6">
                <h3 className="mb-4 font-heading text-2xl">Related Guides</h3>
                <ul className="space-y-4 text-sm">
                  {relatedGuidesData.map((rg) => (
                    <li key={rg!.slug}>
                      <Link
                        href={`/guides/${rg!.slug}/`}
                        className="block font-bold text-accent hover:underline"
                      >
                        {rg!.title}
                      </Link>
                      <span className="mt-1 line-clamp-2 block text-muted-foreground">
                        {rg!.description}
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
