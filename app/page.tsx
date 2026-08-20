import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calculator01Icon,
  Invoice01Icon,
  CheckmarkCircle02Icon,
  ArrowRight01Icon,
  HelpCircleIcon,
  SparklesIcon,
  Coins01Icon,
} from "@hugeicons/core-free-icons"
import { TaxCalculator } from "@/components/tax-calculator"
import { DeductionFinder } from "@/components/deduction-finder"

export default function HomePage() {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section with Calculator First */}
      <section className="relative mx-auto max-w-7xl space-y-8 px-4 pt-12 sm:px-6 md:pt-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 font-mono text-xs font-semibold tracking-wider text-primary uppercase">
            <HugeiconsIcon icon={SparklesIcon} className="size-4" />
            <span>Updated for IRS Tax Years 2024 & 2025</span>
          </div>
          <h1 className="font-mono text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            No Suits. No Jargon. <br />
            <span className="text-primary">Just Pure Tax Savings.</span>
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
            The zero-bullshit tax calculator and deduction finder built
            specifically for freelancers, creators, gig drivers, and crypto
            traders. Know exactly what you owe in under 60 seconds.
          </p>
        </div>

        {/* Instant Interactive Calculator Component */}
        <TaxCalculator initialGross={75000} initialExpenses={12000} />
      </section>

      {/* Competitor Teardown Comparison Matrix */}
      <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
            How We Compare
          </span>
          <h2 className="font-mono text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Why Freelancers Are Ditching Legacy Tax Software
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            Traditional tax software traps you in 30-page funnels just to reveal
            how much you owe.
          </p>
        </div>

        <div className="overflow-x-auto rounded-md border border-border bg-card">
          <table className="w-full text-left font-mono text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50 tracking-wider text-foreground uppercase">
                <th className="p-4 font-bold">Feature / Capability</th>
                <th className="border-x border-border bg-primary/5 p-4 font-bold text-primary">
                  bro.tax
                </th>
                <th className="p-4 font-bold text-muted-foreground">
                  TurboTax
                </th>
                <th className="p-4 font-bold text-muted-foreground">
                  H&R Block
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              <tr>
                <td className="p-4 font-semibold text-foreground">
                  Instant Unlocked Calculation
                </td>
                <td className="border-x border-border bg-primary/5 p-4 font-bold text-primary">
                  <span className="flex items-center gap-1.5">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      className="size-4"
                    />
                    Yes (No Account)
                  </span>
                </td>
                <td className="p-4 text-destructive">
                  No (Must create account)
                </td>
                <td className="p-4 text-destructive">No (Paywall upfront)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">
                  Schedule C / 1099 Pricing
                </td>
                <td className="border-x border-border bg-primary/5 p-4 font-bold text-primary">
                  $0 Free / $49 Flat
                </td>
                <td className="p-4">$129 - $169+ hidden fees</td>
                <td className="p-4">$115 - $155+ state fees</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">
                  Tone & Interface
                </td>
                <td className="border-x border-border bg-primary/5 p-4 font-bold text-foreground">
                  Plain-English & Crisp
                </td>
                <td className="p-4">Corporate cheer & upsells</td>
                <td className="p-4">Bureaucratic beige forms</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">
                  Modern Gig & Creator Deductions
                </td>
                <td className="border-x border-border bg-primary/5 p-4 font-bold text-primary">
                  <span className="flex items-center gap-1.5">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      className="size-4"
                    />
                    Built-in Matrix
                  </span>
                </td>
                <td className="p-4 text-destructive">Generic business rules</td>
                <td className="p-4 text-destructive">Manual entry required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Deduction Finder Section */}
      <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
              Deduction Intelligence Engine
            </span>
            <h2 className="mt-1 font-mono text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              What Can You Write Off This Year?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Explore qualified business deductions by profession and category
              based strictly on IRS guidance.
            </p>
          </div>
          <Link
            href="/deductions"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-xs font-semibold text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            <span>View All 12 Categories</span>
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
          </Link>
        </div>

        <DeductionFinder />
      </section>

      {/* Personas / Trigger Scenarios */}
      <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
            Tailored Solutions
          </span>
          <h2 className="font-mono text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Built for Your Specific Freelance Grind
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="ledger-card space-y-4 p-6">
            <div className="ledger-rail" />
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={Calculator01Icon}
                className="size-5 text-primary"
              />
              <h3 className="font-mono text-base font-bold text-foreground">
                Software Engineers & Designers
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Deduct high-end workstation hardware (M3 Macs), GitHub/Figma
              subscriptions, home studio fiber internet, and specialized
              technical courses.
            </p>
            <Link
              href="/guides/freelance-software-engineer"
              className="inline-flex items-center gap-1.5 pt-2 font-mono text-xs font-semibold text-primary hover:underline"
            >
              <span>Engineer Tax Guide</span>
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5" />
            </Link>
          </div>

          <div className="ledger-card space-y-4 p-6">
            <div className="ledger-rail" />
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={Coins01Icon}
                className="size-5 text-primary"
              />
              <h3 className="font-mono text-base font-bold text-foreground">
                Creators & YouTubers
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Write off camera bodies, lighting rigs, video editing SaaS, props,
              filming spaces, and Adobe Creative Cloud suite without getting
              audited.
            </p>
            <Link
              href="/guides/content-creator-youtuber"
              className="inline-flex items-center gap-1.5 pt-2 font-mono text-xs font-semibold text-primary hover:underline"
            >
              <span>Creator Tax Guide</span>
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5" />
            </Link>
          </div>

          <div className="ledger-card space-y-4 p-6">
            <div className="ledger-rail" />
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={Invoice01Icon}
                className="size-5 text-primary"
              />
              <h3 className="font-mono text-base font-bold text-foreground">
                DoorDash & Gig Drivers
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Maximize your 70¢/mile business deduction (TY2025), phone bill
              allocations, insulated bag purchases, and toll expenses
              effortlessly.
            </p>
            <Link
              href="/guides/ubereats-doordash-driver"
              className="inline-flex items-center gap-1.5 pt-2 font-mono text-xs font-semibold text-primary hover:underline"
            >
              <span>Gig Driver Tax Guide</span>
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="font-mono text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Clear Answers to Common 1099 Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="ledger-card space-y-2 p-5">
            <h3 className="flex items-center gap-2 font-mono text-sm font-bold text-foreground">
              <HugeiconsIcon
                icon={HelpCircleIcon}
                className="size-4 shrink-0 text-primary"
              />
              What is Self-Employment Tax and why is it 15.3%?
            </h3>
            <p className="pl-6 text-xs leading-relaxed text-muted-foreground">
              When you work a traditional W2 job, your employer pays half of
              your Social Security (6.2%) and Medicare (1.45%) taxes. When you
              earn 1099 income, you are both the employer and employee, so you
              pay the full 15.3% tax on 92.35% of your net self-employment
              earnings.
            </p>
          </div>

          <div className="ledger-card space-y-2 p-5">
            <h3 className="flex items-center gap-2 font-mono text-sm font-bold text-foreground">
              <HugeiconsIcon
                icon={HelpCircleIcon}
                className="size-4 shrink-0 text-primary"
              />
              What happens if I miss a quarterly estimated tax deadline?
            </h3>
            <p className="pl-6 text-xs leading-relaxed text-muted-foreground">
              The IRS imposes a small underpayment penalty (typically around
              7-8% annualized interest on the unpaid amount) for missing
              quarterly deadlines (Apr 15, Jun 15, Sep 15, Jan 15). You can
              avoid penalties if you pay at least 90% of your current year tax
              bill or 100% of last year&apos;s tax bill.
            </p>
          </div>

          <div className="ledger-card space-y-2 p-5">
            <h3 className="flex items-center gap-2 font-mono text-sm font-bold text-foreground">
              <HugeiconsIcon
                icon={HelpCircleIcon}
                className="size-4 shrink-0 text-primary"
              />
              What is the 20% Qualified Business Income (QBI) Deduction?
            </h3>
            <p className="pl-6 text-xs leading-relaxed text-muted-foreground">
              Under IRC Section 199A, pass-through entities and sole proprietors
              (1099 freelancers) can deduct up to 20% of their qualified net
              business income right off the top before income tax is calculated.
              Our calculator automatically applies this tax saving.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
