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
        "prose prose-neutral dark:prose-invert max-w-none",
        "prose-h1:font-heading prose-h2:font-heading prose-h3:font-heading",
        "prose-a:text-accent prose-a:no-underline hover:prose-a:underline",
        "prose-p:leading-loose",
        className
      )}
    >
      {children}
    </div>
  )
}
