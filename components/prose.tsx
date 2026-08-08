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
        "prose prose-slate dark:prose-invert max-w-none",
        "prose-headings:font-heading prose-headings:font-semibold prose-headings:uppercase prose-headings:tracking-wide",
        "prose-p:leading-loose",
        className
      )}
    >
      {children}
    </div>
  )
}
