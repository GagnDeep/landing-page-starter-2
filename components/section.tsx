import * as React from "react"

import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("w-full py-14 md:py-24", className)} {...props}>
      <div className="mx-auto w-full max-w-7xl px-6">{children}</div>
    </section>
  )
}
