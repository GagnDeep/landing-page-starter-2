import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Step {
  title: string
  body: string
  requirements?: string
  sourceLink?: string
  sourceLabel?: string
}

export function StepLadder({
  steps,
  className,
}: {
  steps: Step[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative ml-6 space-y-16 border-l border-border py-4 pl-10",
        className
      )}
    >
      {steps.map((step, idx) => (
        <div key={idx} className="relative">
          <div className="absolute -left-[58px] flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-background">
            <span className="font-heading text-3xl text-primary">
              {idx + 1}
            </span>
          </div>
          <div className="mb-2">
            <h3 className="font-heading text-3xl tracking-tight text-foreground">
              {step.title}
            </h3>
          </div>
          <p className="mb-4 max-w-[70ch] text-[18px] leading-[1.7] text-muted-foreground">
            {step.body}
          </p>
          {step.requirements && (
            <div className="mb-4 rounded-[0.375rem] border border-border bg-muted px-4 py-3 font-mono text-sm text-foreground">
              {step.requirements}
            </div>
          )}
          {step.sourceLink && step.sourceLabel && (
            <Link
              href={step.sourceLink}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {step.sourceLabel}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}
