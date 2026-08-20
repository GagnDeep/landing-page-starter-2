import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calendar01Icon,
  HospitalIcon,
  ShieldKeyIcon,
  Award01Icon,
  BookOpen01Icon,
  UserCheck01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MedicalDisclaimer } from "@/components/medical-disclaimer"

export const metadata: Metadata = {
  title: "About Dr. Ameena Patel, MD, FACP | Credentials & Philosophy",
  description:
    "Learn about Dr. Ameena Patel's medical credentials, chief residency background, fellowship training in integrative medicine, and patient care philosophy.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
      {/* 1. HEADER SECTION */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <Badge variant="outline" className="text-xs">
          Academic Credentials &amp; Bio
        </Badge>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Dr. Ameena Patel, MD, FACP
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Board-Certified Internal Medicine Physician specializing in
          integrative women&apos;s health, complex hormonal evaluation, and
          root-cause metabolic medicine.
        </p>
      </div>

      {/* 2. MAIN BIO & PORTRAIT */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        <div className="space-y-4 lg:col-span-5">
          <Card className="overflow-hidden border-border bg-card shadow-sm">
            <div className="relative aspect-4/5 w-full bg-muted">
              <Image
                src="/images/dr-ameena-profile.webp"
                alt="Dr. Ameena Patel, MD, FACP Portrait"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="space-y-2 p-5 text-center">
              <h3 className="font-serif text-base font-bold text-foreground">
                Dr. Ameena Patel, MD, FACP
              </h3>
              <p className="text-xs text-muted-foreground">
                Chicago, IL • Licensed Physician IL Lic. No. 036.198201
              </p>
              <div className="pt-1 text-[11px] font-medium text-accent">
                [NEEDS CONFIRMATION: Official Physician Credentials]
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 lg:col-span-7">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Clinical Background &amp; Medical Education
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Dr. Ameena Patel completed her Doctorate of Medicine (MD) with
              honors, followed by rigorous internal medicine residency training
              where she was selected to serve as Chief Resident. Recognizing
              that many women suffering from chronic fatigue, thyroid symptoms,
              and metabolic shifts were dismissed by standard 10-minute primary
              care visits, she completed specialized fellowship training in
              integrative medicine and advanced endocrine diagnostic testing.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              She is a Fellow of the American College of Physicians (FACP), an
              honor bestowed upon physicians who demonstrate outstanding
              academic excellence, leadership, and dedication to internal
              medicine.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card className="space-y-1 border-border bg-card p-4">
              <div className="flex items-center gap-2 text-primary">
                <HugeiconsIcon icon={Award01Icon} className="size-4" />
                <h4 className="text-xs font-bold text-foreground">
                  Chief Resident Honors
                </h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Led resident physician clinical training and hospital inpatient
                teams.
              </p>
            </Card>

            <Card className="space-y-1 border-border bg-card p-4">
              <div className="flex items-center gap-2 text-primary">
                <HugeiconsIcon icon={ShieldKeyIcon} className="size-4" />
                <h4 className="text-xs font-bold text-foreground">
                  Board Certification
                </h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Diplomate, American Board of Internal Medicine (ABIM).
              </p>
            </Card>
          </div>

          <div className="pt-2">
            <Button
              asChild
              size="lg"
              className="rounded-lg bg-accent px-6 text-accent-foreground"
            >
              <Link href="/booking" className="flex items-center gap-2">
                <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
                <span>Book 60-Minute Consultation</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 3. CARE PHILOSOPHY */}
      <section className="space-y-8 rounded-2xl border border-border bg-secondary/40 p-8 sm:p-12">
        <div className="max-w-3xl space-y-3">
          <Badge variant="outline">Practice Philosophy</Badge>
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
            Why 60 Minutes Matters in Chronic Care
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            In modern healthcare, doctors are squeezed into 10-minute time
            slots. When dealing with complex interconnected systems—the thyroid,
            gut microbiome, sex hormones, and cortisol cascade—a 10-minute visit
            guarantees that symptoms will be treated in isolation with quick
            prescription band-aids.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="space-y-2 border-border bg-card p-5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 font-serif text-sm font-bold text-primary">
              01
            </div>
            <h3 className="font-serif text-base font-bold text-foreground">
              Deep Diagnostic Listening
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              We take the time to map your entire medical history, symptom
              timeline, dietary patterns, and environmental stressors.
            </p>
          </Card>

          <Card className="space-y-2 border-border bg-card p-5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 font-serif text-sm font-bold text-primary">
              02
            </div>
            <h3 className="font-serif text-base font-bold text-foreground">
              Optimal vs Standard Labs
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              We test bioavailable Free T3, thyroid antibodies, fasting insulin,
              and ApoB, evaluating results against optimal physiological targets
              rather than broad population averages.
            </p>
          </Card>

          <Card className="space-y-2 border-border bg-card p-5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 font-serif text-sm font-bold text-primary">
              03
            </div>
            <h3 className="font-serif text-base font-bold text-foreground">
              Evidence-Led Solutions
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              We integrate lifestyle nutrition, circadian medicine, and
              prescription therapy without selling supplement bundles or
              unproven cures.
            </p>
          </Card>
        </div>
      </section>

      {/* 4. PROFESSIONAL MEMBERSHIPS & AFFILIATIONS */}
      <section className="space-y-8">
        <div className="mx-auto max-w-2xl space-y-2 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Professional Memberships &amp; Academic Societies
          </h2>
          <p className="text-xs text-muted-foreground">
            Actively engaged in clinical medical research and evidence-based
            practice updates.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Card className="space-y-2 border-border bg-card p-5 text-center">
            <HugeiconsIcon
              icon={HospitalIcon}
              className="mx-auto size-8 text-primary"
            />
            <h4 className="font-serif text-sm font-bold text-foreground">
              American College of Physicians
            </h4>
            <p className="text-xs text-muted-foreground">
              Fellowship Designation (FACP)
            </p>
          </Card>

          <Card className="space-y-2 border-border bg-card p-5 text-center">
            <HugeiconsIcon
              icon={BookOpen01Icon}
              className="mx-auto size-8 text-primary"
            />
            <h4 className="font-serif text-sm font-bold text-foreground">
              The Endocrine Society
            </h4>
            <p className="text-xs text-muted-foreground">
              Active Clinical Member
            </p>
          </Card>

          <Card className="space-y-2 border-border bg-card p-5 text-center">
            <HugeiconsIcon
              icon={UserCheck01Icon}
              className="mx-auto size-8 text-primary"
            />
            <h4 className="font-serif text-sm font-bold text-foreground">
              The Menopause Society (NAMS)
            </h4>
            <p className="text-xs text-muted-foreground">
              Certified Practitioner
            </p>
          </Card>
        </div>
      </section>

      {/* 5. DISCLAIMER */}
      <MedicalDisclaimer variant="standard" lastReviewed="2025-02-01" />
    </div>
  )
}
