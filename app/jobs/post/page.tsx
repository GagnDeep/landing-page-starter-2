import { buildMetadata } from "@/lib/site"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JobPostForm } from "@/components/job-post-form"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Target01Icon,
  UserGroupIcon,
  HelpCircleIcon,
} from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Post a Job",
  description:
    "Post your open engineering roles to the humanoid robotics supply chain.",
  path: "/jobs/post/",
})

export default function PostJobPage() {
  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      <div className="mx-auto mb-16 max-w-3xl">
        <Breadcrumbs
          items={[
            { label: "Jobs", href: "/jobs/" },
            { label: "Post a Job", href: "/jobs/post/" },
          ]}
        />
        <h1 className="mb-8 text-display">Reach Drivetrain Engineers</h1>
        <p className="mb-8 text-lead text-muted-foreground">
          The Institute of Humanoids index is used by drivetrain engineers and
          supply chain BD leads to understand the robotics ecosystem. By posting
          a job here, your open role will be highlighted directly on the matrix
          next to your company name, putting it in front of highly specialized
          talent actively researching the sector.
        </p>
      </div>

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 bg-background lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <h2 className="mb-6 border-b border-border pb-4 text-h2">
              Job Submission Form
            </h2>
            <JobPostForm />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-5">
          <div className="rounded-xl border border-border bg-muted/10 p-6">
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-md bg-primary/10 p-2">
                <HugeiconsIcon
                  icon={Target01Icon}
                  className="size-5 text-primary"
                />
              </div>
              <h2 className="text-h3">Why Post Here?</h2>
            </div>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Highly Targeted Audience:</strong> Our readers are
                  specifically researching humanoid hardware integration. You
                  won&apos;t find generalized software engineers here;
                  you&apos;ll find the people who build the physical stack.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Matrix Visibility:</strong> Your company name in the
                  Bill of Materials Matrix will display a hiring indicator,
                  linking directly to your active roles.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Brand Authority:</strong> Only confirmed suppliers and
                  integrators can post. Being listed alongside your confirmed
                  hardware integrations builds immediate credibility with
                  candidates.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-muted/10 p-6">
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-md bg-secondary/10 p-2">
                <HugeiconsIcon
                  icon={UserGroupIcon}
                  className="size-5 text-secondary"
                />
              </div>
              <h2 className="text-h3">Who You Will Reach</h2>
            </div>
            <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-background">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-border bg-muted/50 text-muted-foreground">
                  <tr>
                    <th className="px-4 py-2 font-medium">Role Type</th>
                    <th className="px-4 py-2 font-medium">Primary Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium">
                      Mechanical Engineer
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Actuator design, thermal management, structural integrity
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Control Systems</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Locomotion algorithms, force-control, dynamic balancing
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">
                      Electrical Engineer
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Motor controllers, power distribution, harness design
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">
                      Perception Engineer
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Sensor fusion, LiDAR integration, state estimation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-3xl border-t border-border bg-transparent pt-16">
        <div className="mb-8 flex items-center gap-4">
          <HugeiconsIcon
            icon={HelpCircleIcon}
            className="size-8 text-muted-foreground"
          />
          <h2 className="text-h2">Frequently Asked Questions</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-base text-h3 font-semibold">
              How much does it cost?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Posting a single role costs {"{{VERIFY: Job Post Price}}"}. The
              listing remains active for 30 days. Bulk pricing is available for
              continuous hiring needs.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-base text-h3 font-semibold">
              Who is allowed to post?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              To maintain the integrity of our platform, we only accept job
              postings from companies that are already listed as confirmed
              suppliers or integrators within our Bill of Materials matrix. If
              your company is not yet tracked, you must submit public
              documentation verifying your involvement in the humanoid supply
              chain first.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-base text-h3 font-semibold">
              How does the billing process work?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              After you submit the role details using the form, our team will
              review the listing against our compliance rules. Once approved, we
              will send an invoice to the provided contact email. The job will
              go live immediately upon payment confirmation.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-base text-h3 font-semibold">
              Can I edit my job post later?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Yes. Reply to the approval email with any required changes, and
              our team will update the listing within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
