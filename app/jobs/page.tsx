import { getJobs } from "@/lib/content"
import { buildMetadata } from "@/lib/metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLdBreadcrumbList } from "@/lib/json-ld"

import Link from "next/link"

export const metadata = buildMetadata({
  title: `Underwriting Jobs Board`,
  description:
    "Curated roles for experienced P&C underwriters. Discover new opportunities in commercial and specialty lines with leading carriers and MGAs.",
  path: "/jobs",
})

export default function JobsIndexPage() {
  const jobs = getJobs()
  const breadcrumbs = [{ name: "Jobs", url: "/jobs" }]

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdBreadcrumbList items={breadcrumbs} />
      <Header />
      <main className="container mx-auto max-w-[1440px] flex-1 px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="mb-6 font-heading text-4xl font-semibold text-primary">
          Underwriting Jobs
        </h1>
        <p className="mb-12 max-w-[66ch] text-xl text-muted-foreground">
          A small, curated board of roles for practitioners. We do not list
          entry-level or trainee positions.
        </p>

        <div className="overflow-hidden rounded-lg border bg-card">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-muted/50 font-mono text-xs text-muted-foreground uppercase">
              <tr>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="hidden px-6 py-4 font-medium md:table-cell">
                  Location
                </th>
                <th className="px-6 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y font-mono">
              {jobs.map((job) => (
                <tr
                  key={job.id}
                  className="transition-colors hover:bg-muted/50"
                >
                  <td className="px-6 py-4 font-sans font-semibold text-foreground">
                    <Link
                      href={`/jobs/${job.slug}`}
                      className="text-primary hover:underline"
                    >
                      {job.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {job.company}
                  </td>
                  <td className="hidden px-6 py-4 md:table-cell">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/jobs/${job.slug}`}
                      className="text-primary hover:underline"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  )
}
