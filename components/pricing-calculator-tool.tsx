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
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="border-b pb-4 font-heading text-xl font-medium">
          Input Costs
        </h2>

        <div className="space-y-4">
          <div className="grid gap-2">
            <label htmlFor="guests" className="text-sm font-medium">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value) || 0)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              min="1"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="foodCost" className="text-sm font-medium">
              Food Cost per Guest ($)
            </label>
            <input
              type="number"
              id="foodCost"
              value={foodCostPerGuest}
              onChange={(e) => setFoodCostPerGuest(Number(e.target.value) || 0)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              min="0"
              step="0.5"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="laborCost" className="text-sm font-medium">
              Total Labor Cost ($)
            </label>
            <input
              type="number"
              id="laborCost"
              value={laborCost}
              onChange={(e) => setLaborCost(Number(e.target.value) || 0)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              min="0"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="rentals" className="text-sm font-medium">
              Rentals & Misc ($)
            </label>
            <input
              type="number"
              id="rentals"
              value={rentals}
              onChange={(e) => setRentals(Number(e.target.value) || 0)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              min="0"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="margin" className="text-sm font-medium">
              Target Profit Margin (%)
            </label>
            <input
              type="number"
              id="margin"
              value={targetMargin}
              onChange={(e) => setTargetMargin(Number(e.target.value) || 0)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              min="1"
              max="99"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between space-y-6 rounded-lg border bg-primary p-6 text-primary-foreground shadow-sm">
        <div>
          <h2 className="border-b border-primary-foreground/20 pb-4 font-heading text-xl font-medium">
            Results
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-sm text-primary-foreground/80">
              <span>Total Food Cost</span>
              <span className="font-mono">${totalFoodCost.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-primary-foreground/80">
              <span>Direct Costs (Food + Labor + Rentals)</span>
              <span className="font-mono">${totalDirectCost.toFixed(2)}</span>
            </div>

            <div className="border-t border-primary-foreground/20 pt-4">
              <div className="mb-1 flex items-center justify-between">
                <span className="font-medium">Recommended Price to Client</span>
                <span className="font-heading text-2xl font-bold">
                  ${recommendedPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-primary-foreground/80">
                <span>Price Per Guest</span>
                <span className="font-mono">${pricePerGuest.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 pt-4">
              <div className="flex items-center justify-between text-accent">
                <span className="font-medium">Estimated Profit</span>
                <span className="font-heading text-xl font-bold">
                  ${estimatedProfit.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-md bg-primary-foreground/10 p-4 text-sm text-primary-foreground/70">
          <p>
            This calculator uses the margin pricing formula: Price = Cost / (1 -
            Margin%). Do not confuse markup with margin.
          </p>
        </div>
      </div>
    </div>
  )
}
