import { cn } from "@/lib/utils"

type ProseProps = React.HTMLAttributes<HTMLDivElement>

export function Prose({ className, children, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-slate dark:prose-invert max-w-3xl",
        "prose-headings:font-heading prose-headings:font-medium prose-headings:tracking-tight",
        "prose-h1:text-5xl prose-h1:leading-tight prose-h1:mb-12",
        "prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6",
        "prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4",
        "prose-p:text-[17.5px] prose-p:leading-[1.7] prose-p:text-muted-foreground/90",
        "prose-li:text-[17.5px] prose-li:leading-[1.7] prose-li:text-muted-foreground/90",
        "prose-strong:text-foreground prose-strong:font-medium",
        "prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-accent/50 hover:prose-a:underline-offset-4 transition-all",
        "prose-ul:list-disc prose-ul:pl-6 prose-ul:marker:text-accent/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
