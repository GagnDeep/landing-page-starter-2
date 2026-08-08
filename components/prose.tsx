import * as React from "react"
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
        "max-w-[70ch] font-sans text-[18px] leading-[1.7] text-foreground [&>a]:text-accent [&>a]:underline hover:[&>a]:no-underline [&>h1]:mt-8 [&>h1]:mb-4 [&>h1]:font-heading [&>h1]:text-5xl [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:font-heading [&>h2]:text-4xl [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:font-heading [&>h3]:text-3xl [&>ol]:mb-4 [&>ol]:list-decimal [&>ol]:pl-6 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-6",
        className
      )}
    >
      {children}
    </div>
  )
}
