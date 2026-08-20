import Link from "next/link"
import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

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
import { SYMPTOMS_DATA } from "@/lib/clinical-data"

export const metadata: Metadata = {
  title: "Symptom Checker & Physiological Guide | Dr. Ameena Patel, MD",
  description:
    "Explore symptom guides for unexplained chronic fatigue, brain fog, stubborn weight gain, bloating, and sleep disturbances to understand what labs to request.",
}

export default function SymptomsHubPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <Badge variant="outline" className="text-xs">
          Symptom-First Navigation
        </Badge>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Symptom Diagnostic Guides
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Patients search in plain language, not ICD-10 medical codes. Start
          with what you are experiencing in daily life to understand the
          underlying physiology and labs to request.
        </p>
      </div>

      {/* Symptoms Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SYMPTOMS_DATA.map((sym) => (
          <Card
            key={sym.slug}
            className="flex flex-col justify-between border-border bg-card transition-all hover:border-primary/60 hover:shadow-md"
          >
            <CardHeader className="space-y-3">
              <Badge
                variant="secondary"
                className="w-fit font-mono text-[10px]"
              >
                Symptom Guide
              </Badge>
              <CardTitle className="font-serif text-xl font-bold text-foreground">
                <Link
                  href={`/symptoms/${sym.slug}`}
                  className="hover:text-primary"
                >
                  {sym.title}
                </Link>
              </CardTitle>
              <p className="text-xs font-medium text-accent">{sym.tagline}</p>
              <CardDescription className="line-clamp-3 text-xs leading-relaxed">
                {sym.summary}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 pt-0">
              <div className="space-y-2 border-t border-border pt-3">
                <span className="text-[11px] font-semibold tracking-wider text-foreground uppercase">
                  Recommended Labs:
                </span>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {sym.recommendedLabsToRequest.slice(0, 3).map((lab, i) => (
                    <li key={i} className="line-clamp-1">
                      • {lab}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                className="w-full justify-between rounded-lg bg-primary text-xs font-medium text-primary-foreground"
              >
                <Link href={`/symptoms/${sym.slug}`}>
                  <span>Read Symptom Guide</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <MedicalDisclaimer variant="standard" lastReviewed="2025-02-01" />
    </div>
  )
}
