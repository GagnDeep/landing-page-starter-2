import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "border-t border-border bg-background px-4 py-12",
        className
      )}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="mb-4 block font-heading text-2xl">
              Aerospace Certifications
            </span>
            <p className="text-sm text-muted-foreground">
              Independent, expert guidance on commercial aerospace
              certifications and capabilities in the UAE.
            </p>
          </div>
          <div>
            <span className="mb-4 block text-sm font-bold">Guides</span>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/guides/sam-gov-registration/"
                  className="hover:text-accent"
                >
                  SAM.gov Registration
                </Link>
              </li>
              <li>
                <Link href="/guides/cage-code/" className="hover:text-accent">
                  CAGE Code
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/8a-certification/"
                  className="hover:text-accent"
                >
                  8(a) Certification
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="mb-4 block text-sm font-bold">More Guides</span>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/guides/hubzone-certification/"
                  className="hover:text-accent"
                >
                  HUBZone
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/sdvosb-certifi/"
                  className="hover:text-accent"
                >
                  SDVOSB
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="mb-4 block text-sm font-bold">Legal & About</span>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about/" className="hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy/" className="hover:text-accent">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimers/" className="hover:text-accent">
                  Disclaimers
                </Link>
              </li>
              <li>
                <Link href="/disclosures/" className="hover:text-accent">
                  Disclosures
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
