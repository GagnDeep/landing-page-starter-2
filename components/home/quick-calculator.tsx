"use client"

import { useState } from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Calculator01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
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

export function QuickCalculator() {
  const [grossIncome, setGrossIncome] = useState<number>(85000)
  const [expenses, setExpenses] = useState<number>(15000)

  const netIncome = Math.max(0, grossIncome - expenses)
  // IRS Schedule SE Math: 92.35% * 15.3%
  const seTaxableBase = netIncome * 0.9235
  const seTax = seTaxableBase * 0.153
  const quarterlyEstimated = seTax / 4

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-mono text-2xl font-bold">
          <HugeiconsIcon
            icon={Calculator01Icon}
            className="size-6 text-primary"
          />
          Instant 1099 Tax Estimator
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Calculates official 15.3% Self-Employment tax based on 92.35% Schedule
          C net base.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label
              htmlFor="quick-gross"
              className="font-mono text-xs text-muted-foreground uppercase"
            >
              Gross 1099 Income ($)
            </Label>
            <Input
              id="quick-gross"
              type="number"
              value={grossIncome}
              onChange={(e) => setGrossIncome(Number(e.target.value) || 0)}
              className="font-mono text-lg tabular-nums"
              step={1000}
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="quick-expenses"
              className="font-mono text-xs text-muted-foreground uppercase"
            >
              Business Write-Offs ($)
            </Label>
            <Input
              id="quick-expenses"
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(Number(e.target.value) || 0)}
              className="font-mono text-lg tabular-nums"
              step={500}
            />
          </div>
        </div>

        {/* Breakdown Output */}
        <div className="grid gap-3 rounded-lg bg-muted p-4 font-mono sm:grid-cols-3">
          <div>
            <div className="text-xs text-muted-foreground">
              Net Schedule C Income
            </div>
            <div className="text-lg font-bold text-foreground tabular-nums">
              ${Math.round(netIncome).toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">
              Est. 15.3% SE Tax
            </div>
            <div className="text-lg font-bold text-destructive tabular-nums">
              ${Math.round(seTax).toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">
              Quarterly Payment Target
            </div>
            <div className="text-lg font-bold text-primary tabular-nums">
              ${Math.round(quarterlyEstimated).toLocaleString()}/qtr
            </div>
          </div>
        </div>

        <Button asChild className="w-full font-mono font-medium">
          <Link href={`/calculator?gross=${grossIncome}&expenses=${expenses}`}>
            See Full Federal & State Breakdown
            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
