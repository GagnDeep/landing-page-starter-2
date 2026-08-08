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
        "prose max-w-none font-sans prose-slate dark:prose-invert",
        // Typography adjustments reflecting "Broadsheet"
        "prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight",
        "prose-h1:mb-8 prose-h1:text-4xl",
        "prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-2 prose-h2:text-2xl",
        "prose-p:text-lg prose-p:leading-relaxed",
        "prose-a:font-semibold prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:text-primary/80",
        "prose-li:text-lg",
        className
      )}
    >
      {children}
    </div>
  )
}
