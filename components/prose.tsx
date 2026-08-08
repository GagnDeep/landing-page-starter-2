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
    <div
      className={cn(
        "prose prose-slate prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-[17px] prose-p:leading-[1.7] prose-a:text-accent hover:prose-a:underline max-w-none text-foreground",
        className
      )}
    >
      {children}
    </div>
  )
}
