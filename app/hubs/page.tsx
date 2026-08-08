import { getHubs } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLdBreadcrumbList } from "@/lib/json-ld"

import Link from "next/link"

export const metadata = buildMetadata({
  title: `Underwriting Topics & Categories`,
  description:
    "Explore our comprehensive hubs covering workflow, decisioning, and ingestion tools for modern P&C underwriters working in commercial insurance.",
  path: "/hubs",
})

export default function HubsIndexPage() {
  const hubs = getHubs()
  const breadcrumbs = [{ name: "Hubs", url: "/hubs" }]

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdBreadcrumbList items={breadcrumbs} />
      <Header />
      <main className="container mx-auto max-w-[1440px] flex-1 px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="mb-6 font-heading text-4xl font-semibold text-primary">
          Topic Hubs
        </h1>
        <p className="mb-12 max-w-[66ch] text-xl text-muted-foreground">
          Comprehensive guides and vendor landscapes across the core pillars of
          the modern underwriting workflow.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hubs.map((hub) => (
            <Link
              key={hub.id}
              href={`/hubs/${hub.slug}`}
              className="group block flex h-full flex-col rounded-lg border bg-card p-6 transition-colors hover:border-primary"
            >
              <h2 className="mb-3 font-heading text-2xl font-semibold text-primary group-hover:underline">
                {hub.title}
              </h2>
              <p className="flex-1 text-muted-foreground">{hub.description}</p>
              <div className="mt-6 flex items-center font-mono text-sm text-primary">
                Explore Category{" "}
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
