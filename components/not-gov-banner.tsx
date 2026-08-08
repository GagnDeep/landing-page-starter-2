import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { InformationSquareIcon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

export function NotGovBanner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-muted px-4 py-3 text-sm text-muted-foreground",
        className
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center gap-3">
        <HugeiconsIcon
          icon={InformationSquareIcon}
          className="size-5 shrink-0"
        />
        <p>
          <strong>Independent Resource:</strong> This site is an independent
          educational explainer and is not affiliated with, endorsed by, or
          representing any United States government agency.
        </p>
      </div>
    </div>
  )
}
