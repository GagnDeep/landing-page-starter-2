import Link from "next/link"
import { notFound } from "next/navigation"
import { DEDUCTIONS_DATABASE } from "@/lib/deductions-data"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeft01Icon,
  CheckmarkCircle02Icon,
  Cancel01Icon,
  HelpCircleIcon,
  Calculator01Icon,
} from "@hugeicons/core-free-icons"
import { Metadata } from "next"
import { cn } from "@/lib/utils"

export async function generateStaticParams() {
  return DEDUCTIONS_DATABASE.map((item) => ({
    slug: item.categoriesSlug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const deduction = DEDUCTIONS_DATABASE.find((d) => d.categoriesSlug === slug)
  if (!deduction) return { title: "Deduction Not Found | bro.tax" }

  return {
    title: `${deduction.title} Tax Deduction Guide | bro.tax`,
    description: deduction.shortDescription,
  }
}

export default async function DeductionCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const deduction = DEDUCTIONS_DATABASE.find((d) => d.categoriesSlug === slug)

  if (!deduction) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/deductions"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
        <span>Back to All Deductions</span>
      </Link>

      <div className="ledger-card space-y-6 p-6 md:p-8">
        <div className="ledger-rail" />

        <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
              Category: {deduction.category}
            </span>
            <h1 className="mt-1 font-mono text-2xl font-black text-foreground sm:text-3xl">
              {deduction.title}
            </h1>
          </div>
          <span
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-xs font-bold uppercase",
              deduction.isDeductible
                ? "border-primary/20 bg-primary/10 text-primary"
                : "border-destructive/20 bg-destructive/10 text-destructive"
            )}
          >
            <HugeiconsIcon
              icon={
                deduction.isDeductible ? CheckmarkCircle02Icon : Cancel01Icon
              }
              className="size-4"
            />
            {deduction.percentage}
          </span>
        </div>

        <div className="space-y-6 font-sans text-sm leading-relaxed text-foreground/90">
          <p className="text-base font-medium text-foreground">
            {deduction.shortDescription}
          </p>

          <div className="space-y-3 pt-2">
            <h2 className="font-mono text-base font-bold tracking-tight text-foreground uppercase">
              IRS Qualification Criteria
            </h2>
            <div className="space-y-2 rounded-md border border-border bg-muted/40 p-4 font-mono text-xs">
              <p className="leading-normal text-muted-foreground">
                {deduction.whatQualifies}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-mono text-base font-bold tracking-tight text-foreground uppercase">
              Required Evidence for Audit Defense
            </h2>
            <div className="space-y-2 rounded-md border border-border bg-muted/40 p-4 font-mono text-xs">
              <p className="leading-normal text-muted-foreground">
                {deduction.evidenceRequired}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-mono text-base font-bold tracking-tight text-foreground uppercase">
              Worked Real-World Example
            </h2>
            <div className="space-y-2 rounded-md border border-primary/20 bg-primary/5 p-4 font-mono text-xs text-foreground">
              <p className="leading-normal">{deduction.example}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-mono text-base font-bold tracking-tight text-foreground uppercase">
              Applicable Freelance & Creator Roles
            </h2>
            <div className="flex flex-wrap gap-2">
              {deduction.applicableRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs font-medium text-foreground"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <HugeiconsIcon
              icon={HelpCircleIcon}
              className="size-4 text-accent"
            />
            <span>Tax Year 2024 & 2025 Standardized</span>
          </div>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-xs font-semibold text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            <HugeiconsIcon icon={Calculator01Icon} className="size-4" />
            <span>Calculate Tax Savings</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
