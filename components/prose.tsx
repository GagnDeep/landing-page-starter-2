import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export function Prose({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "prose max-w-none text-body prose-slate dark:prose-invert",
        className
      )}
    >
      {children}
    </div>
  )
}
