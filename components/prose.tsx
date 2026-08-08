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
        "prose max-w-none prose-zinc dark:prose-invert",
        "prose-headings:font-heading prose-headings:font-semibold",
        "prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:text-primary/80",
        "prose-code:rounded-md prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm",
        "prose-pre:border prose-pre:bg-muted prose-pre:text-foreground",
        className
      )}
    >
      {children}
    </div>
  )
}
