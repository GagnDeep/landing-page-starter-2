import { cn } from "@/lib/utils"

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "prose prose-slate dark:prose-invert max-w-none font-sans",
        className
      )}
    >
      {children}
    </div>
  )
}
