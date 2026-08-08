import * as React from "react"

import { cn } from "@/lib/utils"

export type SectionProps = React.HTMLAttributes<HTMLElement>

export function Section({ className, ...props }: SectionProps) {
  return <section className={cn("py-14 md:py-24", className)} {...props} />
}

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("mx-auto max-w-7xl px-6", className)} {...props} />
}
