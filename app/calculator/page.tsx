import { Suspense } from "react"
import { Badge } from "@/components/ui/badge"
import { TaxCalculatorWidget } from "@/components/calculator/tax-calculator-widget"

export const metadata = {
  title: "1099 Self-Employment Tax Calculator 2024 & 2025 | bro.tax",
  description:
    "Free interactive 1099 self-employment tax estimator. Calculates official 15.3% SE tax, Schedule SE 92.35% adjustment, 50% deduction, and 2025 quarterly estimated tax payments.",
}

export default function CalculatorPage() {
  return (
    <div className="container space-y-8 px-4 py-8 sm:px-8 md:py-12">
      <div className="max-w-3xl space-y-3">
        <Badge
          variant="outline"
          className="border-primary/50 font-mono text-xs text-primary"
        >
          Interactive Calculator • Official IRS Math
        </Badge>
        <h1 className="font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          1099 Self-Employment Tax Estimator
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Type in your gross freelance revenue and write-offs. Our calculator
          applies official 2024 and 2025 IRS Schedule SE rules (15.3%
          self-employment tax on 92.35% net profit), 50% SE tax deductions, and
          progressive federal brackets.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="font-mono text-sm text-muted-foreground">
            Loading calculator...
          </div>
        }
      >
        <TaxCalculatorWidget />
      </Suspense>
    </div>
  )
}
