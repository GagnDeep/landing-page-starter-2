import { notFound } from "next/navigation"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AlertCircleIcon,
  Calculator01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DEDUCTIONS_DATA } from "@/lib/deductions-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(DEDUCTIONS_DATA).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const guide = DEDUCTIONS_DATA[slug]
  if (!guide) return {}

  return {
    title: `${guide.title} | bro.tax`,
    description: guide.heroDescription,
  }
}

export default async function DeductionGuidePage({ params }: PageProps) {
  const { slug } = await params
  const guide = DEDUCTIONS_DATA[slug]

  if (!guide) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-8 md:py-12">
      {/* Back Button */}
      <Button asChild variant="ghost" size="sm" className="font-mono text-xs">
        <Link href="/deductions">
          <HugeiconsIcon icon={ArrowLeft01Icon} className="mr-2 size-4" />
          Back to All Write-Off Guides
        </Link>
      </Button>

      {/* Hero Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="border-primary/50 font-mono text-xs text-primary"
          >
            {guide.category} • IRS Schedule C
          </Badge>
          <Badge variant="secondary" className="font-mono text-xs">
            2024 / 2025 Tax Years
          </Badge>
        </div>

        <h1 className="font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {guide.title}
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {guide.heroDescription}
        </p>

        {/* Avg Savings Banner */}
        <div className="flex flex-col items-start justify-between gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4 font-mono sm:flex-row sm:items-center">
          <div>
            <div className="text-xs text-muted-foreground">
              Estimated Average Tax Savings
            </div>
            <div className="text-2xl font-extrabold text-primary tabular-nums">
              +${guide.avgSavings.toLocaleString()} / year
            </div>
          </div>
          <Button asChild size="sm" className="font-mono text-xs">
            <Link href="/calculator">
              <HugeiconsIcon
                icon={Calculator01Icon}
                className="mr-1.5 size-4"
              />
              Calculate Your Savings
            </Link>
          </Button>
        </div>
      </div>

      {/* Top Write-Offs List */}
      <section className="space-y-4">
        <h2 className="font-mono text-2xl font-bold text-foreground">
          Top Deductible Write-Offs for {guide.shortTitle}
        </h2>

        <div className="grid gap-4">
          {guide.topWriteOffs.map((item, idx) => (
            <Card key={idx} className="border-border bg-card">
              <CardHeader className="pb-3">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <CardTitle className="font-mono text-lg font-bold text-foreground">
                    {item.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <Badge variant="outline" className="border-border">
                      {item.scheduleCLine}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="font-semibold text-primary"
                    >
                      {item.deductibility}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <div className="flex items-center justify-between border-t border-border pt-3 font-mono text-xs">
                  <span className="text-muted-foreground">
                    Audit Risk Level:{" "}
                    <span
                      className={
                        item.auditRisk === "Low"
                          ? "font-bold text-primary"
                          : "font-bold text-destructive"
                      }
                    >
                      {item.auditRisk}
                    </span>
                  </span>
                  <span className="font-bold text-primary tabular-nums">
                    +${item.exampleSavings} est. savings
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* IRS Audit Watchouts */}
      <section className="space-y-3 rounded-xl border border-destructive/30 bg-destructive/5 p-6">
        <h3 className="flex items-center gap-2 font-mono text-lg font-bold text-destructive">
          <HugeiconsIcon icon={AlertCircleIcon} className="size-5" />
          IRS Audit Watchouts & Red Flags
        </h3>
        <ul className="space-y-2 font-mono text-xs text-foreground">
          {guide.auditWatchouts.map((watchout, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="font-bold text-destructive">•</span>
              <span>{watchout}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Role FAQ Accordion */}
      {guide.faqs && guide.faqs.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-mono text-2xl font-bold text-foreground">
            Frequently Asked Questions for {guide.shortTitle}
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full rounded-lg border border-border bg-card px-4"
          >
            {guide.faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left font-mono text-sm font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-xs leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      {/* Bottom CTA */}
      <div className="space-y-4 rounded-xl border border-primary bg-primary/5 p-6 text-center md:p-8">
        <h3 className="font-mono text-2xl font-bold text-foreground">
          Ready to file your {guide.shortTitle} 1099 taxes?
        </h3>
        <p className="mx-auto max-w-xl text-sm text-muted-foreground">
          Lock in flat $199 filing with zero hidden fees. Includes federal
          Schedule C, self-employment tax, state filing, and human CPA sign-off.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Button asChild size="lg" className="font-mono font-bold">
            <Link href="/pricing">
              File Return for $199
              <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
