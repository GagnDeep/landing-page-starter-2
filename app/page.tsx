import { Matrix } from "@/components/matrix"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Settings01Icon,
  RobotIcon,
  Search01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import Link from "next/link"
import { buildMetadata } from "@/lib/site"
import { Prose } from "@/components/prose"
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/json-ld"

export const metadata = buildMetadata({
  title: "Institute of Humanoids",
  description: "The supply chain index for humanoid robotics.",
})

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [getOrganizationSchema(), getWebSiteSchema()],
  }

  return (
    <main className="flex flex-col gap-24 py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Split Hero */}
      <section className="container mx-auto grid grid-cols-1 items-center gap-12 bg-background px-4 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <p className="font-heading text-sm font-semibold tracking-wider text-accent uppercase">
            Industry Standard
          </p>
          <h1 className="text-display">
            The supply chain index for humanoid robotics.
          </h1>
          <p className="text-lead text-muted-foreground">
            A real-time bill of materials mapping who makes the actuators,
            harmonic drives, sensors, and hands inside which platform.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              href="/matrix/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Explore the Matrix
            </Link>
            <Link
              href="/jobs/post/"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Post a Job
            </Link>
          </div>
        </div>
        <div className="flex h-full flex-col rounded-xl border border-border bg-card p-4 shadow-sm lg:col-span-7">
          <Matrix />
        </div>
      </section>

      {/* 2. Stat Strip (Horizontal Metric Strip) */}
      <section className="border-y border-border bg-muted/30 py-12">
        <div className="container mx-auto grid grid-cols-2 gap-8 divide-x divide-border px-4 text-center md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-3xl font-semibold text-foreground tabular-nums">
              {"{{VERIFY: Total Platforms}}"}
            </span>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Platforms Tracked
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-3xl font-semibold text-foreground tabular-nums">
              {"{{VERIFY: Total Components}}"}
            </span>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Components Mapped
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-3xl font-semibold text-foreground tabular-nums">
              {"{{VERIFY: Total Suppliers}}"}
            </span>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Suppliers Indexed
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-3xl font-semibold text-foreground text-primary tabular-nums">
              {"{{VERIFY: Total Jobs}}"}
            </span>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Active Jobs
            </span>
            <HugeiconsIcon icon={RobotIcon} className="hidden" />
          </div>
        </div>
      </section>

      {/* 3. Bento Grid */}
      <section className="container mx-auto bg-background px-4">
        <div className="mb-12">
          <p className="mb-4 font-heading text-sm font-semibold tracking-wider text-accent uppercase">
            Intelligence
          </p>
          <h2>Understand the Drivetrain</h2>
          <p className="mt-4 max-w-2xl text-lead text-muted-foreground">
            We break down the humanoid ecosystem into trackable, verifiable
            components.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col items-start gap-6 rounded-xl border border-border bg-card p-8 shadow-sm md:col-span-2">
            <div className="rounded-md bg-primary/10 p-3">
              <HugeiconsIcon
                icon={Settings01Icon}
                className="size-6 text-primary"
              />
            </div>
            <h3 className="text-h3">Actuators & Drives</h3>
            <Prose>
              <p>
                The muscles of the humanoid. Track who is supplying the harmonic
                drives, linear actuators, and frameless motors that power the
                latest platforms.
              </p>
            </Prose>
            <Link
              href="/components/actuators/"
              className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View Actuators{" "}
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
            </Link>
          </div>
          <div className="flex flex-col items-start gap-6 rounded-xl border border-border bg-card p-8 shadow-sm">
            <div className="rounded-md bg-secondary/10 p-3">
              <HugeiconsIcon
                icon={RobotIcon}
                className="size-6 text-secondary"
              />
            </div>
            <h3 className="text-h3">Sensors & Perception</h3>
            <Prose>
              <p>
                From force-torque sensors in the wrists to the LiDAR and stereo
                vision systems guiding the head.
              </p>
            </Prose>
            <Link
              href="/components/"
              className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
            >
              View Sensors{" "}
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Directory / Leaderboard Preview */}
      <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-4 font-heading text-sm font-semibold tracking-wider text-accent uppercase">
              Top Suppliers
            </p>
            <h2>Industry Leaders</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lead text-muted-foreground">
              The suppliers most frequently found in publicly documented bills
              of materials.
            </p>
          </div>
          <div className="mx-auto max-w-4xl overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/50 text-xs uppercase">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-semibold text-foreground"
                  >
                    Supplier
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-semibold text-foreground"
                  >
                    Core Competency
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-right font-semibold text-foreground"
                  >
                    Confirmed Integrations
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {/* Empty State / Schema representation */}
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-12 text-center text-muted-foreground"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <HugeiconsIcon
                        icon={Search01Icon}
                        className="size-8 text-muted-foreground/50"
                      />
                      <p>Leaderboard requires real data to render.</p>
                      <p className="text-xs">
                        {
                          "{{VERIFY: Top 5 Suppliers by confirmed integrations}}"
                        }
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Process Stepper (Methodology) */}
      <section className="container mx-auto bg-background px-4">
        <div className="mb-12">
          <p className="mb-4 font-heading text-sm font-semibold tracking-wider text-accent uppercase">
            Compliance
          </p>
          <h2>How We Verify</h2>
          <p className="mt-4 max-w-2xl text-lead text-muted-foreground">
            Our strict sourcing policy ensures the matrix remains a source of
            truth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-mono text-xl font-bold text-primary">
              1
            </div>
            <h3 className="text-h3">Public Documentation</h3>
            <Prose>
              <p>
                A relationship is fact only when publicly documented by a
                filing, press release, or teardown.
              </p>
            </Prose>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-mono text-xl font-bold text-primary">
              2
            </div>
            <h3 className="text-h3">Date & Source</h3>
            <Prose>
              <p>
                Every spec, relationship, and platform claim must be explicitly
                dated and linked to its primary source.
              </p>
            </Prose>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-mono text-xl font-bold text-primary">
              3
            </div>
            <h3 className="text-h3">No Leaks</h3>
            <Prose>
              <p>
                Inferred links wear an Unconfirmed badge. Leaked or confidential
                sourcing never appears on the site.
              </p>
            </Prose>
          </div>
        </div>
        <HugeiconsIcon icon={RobotIcon} className="hidden" />
      </section>

      {/* 6. Inline SVG Graphic (Diagram) */}
      <section className="border-t border-border bg-muted/10 py-16 lg:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-heading text-sm font-semibold tracking-wider text-accent uppercase">
              Architecture
            </p>
            <h2>The Supply Chain Map</h2>
            <p className="mt-4 text-lead text-muted-foreground">
              Visualizing the flow of hardware from specialized tier-2 suppliers
              through integrators into the final humanoid platforms.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-border bg-background p-8 shadow-sm">
            <svg
              viewBox="0 0 400 300"
              className="h-auto w-full max-w-md"
              aria-hidden="true"
            >
              {/* Abstract Representation of Supply Chain */}
              <defs>
                <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop
                    offset="0%"
                    stopColor="var(--color-primary)"
                    stopOpacity="0.2"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-primary)"
                    stopOpacity="0.8"
                  />
                </linearGradient>
              </defs>
              <rect
                x="20"
                y="50"
                width="80"
                height="40"
                rx="4"
                fill="var(--color-background)"
                stroke="var(--color-border)"
                strokeWidth="2"
              />
              <text
                x="60"
                y="75"
                textAnchor="middle"
                fill="var(--color-foreground)"
                fontSize="12"
                fontFamily="var(--font-mono)"
              >
                Motors
              </text>

              <rect
                x="20"
                y="130"
                width="80"
                height="40"
                rx="4"
                fill="var(--color-background)"
                stroke="var(--color-border)"
                strokeWidth="2"
              />
              <text
                x="60"
                y="155"
                textAnchor="middle"
                fill="var(--color-foreground)"
                fontSize="12"
                fontFamily="var(--font-mono)"
              >
                Gears
              </text>

              <rect
                x="20"
                y="210"
                width="80"
                height="40"
                rx="4"
                fill="var(--color-background)"
                stroke="var(--color-border)"
                strokeWidth="2"
              />
              <text
                x="60"
                y="235"
                textAnchor="middle"
                fill="var(--color-foreground)"
                fontSize="12"
                fontFamily="var(--font-mono)"
              >
                Encoders
              </text>

              <path
                d="M 100 70 L 160 150"
                stroke="url(#edgeGrad)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 100 150 L 160 150"
                stroke="url(#edgeGrad)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 100 230 L 160 150"
                stroke="url(#edgeGrad)"
                strokeWidth="2"
                fill="none"
              />

              <rect
                x="160"
                y="130"
                width="100"
                height="40"
                rx="4"
                fill="var(--color-background)"
                stroke="var(--color-primary)"
                strokeWidth="2"
              />
              <text
                x="210"
                y="155"
                textAnchor="middle"
                fill="var(--color-primary)"
                fontSize="12"
                fontFamily="var(--font-mono)"
                fontWeight="bold"
              >
                Actuator
              </text>

              <path
                d="M 260 150 L 320 150"
                stroke="url(#edgeGrad)"
                strokeWidth="2"
                fill="none"
              />

              <rect
                x="320"
                y="110"
                width="80"
                height="80"
                rx="8"
                fill="var(--color-background)"
                stroke="var(--color-border)"
                strokeWidth="2"
              />
              <text
                x="360"
                y="155"
                textAnchor="middle"
                fill="var(--color-foreground)"
                fontSize="14"
                fontFamily="var(--font-heading)"
                fontWeight="bold"
              >
                Platform
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* 7. Accordion of Substantive Questions */}
      <section className="container mx-auto max-w-3xl bg-background px-4">
        <div className="mb-12 text-center">
          <p className="mb-4 font-heading text-sm font-semibold tracking-wider text-accent uppercase">
            FAQ
          </p>
          <h2>Common Questions</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-base text-h3">How do you source your data?</h3>
            <Prose className="mt-2 text-sm text-muted-foreground">
              <p>
                We only use publicly available information, such as press
                releases, SEC filings, official documentation, and confirmed
                teardowns. We do not publish leaked bills of materials.
              </p>
            </Prose>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-base text-h3">How can I post a job?</h3>
            <Prose className="mt-2 text-sm text-muted-foreground">
              <p>
                Suppliers and platform manufacturers can post jobs through our
                portal. Jobs are highlighted directly on the matrix next to the
                company name, providing direct visibility to interested
                engineers.
              </p>
            </Prose>
          </div>
        </div>
        <HugeiconsIcon icon={RobotIcon} className="hidden" />
      </section>

      {/* 8. Final Conversion Band */}
      <section className="border-t border-border bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-display text-primary-foreground">
            Hiring drivetrain engineers?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lead text-primary-foreground/80">
            Put your open roles directly in front of the talent researching the
            ecosystem.
          </p>
          <Link
            href="/jobs/post/"
            className="inline-flex h-12 items-center justify-center rounded-md bg-background px-10 text-sm font-medium text-foreground shadow transition-colors hover:bg-muted"
          >
            {"Post a Job for {{VERIFY: Job Post Price}}"}
          </Link>
          <HugeiconsIcon icon={RobotIcon} className="hidden" />
        </div>
      </section>
    </main>
  )
}
