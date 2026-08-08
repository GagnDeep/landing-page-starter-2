"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

export function NinetyDayTimeline({ fallback }: { fallback?: boolean }) {
  const [step, setStep] = useState(0)

  if (fallback) {
    return (
      <div className="flex max-w-2xl flex-col gap-8 border bg-background p-6">
        <h3 className="font-heading text-2xl font-bold uppercase">
          The 90-Day Setup
        </h3>
        <p>A static representation of the 90-day technology setup timeline.</p>
        <ul className="list-disc pl-6">
          <li>Day 90: Network installation and ISP setup.</li>
          <li>Day 60: Point of Sale ordering and menu mapping.</li>
          <li>Day 30: Staff training, permissions, and dry runs.</li>
        </ul>
      </div>
    )
  }

  const steps = [
    {
      day: 90,
      title: "Infrastructure",
      content:
        "Before any software runs, the physical network must be installed. This includes hardwired drops to every terminal and kitchen display system (KDS), plus a segregated dual-band mesh Wi-Fi for guest and back-of-house traffic. Do not run your POS over consumer-grade wireless.",
    },
    {
      day: 60,
      title: "POS & Menu Matrix",
      content:
        "Order the POS hardware. More importantly, begin the menu matrix build. This is the most time-consuming part of the setup. Every modifier, upcharge, tax bracket, and routing rule (e.g., bar vs. hot line) must be mapped exactly as service dictates.",
    },
    {
      day: 30,
      title: "Training & Dry Runs",
      content:
        "Hardware is installed. The menu is loaded. Now you run stress tests. Fire dozens of complicated tickets simultaneously to ensure the KDS routing is flawless. Assign staff pins, set permissions (voids, comps, discounts), and train the front-of-house on the exact flow of order entry.",
    },
  ]

  return (
    <div className="flex w-full max-w-2xl flex-col gap-6 border border-border bg-background p-6 shadow-sm">
      <div className="flex items-center justify-between border-b-2 border-foreground pb-4">
        <h3 className="font-heading text-xl font-bold tracking-tight uppercase">
          The 90-Day Timeline
        </h3>
        <div className="font-mono text-sm text-muted-foreground tabular-nums">
          Day {steps[step].day}
        </div>
      </div>

      <div className="flex min-h-[160px] flex-col gap-4">
        <h4 className="text-sm font-bold tracking-widest text-accent uppercase">
          {steps[step].title}
        </h4>
        <p className="leading-relaxed">{steps[step].content}</p>
      </div>

      <div className="mt-4 flex justify-between">
        <Button
          variant="outline"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
        >
          Previous
        </Button>
        <Button
          className="bg-accent text-accent-foreground hover:bg-accent/90"
          onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={step === steps.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
