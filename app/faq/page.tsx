import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { HelpCircleIcon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "1099 Tax FAQ & IRS Rules | bro.tax",
  description:
    "Frequently asked questions about 1099-NEC, 1099-K, Schedule C write-offs, 15.3% self-employment tax, and quarterly estimated tax due dates for freelancers.",
}

const FAQ_ITEMS = [
  {
    q: "What is the self-employment tax rate for 2024 and 2025?",
    a: "The federal self-employment tax rate is 15.3%, made up of 12.4% for Social Security (capped at $168,600 in 2024 and $176,100 in 2025) and 2.9% for Medicare. Self-employment tax applies to 92.35% of your net Schedule C profit if you earn $400 or more.",
  },
  {
    q: "What is the 1099-K reporting threshold for 2024 and 2025?",
    a: "Under recent IRS updates (Notice 2024-85), the 1099-K reporting threshold from payment apps like Stripe, Venmo, and PayPal remains at $20,000 and 200 transactions. However, regardless of whether you receive a 1099-K form or not, all taxable income earned must be reported on Schedule C.",
  },
  {
    q: "When are 2025 quarterly estimated tax payments due?",
    a: "Estimated tax payments under Form 1040-ES are due in four quarterly installments: Q1 is April 15, 2025; Q2 is June 16, 2025; Q3 is September 15, 2025; and Q4 is January 15, 2026.",
  },
  {
    q: "How does the 50% self-employment tax deduction work?",
    a: "The IRS allows you to deduct half (50%) of your total self-employment tax from your gross income when calculating federal income tax. This deduction is claimed on Schedule 1 (Form 1040) Line 15.",
  },
  {
    q: "What is the standard mileage rate for 2024 and 2025?",
    a: "The IRS standard mileage rate for business driving (Uber, Lyft, DoorDash, client travel) is 67.0 cents per mile for 2024 and 70.0 cents per mile for 2025 (IRS Notice 2024-86).",
  },
  {
    q: "How does human CPA review work at bro.tax?",
    a: "After you complete your write-off questionnaire, an assigned licensed CPA verifies your Schedule C expense items, checks for IRS audit flags, signs off on mathematical accuracy, and submits your return electronically.",
  },
  {
    q: "What is included in the $199 flat pricing?",
    a: "The flat $199 fee includes your Federal Form 1040 return, Schedule C (Profit or Loss from Business), Schedule SE (Self-Employment Tax), one state income tax return, write-off optimization, and human CPA sign-off.",
  },
]

export default function FaqPage() {
  return (
    <div className="container mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-8 md:py-12">
      <div className="space-y-3 text-center">
        <Badge
          variant="outline"
          className="border-primary/50 font-mono text-xs text-primary"
        >
          <HugeiconsIcon icon={HelpCircleIcon} className="mr-1 size-3.5" />
          Clear Tax Answers
        </Badge>
        <h1 className="font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          1099 Tax Frequently Asked Questions
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Straight-shooting answers on 1099 forms, Schedule C deductions, 15.3%
          self-employment tax math, and quarterly due dates.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full rounded-lg border border-border bg-card px-4"
      >
        {FAQ_ITEMS.map((item, idx) => (
          <AccordionItem
            key={idx}
            value={`faq-${idx}`}
            className="border-border"
          >
            <AccordionTrigger className="text-left font-mono text-sm font-semibold">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="space-y-3 rounded-xl border border-border bg-card p-6 text-center font-mono text-xs">
        <div className="text-sm font-bold text-foreground">
          Have a specific question about your write-offs?
        </div>
        <p className="text-muted-foreground">
          Try our free interactive 1099 tax calculator to calculate your exact
          tax bill.
        </p>
        <Button asChild size="sm" className="font-mono">
          <Link href="/calculator">
            Go to Tax Calculator
            <HugeiconsIcon icon={ArrowRight01Icon} className="ml-1.5 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
