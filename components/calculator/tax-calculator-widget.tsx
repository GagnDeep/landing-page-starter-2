"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calculator01Icon,
  InformationCircleIcon,
  ArrowRight01Icon,
  Calendar01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TaxCalculatorWidget() {
  const searchParams = useSearchParams()
  const initialGross = Number(searchParams?.get("gross")) || 95000
  const initialExpenses = Number(searchParams?.get("expenses")) || 18000

  const [grossIncome, setGrossIncome] = useState<number>(initialGross)
  const [expenses, setExpenses] = useState<number>(initialExpenses)
  const [taxYear, setTaxYear] = useState<"2025" | "2024">("2025")
  const [filingStatus, setFilingStatus] = useState<"single" | "mfj">("single")

  // Tax constants based on year
  const ssCap = taxYear === "2025" ? 176100 : 168600
  const standardDeduction =
    taxYear === "2025"
      ? filingStatus === "single"
        ? 15000
        : 30000
      : filingStatus === "single"
        ? 14600
        : 29200

  const calculations = useMemo(() => {
    const netProfit = Math.max(0, grossIncome - expenses)
    if (netProfit < 400) {
      return {
        netProfit,
        seTaxableBase: 0,
        socialSecurityTax: 0,
        medicareTax: 0,
        totalSeTax: 0,
        seTaxDeduction: 0,
        taxableIncome: 0,
        federalIncomeTax: 0,
        totalTaxLiability: 0,
        quarterlyPayment: 0,
        effectiveRate: 0,
      }
    }

    // Step 1: Schedule SE net base factor (92.35%)
    const seTaxableBase = netProfit * 0.9235

    // Step 2: Social Security tax (12.4% up to cap)
    const ssEligibleIncome = Math.min(seTaxableBase, ssCap)
    const socialSecurityTax = ssEligibleIncome * 0.124

    // Step 3: Medicare tax (2.9% on all SE base)
    const medicareTax = seTaxableBase * 0.029

    // Step 4: Total SE tax (15.3%)
    const totalSeTax = socialSecurityTax + medicareTax

    // Step 5: 50% SE tax deduction on Schedule 1 Line 15
    const seTaxDeduction = totalSeTax * 0.5

    // Step 6: Federal Taxable Income
    const taxableIncome = Math.max(
      0,
      netProfit - seTaxDeduction - standardDeduction
    )

    // Step 7: 2025 Progressive Federal Tax Brackets (Single)
    let federalIncomeTax = 0
    if (filingStatus === "single") {
      if (taxableIncome <= 11925) {
        federalIncomeTax = taxableIncome * 0.1
      } else if (taxableIncome <= 48475) {
        federalIncomeTax = 1192.5 + (taxableIncome - 11925) * 0.12
      } else if (taxableIncome <= 103350) {
        federalIncomeTax = 5578.5 + (taxableIncome - 48475) * 0.22
      } else if (taxableIncome <= 197300) {
        federalIncomeTax = 17651.0 + (taxableIncome - 103350) * 0.24
      } else {
        federalIncomeTax = 40199.0 + (taxableIncome - 197300) * 0.32
      }
    } else {
      // Married Filing Jointly
      if (taxableIncome <= 23850) {
        federalIncomeTax = taxableIncome * 0.1
      } else if (taxableIncome <= 96950) {
        federalIncomeTax = 2385 + (taxableIncome - 23850) * 0.12
      } else {
        federalIncomeTax = 11157 + (taxableIncome - 96950) * 0.22
      }
    }

    const totalTaxLiability = totalSeTax + federalIncomeTax
    const quarterlyPayment = totalTaxLiability / 4
    const effectiveRate =
      grossIncome > 0 ? (totalTaxLiability / grossIncome) * 100 : 0

    return {
      netProfit,
      seTaxableBase,
      socialSecurityTax,
      medicareTax,
      totalSeTax,
      seTaxDeduction,
      taxableIncome,
      federalIncomeTax,
      totalTaxLiability,
      quarterlyPayment,
      effectiveRate,
    }
  }, [grossIncome, expenses, ssCap, standardDeduction, filingStatus])

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* Input Controls Panel */}
      <div className="space-y-6 lg:col-span-5">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-mono text-xl font-bold">
              <HugeiconsIcon
                icon={Calculator01Icon}
                className="size-5 text-primary"
              />
              1099 Income & Write-Off Inputs
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              Adjust your gross 1099 earnings and business deductions to see
              real-time tax liabilities.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Year & Status Selectors */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div>
                <Label className="mb-1 block text-muted-foreground">
                  Tax Year
                </Label>
                <Tabs
                  value={taxYear}
                  onValueChange={(v) => setTaxYear(v as "2025" | "2024")}
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="2025">2025</TabsTrigger>
                    <TabsTrigger value="2024">2024</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div>
                <Label className="mb-1 block text-muted-foreground">
                  Status
                </Label>
                <Tabs
                  value={filingStatus}
                  onValueChange={(v) => setFilingStatus(v as "single" | "mfj")}
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="single">Single</TabsTrigger>
                    <TabsTrigger value="mfj">Joint</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="calc-gross"
                  className="font-mono text-xs text-muted-foreground uppercase"
                >
                  Gross 1099 Client Revenue ($)
                </Label>
                <Input
                  id="calc-gross"
                  type="number"
                  value={grossIncome}
                  onChange={(e) => setGrossIncome(Number(e.target.value) || 0)}
                  className="font-mono text-lg tabular-nums"
                  step={1000}
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="calc-expenses"
                  className="font-mono text-xs text-muted-foreground uppercase"
                >
                  Schedule C Business Write-Offs ($)
                </Label>
                <Input
                  id="calc-expenses"
                  type="number"
                  value={expenses}
                  onChange={(e) => setExpenses(Number(e.target.value) || 0)}
                  className="font-mono text-lg tabular-nums"
                  step={500}
                />
              </div>
            </div>

            {/* Quick Tips */}
            <div className="rounded-lg bg-muted p-3 font-mono text-xs leading-relaxed text-muted-foreground">
              <div className="mb-1 flex items-center gap-1 font-bold text-foreground">
                <HugeiconsIcon
                  icon={InformationCircleIcon}
                  className="size-4 text-primary"
                />
                Schedule C Math Tip:
              </div>
              Every $1,000 you log in legitimate write-offs saves approximately
              $273 in self-employment and income taxes.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Output Results Panel */}
      <div className="space-y-6 lg:col-span-7">
        {/* Key Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="border-2 border-primary bg-primary/5">
            <CardHeader className="pb-2">
              <CardDescription className="font-mono text-xs text-muted-foreground">
                Total Estimated Tax Owed
              </CardDescription>
              <CardTitle className="font-mono text-3xl font-extrabold text-foreground tabular-nums">
                ${Math.round(calculations.totalTaxLiability).toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent className="font-mono text-xs text-muted-foreground">
              Effective Total Tax Rate:{" "}
              <span className="font-bold text-primary">
                {calculations.effectiveRate.toFixed(1)}%
              </span>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="pb-2">
              <CardDescription className="font-mono text-xs text-muted-foreground">
                Quarterly Payment Target (Form 1040-ES)
              </CardDescription>
              <CardTitle className="font-mono text-3xl font-extrabold text-primary tabular-nums">
                ${Math.round(calculations.quarterlyPayment).toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent className="font-mono text-xs text-muted-foreground">
              Due April 15, June 16, Sept 15, Jan 15
            </CardContent>
          </Card>
        </div>

        {/* Detailed Itemized Tax Math Table */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="font-mono text-lg font-bold">
              Itemized Tax Calculation Breakdown ({taxYear})
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              Step-by-step audit trail based on official IRS Schedule SE and
              Form 1040 rules.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 font-mono text-xs">
            <div className="divide-y divide-border rounded-lg border border-border">
              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">
                  Gross 1099 Income:
                </span>
                <span className="font-bold text-foreground tabular-nums">
                  ${grossIncome.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">
                  (-) Business Write-Offs:
                </span>
                <span className="font-bold text-primary tabular-nums">
                  -${expenses.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between bg-muted/40 p-3">
                <span className="font-bold text-foreground">
                  (=) Net Schedule C Business Profit:
                </span>
                <span className="font-bold text-foreground tabular-nums">
                  ${Math.round(calculations.netProfit).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">
                  SE Tax Base (92.35% Schedule SE Factor):
                </span>
                <span className="font-medium text-foreground tabular-nums">
                  ${Math.round(calculations.seTaxableBase).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">
                  Social Security Tax (12.4% up to ${ssCap.toLocaleString()}):
                </span>
                <span className="font-medium text-destructive tabular-nums">
                  ${Math.round(calculations.socialSecurityTax).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">
                  Medicare Tax (2.9%):
                </span>
                <span className="font-medium text-destructive tabular-nums">
                  ${Math.round(calculations.medicareTax).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between bg-muted/40 p-3">
                <span className="font-bold text-foreground">
                  (=) Total Self-Employment Tax (15.3%):
                </span>
                <span className="font-bold text-destructive tabular-nums">
                  ${Math.round(calculations.totalSeTax).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">
                  50% SE Tax Deduction (Schedule 1 Line 15):
                </span>
                <span className="font-medium text-primary tabular-nums">
                  -${Math.round(calculations.seTaxDeduction).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">
                  Standard Deduction (
                  {filingStatus === "single" ? "Single" : "Joint"}):
                </span>
                <span className="font-medium text-primary tabular-nums">
                  -${standardDeduction.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between bg-muted/40 p-3">
                <span className="font-bold text-foreground">
                  (=) Federal Taxable Income Base:
                </span>
                <span className="font-bold text-foreground tabular-nums">
                  ${Math.round(calculations.taxableIncome).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between p-3">
                <span className="text-muted-foreground">
                  Federal Progressive Income Tax:
                </span>
                <span className="font-medium text-destructive tabular-nums">
                  ${Math.round(calculations.federalIncomeTax).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between border-t-2 border-primary bg-primary/10 p-3">
                <span className="text-sm font-extrabold text-foreground">
                  TOTAL ESTIMATED TAX LIABILITY:
                </span>
                <span className="text-sm font-extrabold text-foreground tabular-nums">
                  ${Math.round(calculations.totalTaxLiability).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Quarterly Payment Schedule */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                <HugeiconsIcon
                  icon={Calendar01Icon}
                  className="size-4 text-primary"
                />
                2025 Quarterly Estimated Tax Schedule (Form 1040-ES)
              </div>
              <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-4">
                <div className="rounded border border-border bg-card p-2">
                  <div className="text-muted-foreground">Q1 Due</div>
                  <div className="font-bold text-foreground">Apr 15, 2025</div>
                  <div className="pt-1 font-bold text-primary">
                    $
                    {Math.round(calculations.quarterlyPayment).toLocaleString()}
                  </div>
                </div>
                <div className="rounded border border-border bg-card p-2">
                  <div className="text-muted-foreground">Q2 Due</div>
                  <div className="font-bold text-foreground">Jun 16, 2025</div>
                  <div className="pt-1 font-bold text-primary">
                    $
                    {Math.round(calculations.quarterlyPayment).toLocaleString()}
                  </div>
                </div>
                <div className="rounded border border-border bg-card p-2">
                  <div className="text-muted-foreground">Q3 Due</div>
                  <div className="font-bold text-foreground">Sep 15, 2025</div>
                  <div className="pt-1 font-bold text-primary">
                    $
                    {Math.round(calculations.quarterlyPayment).toLocaleString()}
                  </div>
                </div>
                <div className="rounded border border-border bg-card p-2">
                  <div className="text-muted-foreground">Q4 Due</div>
                  <div className="font-bold text-foreground">Jan 15, 2026</div>
                  <div className="pt-1 font-bold text-primary">
                    $
                    {Math.round(calculations.quarterlyPayment).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button asChild size="lg" className="w-full font-mono font-bold">
                <Link href="/pricing">
                  Lock In Flat $199 CPA Filing & Save
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="ml-2 size-5"
                  />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
