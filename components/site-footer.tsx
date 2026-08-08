import Link from "next/link"

import { siteContent } from "@/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-6 md:px-8 md:py-0">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row md:px-8">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link href="/" className="font-medium underline underline-offset-4">
            {siteContent.brand}
          </Link>
          . The source code is available on{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center space-x-4">
          <Link
            href="#terms"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms
          </Link>
          <Link
            href="#privacy"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}
