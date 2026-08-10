import Link from "next/link"

import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react"
import { DnaIcon } from "@hugeicons/core-free-icons"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex min-h-16 flex-col items-center gap-4 px-4 py-2 sm:flex-row sm:gap-0 sm:py-0">
        <Link
          href="/"
          className="touch-target flex w-full items-center justify-center gap-2 sm:w-auto sm:justify-start"
        >
          <HugeiconsIcon
            icon={DnaIcon as unknown as IconSvgElement}
            className="size-6 shrink-0 text-primary"
          />
          <span className="font-heading text-lg font-bold">
            Institute of DNA
          </span>
        </Link>
        <nav className="flex w-full flex-wrap justify-center gap-x-6 gap-y-2 pb-2 sm:ml-auto sm:w-auto sm:justify-end sm:pb-0">
          <Link
            href="/matrix/"
            className="text-small touch-target inline-flex items-center font-medium transition-colors hover:text-primary"
          >
            Custody Matrix
          </Link>
          <Link
            href="/privacy-picks/"
            className="text-small touch-target inline-flex items-center font-medium transition-colors hover:text-primary"
          >
            Privacy Picks
          </Link>
          <Link
            href="/compare/"
            className="text-small touch-target inline-flex items-center font-medium transition-colors hover:text-primary"
          >
            Compare
          </Link>
        </nav>
      </div>
    </header>
  )
}
