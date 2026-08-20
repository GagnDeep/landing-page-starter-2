"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calculator01Icon,
  InformationCircleIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

export interface TaxCalculationResult {
  taxYear: "2024" | "2025"
  gross1099: number
  businessExpenses: number
  netSelfEmploymentIncome: number
  seTaxableEarnings: number
  socialSecurityTax: number
  medicareTax: number
  totalSelfEmploymentTax: number
  seTaxDeduction: number
  standardDeduction: number
  qbiDeduction: number
  taxableIncome: number
  federalIncomeTax: number
  totalTaxOwed: number
  effectiveTaxRate: number
  marginalTaxBracket: number
  monthlyEstimatedPayment: number
  quarterlyEstimatedPayment: number
  netTakeHome: number
}

// IRS Tax Bracket Constants from official Rev. Proc. 2023-34 and 2024-40
const TAX_RATES_2024 = {
  standardDeductionSingle: 14600,
  ssWageCap: 168600,
  bracketsSingle: [
    { limit: 11600, rate: 0.1 },
    { limit: 47150, rate: 0.12 },
    { limit: 100525, rate: 0.22 },
    { limit: 191950, rate: 0.24 },
    { limit: 243725, rate: 0.32 },
    { limit: 609350, rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ],
}

const TAX_RATES_2025 = {
  standardDeductionSingle: 15000,
  ssWageCap: 176100,
  bracketsSingle: [
    { limit: 11925, rate: 0.1 },
    { limit: 48475, rate: 0.12 },
    { limit: 103350, rate: 0.22 },
    { limit: 197300, rate: 0.24 },
    { limit: 250525, rate: 0.32 },
    { limit: 626350, rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ],
}

export function calculateSelfEmployedTax(
  gross1099: number,
  expenses: number,
  taxYear: "2024" | "2025" = "2025"
): TaxCalculationResult {
  const rates = taxYear === "2025" ? TAX_RATES_2025 : TAX_RATES_2024
  const netSelfEmploymentIncome = Math.max(0, gross1099 - expenses)

  // 1. Self-Employment Tax (Schedule SE)
  // Net earnings from self-employment subject to SE tax = Net Profit * 0.9235
  const seTaxableEarnings = netSelfEmploymentIncome * 0.9235

  // Social Security: 12.4% up to cap
  const ssEarnings = Math.min(seTaxableEarnings, rates.ssWageCap)
  const socialSecurityTax = ssEarnings * 0.124

  // Medicare: 2.9% with no cap
  const medicareTax = seTaxableEarnings * 0.029
  const totalSelfEmploymentTax = socialSecurityTax + medicareTax

  // 2. Above-the-line Deduction for 1/2 of SE Tax
  const seTaxDeduction = totalSelfEmploymentTax * 0.5

  // 3. Adjusted Gross Income (AGI) Estimation
  const agi = Math.max(0, netSelfEmploymentIncome - seTaxDeduction)

  // 4. Qualified Business Income (QBI) Deduction (IRC Sec 199A)
  // Simplified 20% of net QBI deduction estimation
  const qbiDeduction = Math.max(
    0,
    (netSelfEmploymentIncome - seTaxDeduction) * 0.2
  )

  // 5. Taxable Income
  const standardDeduction = rates.standardDeductionSingle
  const taxableIncome = Math.max(0, agi - standardDeduction - qbiDeduction)

  // 6. Progressive Federal Income Tax Calculation
  let federalIncomeTax = 0
  let marginalBracket = 0.1
  let previousLimit = 0

  for (const bracket of rates.bracketsSingle) {
    if (taxableIncome > previousLimit) {
      const taxableInBracket = Math.min(
        taxableIncome - previousLimit,
        bracket.limit - previousLimit
      )
      federalIncomeTax += taxableInBracket * bracket.rate
      marginalBracket = bracket.rate
      previousLimit = bracket.limit
    } else {
      break
    }
  }

  const totalTaxOwed = totalSelfEmploymentTax + federalIncomeTax
  const effectiveTaxRate =
    netSelfEmploymentIncome > 0
      ? (totalTaxOwed / netSelfEmploymentIncome) * 100
      : 0
  const quarterlyEstimatedPayment = totalTaxOwed / 4
  const monthlyEstimatedPayment = totalTaxOwed / 12
  const netTakeHome = netSelfEmploymentIncome - totalTaxOwed

  return {
    taxYear,
    gross1099,
    businessExpenses: expenses,
    netSelfEmploymentIncome,
    seTaxableEarnings,
    socialSecurityTax,
    medicareTax,
    totalSelfEmploymentTax,
    seTaxDeduction,
    standardDeduction,
    qbiDeduction,
    taxableIncome,
    federalIncomeTax,
    totalTaxOwed,
    effectiveTaxRate,
    marginalTaxBracket: marginalBracket * 100,
    monthlyEstimatedPayment,
    quarterlyEstimatedPayment,
    netTakeHome,
  }
}

export function TaxCalculator({
  initialGross = 75000,
  initialExpenses = 12000,
}: {
  initialGross?: number
  initialExpenses?: number
}) {
  const [gross, setGross] = React.useState<number>(initialGross)
  const [expenses, setExpenses] = React.useState<number>(initialExpenses)
  const [taxYear, setTaxYear] = React.useState<"2024" | "2025">("2025")

  const result = React.useMemo(() => {
    return calculateSelfEmployedTax(gross, expenses, taxYear)
  }, [gross, expenses, taxYear])

  return (
    <div className="ledger-card mx-auto w-full max-w-4xl space-y-8 p-6 md:p-8">
      <div className="ledger-rail" />

      {/* Header & Mode Switcher */}
      <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={Calculator01Icon}
              className="size-5 text-primary"
            />
            <h2 className="font-mono text-xl font-bold tracking-tight uppercase">
              1099 Self-Employment Tax Estimator
            </h2>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Calculates 15.3% SE Tax, Progressive Income Tax, and 20% QBI
            Deduction for Tax Year {taxYear}.
          </p>
        </div>

        <div className="flex items-center rounded-md border border-border bg-muted p-1">
          <button
            onClick={() => setTaxYear("2024")}
            className={cn(
              "cursor-pointer rounded-xs px-3 py-1 font-mono text-xs font-semibold transition-colors",
              taxYear === "2024"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            TY 2024
          </button>
          <button
            onClick={() => setTaxYear("2025")}
            className={cn(
              "cursor-pointer rounded-xs px-3 py-1 font-mono text-xs font-semibold transition-colors",
              taxYear === "2025"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            TY 2025 (Current)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Controls Column */}
        <div className="space-y-6 lg:col-span-5">
          <div className="space-y-2">
            <div className="flex justify-between font-mono text-xs">
              <label
                htmlFor="gross-1099-input"
                className="font-semibold text-foreground"
              >
                Gross 1099 Income
              </label>
              <span className="font-bold text-primary">
                ${gross.toLocaleString()}
              </span>
            </div>
            <input
              id="gross-1099-input"
              type="range"
              min={10000}
              max={250000}
              step={1000}
              value={gross}
              onChange={(e) => setGross(Number(e.target.value))}
              className="h-2 w-full cursor-pointer rounded-lg bg-muted accent-primary"
            />
            <div className="relative mt-1">
              <span className="absolute top-2 left-3 font-mono text-xs text-muted-foreground">
                $
              </span>
              <input
                type="number"
                value={gross}
                onChange={(e) => setGross(Math.max(0, Number(e.target.value)))}
                className="w-full rounded-md border border-border bg-background py-1.5 pr-3 pl-7 font-mono text-sm focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between font-mono text-xs">
              <label
                htmlFor="expenses-input"
                className="font-semibold text-foreground"
              >
                Deductible Expenses
              </label>
              <span className="font-bold text-primary">
                -${expenses.toLocaleString()}
              </span>
            </div>
            <input
              id="expenses-input"
              type="range"
              min={0}
              max={Math.min(100000, gross)}
              step={500}
              value={expenses}
              onChange={(e) => setExpenses(Number(e.target.value))}
              className="h-2 w-full cursor-pointer rounded-lg bg-muted accent-primary"
            />
            <div className="relative mt-1">
              <span className="absolute top-2 left-3 font-mono text-xs text-muted-foreground">
                $
              </span>
              <input
                type="number"
                value={expenses}
                onChange={(e) =>
                  setExpenses(Math.max(0, Number(e.target.value)))
                }
                className="w-full rounded-md border border-border bg-background py-1.5 pr-3 pl-7 font-mono text-sm focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2 rounded-md border border-border bg-muted/40 p-4 font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 font-bold text-foreground">
              <HugeiconsIcon
                icon={SparklesIcon}
                className="size-4 text-primary"
              />
              <span>Automatic Savings Applied</span>
            </div>
            <div className="flex justify-between">
              <span>20% QBI Deduction:</span>
              <span className="font-bold text-foreground">
                ${Math.round(result.qbiDeduction).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Standard Deduction:</span>
              <span className="font-bold text-foreground">
                ${result.standardDeduction.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>1/2 SE Tax Offset:</span>
              <span className="font-bold text-foreground">
                ${Math.round(result.seTaxDeduction).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Results Thermal Ledger Column */}
        <div className="relative space-y-6 rounded-md border border-border bg-card p-6 lg:col-span-7">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Estimated Total Tax Owed
              </span>
              <div className="mt-1 font-mono text-3xl font-black tracking-tight text-foreground md:text-4xl">
                ${Math.round(result.totalTaxOwed).toLocaleString()}
              </div>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Effective Rate
              </span>
              <div className="mt-1 font-mono text-2xl font-bold text-primary">
                {result.effectiveTaxRate.toFixed(1)}%
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 border-b border-border pb-4 font-mono text-xs">
            <div className="space-y-1 rounded-md border border-border bg-muted/30 p-3">
              <span className="text-[10px] text-muted-foreground uppercase">
                Quarterly Payment
              </span>
              <div className="text-base font-bold text-foreground">
                ${Math.round(result.quarterlyEstimatedPayment).toLocaleString()}
              </div>
              <span className="text-[10px] text-muted-foreground">
                Due Apr, Jun, Sep, Jan
              </span>
            </div>
            <div className="space-y-1 rounded-md border border-border bg-muted/30 p-3">
              <span className="text-[10px] text-muted-foreground uppercase">
                Net Take-Home Pay
              </span>
              <div className="text-base font-bold text-primary">
                ${Math.round(result.netTakeHome).toLocaleString()}
              </div>
              <span className="text-[10px] text-muted-foreground">
                Real spendable cash
              </span>
            </div>
          </div>

          {/* Breakdown Ledger Table */}
          <div className="space-y-2 font-mono text-xs">
            <div className="flex justify-between border-b border-dashed border-border py-1">
              <span className="text-muted-foreground">Net 1099 Profit:</span>
              <span className="font-semibold text-foreground">
                ${result.netSelfEmploymentIncome.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between border-b border-dashed border-border py-1">
              <span className="text-muted-foreground">
                Self-Employment Tax (15.3%):
              </span>
              <span className="font-semibold text-destructive">
                ${Math.round(result.totalSelfEmploymentTax).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between border-b border-dashed border-border py-1">
              <span className="text-muted-foreground">
                Federal Income Tax ({result.marginalTaxBracket}% Top Bracket):
              </span>
              <span className="font-semibold text-destructive">
                ${Math.round(result.federalIncomeTax).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-md border border-border bg-muted/50 p-3 text-[11px] text-muted-foreground">
            <HugeiconsIcon
              icon={InformationCircleIcon}
              className="mt-0.5 size-4 shrink-0 text-primary"
            />
            <p className="leading-normal">
              <strong>Official Disclaimer:</strong> Tax Year {taxYear}{" "}
              single-filer estimation. Includes 15.3% SE tax, 20% QBI deduction,
              and standard deduction ($
              {result.standardDeduction.toLocaleString()}). Does not include
              state income taxes. Educational tool, not formal tax advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
