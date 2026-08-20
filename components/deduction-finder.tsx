"use client"

import * as React from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Search01Icon,
  Invoice01Icon,
  CheckmarkCircle02Icon,
  Cancel01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { DEDUCTIONS_DATABASE, DeductionItem } from "@/lib/deductions-data"
import { cn } from "@/lib/utils"

export { DEDUCTIONS_DATABASE }
export type { DeductionItem }

export function DeductionFinder() {
  const [query, setQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const categories = [
    "All",
    "Home & Workspace",
    "Hardware & Gear",
    "Software Subscriptions",
    "Vehicle & Mileage",
    "Travel & Meals",
    "Health Insurance",
    "Education & Courses",
    "Marketing & Ads",
    "Contractor Fees",
    "Internet & Phone",
    "Professional Services",
    "Crypto Losses",
  ]

  const filteredDeductions = React.useMemo(() => {
    return DEDUCTIONS_DATABASE.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        item.applicableRoles.some((role) =>
          role.toLowerCase().includes(query.toLowerCase())
        )

      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [query, selectedCategory])

  return (
    <div className="w-full space-y-6">
      {/* Search Bar & Filters */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-md border border-border bg-card p-4 shadow-xs md:flex-row">
        <div className="relative w-full md:w-96">
          <HugeiconsIcon
            icon={Search01Icon}
            className="absolute top-2.5 left-3 size-4 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Search e.g. MacBook, ChatGPT, Mileage, Gym..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-md border border-border bg-background py-2 pr-4 pl-9 font-mono text-sm focus:ring-1 focus:ring-primary focus:outline-none"
          />
        </div>

        <div className="flex w-full scrollbar-none items-center gap-1.5 overflow-x-auto pb-2 md:w-auto md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "cursor-pointer rounded-md px-3 py-1.5 font-mono text-xs whitespace-nowrap transition-colors",
                selectedCategory === cat
                  ? "bg-primary font-semibold text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Deduction Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredDeductions.length > 0 ? (
          filteredDeductions.map((item) => (
            <div
              key={item.id}
              className="ledger-card flex flex-col justify-between space-y-4 p-6"
            >
              <div className="ledger-rail" />
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      {item.category}
                    </span>
                    <h3 className="mt-0.5 font-mono text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <span
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold uppercase",
                      item.isDeductible
                        ? "border-primary/20 bg-primary/10 text-primary"
                        : "border-destructive/20 bg-destructive/10 text-destructive"
                    )}
                  >
                    <HugeiconsIcon
                      icon={
                        item.isDeductible ? CheckmarkCircle02Icon : Cancel01Icon
                      }
                      className="size-3"
                    />
                    {item.percentage}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.shortDescription}
                </p>

                <div className="space-y-1.5 rounded-md border border-border bg-muted/40 p-3 font-mono text-[11px]">
                  <div>
                    <span className="font-semibold text-foreground">
                      IRS Rule:{" "}
                    </span>
                    <span className="text-muted-foreground">
                      {item.whatQualifies}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">
                      Evidence Needed:{" "}
                    </span>
                    <span className="text-muted-foreground">
                      {item.evidenceRequired}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border pt-2 font-mono text-xs">
                <div className="flex flex-wrap gap-1">
                  {item.applicableRoles.slice(0, 2).map((role) => (
                    <span
                      key={role}
                      className="rounded-xs bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {role}
                    </span>
                  ))}
                  {item.applicableRoles.length > 2 && (
                    <span className="px-1.5 py-0.5 text-[10px] text-muted-foreground">
                      +{item.applicableRoles.length - 2}
                    </span>
                  )}
                </div>
                <Link
                  href={`/deductions/${item.categoriesSlug}`}
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                  <span>Full IRS Breakdown</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 space-y-3 rounded-md border border-border bg-card py-12 text-center">
            <HugeiconsIcon
              icon={Invoice01Icon}
              className="mx-auto size-8 text-muted-foreground"
            />
            <h3 className="font-mono text-base font-bold text-foreground">
              No matching deductions found
            </h3>
            <p className="text-xs text-muted-foreground">
              Try searching for broader terms like &quot;hardware&quot;,
              &quot;software&quot;, or &quot;travel&quot;.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
