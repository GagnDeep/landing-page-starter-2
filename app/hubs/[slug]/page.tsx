import { notFound } from "next/navigation"
import { getHubBySlug, getHubs, getVendors } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { JsonLdBreadcrumbList } from "@/lib/json-ld"
import { siteConfig } from "@/lib/site"
import Link from "next/link"

export async function generateStaticParams() {
  const hubs = getHubs()
  return hubs.map((hub) => ({
    slug: hub.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  // Await params per Next.js 15+ best practices
  const resolvedParams = await Promise.resolve(params)
  const hub = getHubBySlug(resolvedParams.slug)
  if (!hub) return {}

  return buildMetadata({
    title: `${hub.title} | ${siteConfig.name}`,
    description: hub.description,
    path: `/hubs/${resolvedParams.slug}`,
  })
}

export default async function HubPage({
  params,
}: {
  params: { slug: string }
}) {
  const resolvedParams = await Promise.resolve(params)
  const hub = getHubBySlug(resolvedParams.slug)
  if (!hub) notFound()

  const vendors = getVendors().filter((v) => v.hubSlug === hub.slug)
  const allHubs = getHubs().filter((h) => h.slug !== hub.slug)

  const breadcrumbs = [
    { name: "Hubs", url: "/hubs" },
    { name: hub.title, url: `/hubs/${hub.slug}` },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdBreadcrumbList items={breadcrumbs} />
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <Prose className="max-w-none">
              <h1 className="mb-4">{hub.title}</h1>
              <p className="mb-8 text-xl text-muted-foreground">
                {hub.description}
              </p>

              <div
                dangerouslySetInnerHTML={{
                  __html: hub.content
                    .split("\n\n")
                    .map((p) => {
                      if (p.startsWith("## "))
                        return `<h2>${p.replace("## ", "")}</h2>`
                      return `<p>${p}</p>`
                    })
                    .join(""),
                }}
              />

              {vendors.length > 0 && (
                <div className="mt-12">
                  <h2>Vendors in this Category</h2>
                  <div className="mt-6 grid gap-4">
                    {vendors.map((vendor) => (
                      <div
                        key={vendor.id}
                        className="rounded-lg border bg-card p-6"
                      >
                        <h3 className="mb-2 font-heading text-xl font-semibold text-primary">
                          {vendor.name}
                        </h3>
                        <p className="mb-4">{vendor.description}</p>
                        <Link
                          href={`/vendors/${vendor.slug}`}
                          className="font-mono text-sm text-primary hover:underline"
                        >
                          Read Review →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Prose>
          </div>

          <aside className="space-y-8">
            <div className="rounded-lg border bg-muted/20 p-6">
              <h3 className="mb-4 font-heading text-lg font-semibold text-primary">
                Related Categories
              </h3>
              <ul className="space-y-3 font-mono text-sm">
                {allHubs.map((h) => (
                  <li key={h.id}>
                    <Link
                      href={`/hubs/${h.slug}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {h.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
