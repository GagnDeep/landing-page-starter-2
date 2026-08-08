import { cn } from "@/lib/utils"
import { AsOfStamp } from "./as-of-stamp"

type TearsheetProps = {
  toolName: string
  trackingStartDate: string | null
  holdingPeriod: string | null
  returnVsBenchmark: number | null
  sampleSize: number | null
  footnoteRef: number
  className?: string
}

export function Tearsheet({
  toolName,
  trackingStartDate,
  holdingPeriod,
  returnVsBenchmark,
  sampleSize,
  footnoteRef,
  className,
}: TearsheetProps) {
  const hasData = trackingStartDate && returnVsBenchmark !== null

  return (
    <div className={cn("flex flex-col border border-border p-6", className)}>
      <div className="mb-4 flex items-baseline justify-between border-b pb-4">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {toolName}
        </h3>
        {hasData && trackingStartDate && <AsOfStamp date={trackingStartDate} />}
      </div>

      {!hasData ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            NO DATA YET — tracking begins {trackingStartDate || "TBD"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Return vs S&P
            </span>
            <div className="flex items-baseline gap-1 font-mono">
              <span
                className={cn(
                  "text-2xl",
                  returnVsBenchmark > 0
                    ? "text-[var(--chart-1)]"
                    : "text-[var(--chart-2)]"
                )}
              >
                {returnVsBenchmark > 0 ? "+" : ""}
                {returnVsBenchmark}%
              </span>
              <a
                href="#methodology"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                [{footnoteRef}]
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Tracking Since
            </span>
            <span className="font-mono text-lg text-foreground">
              {trackingStartDate}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Holding Period
            </span>
            <span className="font-mono text-lg text-foreground">
              {holdingPeriod}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Sample Size
            </span>
            <span className="font-mono text-lg text-foreground">
              {sampleSize} picks
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
