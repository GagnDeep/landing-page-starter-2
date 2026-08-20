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
import { TREATMENTS_DATA } from "@/lib/clinical-data"

export const metadata: Metadata = {
  title: "Clinical Treatment Pathways & Therapies | Dr. Ameena Patel, MD",
  description:
    "Explore evidence-based clinical treatments including comprehensive hormone evaluations, gut microbiome restoration, bioidentical HRT, and metabolic sensitization.",
}

export default function TreatmentsHubPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <Badge variant="outline" className="text-xs">
          Evidence-Based Therapies
        </Badge>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Clinical Treatment Pathways &amp; Interventions
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Root-cause therapeutic protocols tailored to your specific
          physiological lab findings. Grounded in peer-reviewed clinical
          literature and guidelines.
        </p>
      </div>

      {/* Treatments Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TREATMENTS_DATA.map((trt) => (
          <Card
            key={trt.slug}
            className="flex flex-col justify-between border-border bg-card transition-all hover:border-primary/60 hover:shadow-md"
          >
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <Badge variant="secondary" className="text-[10px]">
                  {trt.evidenceRating}
                </Badge>
                <span className="text-accent">{trt.lastReviewed}</span>
              </div>
              <CardTitle className="font-serif text-xl font-bold text-foreground">
                <Link
                  href={`/treatments/${trt.slug}`}
                  className="hover:text-primary"
                >
                  {trt.title}
                </Link>
              </CardTitle>
              <p className="text-xs font-medium text-accent">{trt.tagline}</p>
              <CardDescription className="line-clamp-3 text-xs leading-relaxed">
                {trt.summary}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 pt-0">
              <div className="space-y-2 border-t border-border pt-3">
                <span className="text-[11px] font-semibold tracking-wider text-foreground uppercase">
                  Primary Indications:
                </span>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {trt.indications.slice(0, 3).map((ind, i) => (
                    <li key={i} className="line-clamp-1">
                      • {ind}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                className="w-full justify-between rounded-lg bg-primary text-xs font-medium text-primary-foreground"
              >
                <Link href={`/treatments/${trt.slug}`}>
                  <span>Read Treatment Protocol</span>
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
