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
        "prose prose-neutral mx-auto max-w-[66ch]",
        "prose-headings:font-heading prose-headings:text-primary prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-h1:text-4xl prose-h1:mb-8 md:prose-h1:text-5xl",
        "prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6",
        "prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4",
        "prose-p:text-foreground prose-p:leading-[1.7] prose-p:mb-6",
        "prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80 prose-a:underline-offset-4",
        "prose-strong:text-foreground prose-strong:font-semibold",
        "prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6",
        "prose-li:mb-2 prose-li:text-foreground prose-li:leading-[1.7]",
        "prose-code:font-mono prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded",
        "dark:prose-invert",
        className
      )}
    >
      {children}
    </div>
  )
}
