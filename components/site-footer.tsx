import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="container px-4 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Col 1: Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <Link
              href="/"
              className="font-mono text-xl font-bold tracking-tight"
            >
              <span className="rounded bg-primary px-2 py-0.5 text-primary-foreground">
                bro
              </span>
              .tax
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="font-mono text-xs text-muted-foreground">
              Official IRS Data Verified for 2024/2025 Tax Years.
            </div>
          </div>

          {/* Col 2: Core Tools & Products */}
          <div className="space-y-3">
            <h3 className="font-mono text-sm font-semibold tracking-wider text-foreground uppercase">
              Tools & Services
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/calculator" className="hover:text-foreground">
                  1099 Tax Estimator ($0)
                </Link>
              </li>
              <li>
                <Link href="/deductions" className="hover:text-foreground">
                  Freelance Write-Off Library
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground">
                  Flat $199 CPA Tax Filing
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground">
                  Year-Round Tracking ($29/mo)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Deductions */}
          <div className="space-y-3">
            <h3 className="font-mono text-sm font-semibold tracking-wider text-foreground uppercase">
              Top Guides
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/deductions/freelance-developer"
                  className="hover:text-foreground"
                >
                  Developer Write-Offs
                </Link>
              </li>
              <li>
                <Link
                  href="/deductions/uber-lyft-driver"
                  className="hover:text-foreground"
                >
                  Rideshare Mileage Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/deductions/onlyfans-creator"
                  className="hover:text-foreground"
                >
                  Creator Deductions
                </Link>
              </li>
              <li>
                <Link
                  href="/deductions/youtube-creator"
                  className="hover:text-foreground"
                >
                  Video Gear Write-Offs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Legal */}
          <div className="space-y-3">
            <h3 className="font-mono text-sm font-semibold tracking-wider text-foreground uppercase">
              Company & Legal
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  Anti-Suit Manifesto
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground">
                  Tax FAQ & Rules
                </Link>
              </li>
              <li>
                <Link href="/rss.xml" className="hover:text-foreground">
                  RSS Feed
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Humour-Banned Legal Disclaimer */}
        <div className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <p className="mb-1 font-semibold text-foreground">
            Official Disclaimers & Legal Disclosures:
          </p>
          <p>
            bro.tax is an independent tax software platform operating in the
            United States. Estimates provided by the 1099 Tax Estimator are
            based on official IRS Publication 334, Schedule SE (15.3%
            self-employment tax rate on 92.35% of net business profit), and
            applicable 2024/2025 Federal Income Tax Brackets. Tax estimates are
            for planning purposes and do not constitute formal tax liability
            until reviewed and signed by a licensed Certified Public Accountant
            (CPA). Flat $199 tax filing includes federal Schedule C and single
            state filing. All user financial data is transmitted using 256-bit
            SSL encryption.
          </p>
          <div className="mt-4 flex flex-col items-center justify-between gap-2 font-mono text-xs sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} bro.tax. All rights reserved.
            </p>
            <p>100% Suit-Free Zone.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
