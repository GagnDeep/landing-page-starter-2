import * as React from "react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Institute of RIA. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
