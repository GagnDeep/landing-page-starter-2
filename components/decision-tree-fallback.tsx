import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function DecisionTreeFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[0.375rem] border border-border bg-background p-8",
        className
      )}
    >
      <h2 className="mb-6 font-heading text-3xl">Determine Your Path</h2>
      <p className="mb-8 text-xl font-medium text-foreground">
        What is your primary commercial aerospace objective?
      </p>
      <div className="flex flex-col gap-4">
        <div className="rounded-[0.375rem] border border-border bg-muted px-6 py-4">
          Loading interactive assessment...
        </div>
        <noscript>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              Please enable JavaScript to use the interactive assessment tool.
            </p>
            <p className="mt-2">Alternatively, browse our guides:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                <Link
                  href="/guides/sam-gov-registration/"
                  className="text-accent underline hover:no-underline"
                >
                  SAM.gov Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/cage-code/"
                  className="text-accent underline hover:no-underline"
                >
                  CAGE Code Breakdown
                </Link>
              </li>
            </ul>
          </div>
        </noscript>
      </div>
    </div>
  )
}
