import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  HelpCircleIcon,
  SparklesIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing & Plans | bro.tax — Plain-English Tax Intelligence",
  description:
    "Transparent zero-BS pricing for freelancers, creators, and gig workers. $0 free estimators, $49/yr Self-Employed Pass, $149 Human EA Review.",
}

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
          No Upsells. No Hidden Fees.
        </span>
        <h1 className="font-mono text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Simple Pricing for Independent Workers
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Unlike legacy tax giants that bait you with $0 filings and slap on
          $169 Schedule C fees at checkout, bro.tax pricing is upfront, clear,
          and fixed.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
        {/* Free Estimator Tier */}
        <div className="ledger-card flex flex-col justify-between space-y-6 p-6">
          <div className="ledger-rail bg-muted-foreground" />
          <div className="space-y-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Free Forever
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-4xl font-black text-foreground">
                $0
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                / forever
              </span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Instant tax estimations, 1099 rate breakdowns, and access to all
              12 deduction guides without creating an account.
            </p>
            <ul className="space-y-2.5 pt-2 font-mono text-xs text-foreground">
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="size-4 shrink-0 text-primary"
                />
                <span>2024 & 2025 SE Tax Estimator</span>
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="size-4 shrink-0 text-primary"
                />
                <span>Quarterly Payment Calculator</span>
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="size-4 shrink-0 text-primary"
                />
                <span>Deduction Search Engine</span>
              </li>
            </ul>
          </div>

          <Link
            href="/calculator"
            className="w-full rounded-md bg-muted py-3 text-center font-mono text-xs font-semibold text-foreground uppercase transition-colors hover:bg-muted/80"
          >
            Use Free Estimator
          </Link>
        </div>

        {/* Self-Employed Pass (Featured) */}
        <div className="ledger-card relative flex flex-col justify-between space-y-6 p-6 ring-2 ring-primary">
          <div className="ledger-rail" />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
                Most Popular
              </span>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-bold text-primary">
                RECOMMENDED
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-4xl font-black text-foreground">
                $49
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                / year
              </span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Full Schedule C expense export package, quarterly email reminders,
              audit-proof receipt log templates, and QBI optimizer.
            </p>
            <ul className="space-y-2.5 pt-2 font-mono text-xs text-foreground">
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="size-4 shrink-0 text-primary"
                />
                <span>Everything in Free Tier</span>
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="size-4 shrink-0 text-primary"
                />
                <span>Schedule C Tax Prep Export</span>
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="size-4 shrink-0 text-primary"
                />
                <span>Quarterly IRS Deadline Alerts</span>
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="size-4 shrink-0 text-primary"
                />
                <span>IRS Mileage & Expense Loggers</span>
              </li>
            </ul>
          </div>

          <Link
            href="/calculator"
            className="w-full rounded-md bg-primary py-3 text-center font-mono text-xs font-semibold text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Get Self-Employed Pass
          </Link>
        </div>

        {/* EA Pro Review */}
        <div className="ledger-card flex flex-col justify-between space-y-6 p-6">
          <div className="ledger-rail bg-accent" />
          <div className="space-y-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Human Expertise
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-4xl font-black text-foreground">
                $149
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                / review
              </span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              1-on-1 review with a certified IRS Enrolled Agent (EA) to check
              your Schedule C, verify write-offs, and ensure 100% audit
              compliance.
            </p>
            <ul className="space-y-2.5 pt-2 font-mono text-xs text-foreground">
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="size-4 shrink-0 text-primary"
                />
                <span>Human IRS Enrolled Agent Review</span>
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="size-4 shrink-0 text-primary"
                />
                <span>Deduction Maximizer Audit Check</span>
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="size-4 shrink-0 text-primary"
                />
                <span>Direct Q&A via Secure Dashboard</span>
              </li>
            </ul>
          </div>

          <Link
            href="/calculator"
            className="w-full rounded-md bg-muted py-3 text-center font-mono text-xs font-semibold text-foreground uppercase transition-colors hover:bg-muted/80"
          >
            Book EA Pro Review
          </Link>
        </div>
      </div>
    </div>
  )
}
