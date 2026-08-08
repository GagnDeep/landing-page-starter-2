import { cn } from "@/lib/utils"

interface TicketItem {
  label: string
  value: string
  highlight?: boolean
}

interface TicketRailProps {
  title?: string
  eyebrow?: string
  items: TicketItem[]
  totalLabel?: string
  totalValue?: string
  className?: string
  action?: React.ReactNode
}

export function TicketRail({
  title,
  eyebrow,
  items,
  totalLabel,
  totalValue,
  className,
  action,
}: TicketRailProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-sm overflow-hidden border border-border bg-background p-6 shadow-sm",
        "ticket-rail-mask",
        className
      )}
      style={{
        maskImage:
          "radial-gradient(circle at top, transparent 4px, black 4px), radial-gradient(circle at bottom, transparent 4px, black 4px)",
        maskSize: "100% 100%, 100% 100%",
        maskPosition: "top, bottom",
        maskRepeat: "repeat-x, repeat-x",
        WebkitMaskImage:
          "radial-gradient(circle at top, transparent 4px, black 5px), radial-gradient(circle at bottom, transparent 4px, black 5px)",
        WebkitMaskSize: "12px 100%, 12px 100%",
        WebkitMaskPosition: "top left, bottom left",
        WebkitMaskRepeat: "repeat-x, repeat-x",
      }}
    >
      {/* Top perforation spacer */}
      <div className="h-4" />

      <div className="flex flex-col gap-4 font-mono text-sm">
        {eyebrow && (
          <div className="text-center text-xs font-bold tracking-widest text-muted-foreground uppercase">
            {eyebrow}
          </div>
        )}

        {title && (
          <h3 className="border-b-2 border-foreground pb-4 text-center font-heading text-xl font-bold tracking-tight uppercase">
            {title}
          </h3>
        )}

        <div className="flex flex-col gap-2 pt-2">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-baseline justify-between gap-4",
                item.highlight && "font-bold text-accent"
              )}
            >
              <span className="truncate">{item.label}</span>
              <span className="whitespace-nowrap tabular-nums">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {(totalLabel || totalValue) && (
          <div className="mt-4 flex items-baseline justify-between border-t border-dashed border-border pt-4 font-bold">
            <span>{totalLabel || "TOTAL"}</span>
            <span className="tabular-nums">{totalValue}</span>
          </div>
        )}

        {action && <div className="mt-6">{action}</div>}
      </div>

      {/* Bottom perforation spacer */}
      <div className="h-4" />
    </div>
  )
}
