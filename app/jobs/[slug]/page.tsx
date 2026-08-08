import { notFound } from "next/navigation"
import { getJobBySlug, getJobs } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { JsonLdBreadcrumbList } from "@/lib/json-ld"
import { siteConfig } from "@/lib/site"
import Link from "next/link"

export async function generateStaticParams() {
  const jobs = getJobs()
  return jobs.map((j) => ({
    slug: j.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const resolvedParams = await Promise.resolve(params)
  const job = getJobBySlug(resolvedParams.slug)
  if (!job) return {}

  return buildMetadata({
    title: `${job.title} at ${job.company}`,
    description: `Details and analysis of the ${job.title} role at ${job.company}, examining responsibilities and expectations for experienced practitioners.`,
    path: `/jobs/${resolvedParams.slug}`,
    type: "article",
  })
}

export default async function JobPage({
  params,
}: {
  params: { slug: string }
}) {
  const resolvedParams = await Promise.resolve(params)
  const job = getJobBySlug(resolvedParams.slug)
  if (!job) notFound()

  const allJobs = getJobs().filter((j) => j.slug !== job.slug)

  const breadcrumbs = [
    { name: "Jobs", url: "/jobs" },
    { name: job.title, url: `/jobs/${job.slug}` },
  ]

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${job.title} at ${job.company}`,
    datePublished: job.verificationDate,
    dateModified: job.verificationDate,
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
              <h1 className="mb-2">{job.title}</h1>
              <p className="mb-8 font-heading text-2xl text-primary">
                {job.company}
              </p>

              <div className="mb-12 grid grid-cols-2 gap-4 rounded-lg border bg-muted/20 p-6 font-mono text-sm md:grid-cols-3">
                <div>
                  <div className="mb-1 text-muted-foreground">Location</div>
                  <div className="font-semibold text-foreground">
                    {job.location}
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-muted-foreground">Compensation</div>
                  <div className="font-semibold text-foreground">
                    {job.salary}
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-muted-foreground">Verified</div>
                  <div className="font-semibold text-foreground">
                    {job.verificationDate}
                  </div>
                </div>
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: job.content
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
                Other Openings
              </h3>
              <ul className="space-y-4 font-mono text-sm">
                {allJobs.map((j) => (
                  <li
                    key={j.id}
                    className="border-b pb-3 last:border-0 last:pb-0"
                  >
                    <Link
                      href={`/jobs/${j.slug}`}
                      className="mb-1 block font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {j.title}
                    </Link>
                    <div className="text-muted-foreground">{j.company}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border bg-muted/20 p-6">
              <h3 className="mb-2 font-heading text-lg font-semibold text-primary">
                Careers Hub
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                View our complete board of opportunities for working
                underwriters.
              </p>
              <Link
                href="/jobs"
                className="inline-flex h-9 w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                All Jobs
              </Link>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
