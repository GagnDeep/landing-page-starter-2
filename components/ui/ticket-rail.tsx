import { cn } from "@/lib/utils"
import React from "react"

export function TicketRail({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "relative bg-card text-card-foreground p-6 font-mono",
      "before:absolute before:top-0 before:left-0 before:right-0 before:h-2 before:bg-[radial-gradient(circle,transparent_4px,var(--background)_4px)] before:bg-[length:12px_12px] before:bg-repeat-x before:-mt-1",
      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-2 after:bg-[radial-gradient(circle,transparent_4px,var(--background)_4px)] after:bg-[length:12px_12px] after:bg-repeat-x after:-mb-1",
      className
    )}>
      <div className="border-t-2 border-dashed border-border py-4">
        {children}
      </div>
    </div>
  )
}

export function TicketRailItem({ label, value, highlight = false }: { label: string, value: React.ReactNode, highlight?: boolean }) {
  return (
    <div className={cn("flex justify-between items-center py-2", highlight && "text-accent font-bold")}>
      <span className="uppercase text-sm tracking-tight">{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  )
}

export function TicketRailTotal({ label, value }: { label: string, value: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center py-4 mt-2 border-t-2 border-dashed border-border text-lg font-bold">
      <span className="uppercase tracking-tight">{label}</span>
      <span className="tabular-nums text-accent">{value}</span>
    </div>
  )
}
