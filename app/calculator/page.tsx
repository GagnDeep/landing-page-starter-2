import { TaxCalculator } from "@/components/tax-calculator"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "1099 Tax Calculator 2024 & 2025 | bro.tax",
  description:
    "Free instant self-employment tax calculator for freelancers, creators, gig workers, and crypto traders. Calculates 15.3% SE tax, QBI deduction, and income tax.",
}

export default function CalculatorPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
          Interactive Self-Employment Engine
        </span>
        <h1 className="font-mono text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          1099 Self-Employment Tax Estimator
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Input your estimated gross 1099 revenue and ordinary business expenses
          to get an instant, exact breakdown of your federal income tax,
          self-employment tax, quarterly payment schedule, and net take-home
          pay.
        </p>
      </div>

      <TaxCalculator initialGross={85000} initialExpenses={15000} />
    </div>
  )
}
