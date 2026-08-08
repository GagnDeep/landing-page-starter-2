import Link from "next/link"
import { cn } from "@/lib/utils"

export function Footnote({
  id,
  children,
  className,
}: {
  id: number
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      id={`footnote-${id}`}
      className={cn("flex gap-4 text-sm text-muted-foreground", className)}
    >
      <span className="font-mono text-xs">[{id}]</span>
      <div className="prose prose-sm prose-slate prose-a:text-accent hover:prose-a:underline max-w-none text-muted-foreground">
        {children}{" "}
        <Link href="/methodology/" className="whitespace-nowrap">
          Read full methodology &rarr;
        </Link>
      </div>
    </div>
  )
}
