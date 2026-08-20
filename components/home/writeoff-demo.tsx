"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  Cancel01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface WriteOffItem {
  item: string
  cost: number
  valid: boolean
  explanation: string
  taxSavings: number // ~27.3% tax savings
  category: "Developer" | "Creator" | "Driver" | "Designer"
}

const DEMO_ITEMS: WriteOffItem[] = [
  {
    item: "Cursor AI & GitHub Copilot Subscriptions",
    cost: 360,
    valid: true,
    explanation:
      "100% deductible as software tools directly used to generate client code.",
    taxSavings: 98,
    category: "Developer",
  },
  {
    item: "4K Dual Monitors & Ergonomic Chair",
    cost: 1200,
    valid: true,
    explanation:
      "100% deductible home office equipment under Schedule C equipment expenses.",
    taxSavings: 328,
    category: "Developer",
  },
  {
    item: "Daily Starbucks Coffee while coding at home",
    cost: 1800,
    valid: false,
    explanation:
      "Personal meal expenses at home are non-deductible personal expenses according to IRS rules.",
    taxSavings: 0,
    category: "Developer",
  },
  {
    item: "Shure SM7B Mic & Cam Link for YouTube",
    cost: 650,
    valid: true,
    explanation: "Direct video production hardware deductible on Schedule C.",
    taxSavings: 177,
    category: "Creator",
  },
  {
    item: "Studio Lighting & Backdrop for OnlyFans",
    cost: 450,
    valid: true,
    explanation:
      "100% deductible staging & lighting equipment for content creation.",
    taxSavings: 123,
    category: "Creator",
  },
  {
    item: "Designer clothes worn in everyday personal life",
    cost: 2500,
    valid: false,
    explanation:
      "Everyday apparel suitable for street wear cannot be written off even if worn in videos.",
    taxSavings: 0,
    category: "Creator",
  },
  {
    item: "Rideshare Mileage (12,500 business miles)",
    cost: 8750, // 12500 * 0.70
    valid: true,
    explanation:
      "70.0¢/mile standard business mileage rate for 2025 IRS filings.",
    taxSavings: 2389,
    category: "Driver",
  },
  {
    item: "Figma Professional & Adobe Creative Cloud",
    cost: 840,
    valid: true,
    explanation:
      "Essential client design software subscriptions fully deductible.",
    taxSavings: 229,
    category: "Designer",
  },
]

export function WriteOffDemo() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const categories = ["All", "Developer", "Creator", "Driver", "Designer"]

  const filteredItems =
    selectedCategory === "All"
      ? DEMO_ITEMS
      : DEMO_ITEMS.filter((item) => item.category === selectedCategory)

  const totalSavings = filteredItems.reduce(
    (acc, curr) => acc + curr.taxSavings,
    0
  )

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <Badge
              variant="outline"
              className="mb-2 border-primary/50 font-mono text-primary"
            >
              <HugeiconsIcon icon={SparklesIcon} className="mr-1 size-3.5" />
              Interactive Write-Off Simulator
            </Badge>
            <CardTitle className="font-mono text-2xl font-bold">
              Real Write-Off vs. IRS Audit Trap
            </CardTitle>
            <CardDescription className="mt-1 text-muted-foreground">
              Click through real items freelancers try to write off. See what
              saves tax money and what gets rejected.
            </CardDescription>
          </div>
          <div className="rounded-lg bg-muted p-3 text-right font-mono">
            <div className="text-xs text-muted-foreground">
              Estimated Tax Savings
            </div>
            <div className="text-2xl font-bold text-primary tabular-nums">
              ${totalSavings.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Category Selector Buttons */}
        <div className="flex flex-wrap gap-2 pt-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              className="font-mono text-xs"
            >
              {cat}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "flex flex-col justify-between rounded-lg border p-4 transition-all",
                item.valid
                  ? "border-primary/40 bg-primary/5"
                  : "border-destructive/40 bg-destructive/5"
              )}
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    {item.item}
                  </h4>
                  {item.valid ? (
                    <span className="inline-flex items-center rounded-full bg-primary/20 px-2 py-0.5 font-mono text-xs font-medium text-primary">
                      <HugeiconsIcon
                        icon={CheckmarkCircle01Icon}
                        className="mr-1 size-3"
                      />
                      Legit
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-destructive/20 px-2 py-0.5 font-mono text-xs font-medium text-destructive">
                      <HugeiconsIcon
                        icon={Cancel01Icon}
                        className="mr-1 size-3"
                      />
                      Rejected
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.explanation}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 font-mono text-xs">
                <span className="text-muted-foreground">
                  Cost: ${item.cost.toLocaleString()}
                </span>
                <span
                  className={cn(
                    "font-bold tabular-nums",
                    item.valid ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.valid
                    ? `+ $${item.taxSavings} saved`
                    : "$0 tax savings"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
