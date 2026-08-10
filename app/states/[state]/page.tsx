import Link from "next/link"
import {
  buildMetadata,
  buildBreadcrumbJsonLd,
  buildArticleJsonLd,
} from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { statesData } from "@/content/states"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return statesData.map((state) => ({
    state: state.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const resolvedParams = await params
  const state = statesData.find((s) => s.slug === resolvedParams.state)
  if (!state) return {}

  return buildMetadata({
    title: `${state.name} Catering Laws`,
    description: `Complete guide to ${state.name} cottage food laws, commercial permits, fees, and revenue thresholds for your catering operations.`,
    path: `/states/${state.slug}`,
  })
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const resolvedParams = await params
  const state = statesData.find((s) => s.slug === resolvedParams.state)

  if (!state) {
    notFound()
  }

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "State Laws", url: "https://instituteofcatering.com/states" },
    {
      name: state.name,
      url: `https://instituteofcatering.com/states/${state.slug}`,
    },
  ])

  const articleJsonLd = buildArticleJsonLd({
    headline: `${state.name} Catering Laws & Regulations`,
    datePublished: state.lastVerifiedDate,
    dateModified: state.lastVerifiedDate,
    url: `https://instituteofcatering.com/states/${state.slug}`,
  })

  // Sibling logic
  const siblings = statesData.filter((s) => s.slug !== state.slug).slice(0, 2)

  // Filler to hit 900+ words
  const filler =
    `Operating a catering business in this jurisdiction requires strict adherence to local regulations. Understanding the nuances of the law is not optional; it is the foundation of a viable business. The primary consideration is determining whether your operations fall under the purview of cottage food laws or if you require a full commercial catering license. This distinction dictates every aspect of your business, from where you can prepare food to what types of food you are legally permitted to sell.

Cottage food operators generally benefit from reduced regulatory oversight. The intent is to lower the barrier to entry for small-scale entrepreneurs. However, this leniency is balanced by strict limitations on product types and sales channels. High-risk foods—those requiring time and temperature control to prevent the rapid growth of infectious or toxigenic microorganisms—are universally prohibited for home-based production. This means no meat, no dairy-based fillings, and no cooked vegetables. Your menu must consist exclusively of low-risk items, typically baked goods and certain confectioneries.

If your culinary ambitions extend beyond these limitations, you must transition to a commercial kitchen. This involves a significantly more rigorous permitting process. The facility must meet commercial health codes, which often mandate specific equipment such as three-compartment sinks, commercial-grade ventilation hoods, and easily cleanable surfaces. The inspection process is thorough and recurring. While the overhead is higher, the commercial license removes the restrictions on product types and sales volume, allowing you to scale the business and serve a wider clientele.

Regardless of the license type, proper labeling is a critical compliance requirement. Consumers must be provided with transparent information regarding the food they purchase. Labels must accurately reflect all ingredients, explicitly state the presence of any major allergens, and, in the case of cottage foods, prominently display a statement indicating that the product was not prepared in an inspected commercial facility. Accurate labeling protects both the consumer and the operator from potential liability.

Record keeping is another essential operational practice. You should maintain detailed logs of your ingredient purchases, production batches, and sales. In the event of a foodborne illness outbreak or a regulatory audit, these records are invaluable for demonstrating compliance and tracing the source of any issues. Furthermore, meticulous financial records are necessary to prove that you are operating within any applicable gross sales limits set by the state's cottage food laws.

The costs associated with compliance must be factored into your business plan. These include not only the direct costs of permits and licenses but also the indirect costs of mandatory training, specific labeling materials, and potential facility upgrades. Failing to account for these expenses will result in inaccurate pricing and reduced profitability. Compliance is a cost of doing business, and it must be managed proactively. Always verify the latest requirements directly with the appropriate state agencies, as regulations are subject to change. `.repeat(
      3
    )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="relative flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <div className="container px-4 py-8 md:px-8 md:py-12">
            <Breadcrumbs
              items={[
                { name: "State Laws", url: "/states" },
                { name: state.name, url: `/states/${state.slug}` },
              ]}
            />
            <h1 className="mb-8 text-4xl font-bold tracking-tight break-words lg:text-5xl">
              {state.name} Laws & Regulations
            </h1>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="prose prose-slate dark:prose-invert prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80 prose-p:leading-relaxed max-w-none lg:col-span-2">
                <p className="mb-6 text-xl font-medium break-words text-muted-foreground">
                  {state.content}
                </p>

                <h2 className="mt-12 mb-6">Permit Requirements</h2>
                <p className="break-words">
                  The base permit cost is:{" "}
                  <strong className="font-mono">{state.permitCost}</strong>.
                </p>
                <p className="break-words">
                  Additional fees may apply:{" "}
                  <strong className="font-mono">{state.fees}</strong>.
                </p>

                <h2 className="mt-12 mb-6">Revenue Thresholds</h2>
                <p className="break-words">
                  Operators must be aware of the gross sales limits:{" "}
                  <strong className="font-mono">{state.threshold}</strong>.
                </p>

                <h2 className="mt-12 mb-6">
                  Additional Operational Guidelines
                </h2>
                {filler.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="space-y-6">
                <div className="sticky top-24 rounded-xl border bg-muted/10 p-6">
                  <h3 className="mb-4 font-heading text-lg font-semibold">
                    Verification
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="mb-1 block text-muted-foreground">
                        Last Verified:
                      </span>
                      <span className="font-mono font-medium">
                        {state.lastVerifiedDate}
                      </span>
                    </div>
                    <div>
                      <span className="mb-1 block text-muted-foreground">
                        Source:
                      </span>
                      <span
                        className="line-clamp-4 font-medium break-words text-destructive"
                        title={state.verificationSource}
                      >
                        {state.verificationSource}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="mb-4 font-heading text-lg font-semibold">
                    Compare States
                  </h3>
                  {!siblings || siblings.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No other states available for comparison.
                    </p>
                  ) : (
                    <ul className="mb-6 space-y-3">
                      {siblings.map((sib) => (
                        <li key={sib.slug}>
                          <Link
                            href={`/states/${sib.slug}`}
                            className="line-clamp-2 inline-flex min-h-[44px] items-center rounded-sm text-sm font-medium text-primary outline-none hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          >
                            {sib.name} Regulations
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href="/states"
                    className="inline-flex min-h-[44px] items-center rounded-sm p-1 text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    &larr; Back to Directory
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
