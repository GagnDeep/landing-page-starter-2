import { cn } from "@/lib/utils"

export function AsOfStamp({
  date,
  className,
}: {
  date: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "font-mono text-xs tracking-wider text-muted-foreground uppercase",
        className
      )}
    >
      Data as of {date}
    </div>
  )
}
