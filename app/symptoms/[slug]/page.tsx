import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calendar01Icon,
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MedicalDisclaimer } from "@/components/medical-disclaimer"
import { SYMPTOMS_DATA } from "@/lib/clinical-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SYMPTOMS_DATA.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const sym = SYMPTOMS_DATA.find((s) => s.slug === slug)
  if (!sym) return {}

  return {
    title: `${sym.title} | Dr. Ameena Patel, MD`,
    description: sym.summary,
  }
}

export default async function SymptomDetailPage({ params }: PageProps) {
  const { slug } = await params
  const sym = SYMPTOMS_DATA.find((s) => s.slug === slug)

  if (!sym) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="space-y-4 border-b border-border pb-8">
        <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <Badge variant="outline">Symptom Guide</Badge>
          <span>•</span>
          <span className="text-accent">
            Last Reviewed: {sym.lastReviewed} by Dr. Ameena Patel, MD
          </span>
        </div>

        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {sym.title}
        </h1>

        <p className="text-lg font-medium text-accent">{sym.tagline}</p>

        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {sym.summary}
        </p>

        <div className="pt-2">
          <Button
            asChild
            size="lg"
            className="rounded-lg bg-accent font-medium text-accent-foreground"
          >
            <Link href="/booking" className="flex items-center gap-2">
              <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
              <span>Schedule Diagnostic Consultation</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Physiological Mechanisms & Recommended Labs */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="space-y-4 border-border bg-card p-6">
          <h3 className="font-serif text-lg font-bold text-foreground">
            Physiological Mechanisms
          </h3>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {sym.physiologicalMechanisms.map((mech, i) => (
              <li key={i} className="flex items-start gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>{mech}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4 border-border bg-card p-6">
          <h3 className="font-serif text-lg font-bold text-foreground">
            Recommended Biomarker Labs
          </h3>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {sym.recommendedLabsToRequest.map((lab, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-bold text-accent">•</span>
                <span>{lab}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Matching Conditions */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Badge variant="outline">Possible Underlying Conditions</Badge>
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Conditions Frequently Associated with This Symptom
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {sym.matchingConditions.map((cond, i) => (
            <Card key={i} className="space-y-3 border-border bg-card p-5">
              <h4 className="font-serif text-lg font-bold text-foreground">
                <Link
                  href={`/conditions/${cond.slug}`}
                  className="hover:text-primary"
                >
                  {cond.title}
                </Link>
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {cond.reason}
              </p>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="p-0 text-xs text-primary hover:bg-transparent"
              >
                <Link
                  href={`/conditions/${cond.slug}`}
                  className="flex items-center gap-1"
                >
                  <span>Read Condition Guide</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Symptom FAQs
        </h2>
        <div className="space-y-4">
          {sym.faqs.map((faq, i) => (
            <Card key={i} className="space-y-2 border-border bg-card p-5">
              <h4 className="font-serif text-base font-bold text-foreground">
                {faq.question}
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <MedicalDisclaimer variant="standard" lastReviewed={sym.lastReviewed} />
    </div>
  )
}
