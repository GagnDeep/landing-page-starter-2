"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function FloatingBlobs({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} aria-hidden="true" {...props}>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 motion-safe:animate-[blob_7s_infinite] dark:mix-blend-screen" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 motion-safe:animate-[blob_7s_infinite_2s] dark:mix-blend-screen" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 motion-safe:animate-[blob_7s_infinite_4s] dark:mix-blend-screen" />
    </div>
  )
}
