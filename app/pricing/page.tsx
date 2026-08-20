import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

export const metadata = {
  title: "Flat $199 Tax Filing & Pricing | bro.tax",
  description:
    "Transparent $199 flat tax filing for 1099 self-employed workers. Includes federal Schedule C, single state return, write-off optimizer, and human CPA review. $0 hidden fees.",
}

export default function PricingPage() {
  return (
    <div className="container space-y-12 px-4 py-8 sm:px-8 md:py-12">
      {/* Header */}
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <Badge
          variant="outline"
          className="border-primary/50 font-mono text-xs text-primary"
        >
          Transparent Flat Pricing • Zero Hidden Upsells
        </Badge>
        <h1 className="font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          No suit tax. No hidden state fees.
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Legacy software advertises free filing, then charges $180+ the moment
          you add a 1099-NEC, plus another $64 for state filing. We charge one
          flat price for everything.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {/* Tier 1: Annual Filing */}
        <Card className="relative flex flex-col justify-between border-2 border-primary bg-card shadow-xl">
          <Badge className="absolute -top-3 left-6 bg-primary font-mono text-xs text-primary-foreground">
            Most Popular
          </Badge>
          <CardHeader>
            <CardTitle className="pt-2 font-mono text-2xl font-bold">
              Annual 1099 Tax Filing
            </CardTitle>
            <CardDescription className="text-xs">
              Complete Federal & State 1099 Return
            </CardDescription>
            <div className="pt-4 font-mono">
              <span className="text-5xl font-extrabold text-foreground tabular-nums">
                $199
              </span>
              <span className="text-xs text-muted-foreground">
                {" "}
                / flat return
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 font-mono text-xs">
            <ul className="space-y-3 text-foreground">
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
                Single State Return Included ($0 extra fee)
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
                Automated 1099 Write-Off Optimizer
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  className="size-4 shrink-0 text-primary"
                />
                Audit Defense & Documentation Support
              </li>
            </ul>

            <Button asChild size="lg" className="w-full font-mono font-bold">
              <Link href="/calculator">
                Start Filing for $199
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="ml-2 size-4"
                />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Tier 2: Year-Round Tracking */}
        <Card className="flex flex-col justify-between border-border bg-card">
          <CardHeader>
            <CardTitle className="font-mono text-2xl font-bold">
              Year-Round Write-Off Tracking
            </CardTitle>
            <CardDescription className="text-xs">
              Continuous Monitoring & Quarterly Payments
            </CardDescription>
            <div className="pt-4 font-mono">
              <span className="text-5xl font-extrabold text-foreground tabular-nums">
                $29
              </span>
              <span className="text-xs text-muted-foreground"> / month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 font-mono text-xs">
            <ul className="space-y-3 text-muted-foreground">
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
                Quarterly Estimated Tax (1040-ES) calculations
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  className="size-4 shrink-0 text-primary"
                />
                Direct messaging chat with CPA team
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  className="size-4 shrink-0 text-primary"
                />
                $50 discount on annual $199 tax filing fee
              </li>
            </ul>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full font-mono font-bold"
            >
              <Link href="/calculator">
                Start Year-Round Tracking
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="ml-2 size-4"
                />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Pricing Comparison Table */}
      <section className="mx-auto max-w-4xl space-y-4">
        <h2 className="text-center font-mono text-2xl font-bold text-foreground">
          Feature-by-Feature Pricing Teardown
        </h2>

        <div className="overflow-x-auto rounded-lg border border-border bg-card font-mono text-xs">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-3 font-semibold text-foreground">Feature</th>
                <th className="p-3 font-semibold text-primary">bro.tax</th>
                <th className="p-3 font-semibold text-muted-foreground">
                  TurboTax SE
                </th>
                <th className="p-3 font-semibold text-muted-foreground">
                  H&R Block
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-medium text-foreground">
                  Federal Schedule C Return
                </td>
                <td className="p-3 font-bold text-primary">Included ($199)</td>
                <td className="p-3 text-muted-foreground">$129 - $219</td>
                <td className="p-3 text-muted-foreground">$180</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">
                  State Tax Filing Fee
                </td>
                <td className="p-3 font-bold text-primary">$0 (Included)</td>
                <td className="p-3 font-bold text-destructive">+$64 extra</td>
                <td className="p-3 font-bold text-destructive">+$49 extra</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">
                  Human Licensed CPA Review
                </td>
                <td className="p-3 font-bold text-primary">100% Included</td>
                <td className="p-3 font-bold text-destructive">+$89 upsell</td>
                <td className="p-3 text-muted-foreground">
                  Store visit required
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">
                  Write-Off Optimizer
                </td>
                <td className="p-3 font-bold text-primary">Automated</td>
                <td className="p-3 text-muted-foreground">
                  Basic questionnaire
                </td>
                <td className="p-3 text-muted-foreground">Manual forms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl space-y-4">
        <h2 className="text-center font-mono text-xl font-bold text-foreground">
          Pricing Questions & Answers
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full rounded-lg border border-border bg-card px-4"
        >
          <AccordionItem value="p-1" className="border-border">
            <AccordionTrigger className="font-mono text-sm font-semibold">
              Is state tax filing really included for $0 extra?
            </AccordionTrigger>
            <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
              Yes. Unlike TurboTax and H&R Block who wait until checkout to add
              a $64 state filing fee, your flat $199 fee at bro.tax includes one
              state return at no additional charge.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="p-2" className="border-border">
            <AccordionTrigger className="font-mono text-sm font-semibold">
              What if I have multiple 1099 forms?
            </AccordionTrigger>
            <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
              Whether you have one 1099-NEC from a single client or fifteen
              1099-NEC/1099-K forms from Stripe, DoorDash, and Uber, your flat
              price remains $199.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
