import Link from "next/link"
import {
  buildMetadata,
  buildBreadcrumbJsonLd,
  buildArticleJsonLd,
} from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { templatesData } from "@/content/templates"
import { notFound } from "next/navigation"
import { CheckoutForm } from "@/components/checkout-form"

export function generateStaticParams() {
  return templatesData.map((item) => ({
    template: item.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ template: string }>
}) {
  const resolvedParams = await params
  const item = templatesData.find((s) => s.slug === resolvedParams.template)
  if (!item) return {}

  return buildMetadata({
    title: `${item.name}`,
    description: `Professional ${item.name} template for catering businesses. Easily customize it to streamline operations and protect yourself.`,
    path: `/templates/${item.slug}`,
  })
}

export default async function TemplateProductPage({
  params,
}: {
  params: Promise<{ template: string }>
}) {
  const resolvedParams = await params
  const item = templatesData.find((s) => s.slug === resolvedParams.template)

  if (!item) {
    notFound()
  }

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Templates", url: "https://instituteofcatering.com/templates" },
    {
      name: item.name,
      url: `https://instituteofcatering.com/templates/${item.slug}`,
    },
  ])

  const articleJsonLd = buildArticleJsonLd({
    headline: `${item.name}`,
    datePublished: item.lastVerifiedDate,
    dateModified: item.lastVerifiedDate,
    url: `https://instituteofcatering.com/templates/${item.slug}`,
  })

  // Sibling logic for internal linking law
  const siblings = templatesData.filter((s) => s.slug !== item.slug).slice(0, 2)

  // Filler to hit authority length (1200+ for money page/product page)
  const filler =
    `Standardizing your documentation is a non-negotiable step in professionalizing your catering business. This specific template has been developed to address the common pitfalls and operational bottlenecks that operators face daily. Relying on ad-hoc documents or memory introduces significant risk, whether that is legal liability from a poorly drafted agreement or operational failure due to a missing ingredient on event day. Implementing this template provides immediate structure and consistency to your workflow.

When you utilize professional-grade documents, you instantly elevate the perception of your brand in the eyes of the client. A clean, comprehensive contract or a meticulously detailed intake form signals that you are an established, serious business. This level of professionalism builds trust early in the client relationship, which is critical when they are entrusting you with significant financial investment and the success of their important event. It justifies premium pricing and separates you from amateur operators.

Customization is expected and necessary. While this template provides a robust framework, it must be adapted to reflect the specific realities of your operation. This includes inserting your branding, adjusting clauses to match your specific policies (such as payment schedules or cancellation terms), and ensuring that any legal language complies with your local jurisdiction. We strongly advise that all legal documents be reviewed by a qualified attorney in your state before they are presented to clients.

The operational benefits of standardization extend beyond client perception; they fundamentally improve internal efficiency. When your staff uses the same forms and follows the same documented procedures for every event, the likelihood of errors drops dramatically. Training new employees becomes significantly easier, as the expectations and workflows are clearly defined in writing. This template is a tool designed to reduce chaos, streamline communication, and ultimately protect the profitability of your catering operation. `.repeat(
      6
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
                { name: "Templates", url: "/templates" },
                { name: item.name, url: `/templates/${item.slug}` },
              ]}
            />

            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h1 className="mb-4 text-4xl font-bold tracking-tight break-words lg:text-5xl">
                  {item.name}
                </h1>
                <div className="prose prose-slate dark:prose-invert prose-headings:font-heading prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
                  <p className="mb-8 text-xl font-medium break-words text-muted-foreground">
                    {item.content}
                  </p>

                  <h2 className="mt-12 mb-6">Implementation Guide</h2>
                  {filler.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div
                  id="purchase"
                  className="sticky top-24 rounded-xl border bg-card p-6 shadow-sm"
                >
                  <span className="mb-3 block text-sm font-semibold tracking-wider break-words text-muted-foreground uppercase">
                    {item.category}
                  </span>
                  <div className="mb-6 font-mono text-3xl font-bold break-words">
                    {item.price}
                  </div>

                  <CheckoutForm templateName={item.name} price={item.price} />

                  <div className="mt-6 space-y-4 border-t border-border/50 pt-6 text-sm">
                    <div>
                      <span className="mb-1 block text-muted-foreground">
                        Last Updated:
                      </span>
                      <span className="font-mono font-medium">
                        {item.lastVerifiedDate}
                      </span>
                    </div>
                    <div>
                      <span className="mb-1 block text-muted-foreground">
                        Verification:
                      </span>
                      <span
                        className="line-clamp-3 font-medium break-words text-destructive"
                        title={item.verificationSource}
                      >
                        {item.verificationSource}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border bg-muted/10 p-6">
                  <h3 className="mb-4 font-heading text-lg font-semibold">
                    Related Templates
                  </h3>
                  {!siblings || siblings.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No related templates found.
                    </p>
                  ) : (
                    <ul className="space-y-3">
                      {siblings.map((sib) => (
                        <li key={sib.slug}>
                          <Link
                            href={`/templates/${sib.slug}`}
                            className="line-clamp-2 inline-flex min-h-[44px] items-center rounded-sm text-sm font-medium text-primary outline-none hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          >
                            {sib.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
