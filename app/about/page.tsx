import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About bro.tax — The Anti-Suit Tax Brand",
  description:
    "Founded by former Big Four CPAs and software engineers who got tired of corporate tax giants charging $800 for basic Schedule C filings. Meet the team behind bro.tax.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-12 px-4 py-8 sm:px-8 md:py-12">
      {/* Header */}
      <div className="space-y-4">
        <Badge
          variant="outline"
          className="border-primary/50 font-mono text-xs text-primary"
        >
          Anti-Suit Manifesto • Founded by CPAs & Engineers
        </Badge>

        <h1 className="font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          We built the tax app we wished existed when we started freelancing.
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Corporate tax giants spend millions on TV ads pretending to be
          friendly, while hiding $64 state fees and locking basic Schedule C
          write-off forms behind expensive paywalls. We decided to build an
          alternative.
        </p>
      </div>

      {/* Team Image */}
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border shadow-xl">
        <Image
          src="/images/cpa-team.webp"
          alt="bro.tax team reviewing tax software"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 800px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        <div className="absolute right-4 bottom-4 left-4 rounded border border-border/80 bg-background/90 p-3 font-mono text-xs text-foreground backdrop-blur">
          <span className="font-bold text-primary">bro.tax HQ:</span> CPAs and
          software engineers working without suits.
        </div>
      </div>

      {/* The Manifesto */}
      <section className="space-y-6">
        <h2 className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
          The 4 Principles of bro.tax
        </h2>

        <div className="grid gap-6 font-mono text-xs sm:grid-cols-2">
          <div className="space-y-2 rounded-lg border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-primary">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} className="size-4" />
              1. Flat Pricing Only
            </div>
            <p className="leading-relaxed text-muted-foreground">
              No $0 filing bait-and-switch. $199 covers federal Schedule C,
              self-employment tax, state filing, and human CPA sign-off.
            </p>
          </div>

          <div className="space-y-2 rounded-lg border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-primary">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} className="size-4" />
              2. Human CPA Sign-Off
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Software does the math, but a licensed CPA verifies every
              deduction to eliminate red flags before filing.
            </p>
          </div>

          <div className="space-y-2 rounded-lg border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-primary">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} className="size-4" />
              3. Zero Corporate Jargon
            </div>
            <p className="leading-relaxed text-muted-foreground">
              We say &quot;Net Take-Home&quot; instead of &quot;Adjusted Gross
              Income&quot; and &quot;70.0¢/mile&quot; instead of &quot;IRS
              Section 162 Transit Directives&quot;.
            </p>
          </div>

          <div className="space-y-2 rounded-lg border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-primary">
              <HugeiconsIcon icon={CheckmarkCircle01Icon} className="size-4" />
              4. Bank-Grade Security
            </div>
            <p className="leading-relaxed text-muted-foreground">
              256-bit SSL encryption and strict privacy protocols. We never sell
              or share user financial data with third-party advertisers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="space-y-4 rounded-xl border border-primary bg-primary/5 p-6 text-center md:p-8">
        <h3 className="font-mono text-2xl font-bold text-foreground">
          Ready to experience suit-free tax filing?
        </h3>
        <p className="mx-auto max-w-lg text-sm text-muted-foreground">
          Calculate your 1099 taxes in 30 seconds with our free estimator, then
          lock in $199 flat filing.
        </p>
        <Button asChild size="lg" className="font-mono font-bold">
          <Link href="/calculator">
            Try the Free Tax Estimator
            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
