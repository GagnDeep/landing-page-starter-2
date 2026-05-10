"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Calendar01Icon, Globe02Icon, UserMultipleIcon, Diamond01Icon } from "@hugeicons/core-free-icons"

export function MicroIconSet({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const icons = [
    { icon: Globe02Icon, delay: "0ms" },
    { icon: Calendar01Icon, delay: "200ms" },
    { icon: UserMultipleIcon, delay: "400ms" },
    { icon: Diamond01Icon, delay: "600ms" },
  ]

  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      {icons.map((item, index) => (
        <div
          key={index}
          className="p-3 rounded-full border border-border bg-card shadow-sm opacity-0 motion-safe:animate-[fade-in-up_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          style={{ animationDelay: item.delay }}
        >
          <HugeiconsIcon icon={item.icon} className="size-5 text-primary" strokeWidth={1.5} />
        </div>
      ))}
    </div>
  )
}
