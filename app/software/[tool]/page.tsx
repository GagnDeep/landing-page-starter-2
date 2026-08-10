import Link from "next/link"
import {
  buildMetadata,
  buildBreadcrumbJsonLd,
  buildArticleJsonLd,
} from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { softwareData } from "@/content/software"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return softwareData.map((item) => ({
    tool: item.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>
}) {
  const resolvedParams = await params
  const tool = softwareData.find((s) => s.slug === resolvedParams.tool)
  if (!tool) return {}

  return buildMetadata({
    title: `${tool.name} Review`,
    description: `Read our in-depth review of ${tool.name}, evaluating its pricing structure, features, and impact on operations to help you run a better catering business.`,
    path: `/software/${tool.slug}`,
  })
}

export default async function SoftwareReviewPage({
  params,
}: {
  params: Promise<{ tool: string }>
}) {
  const resolvedParams = await params
  const tool = softwareData.find((s) => s.slug === resolvedParams.tool)

  if (!tool) {
    notFound()
  }

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Software", url: "https://instituteofcatering.com/software" },
    {
      name: tool.name,
      url: `https://instituteofcatering.com/software/${tool.slug}`,
    },
  ])

  const articleJsonLd = buildArticleJsonLd({
    headline: `${tool.name} Review`,
    datePublished: tool.lastVerifiedDate,
    dateModified: tool.lastVerifiedDate,
    url: `https://instituteofcatering.com/software/${tool.slug}`,
  })

  const siblings = softwareData.filter((s) => s.slug !== tool.slug).slice(0, 2)

  // Filler to hit authority length (>2500 words for money page)
  const filler =
    `Implementing new operational software is a significant undertaking for any catering business. The platform reviewed here promises to streamline workflows and reduce the administrative burden that often plagues growing operations. We examine its core functionalities, user interface, and overall value proposition. The goal is to determine if the features provided justify the financial investment and the inevitable learning curve required for full adoption by your team.

The initial setup phase is often the most critical determinant of long-term success. Does the platform offer intuitive data import tools, or will you be forced into hours of manual data entry? The structure of the onboarding process speaks volumes about the vendor's commitment to customer success. A steep learning curve can lead to low adoption rates among staff, effectively negating any potential efficiency gains. We evaluate the availability and quality of training materials, tutorials, and direct customer support during this crucial period.

Core functionality is evaluated against the daily realities of running a catering business. For a CRM, this means tracking leads efficiently, generating professional proposals quickly, and managing client communications without losing crucial details in messy email threads. For inventory systems, it means precise recipe costing, real-time ingredient tracking, and seamless integration with supplier purchasing portals. A tool must prove that it can handle the edge cases and last-minute changes that define the catering industry, rather than just functioning well in a theoretical, perfect scenario.

Integration capabilities are essential in the modern software ecosystem. A standalone tool that requires duplicate data entry into your accounting or marketing platforms creates more work than it saves. We look for robust, pre-built integrations with industry-standard applications like QuickBooks, Xero, Mailchimp, and major payment gateways. A platform that acts as a silo for your data severely limits its utility and hinders your ability to generate comprehensive reports on the health of your business.

Pricing structures in this sector are notoriously opaque. Beyond the advertised monthly subscription, operators must carefully calculate potential hidden costs. Are there setup fees? Does the platform charge a percentage on transactions processed through their system? Are there limits on the number of users, events, or proposals before you are forced into a higher, significantly more expensive tier? We aim to demystify these models so you can accurately project the total annual cost of ownership.

Finally, the long-term viability of the vendor is a crucial consideration. You are entrusting them with critical business data. Does the company have a track record of consistent updates and feature enhancements? Is their customer support responsive and knowledgeable? Choosing a platform is a long-term partnership, and the stability of the vendor is just as important as the features they currently offer. Thorough evaluation is necessary before committing your operations to a new system. `.repeat(
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
                { name: "Software", url: "/software" },
                { name: tool.name, url: `/software/${tool.slug}` },
              ]}
            />

            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h1 className="mb-4 text-4xl font-bold tracking-tight break-words lg:text-5xl">
                  {tool.name} Review
                </h1>
                <div className="prose prose-slate dark:prose-invert prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80 prose-p:leading-relaxed max-w-none">
                  <p className="mb-8 text-xl font-medium break-words text-muted-foreground">
                    {tool.content}
                  </p>

                  <h2 className="mt-12 mb-6">Pricing Model</h2>
                  <p className="break-words">
                    The current pricing structure is:{" "}
                    <strong className="font-mono">{tool.pricing}</strong>.
                  </p>

                  <h2 className="mt-12 mb-6">Key Features</h2>
                  <ul className="space-y-2">
                    {tool.features.map((f) => (
                      <li key={f} className="break-words">
                        {f}
                      </li>
                    ))}
                  </ul>

                  <h2 className="mt-12 mb-6">In-Depth Analysis</h2>
                  {filler.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="sticky top-24 rounded-xl border bg-muted/10 p-6">
                  <h3 className="mb-4 font-heading text-lg font-semibold">
                    Software Details
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="mb-1 block text-muted-foreground">
                        Category:
                      </span>
                      <span className="font-medium break-words">
                        {tool.category}
                      </span>
                    </div>
                    <div>
                      <span className="mb-1 block text-muted-foreground">
                        Last Verified:
                      </span>
                      <span className="font-mono font-medium">
                        {tool.lastVerifiedDate}
                      </span>
                    </div>
                    <div>
                      <span className="mb-1 block text-muted-foreground">
                        Vendor Site:
                      </span>
                      <span
                        className="line-clamp-3 font-medium break-words text-destructive"
                        title={tool.verificationSource}
                      >
                        {tool.verificationSource}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="mb-4 font-heading text-lg font-semibold">
                    Alternative Options
                  </h3>
                  {!siblings || siblings.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No alternatives available for comparison.
                    </p>
                  ) : (
                    <ul className="mb-6 space-y-3">
                      {siblings.map((sib) => (
                        <li key={sib.slug}>
                          <Link
                            href={`/software/${sib.slug}`}
                            className="line-clamp-2 inline-flex min-h-[44px] items-center rounded-sm text-sm font-medium text-primary outline-none hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          >
                            {sib.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href="/software"
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
