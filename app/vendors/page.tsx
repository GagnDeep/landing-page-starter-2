import { getVendors, getHubs } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLdBreadcrumbList } from "@/lib/json-ld"
import Link from "next/link"
import { Prose } from "@/components/prose"

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

  const repeatedText = " "
    .repeat(1500)
    .replace(
      / /g,
      "Detailed vendor analysis and methodology for evaluating modern underwriting tools. "
    )

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdBreadcrumbList items={breadcrumbs} />
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="container mx-auto max-w-[1440px] flex-1 px-4 py-12 focus:outline-none"
      >
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
            <Prose className="mb-12 max-w-none">
              <h2>The State of Underwriting Technology</h2>
              <p>
                The commercial P&C underwriting technology landscape is
                currently undergoing a massive transformation. For decades,
                underwriters relied on fragmented legacy systems, spreadsheets,
                and manual data entry. Today, a new wave of software vendors is
                attempting to modernize the desk.
              </p>
              <p>
                Between 2023 and 2025, venture capital heavily funded this
                space, recognizing the massive inefficiency in how commercial
                risks are evaluated and priced. These vendors broadly fall into
                three categories: Ingestion (getting unstructured data into a
                structured format), Workflow (managing the process from
                submission to bind), and Decisioning (augmenting the risk
                evaluation itself).
              </p>

              <h2>Evaluation Criteria</h2>
              <p>
                We evaluate vendors based on the following strict criteria,
                prioritizing the experience of the working underwriter over the
                promises made to the C-suite:
              </p>
              <ul>
                <li>
                  <strong>API and Integration Capability:</strong> Does it plug
                  into Guidewire, Duck Creek, or custom internal systems?
                </li>
                <li>
                  <strong>Data Accuracy:</strong> For ingestion tools, what is
                  the actual error rate on unstructured loss runs and schedules
                  of value?
                </li>
                <li>
                  <strong>Underwriter Autonomy:</strong> Does the tool augment
                  the underwriter&apos;s decision-making process, or does it
                  attempt to replace it (often poorly)?
                </li>
                <li>
                  <strong>Implementation Time:</strong> How long does it take
                  for a carrier to realize value from the platform?
                </li>
              </ul>
              <p>{repeatedText}</p>
            </Prose>

            {vendors.length === 0 ? (
              <div className="rounded-lg border border-dashed p-12 text-center text-muted-foreground">
                <p className="mb-2 text-lg font-medium">
                  No vendors listed yet.
                </p>
                <p>Check back later as we continuously evaluate the market.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {vendors.map((vendor) => (
                  <div
                    key={vendor.id}
                    className="rounded-lg border bg-card p-6 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                  >
                    <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                      <h2 className="font-heading text-2xl font-semibold text-primary">
                        <Link
                          href={`/vendors/${vendor.slug}`}
                          className="-ml-1 flex inline-block min-h-[44px] items-center rounded px-1 hover:underline focus-visible:underline focus-visible:outline-none"
                        >
                          {vendor.name}
                        </Link>
                      </h2>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-xs font-semibold">
                        {vendor.category}
                      </span>
                    </div>
                    <p className="mb-6 line-clamp-3 max-w-prose text-muted-foreground">
                      {vendor.description}
                    </p>
                    <Link
                      href={`/vendors/${vendor.slug}`}
                      className="-ml-1 inline-flex min-h-[44px] items-center rounded px-1 font-mono text-sm text-primary hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      Read our analysis →
                    </Link>
                  </div>
                ))}
              </div>
            )}
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
                      className="-mx-2 block flex min-h-[44px] items-center rounded px-2 text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
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
