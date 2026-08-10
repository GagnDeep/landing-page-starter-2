import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Prose({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("prose-measure text-body mx-auto space-y-6", className)}>
      {children}
    </div>
  )
}
