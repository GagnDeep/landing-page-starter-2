import { cn } from "@/lib/utils"
import React from "react"

export function Prose({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("max-w-[70ch] text-[17px] leading-[1.6]", className)}>
      {children}
    </div>
  )
}
