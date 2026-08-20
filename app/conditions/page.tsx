import Link from "next/link"
import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, Calendar01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MedicalDisclaimer } from "@/components/medical-disclaimer"
import { CONDITIONS_DATA } from "@/lib/clinical-data"

export const metadata: Metadata = {
  title: "Conditions Library & Diagnostic Pathways | Dr. Ameena Patel, MD",
  description:
    "Explore evidence-based condition guides for Hashimoto's thyroiditis, PCOS, perimenopause, chronic fatigue, SIBO gut dysbiosis, and metabolic syndrome.",
}

export default function ConditionsHubPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <Badge variant="outline" className="text-xs">
          Clinical Conditions Library
        </Badge>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Comprehensive Diagnostic Pathways for Unresolved Symptoms
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Every condition guide provides deep physiological explanations,
          required biomarker lab tests, and an honest tradeoff comparison matrix
          across lifestyle, natural, and prescription therapies.
        </p>
      </div>

      {/* Condition Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CONDITIONS_DATA.map((cond) => (
          <Card
            key={cond.slug}
            className="flex flex-col justify-between border-border bg-card transition-all hover:border-primary/60 hover:shadow-md"
          >
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>ICD-10: {cond.icd10Code}</span>
                <span className="text-accent">{cond.lastReviewed}</span>
              </div>
              <CardTitle className="font-serif text-xl font-bold text-foreground">
                <Link
                  href={`/conditions/${cond.slug}`}
                  className="hover:text-primary"
                >
                  {cond.title}
                </Link>
              </CardTitle>
              <p className="text-xs font-medium text-accent">{cond.tagline}</p>
              <CardDescription className="line-clamp-3 text-xs leading-relaxed">
                {cond.summary}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 pt-0">
              <div className="space-y-2 border-t border-border pt-3">
                <span className="text-[11px] font-semibold tracking-wider text-foreground uppercase">
                  Key Symptoms Evaluated:
                </span>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {cond.symptoms.slice(0, 3).map((sym, i) => (
                    <li key={i} className="line-clamp-1">
                      • {sym}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                className="w-full justify-between rounded-lg bg-primary text-xs font-medium text-primary-foreground"
              >
                <Link href={`/conditions/${cond.slug}`}>
                  <span>Read Full Clinical Guide</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Box */}
      <Card className="space-y-4 border-primary/30 bg-secondary/40 p-8 text-center">
        <h3 className="font-serif text-2xl font-bold text-foreground">
          Don&apos;t See Your Exact Diagnosis Listed?
        </h3>
        <p className="mx-auto max-w-2xl text-xs leading-relaxed text-muted-foreground">
          As a board-certified internal medicine physician, Dr. Ameena Patel
          evaluates a wide spectrum of complex, overlapping symptoms. Schedule
          an initial consultation to discuss your health history.
        </p>
        <div className="pt-2">
          <Button
            asChild
            size="lg"
            className="rounded-lg bg-accent font-medium text-accent-foreground"
          >
            <Link href="/booking" className="flex items-center gap-2">
              <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
              <span>Schedule Initial Consultation</span>
            </Link>
          </Button>
        </div>
      </Card>

      <MedicalDisclaimer variant="standard" lastReviewed="2025-02-01" />
    </div>
  )
}
