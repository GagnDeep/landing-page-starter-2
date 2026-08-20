"use client"

import * as React from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calculator01Icon,
  Invoice01Icon,
  BookOpen01Icon,
  Menu01Icon,
  Cancel01Icon,
  Sun01Icon,
  Moon01Icon,
  HelpCircleIcon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"
import { useTheme } from "next-themes"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-md bg-primary font-mono text-xl font-black tracking-tighter text-primary-foreground transition-transform group-hover:scale-105">
            bt
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-lg leading-none font-bold tracking-tight">
              bro<span className="text-primary">.tax</span>
            </span>
            <span className="mt-1 font-mono text-[10px] leading-none tracking-widest text-muted-foreground uppercase">
              No Suits. Just Numbers.
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            href="/calculator"
            className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
          >
            <HugeiconsIcon icon={Calculator01Icon} className="size-4" />
            Tax Estimator
          </Link>
          <Link
            href="/deductions"
            className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
          >
            <HugeiconsIcon icon={Invoice01Icon} className="size-4" />
            Deductions
          </Link>
          <Link
            href="/guides"
            className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
          >
            <HugeiconsIcon icon={BookOpen01Icon} className="size-4" />
            Occupation Guides
          </Link>
          <Link
            href="/blog"
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            Articles
          </Link>
          <Link
            href="/pricing"
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="/glossary"
            className="text-foreground/80 transition-colors hover:text-primary"
          >
            Glossary
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex size-9 cursor-pointer items-center justify-center rounded-md border border-border bg-muted/50 text-foreground transition-colors hover:bg-muted"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <HugeiconsIcon icon={Sun01Icon} className="size-4" />
            ) : (
              <HugeiconsIcon icon={Moon01Icon} className="size-4" />
            )}
          </button>
          <Link
            href="/calculator"
            className="flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-xs font-semibold text-primary-foreground uppercase shadow-xs transition-opacity hover:opacity-90"
          >
            Calculate Tax
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex size-9 cursor-pointer items-center justify-center rounded-md border border-border bg-muted/50 text-foreground"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <HugeiconsIcon icon={Sun01Icon} className="size-4" />
            ) : (
              <HugeiconsIcon icon={Moon01Icon} className="size-4" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex size-9 cursor-pointer items-center justify-center rounded-md border border-border bg-muted text-foreground"
            aria-label="Toggle mobile menu"
          >
            <HugeiconsIcon
              icon={mobileOpen ? Cancel01Icon : Menu01Icon}
              className="size-5"
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="space-y-4 border-b border-border bg-background px-4 pt-4 pb-6 md:hidden">
          <nav className="flex flex-col space-y-3 text-base font-medium">
            <Link
              href="/calculator"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-md p-2 hover:bg-muted"
            >
              <HugeiconsIcon
                icon={Calculator01Icon}
                className="size-5 text-primary"
              />
              Tax Estimator
            </Link>
            <Link
              href="/deductions"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-md p-2 hover:bg-muted"
            >
              <HugeiconsIcon
                icon={Invoice01Icon}
                className="size-5 text-primary"
              />
              Deductions Hub
            </Link>
            <Link
              href="/guides"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-md p-2 hover:bg-muted"
            >
              <HugeiconsIcon
                icon={BookOpen01Icon}
                className="size-5 text-primary"
              />
              Occupation Guides
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="rounded-md p-2 hover:bg-muted"
            >
              Articles & Guides
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="rounded-md p-2 hover:bg-muted"
            >
              Pricing
            </Link>
            <Link
              href="/glossary"
              onClick={() => setMobileOpen(false)}
              className="rounded-md p-2 hover:bg-muted"
            >
              Tax Glossary
            </Link>
          </nav>
          <div className="pt-2">
            <Link
              href="/calculator"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 font-mono text-sm font-semibold text-primary-foreground uppercase"
            >
              Get Instant Tax Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-md bg-primary font-mono text-sm font-bold text-primary-foreground">
                bt
              </div>
              <span className="font-mono text-lg font-bold tracking-tight">
                bro<span className="text-primary">.tax</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Plain-English tax estimates and deduction intelligence for US
              freelancers, creators, gig workers, and crypto traders.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-primary">
              <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-4" />
              <span>Tax Years 2024 & 2025 Standardized</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs font-semibold tracking-wider text-foreground uppercase">
              Tools & Hubs
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/calculator"
                  className="transition-colors hover:text-foreground"
                >
                  1099 Tax Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/deductions"
                  className="transition-colors hover:text-foreground"
                >
                  Deduction Finder Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="transition-colors hover:text-foreground"
                >
                  Occupation Tax Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="transition-colors hover:text-foreground"
                >
                  Pricing & Pass
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs font-semibold tracking-wider text-foreground uppercase">
              Resources & Education
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-foreground"
                >
                  All Tax Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/quarterly-estimated-tax-deadlines"
                  className="transition-colors hover:text-foreground"
                >
                  Quarterly Payment Deadlines
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/1099-vs-w2-tax-difference"
                  className="transition-colors hover:text-foreground"
                >
                  1099 vs W2 Breakdown
                </Link>
              </li>
              <li>
                <Link
                  href="/glossary"
                  className="transition-colors hover:text-foreground"
                >
                  Tax Term Glossary
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs font-semibold tracking-wider text-foreground uppercase">
              Compliance Notice
            </h3>
            <div className="space-y-2 rounded-md border border-border bg-muted/50 p-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5 font-semibold text-foreground">
                <HugeiconsIcon
                  icon={HelpCircleIcon}
                  className="size-4 text-accent"
                />
                <span>Estimate, Not Formal Advice</span>
              </div>
              <p className="leading-snug">
                bro.tax provides educational tax estimation tools based on
                official IRS tax brackets (TY2024 & TY2025). We are not a formal
                CPA firm until you engage our optional EA Pro Review service.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} bro.tax. Zero BS tax intelligence for
            the modern workforce.
          </p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:underline">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:underline">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:underline">
              IRS Compliance
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
