import { cn } from "@/lib/utils"

interface PanelProps {
  label: string
  value: string | React.ReactNode
  status?: "compliant" | "unverified" | "neutral" | "deadline"
  reference?: string
  className?: string
}

export function ReadoutCell({
  label,
  value,
  status = "neutral",
  reference,
  className,
}: PanelProps) {
  const statusColor = {
    compliant: "bg-accent text-accent-foreground",
    unverified: "bg-secondary text-secondary-foreground",
    deadline: "bg-secondary text-secondary-foreground",
    neutral: "bg-muted text-muted-foreground",
  }[status]

  return (
    <div className={cn("flex flex-col gap-1 rounded-md border p-3", className)}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium tracking-tight text-muted-foreground uppercase">
          {label}
        </span>
        {reference && (
          <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
            {reference}
          </span>
        )}
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span className="font-mono text-sm font-medium text-foreground tabular-nums sm:text-base">
          {value}
        </span>
        {status !== "neutral" && (
          <span
            className={cn(
              "rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase",
              statusColor
            )}
          >
            {status}
          </span>
        )}
      </div>
    </div>
  )
}

export function InstrumentPanel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "grid gap-4 rounded-lg border bg-card p-4 shadow-sm sm:grid-cols-2 md:p-6 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  )
}
