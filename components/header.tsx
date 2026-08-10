import Link from "next/link"

import { HugeiconsIcon } from "@hugeicons/react"
import { DnaIcon } from "@hugeicons/core-free-icons"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="flex items-center gap-2">
          <HugeiconsIcon icon={DnaIcon} className="size-6 text-primary" />
          <span className="font-heading text-lg font-bold">
            Institute of DNA
          </span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link
            href="/matrix"
            className="text-small font-medium transition-colors hover:text-primary"
          >
            Custody Matrix
          </Link>
          <Link
            href="/privacy-picks"
            className="text-small font-medium transition-colors hover:text-primary"
          >
            Privacy Picks
          </Link>
          <Link
            href="/compare"
            className="text-small font-medium transition-colors hover:text-primary"
          >
            Compare
          </Link>
        </nav>
      </div>
    </header>
  )
}
