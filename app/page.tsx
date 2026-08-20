import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  Cancel01Icon,
  ArrowRight01Icon,
  UserCheckIcon,
  HelpCircleIcon,
  CodeIcon,
  Car01Icon,
  Camera01Icon,
  LaptopIcon,
  DeliveryTruckIcon,
  Home01Icon,
  Briefcase01Icon,
  PencilEdit01Icon,
  DumbbellIcon,
  VideoIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { WriteOffDemo } from "@/components/home/writeoff-demo"
import { QuickCalculator } from "@/components/home/quick-calculator"

export const metadata = {
  title: "bro.tax — Tax Filing & Estimator for Freelancers & Creators",
  description:
    "Instant 1099 tax estimator, write-off tracker, and flat $199 tax filing reviewed by real CPAs. Built for freelancers, digital creators, and gig workers who hate suit-and-tie incumbents.",
}

const TOP_ROLES = [
  {
    slug: "freelance-developer",
    title: "Freelance Developer",
    icon: CodeIcon,
    count: "18 Write-Offs",
  },
  {
    slug: "uber-lyft-driver",
    title: "Uber & Lyft Driver",
    icon: Car01Icon,
    count: "14 Write-Offs",
  },
  {
    slug: "onlyfans-creator",
    title: "OnlyFans Creator",
    icon: Camera01Icon,
    count: "16 Write-Offs",
  },
  {
    slug: "youtube-creator",
    title: "YouTube Creator",
    icon: VideoIcon,
    count: "15 Write-Offs",
  },
  {
    slug: "freelance-designer",
    title: "Freelance Designer",
    icon: LaptopIcon,
    count: "17 Write-Offs",
  },
  {
    slug: "doordash-driver",
    title: "DoorDash Dasher",
    icon: DeliveryTruckIcon,
    count: "12 Write-Offs",
  },
  {
    slug: "airbnb-host",
    title: "Airbnb Host",
    icon: Home01Icon,
    count: "19 Write-Offs",
  },
  {
    slug: "consultant",
    title: "Independent Consultant",
    icon: Briefcase01Icon,
    count: "16 Write-Offs",
  },
  {
    slug: "photographer",
    title: "Photographer",
    icon: Camera01Icon,
    count: "15 Write-Offs",
  },
  {
    slug: "copywriter",
    title: "Freelance Copywriter",
    icon: PencilEdit01Icon,
    count: "13 Write-Offs",
  },
  {
    slug: "fitness-trainer",
    title: "Personal Trainer",
    icon: DumbbellIcon,
    count: "14 Write-Offs",
  },
  {
    slug: "streamer-gaming",
    title: "Twitch / Gaming Streamer",
    icon: VideoIcon,
    count: "18 Write-Offs",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-8 md:py-16">
      {/* 1. HERO SECTION */}
      <section className="container px-4 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="border-primary/50 px-3 py-1 font-mono text-xs text-primary"
            >
              Official 2024 & 2025 IRS Tax Data Verified
            </Badge>

            <h1 className="font-mono text-4xl leading-[1.1] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Taxes for freelancers without the corporate suit tax.
            </h1>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Stop overpaying $800 to beige incumbents for a basic Schedule C
              return. Calculate your 1099 taxes in 30 seconds, find write-offs
              you missed, and file for a flat $199 backed by real CPA
              verification.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 font-mono text-base font-semibold"
              >
                <Link href="/calculator">
                  Estimate Taxes ($0 Free)
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="ml-2 size-5"
                  />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 font-mono text-base font-semibold"
              >
                <Link href="/pricing">See Flat $199 Pricing</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-border pt-6 font-mono text-xs sm:text-sm">
              <div>
                <div className="text-muted-foreground">Filing Fee</div>
                <div className="text-xl font-bold text-foreground">
                  $199 Flat
                </div>
              </div>
              <div>
                <div className="text-muted-foreground">SE Tax Rate</div>
                <div className="text-xl font-bold text-primary">15.3%</div>
              </div>
              <div>
                <div className="text-muted-foreground">CPA Review</div>
                <div className="text-xl font-bold text-foreground">
                  100% Included
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-2xl">
            <Image
              src="/images/hero-freelancer.webp"
              alt="Young creator working on laptop in modern studio workspace"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute right-4 bottom-4 left-4 rounded-lg border border-border/80 bg-background/90 p-4 font-mono text-xs text-foreground backdrop-blur">
              <div className="font-bold text-primary">Zero Suit Guarantee</div>
              <div>
                Direct CPA review without corporate jargon or hidden $64 state
                filing add-ons.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE WRITE-OFF SIMULATOR */}
      <section className="container px-4 sm:px-8">
        <WriteOffDemo />
      </section>

      {/* 3. COMPETITOR TEARDOWN GRID */}
      <section className="container space-y-6 px-4 sm:px-8">
        <div className="mx-auto max-w-2xl space-y-2 text-center">
          <Badge variant="outline" className="border-border font-mono text-xs">
            Competitor Teardown
          </Badge>
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            Why traditional tax software is broken.
          </h2>
          <p className="text-sm text-muted-foreground">
            We tore down the homepages, pricing tiers, and hidden fees of beige
            incumbents. Here is how we stack up.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* TurboTax */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="font-mono text-xl font-bold">
                TurboTax Self-Employed
              </CardTitle>
              <CardDescription className="text-xs">
                The Bait-and-Switch Giant
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 font-mono text-sm">
              <div className="text-2xl font-bold text-destructive">
                $129 – $219+
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    className="size-4 shrink-0 text-destructive"
                  />
                  Hidden $64 state filing fee added at checkout
                </li>
                <li className="flex items-start gap-2">
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    className="size-4 shrink-0 text-destructive"
                  />
                  Free tier drops you the moment you import a Schedule C
                </li>
                <li className="flex items-start gap-2">
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    className="size-4 shrink-0 text-destructive"
                  />
                  Endless upsell popups for audit protection
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* H&R Block */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="font-mono text-xl font-bold">
                H&R Block
              </CardTitle>
              <CardDescription className="text-xs">
                The Strip-Mall Suit
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 font-mono text-sm">
              <div className="text-2xl font-bold text-destructive">
                $180 + $49/state
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    className="size-4 shrink-0 text-destructive"
                  />
                  Built for physical store visits and paper forms
                </li>
                <li className="flex items-start gap-2">
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    className="size-4 shrink-0 text-destructive"
                  />
                  Outdated UI that does not understand creator income
                </li>
                <li className="flex items-start gap-2">
                  <HugeiconsIcon
                    icon={Cancel01Icon}
                    className="size-4 shrink-0 text-destructive"
                  />
                  Confusing tax terminology with zero clear breakdowns
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* bro.tax */}
          <Card className="relative border-2 border-primary bg-primary/5">
            <Badge className="absolute -top-3 right-4 bg-primary font-mono text-xs text-primary-foreground">
              Winner
            </Badge>
            <CardHeader>
              <CardTitle className="font-mono text-xl font-bold text-foreground">
                bro.tax
              </CardTitle>
              <CardDescription className="text-xs">
                Transparent & CPA Backed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 font-mono text-sm">
              <div className="text-3xl font-bold text-primary">$199 Flat</div>
              <ul className="space-y-2 text-xs text-foreground">
                <li className="flex items-start gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="size-4 shrink-0 text-primary"
                  />
                  Federal Schedule C + State included ($0 hidden fees)
                </li>
                <li className="flex items-start gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="size-4 shrink-0 text-primary"
                  />
                  Every return personally verified by a human CPA
                </li>
                <li className="flex items-start gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="size-4 shrink-0 text-primary"
                  />
                  Built for developers, drivers, creators, and freelancers
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. QUICK CALCULATOR TEASER */}
      <section className="container px-4 sm:px-8">
        <QuickCalculator />
      </section>

      {/* 5. DEDUCTIONS LIBRARY SPOTLIGHT */}
      <section className="container space-y-6 px-4 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Badge
              variant="outline"
              className="mb-2 border-border font-mono text-xs"
            >
              Organic Traffic Engine
            </Badge>
            <h2 className="font-mono text-3xl font-bold text-foreground">
              Built for how you actually make money.
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Select your specific 1099 role to see legal IRS write-offs,
              equipment thresholds, and Schedule C strategies.
            </p>
          </div>
          <Button asChild variant="outline" className="font-mono text-xs">
            <Link href="/deductions">
              View All 12 Guides
              <HugeiconsIcon icon={ArrowRight01Icon} className="ml-1 size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {TOP_ROLES.map((role) => (
            <Link
              key={role.slug}
              href={`/deductions/${role.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-muted/50"
            >
              <div className="space-y-2">
                <div className="flex size-9 items-center justify-center rounded-md bg-muted transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  <HugeiconsIcon icon={role.icon} className="size-5" />
                </div>
                <div className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {role.title}
                </div>
              </div>
              <div className="mt-4 font-mono text-xs text-muted-foreground">
                {role.count}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. REAL CPA HUMAN DEFENSE */}
      <section className="container px-4 sm:px-8">
        <div className="grid items-center gap-8 rounded-xl border border-border bg-card p-6 md:p-10 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/cpa-team.webp"
              alt="bro.tax CPA team reviewing tax strategy on laptop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-4">
            <Badge
              variant="outline"
              className="border-primary/50 font-mono text-xs text-primary"
            >
              <HugeiconsIcon icon={UserCheckIcon} className="mr-1 size-3.5" />
              Human CPA Sign-Off Included
            </Badge>
            <h2 className="font-mono text-3xl font-bold text-foreground">
              No black-box AI filing. Real human CPAs have your back.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Automated software is great for scanning receipts and calculating
              15.3% self-employment tax. But before your return goes to the IRS,
              a licensed CPA reviews every deduction to eliminate red flags and
              maximize your legal tax refund.
            </p>

            <ul className="space-y-2 pt-2 font-mono text-xs text-foreground">
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  className="size-4 shrink-0 text-primary"
                />
                100% CPA Accuracy Guarantee
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  className="size-4 shrink-0 text-primary"
                />
                Audit Defense & Schedule C Documentation Support
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  className="size-4 shrink-0 text-primary"
                />
                Direct messaging with your assigned tax professional
              </li>
            </ul>

            <div className="pt-2">
              <Button asChild className="font-mono text-xs">
                <Link href="/about">Meet the Anti-Suit Founders</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRANSPARENT PRICING CALLOUT */}
      <section className="container space-y-6 px-4 sm:px-8">
        <div className="mx-auto max-w-2xl space-y-2 text-center">
          <Badge variant="outline" className="border-border font-mono text-xs">
            No Hidden Fees
          </Badge>
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            Flat $199 filing. $0 hidden upsells.
          </h2>
          <p className="text-sm text-muted-foreground">
            Everything you need for federal and state 1099 filing, backed by CPA
            human review.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Card 1: Flat Filing */}
          <Card className="relative flex flex-col justify-between border-2 border-primary bg-card">
            <CardHeader>
              <Badge className="mb-2 w-fit bg-primary font-mono text-xs text-primary-foreground">
                Most Popular
              </Badge>
              <CardTitle className="font-mono text-2xl font-bold">
                Annual 1099 Filing
              </CardTitle>
              <CardDescription className="text-xs">
                Complete federal Schedule C + state return
              </CardDescription>
              <div className="pt-4 font-mono">
                <span className="text-4xl font-extrabold text-foreground tabular-nums">
                  $199
                </span>
                <span className="text-xs text-muted-foreground">
                  {" "}
                  / flat return
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 font-mono text-xs">
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="size-4 shrink-0 text-primary"
                  />
                  Federal Form 1040 + Schedule C + Schedule SE
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="size-4 shrink-0 text-primary"
                  />
                  Single State Tax Filing Included ($0 extra)
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="size-4 shrink-0 text-primary"
                  />
                  Human Licensed CPA Verification
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="size-4 shrink-0 text-primary"
                  />
                  Automated Write-Off Optimizer
                </li>
              </ul>
              <Button asChild className="mt-4 w-full font-mono text-xs">
                <Link href="/pricing">File Your Return ($199)</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Card 2: Year-Round Tracking */}
          <Card className="flex flex-col justify-between border-border bg-card">
            <CardHeader>
              <Badge
                variant="outline"
                className="mb-2 w-fit border-border font-mono text-xs"
              >
                Year-Round Protection
              </Badge>
              <CardTitle className="font-mono text-2xl font-bold">
                Write-Off Tracker & Tax Defense
              </CardTitle>
              <CardDescription className="text-xs">
                Continuous expense monitoring & quarterly calculation
              </CardDescription>
              <div className="pt-4 font-mono">
                <span className="text-4xl font-extrabold text-foreground tabular-nums">
                  $29
                </span>
                <span className="text-xs text-muted-foreground"> / month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 font-mono text-xs">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="size-4 shrink-0 text-primary"
                  />
                  Automated Stripe, PayPal, & Bank expense tagging
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="size-4 shrink-0 text-primary"
                  />
                  Quarterly Estimated Tax (1040-ES) payment targets
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="size-4 shrink-0 text-primary"
                  />
                  Audit Defense & CPA chat support year-round
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="size-4 shrink-0 text-primary"
                  />
                  Includes annual tax filing discount
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="mt-4 w-full font-mono text-xs"
              >
                <Link href="/pricing">Start Year-Round Tracking</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="container mx-auto max-w-3xl space-y-6 px-4 sm:px-8">
        <div className="space-y-2 text-center">
          <Badge variant="outline" className="border-border font-mono text-xs">
            <HugeiconsIcon icon={HelpCircleIcon} className="mr-1 size-3.5" />
            Clear Answers
          </Badge>
          <h2 className="font-mono text-3xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full rounded-lg border border-border bg-card px-4"
        >
          <AccordionItem value="item-1" className="border-border">
            <AccordionTrigger className="text-left font-mono text-sm font-semibold">
              How does the $199 flat pricing work with no hidden fees?
            </AccordionTrigger>
            <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
              Legacy tax brands lure you in with $0 filing ads, then charge
              $120+ the moment you add a 1099 form, plus $64 for state filing.
              At bro.tax, $199 covers your entire federal Schedule C,
              self-employment tax calculation (Schedule SE), and one state
              return. No upsell popups, no hidden state add-ons.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-border">
            <AccordionTrigger className="text-left font-mono text-sm font-semibold">
              What is the self-employment tax rate for 2024 and 2025?
            </AccordionTrigger>
            <AccordionContent className="font-mono text-xs leading-relaxed text-muted-foreground">
              The federal self-employment tax rate is 15.3%, consisting of 12.4%
              for Social Security (capped at $168,600 in 2024 and $176,100 in
              2025) and 2.9% for Medicare. Self-employment tax applies to 92.35%
              of your net Schedule C profit if you earn $400 or more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-border">
            <AccordionTrigger className="text-left font-mono text-sm font-semibold">
              How does a real CPA review my tax return?
            </AccordionTrigger>
            <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
              Once you complete your write-off questionnaire and import your
              1099 income, an assigned licensed CPA verifies your Schedule C
              expense items, checks for IRS audit flags, signs off on accuracy,
              and submits the return electronically.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-border">
            <AccordionTrigger className="text-left font-mono text-sm font-semibold">
              When are quarterly estimated tax payments due for 2025?
            </AccordionTrigger>
            <AccordionContent className="font-mono text-xs leading-relaxed text-muted-foreground">
              Estimated tax due dates for 2025: Q1 is April 15, 2025; Q2 is June
              16, 2025; Q3 is September 15, 2025; and Q4 is January 15, 2026.
              Making quarterly payments prevents IRS late-payment penalties
              under Form 1040-ES.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
