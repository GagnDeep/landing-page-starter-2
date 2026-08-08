import { cn } from "@/lib/utils"

type ProseProps = React.HTMLAttributes<HTMLDivElement>

export function Prose({ className, children, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-slate dark:prose-invert max-w-3xl",
        "prose-headings:font-heading prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl",
        "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
