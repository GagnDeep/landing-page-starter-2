import { buildMetadata } from "@/lib/site"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { getJobs, getSuppliers } from "@/content"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Building04Icon, BrainIcon } from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Jobs",
  description:
    "Drivetrain engineering and hardware roles in humanoid robotics.",
  path: "/jobs/",
})

export default function JobsPage() {
  const jobs = getJobs()
  const suppliers = getSuppliers()

  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      <Breadcrumbs items={[{ label: "Jobs", href: "/jobs/" }]} />
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h1 className="mb-4 text-display">Hardware Jobs</h1>
          <p className="max-w-2xl text-lead text-muted-foreground">
            Engineering roles directly from the suppliers and integrators listed
            on our matrix.
          </p>
        </div>
        <Link
          href="/jobs/post/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium whitespace-nowrap text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Post a Job
        </Link>
      </div>

      <section className="mb-16 flex flex-col gap-4 bg-background">
        {jobs.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border py-12 text-center text-muted-foreground">
            {"{{VERIFY: Active Jobs Data}}"}
            <HugeiconsIcon icon={Building04Icon} className="hidden" />
          </div>
        ) : (
          jobs.map((job) => {
            const supplier = suppliers.find((s) => s.id === job.supplierId)
            return (
              <a
                key={job.id}
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-6 rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary md:flex-row md:items-center"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl text-h3 transition-colors group-hover:text-primary">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
                    <span>{supplier?.name || job.supplierId}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
                  Posted {job.postedDate}
                  <HugeiconsIcon icon={Building04Icon} className="size-4" />
                </div>
              </a>
            )
          })
        )}
      </section>

      <section className="rounded-xl border border-border bg-muted/10 p-8">
        <div className="mb-6 flex items-center gap-4">
          <HugeiconsIcon icon={BrainIcon} className="size-8 text-primary" />
          <h2 className="text-h2">Career Insights</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-h3">Engineering Demand</h3>
            <p className="text-sm text-muted-foreground">
              The demand for specialized drivetrain engineers, particularly
              those with experience in hydraulic actuation and high-torque
              electric motors, is at an all-time high.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {"{{VERIFY: Hiring trends in robotics data}}"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-h3">Skill Requirements</h3>
            <p className="text-sm text-muted-foreground">
              Suppliers are actively seeking candidates with cross-disciplinary
              skills spanning mechanical design, control systems, and materials
              science.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {"{{VERIFY: Engineering skill sets analysis}}"}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
