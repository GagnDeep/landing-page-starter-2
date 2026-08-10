"use client"

import { useState } from "react"

export function PricingCalculatorTool() {
  const [guests, setGuests] = useState<number>(100)
  const [foodCostPerGuest, setFoodCostPerGuest] = useState<number>(25)
  const [laborCost, setLaborCost] = useState<number>(500)
  const [rentals, setRentals] = useState<number>(300)
  const [targetMargin, setTargetMargin] = useState<number>(30)

  // Calculations
  const totalFoodCost = guests * foodCostPerGuest
  const totalDirectCost = totalFoodCost + laborCost + rentals

  // Margin calculation: Price = Cost / (1 - Margin%)
  const recommendedPrice = totalDirectCost / (1 - targetMargin / 100)
  const pricePerGuest = recommendedPrice / guests
  const estimatedProfit = recommendedPrice - totalDirectCost

  return (
    <div className="grid gap-0 overflow-hidden rounded-2xl border bg-background shadow-md lg:grid-cols-2">
      <div className="space-y-6 border-border p-8 lg:border-r lg:p-12">
        <h2 className="mb-8 font-heading text-2xl font-semibold break-words">
          Direct Costs & Goals
        </h2>

        <div className="space-y-6">
          <div className="grid gap-2">
            <label
              htmlFor="guests"
              className="text-sm font-semibold tracking-wide break-words text-muted-foreground uppercase"
            >
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value) || 0)}
              className="flex h-12 w-full rounded-lg border-2 border-muted bg-background px-4 py-2 font-mono text-base transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              min="1"
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="foodCost"
              className="text-sm font-semibold tracking-wide break-words text-muted-foreground uppercase"
            >
              Food Cost per Guest ($)
            </label>
            <input
              type="number"
              id="foodCost"
              value={foodCostPerGuest}
              onChange={(e) => setFoodCostPerGuest(Number(e.target.value) || 0)}
              className="flex h-12 w-full rounded-lg border-2 border-muted bg-background px-4 py-2 font-mono text-base transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              min="0"
              step="0.5"
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="laborCost"
              className="text-sm font-semibold tracking-wide break-words text-muted-foreground uppercase"
            >
              Total Labor Cost ($)
            </label>
            <input
              type="number"
              id="laborCost"
              value={laborCost}
              onChange={(e) => setLaborCost(Number(e.target.value) || 0)}
              className="flex h-12 w-full rounded-lg border-2 border-muted bg-background px-4 py-2 font-mono text-base transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              min="0"
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="rentals"
              className="text-sm font-semibold tracking-wide break-words text-muted-foreground uppercase"
            >
              Rentals & Misc ($)
            </label>
            <input
              type="number"
              id="rentals"
              value={rentals}
              onChange={(e) => setRentals(Number(e.target.value) || 0)}
              className="flex h-12 w-full rounded-lg border-2 border-muted bg-background px-4 py-2 font-mono text-base transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              min="0"
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="margin"
              className="text-sm font-semibold tracking-wide break-words text-muted-foreground uppercase"
            >
              Target Profit Margin (%)
            </label>
            <input
              type="number"
              id="margin"
              value={targetMargin}
              onChange={(e) => setTargetMargin(Number(e.target.value) || 0)}
              className="flex h-12 w-full rounded-lg border-2 border-muted bg-background px-4 py-2 font-mono text-base transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              min="1"
              max="99"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-primary p-8 text-primary-foreground lg:p-12">
        <div>
          <h2 className="mb-8 font-heading text-2xl font-semibold break-words text-primary-foreground">
            The Prep Sheet
          </h2>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary-foreground/20 pb-4 text-primary-foreground/90">
              <span className="font-medium tracking-wide break-words">
                Total Food Cost
              </span>
              <span className="truncate font-mono text-lg">
                ${totalFoodCost.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-primary-foreground/20 pb-4 text-primary-foreground/90">
              <span className="font-medium tracking-wide break-words">
                Total Direct Costs
              </span>
              <span className="truncate font-mono text-lg">
                ${totalDirectCost.toFixed(2)}
              </span>
            </div>

            <div className="pt-6">
              <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <span className="text-lg font-medium break-words text-primary-foreground/80">
                  Recommended Price
                </span>
                <span className="truncate font-heading text-4xl font-bold tracking-tight lg:text-5xl">
                  ${recommendedPrice.toFixed(2)}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-primary-foreground/80">
                <span className="tracking-wide break-words">
                  Price Per Guest
                </span>
                <span className="truncate font-mono">
                  ${pricePerGuest.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-4 border-t-2 border-primary-foreground/30 pt-8">
              <div className="flex flex-wrap items-center justify-between gap-2 text-accent">
                <span className="text-lg font-medium tracking-wider break-words uppercase">
                  Estimated Profit
                </span>
                <span className="truncate font-heading text-2xl font-bold">
                  ${estimatedProfit.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-primary-foreground/10 bg-black/10 p-5 text-sm leading-relaxed break-words text-primary-foreground/70">
          <p>
            This calculator uses the margin pricing formula:{" "}
            <strong className="font-mono font-medium text-primary-foreground/90">
              Price = Cost / (1 - Margin%)
            </strong>
            . Do not confuse markup with margin.
          </p>
        </div>
      </div>
    </div>
  )
}
