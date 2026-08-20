import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calendar01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MedicalDisclaimer } from "@/components/medical-disclaimer"
import { TREATMENTS_DATA } from "@/lib/clinical-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return TREATMENTS_DATA.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const trt = TREATMENTS_DATA.find((t) => t.slug === slug)
  if (!trt) return {}

  return {
    title: `${trt.title} | Dr. Ameena Patel, MD`,
    description: trt.summary,
  }
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params
  const trt = TREATMENTS_DATA.find((t) => t.slug === slug)

  if (!trt) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="space-y-4 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
          <Badge variant="outline">Treatment Protocol</Badge>
          <Badge variant="secondary">{trt.evidenceRating}</Badge>
          <span>•</span>
          <span className="text-accent">
            Last Reviewed: {trt.lastReviewed} by Dr. Ameena Patel, MD
          </span>
        </div>

        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {trt.title}
        </h1>

        <p className="text-lg font-medium text-accent">{trt.tagline}</p>

        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {trt.summary}
        </p>

        <div className="pt-2">
          <Button
            asChild
            size="lg"
            className="rounded-lg bg-accent font-medium text-accent-foreground"
          >
            <Link href="/booking" className="flex items-center gap-2">
              <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
              <span>Schedule Consultation for This Protocol</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Indications & Duration */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="space-y-4 border-border bg-card p-6">
          <h3 className="font-serif text-lg font-bold text-foreground">
            Clinical Indications
          </h3>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {trt.indications.map((ind, i) => (
              <li key={i} className="flex items-start gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>{ind}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4 border-border bg-card p-6">
          <h3 className="font-serif text-lg font-bold text-foreground">
            Duration &amp; Monitoring
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {trt.durationAndFrequency}
          </p>
          <div className="border-t border-border pt-2">
            <h4 className="mb-1 text-xs font-bold text-foreground">
              Diagnostic Testing Included:
            </h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              {trt.diagnosticTesting.map((test, i) => (
                <li key={i}>• {test}</li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      {/* Clinical Methodology */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Step-by-Step Clinical Methodology
        </h2>
        <div className="space-y-3">
          {trt.clinicalMethodology.map((step, i) => (
            <Card
              key={i}
              className="flex items-start gap-3 border-border bg-card p-4"
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-foreground">
                {step}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Treatment FAQs
        </h2>
        <div className="space-y-4">
          {trt.faqs.map((faq, i) => (
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

      {/* Citations */}
      <section className="space-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
        <h4 className="font-bold text-foreground">
          Primary Peer-Reviewed Medical Citations:
        </h4>
        <ol className="list-decimal space-y-1 pl-5 font-mono text-[11px]">
          {trt.citations.map((cit) => (
            <li key={cit.id}>
              {cit.authors} ({cit.year}). <em>{cit.title}</em>. {cit.journal}.
            </li>
          ))}
        </ol>
      </section>

      <MedicalDisclaimer variant="standard" lastReviewed={trt.lastReviewed} />
    </div>
  )
}
