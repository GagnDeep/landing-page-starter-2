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
        "prose max-w-none prose-zinc dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:text-accent prose-code:font-mono",
        className
      )}
    >
      {children}
    </div>
  )
}
