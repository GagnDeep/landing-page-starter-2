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
import { CONDITIONS_DATA } from "@/lib/clinical-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return CONDITIONS_DATA.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const condition = CONDITIONS_DATA.find((c) => c.slug === slug)
  if (!condition) return {}

  return {
    title: `${condition.title} | Dr. Ameena Patel, MD`,
    description: condition.summary,
  }
}

export default async function ConditionDetailPage({ params }: PageProps) {
  const { slug } = await params
  const condition = CONDITIONS_DATA.find((c) => c.slug === slug)

  if (!condition) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {/* 1. HEADER SECTION */}
      <div className="space-y-4 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
          <Badge variant="outline">Condition Guide</Badge>
          <span>ICD-10: {condition.icd10Code}</span>
          <span>•</span>
          <span className="text-accent">
            Last Reviewed: {condition.lastReviewed} by Dr. Ameena Patel, MD,
            FACP
          </span>
        </div>

        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {condition.title}
        </h1>

        <p className="text-lg font-medium text-accent">{condition.tagline}</p>

        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {condition.summary}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button
            asChild
            size="lg"
            className="rounded-lg bg-accent font-medium text-accent-foreground"
          >
            <Link href="/booking" className="flex items-center gap-2">
              <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
              <span>Schedule Evaluation Consult</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/treatments" className="flex items-center gap-2">
              <span>View Treatment Pathways</span>
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* 2. SYMPTOMS PROFILE & CAUSES */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Symptoms List */}
        <Card className="space-y-4 border-border bg-card p-6">
          <h3 className="font-serif text-lg font-bold text-foreground">
            Lived Symptoms &amp; Clinical Presentation
          </h3>
          <ul className="space-y-2.5 text-xs text-muted-foreground">
            {condition.symptoms.map((symptom, i) => (
              <li key={i} className="flex items-start gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Underlying Root Causes */}
        <Card className="space-y-4 border-border bg-card p-6">
          <h3 className="font-serif text-lg font-bold text-foreground">
            Underlying Physiological Drivers
          </h3>
          <ul className="space-y-2.5 text-xs text-muted-foreground">
            {condition.causes.map((cause, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-bold text-accent">•</span>
                <span>{cause}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* 3. DIAGNOSTIC APPROACH & LABS */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Badge variant="outline">Diagnostic Rigor</Badge>
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Required Biomarker Laboratory Panels
          </h2>
          <p className="text-xs text-muted-foreground">
            Standard population reference ranges versus optimal clinical targets
            aimed for in our practice.
          </p>
        </div>

        <div className="space-y-4">
          {condition.diagnosticTests.map((test, i) => (
            <Card key={i} className="space-y-2 border-border bg-card p-5">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h4 className="font-serif text-base font-bold text-foreground">
                  {test.testName}
                </h4>
                <Badge
                  variant="secondary"
                  className="w-fit font-mono text-[11px]"
                >
                  {test.conventionalRangeVsOptimal}
                </Badge>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Clinical Purpose:</strong>{" "}
                {test.purpose}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. TREATMENT TRADEOFF MATRIX */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Badge variant="outline">Evidence-Led Options</Badge>
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Treatment Options &amp; Honest Evidence Tradeoffs
          </h2>
          <p className="text-xs text-muted-foreground">
            Comparative analysis of lifestyle, natural, and prescription
            strategies without bias or sales pitches.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {condition.treatmentTradeoffs.map((item, i) => (
            <Card
              key={i}
              className="flex flex-col justify-between space-y-4 border-border bg-card p-5"
            >
              <div className="space-y-3">
                <Badge variant="outline" className="font-mono text-[10px]">
                  {item.evidenceLevel}
                </Badge>
                <h4 className="font-serif text-base font-bold text-foreground">
                  {item.approach}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Mechanism:</strong>{" "}
                  {item.mechanism}
                </p>

                <div className="space-y-2 border-t border-border pt-2">
                  <span className="text-[11px] font-bold text-primary">
                    Pros:
                  </span>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {item.pros.map((p, idx) => (
                      <li key={idx}>+ {p}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 border-t border-border pt-2">
                  <span className="text-[11px] font-bold text-destructive">
                    Tradeoffs / Cons:
                  </span>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {item.cons.map((c, idx) => (
                      <li key={idx}>- {c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. APPOINTMENT EXPECTATIONS */}
      <Card className="space-y-4 border-primary/30 bg-primary/5 p-6">
        <h3 className="font-serif text-lg font-bold text-foreground">
          What to Expect at Your 60-Minute Consultation
        </h3>
        <ul className="space-y-2 text-xs text-foreground">
          {condition.appointmentExpectations.map((exp, i) => (
            <li key={i} className="flex items-start gap-2">
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                className="mt-0.5 size-4 shrink-0 text-primary"
              />
              <span>{exp}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* 6. URGENT CARE RED-FLAG WARNING */}
      <MedicalDisclaimer variant="urgent" />

      {/* 7. FAQS */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Frequently Asked Patient Questions
        </h2>
        <div className="space-y-4">
          {condition.faqs.map((faq, i) => (
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

      {/* 8. PRIMARY CITATIONS */}
      <section className="space-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
        <h4 className="font-bold text-foreground">
          Primary Peer-Reviewed Medical Citations:
        </h4>
        <ol className="list-decimal space-y-1 pl-5 font-mono text-[11px]">
          {condition.citations.map((cit) => (
            <li key={cit.id}>
              {cit.authors} ({cit.year}). <em>{cit.title}</em>. {cit.journal}.
            </li>
          ))}
        </ol>
      </section>

      {/* CTA Anchor */}
      <Card className="space-y-4 border-border bg-card p-8 text-center">
        <h3 className="font-serif text-2xl font-bold text-foreground">
          Ready for a Deep Diagnostic Investigation?
        </h3>
        <p className="mx-auto max-w-xl text-xs text-muted-foreground">
          Schedule your unhurried consultation with Dr. Ameena Patel in Chicago
          or via telehealth.
        </p>
        <Button
          asChild
          size="lg"
          className="rounded-lg bg-accent font-medium text-accent-foreground"
        >
          <Link
            href="/booking"
            className="flex items-center justify-center gap-2"
          >
            <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
            <span>Book Consultation Now</span>
          </Link>
        </Button>
      </Card>

      <MedicalDisclaimer
        variant="standard"
        lastReviewed={condition.lastReviewed}
      />
    </div>
  )
}
