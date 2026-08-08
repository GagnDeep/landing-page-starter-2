import { cn } from "@/lib/utils"

interface FilingCalloutProps {
  docket: string
  date: string
  children: React.ReactNode
  className?: string
}

export function FilingCallout({
  docket,
  date,
  children,
  className,
}: FilingCalloutProps) {
  return (
    <div
      className={cn(
        "flex flex-col border border-border bg-background",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2 font-mono text-xs tracking-wider text-muted-foreground uppercase">
        <span>{docket}</span>
        <span>{date}</span>
      </div>
      <div className="p-4 text-sm leading-relaxed text-foreground">
        {children}
      </div>
    </div>
  )
}
