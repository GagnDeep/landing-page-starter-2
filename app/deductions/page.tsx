import Link from "next/link"
import { DeductionFinder } from "@/components/deduction-finder"
import { DEDUCTIONS_DATABASE } from "@/lib/deductions-data"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "1099 Freelance Deduction Library | bro.tax",
  description:
    "Explore 12 comprehensive categories of qualified tax write-offs for freelancers, creators, gig drivers, and crypto traders. Official IRS evidence rules.",
}

export default function DeductionsHubPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
          IRS Schedule C Write-Off Library
        </span>
        <h1 className="font-mono text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Every Legal 1099 Tax Deduction
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Stop leaving money on the table. Search and filter qualified business
          write-offs by category and industry to lower your self-employment tax
          bill.
        </p>
      </div>

      <DeductionFinder />

      <div className="space-y-6 border-t border-border pt-8">
        <h2 className="font-mono text-xl font-bold text-foreground">
          12 Core Deduction Categories
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEDUCTIONS_DATABASE.map((item) => (
            <Link
              key={item.id}
              href={`/deductions/${item.categoriesSlug}`}
              className="ledger-card group block space-y-2 p-5 transition-colors hover:border-primary"
            >
              <div className="ledger-rail" />
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] font-bold tracking-wider text-primary uppercase">
                  {item.category}
                </span>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                />
              </div>
              <h3 className="font-mono text-base font-bold text-foreground transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              <p className="line-clamp-2 text-xs text-muted-foreground">
                {item.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
