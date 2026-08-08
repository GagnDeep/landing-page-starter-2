import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string
}

export function Section({
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-14 md:py-24", className)} {...props}>
      <div
        className={cn("container mx-auto max-w-7xl px-6", containerClassName)}
      >
        {children}
      </div>
    </section>
  )
}
