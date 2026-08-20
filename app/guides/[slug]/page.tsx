import Link from "next/link"
import { notFound } from "next/navigation"
import { OCCUPATION_GUIDES } from "@/lib/guides-data"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeft01Icon,
  CheckmarkCircle02Icon,
  AlertCircleIcon,
  Calculator01Icon,
  HelpCircleIcon,
} from "@hugeicons/core-free-icons"
import { Metadata } from "next"

export async function generateStaticParams() {
  return OCCUPATION_GUIDES.map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = OCCUPATION_GUIDES.find((g) => g.slug === slug)
  if (!guide) return { title: "Guide Not Found | bro.tax" }

  return {
    title: `${guide.role} Tax Deductions & Guide | bro.tax`,
    description: guide.tagline,
  }
}

export default async function OccupationGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = OCCUPATION_GUIDES.find((g) => g.slug === slug)

  if (!guide) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/guides"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
        <span>Back to All Occupation Guides</span>
      </Link>

      <div className="ledger-card space-y-8 p-6 md:p-8">
        <div className="ledger-rail" />

        <div className="space-y-2 border-b border-border pb-6">
          <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
            1099 Schedule C Tax Blueprint
          </span>
          <h1 className="font-mono text-2xl font-black text-foreground sm:text-4xl">
            Tax Deductions for {guide.role}s
          </h1>
          <p className="font-sans text-sm text-muted-foreground">
            {guide.tagline}
          </p>
        </div>

        <div className="space-y-6 font-sans text-sm leading-relaxed text-foreground/90">
          <p className="text-base font-medium">{guide.overview}</p>

          <div className="space-y-3 pt-2">
            <h2 className="flex items-center gap-2 font-mono text-base font-bold tracking-tight text-foreground uppercase">
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                className="size-4 text-primary"
              />
              Primary Qualified Business Deductions
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {guide.topDeductions.map((deduction, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 rounded-md border border-border bg-muted/40 p-3 font-mono text-xs"
                >
                  <span className="font-bold text-primary">{idx + 1}.</span>
                  <span className="text-foreground">{deduction}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="flex items-center gap-2 font-mono text-base font-bold tracking-tight text-destructive uppercase">
              <HugeiconsIcon
                icon={AlertCircleIcon}
                className="size-4 text-destructive"
              />
              Common IRS Audit Pitfall to Avoid
            </h2>
            <div className="rounded-md border border-destructive/20 bg-destructive/5 p-4 font-mono text-xs leading-normal text-foreground">
              {guide.commonPitfalls}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-mono text-base font-bold tracking-tight text-foreground uppercase">
              Worked Tax Savings Scenario
            </h2>
            <div className="space-y-2 rounded-md border border-primary/20 bg-primary/5 p-4 font-mono text-xs leading-normal text-foreground">
              {guide.workedExample}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <HugeiconsIcon
              icon={HelpCircleIcon}
              className="size-4 text-accent"
            />
            <span>Official IRS Guidance Standardized</span>
          </div>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-xs font-semibold text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            <HugeiconsIcon icon={Calculator01Icon} className="size-4" />
            <span>Estimate Your 1099 Taxes</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
