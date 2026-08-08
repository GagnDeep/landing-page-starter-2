import { notFound } from "next/navigation"
import { getVendorBySlug, getVendors, getHubBySlug } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { JsonLdBreadcrumbList } from "@/lib/json-ld"
import { siteConfig } from "@/lib/site"
import Link from "next/link"

export async function generateStaticParams() {
  const vendors = getVendors()
  return vendors.map((v) => ({
    slug: v.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const resolvedParams = await Promise.resolve(params)
  const vendor = getVendorBySlug(resolvedParams.slug)
  if (!vendor) return {}

  return buildMetadata({
    title: `${vendor.name} Review | ${siteConfig.name}`,
    description: vendor.description,
    path: `/vendors/${resolvedParams.slug}`,
    type: "article",
  })
}

export default async function VendorPage({
  params,
}: {
  params: { slug: string }
}) {
  const resolvedParams = await Promise.resolve(params)
  const vendor = getVendorBySlug(resolvedParams.slug)
  if (!vendor) notFound()

  const hub = getHubBySlug(vendor.hubSlug)
  const allVendors = getVendors().filter((v) => v.slug !== vendor.slug)

  const breadcrumbs = [
    { name: "Hubs", url: "/hubs" },
    ...(hub ? [{ name: hub.title, url: `/hubs/${hub.slug}` }] : []),
    { name: vendor.name, url: `/vendors/${vendor.slug}` },
  ]

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${vendor.name} Review`,
    datePublished: vendor.fundingDate,
    dateModified: vendor.fundingDate,
    author: [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdBreadcrumbList items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <Prose className="max-w-none">
              <h1 className="mb-4">{vendor.name} Review</h1>
              <p className="mb-8 text-xl text-muted-foreground">
                {vendor.description}
              </p>

              <div className="mb-12 grid grid-cols-2 gap-4 rounded-lg border bg-muted/20 p-6 font-mono text-sm md:grid-cols-4">
                <div>
                  <div className="mb-1 text-muted-foreground">Category</div>
                  <div className="font-semibold text-foreground">
                    {vendor.category}
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-muted-foreground">Funding</div>
                  <div className="font-semibold text-foreground">
                    {vendor.fundingAmount}
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-muted-foreground">Sponsorship</div>
                  <div className="font-semibold text-foreground">
                    {vendor.sponsorshipRate}
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-muted-foreground">Verified</div>
                  <div className="font-semibold text-foreground">
                    {vendor.fundingDate}
                  </div>
                </div>
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: vendor.content
                    .split("\n\n")
                    .map((p) => {
                      if (p.startsWith("## "))
                        return `<h2>${p.replace("## ", "")}</h2>`
                      return `<p>${p}</p>`
                    })
                    .join(""),
                }}
              />
            </Prose>
          </div>

          <aside className="space-y-8">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 font-heading text-lg font-semibold text-primary">
                Other Vendors
              </h3>
              <ul className="space-y-3 font-mono text-sm">
                {allVendors.map((v) => (
                  <li key={v.id}>
                    <Link
                      href={`/vendors/${v.slug}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {v.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {hub && (
              <div className="rounded-lg border bg-muted/20 p-6">
                <h3 className="mb-2 font-heading text-lg font-semibold text-primary">
                  Category Hub
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  See all tools and analysis in the {hub.title} space.
                </p>
                <Link
                  href={`/hubs/${hub.slug}`}
                  className="inline-flex h-9 w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  View Hub
                </Link>
              </div>
            )}
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
