import * as React from "react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-6 md:py-0">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <span className="font-medium">AI Wire Harness RFQ Desk</span>.
          </p>
        </div>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
