import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plain-English Tax Glossary for Freelancers | bro.tax",
  description:
    "Translating IRS jargon into plain English. Clear definitions for Schedule C, 1099-NEC, QBI deduction, Self-Employment Tax, and Form 8949.",
}

export const GLOSSARY_TERMS = [
  {
    term: "Schedule C (Form 1040)",
    short: "Profit or Loss From Business",
    definition:
      "The IRS tax form sole proprietors and 1099 freelancers use to report gross income and itemize deductible business expenses to determine net profit.",
  },
  {
    term: "1099-NEC",
    short: "Nonemployee Compensation",
    definition:
      "The official tax form clients send you (and the IRS) if they paid you $600 or more during the calendar year for freelance or contract services.",
  },
  {
    term: "1099-K",
    short: "Payment Card and Third Party Network Transactions",
    definition:
      "The form sent by payment processors like Stripe, Venmo, PayPal, or Etsy detailing gross card payments processed.",
  },
  {
    term: "Self-Employment Tax (SE Tax)",
    short: "Social Security & Medicare for 1099s",
    definition:
      "A 15.3% tax (12.4% Social Security + 2.9% Medicare) paid by self-employed workers on 92.35% of net profit to cover federal entitlement programs.",
  },
  {
    term: "QBI Deduction (Section 199A)",
    short: "20% Qualified Business Income Deduction",
    definition:
      "A tax break allowing eligible sole proprietors and pass-through business owners to deduct up to 20% of their qualified net business profit right off their taxable income.",
  },
  {
    term: "Section 179 Expense",
    short: "First-Year Equipment Depreciation",
    definition:
      "An IRS rule allowing businesses to deduct 100% of the purchase price of qualifying equipment (computers, servers, cameras) in the year purchased rather than depreciating it over years.",
  },
  {
    term: "Quarterly Estimated Taxes",
    short: "Form 1040-ES Payments",
    definition:
      "Prepayments of your estimated annual income tax and self-employment tax made four times a year (Apr 15, Jun 15, Sep 15, Jan 15) to avoid IRS underpayment interest penalties.",
  },
  {
    term: "Form 8949 & Schedule D",
    short: "Sales and Other Dispositions of Capital Assets",
    definition:
      "The IRS forms used to calculate short-term and long-term capital gains and losses from stock trades, memecoins, or cryptocurrency swaps.",
  },
]

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
          IRS Jargon Decoder
        </span>
        <h1 className="font-mono text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Plain-English Tax Glossary
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          The IRS uses complicated legal shorthand to make taxes feel
          intimidating. Here is what those acronyms and forms actually mean in
          real life.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {GLOSSARY_TERMS.map((item) => (
          <div key={item.term} className="ledger-card space-y-3 p-6">
            <div className="ledger-rail" />
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-semibold tracking-wider text-primary uppercase">
                {item.short}
              </span>
              <h2 className="font-mono text-lg font-bold text-foreground">
                {item.term}
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {item.definition}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
