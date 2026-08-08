import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "border-b border-border bg-background px-4 py-6",
        className
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link
          href="/"
          className="font-heading text-3xl font-normal tracking-tight text-foreground"
        >
          Aerospace Certifications
        </Link>
        <nav aria-label="Main Navigation">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <Link
                href="/guides/"
                className="transition-colors hover:text-accent"
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                href="/about/"
                className="transition-colors hover:text-accent"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
