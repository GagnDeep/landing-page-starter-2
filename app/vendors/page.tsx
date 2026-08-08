import { getVendors, getHubs } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLdBreadcrumbList } from "@/lib/json-ld"

import Link from "next/link"

export const metadata = buildMetadata({
  title: `Underwriting Workflow Vendors`,
  description:
    "Directory of modern underwriting tools, covering workflow, decisioning, and ingestion capabilities across the P&C space.",
  path: "/vendors",
})

export default function VendorsIndexPage() {
  const vendors = getVendors()
  const hubs = getHubs()

  const breadcrumbs = [{ name: "Vendors", url: "/vendors" }]

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdBreadcrumbList items={breadcrumbs} />
      <Header />
      <main className="container mx-auto max-w-[1440px] flex-1 px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="mb-6 font-heading text-4xl font-semibold text-primary">
          Vendor Directory
        </h1>
        <p className="mb-12 max-w-[66ch] text-xl text-muted-foreground">
          An exhaustive directory of software vendors actively targeting the
          commercial P&C underwriting workflow.
        </p>

        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1">
            <div className="grid gap-6">
              {vendors.map((vendor) => (
                <div key={vendor.id} className="rounded-lg border bg-card p-6">
                  <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <h2 className="font-heading text-2xl font-semibold text-primary">
                      <Link
                        href={`/vendors/${vendor.slug}`}
                        className="hover:underline"
                      >
                        {vendor.name}
                      </Link>
                    </h2>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-xs font-semibold">
                      {vendor.category}
                    </span>
                  </div>
                  <p className="mb-6 text-muted-foreground">
                    {vendor.description}
                  </p>
                  <Link
                    href={`/vendors/${vendor.slug}`}
                    className="font-mono text-sm text-primary hover:underline"
                  >
                    Read our analysis →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <aside className="w-full shrink-0 lg:w-[320px]">
            <div className="sticky top-24 rounded-lg border bg-muted/20 p-6">
              <h3 className="mb-4 font-heading text-lg font-semibold text-primary">
                Browse by Category
              </h3>
              <ul className="space-y-3 font-mono text-sm">
                {hubs.map((hub) => (
                  <li key={hub.id}>
                    <Link
                      href={`/hubs/${hub.slug}`}
                      className="block text-muted-foreground transition-colors hover:text-primary"
                    >
                      {hub.title}
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
