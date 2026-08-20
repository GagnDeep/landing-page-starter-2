import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calendar01Icon,
  CheckmarkCircle02Icon,
  ArrowRight01Icon,
  HospitalIcon,
  ShieldKeyIcon,
  Clock01Icon,
  UserCheck01Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons"

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
import {
  CONDITIONS_DATA,
  BLOG_POSTS_DATA,
  PRACTICE_LOCATION,
} from "@/lib/clinical-data"

export const metadata: Metadata = {
  title: "Dr. Ameena Patel, MD, FACP | Integrative Internal Medicine Chicago",
  description:
    "Board-certified internal medicine physician specializing in root-cause diagnosis for complex thyroid, hormonal, gut, and metabolic health challenges.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 via-background to-background pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Hero Text */}
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-2xs">
                <span className="inline-block size-2 animate-pulse rounded-full bg-accent" />
                <span>
                  Board-Certified Internal Medicine &amp; Integrative Health
                </span>
              </div>

              <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl/tight">
                Evidence-Led Integrative Care for Complex Hormonal, Gut, and
                Metabolic Health.
              </h1>

              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                For patients struggling with persistent fatigue, thyroid
                imbalances, and unresolved symptoms—combining rigorous academic
                internal medicine diagnostics with unhurried 60-minute
                consultations.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground shadow-xs transition-transform hover:scale-[1.02]"
                >
                  <Link href="/booking" className="flex items-center gap-2">
                    <HugeiconsIcon icon={Calendar01Icon} className="size-5" />
                    <span>Schedule 60-Min Consultation</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-lg border-border bg-card px-6 py-3 font-medium text-foreground hover:bg-secondary"
                >
                  <Link href="/conditions" className="flex items-center gap-2">
                    <span>Explore Conditions Library</span>
                    <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
                  </Link>
                </Button>
              </div>

              {/* Trust & Credential Badges */}
              <div className="grid grid-cols-2 gap-4 border-t border-border/80 pt-6 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={ShieldKeyIcon}
                    className="size-5 text-primary"
                  />
                  <span className="text-xs font-medium text-foreground">
                    Board Certified MD
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={HospitalIcon}
                    className="size-5 text-primary"
                  />
                  <span className="text-xs font-medium text-foreground">
                    Fellow of ACP (FACP)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={Clock01Icon}
                    className="size-5 text-primary"
                  />
                  <span className="text-xs font-medium text-foreground">
                    60-Min Visits
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Physician Card / Portrait */}
            <div className="lg:col-span-5">
              <Card className="overflow-hidden border-border bg-card shadow-md">
                <div className="relative aspect-4/5 w-full bg-muted">
                  <Image
                    src="/images/dr-ameena-profile.webp"
                    alt="Dr. Ameena Patel, MD, FACP - Internal Medicine Physician"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-foreground">
                        Dr. Ameena Patel, MD, FACP
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Integrative Internal Medicine Specialist
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="font-mono text-[10px]"
                    >
                      Chicago Clinic
                    </Badge>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    &quot;When chronic symptoms persist despite normal basic
                    blood work, it is rarely a sign that nothing is wrong. We
                    look deeper to find the physiological cause.&quot;
                  </p>
                  <div className="text-[11px] font-medium text-accent">
                    [NEEDS CONFIRMATION: Official Physician Portrait]
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 60-MINUTE DIFFERENTIATOR SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <Badge variant="outline" className="text-xs">
            The Practice Differentiator
          </Badge>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Medicine Built Around Root Diagnostic Rigor, Not 10-Minute Rush
            Visits.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Conventional high-volume clinics operate on assembly-line schedules
            that force doctors to address single acute symptoms in minutes.
            Complex hormonal, autoimmune, and gut conditions require
            comprehensive investigation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Assembly Line Care */}
          <Card className="space-y-4 border-border bg-secondary/30 p-6">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <HugeiconsIcon icon={Clock01Icon} className="size-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground">
                High-Volume Assembly Line Care
              </h3>
            </div>
            <ul className="space-y-3 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="font-bold text-destructive">✕</span>
                <span>
                  10–12 minute appointment limit focused on symptom dismissal
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-destructive">✕</span>
                <span>
                  Basic screening blood panels (TSH, Fasting Glucose) that miss
                  subtle dysfunction
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-destructive">✕</span>
                <span>
                  Immediate reliance on synthetic medication to mask individual
                  symptoms
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-destructive">✕</span>
                <span>
                  Told &quot;your blood work is normal, you are just
                  stressed&quot;
                </span>
              </li>
            </ul>
          </Card>

          {/* Dr. Ameena Care Model */}
          <Card className="relative space-y-4 overflow-hidden border-primary/30 bg-primary/5 p-6">
            <div className="absolute top-0 right-0 rounded-bl-lg bg-primary px-3 py-1 text-[10px] font-semibold text-primary-foreground">
              Our Practice
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <HugeiconsIcon icon={UserCheck01Icon} className="size-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground">
                Dr. Ameena&apos;s Integrative Care Model
              </h3>
            </div>
            <ul className="space-y-3 text-xs text-foreground">
              <li className="flex items-start gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>
                  Full 60-minute unhurried initial intake and physical
                  examination
                </span>
              </li>
              <li className="flex items-start gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>
                  Advanced biomarkers (Free T3/T4, Reverse T3, Fasting Insulin,
                  ApoB, SIBO breath tests)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>
                  Evidence-backed integration of nutrition, circadian medicine,
                  and prescription therapy
                </span>
              </li>
              <li className="flex items-start gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>
                  Transparent explanation of your complete physiological roadmap
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 3. CONDITIONS WE EVALUATE */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="space-y-2">
              <Badge variant="outline">Clinical Focus</Badge>
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Conditions Evaluated &amp; Managed
              </h2>
              <p className="max-w-xl text-sm text-muted-foreground">
                Deep diagnostic condition guides detailing causes,
                evidence-based testing, and honest treatment tradeoffs.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/conditions" className="flex items-center gap-2">
                <span>View All Conditions</span>
                <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS_DATA.map((cond) => (
              <Card
                key={cond.slug}
                className="flex flex-col justify-between transition-all hover:border-primary/50 hover:shadow-sm"
              >
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                    <span>ICD-10: {cond.icd10Code}</span>
                    <span className="text-accent">{cond.lastReviewed}</span>
                  </div>
                  <CardTitle className="font-serif text-lg font-bold text-foreground">
                    <Link
                      href={`/conditions/${cond.slug}`}
                      className="hover:text-primary"
                    >
                      {cond.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-xs leading-relaxed">
                    {cond.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between text-xs font-medium text-primary hover:text-primary"
                  >
                    <Link href={`/conditions/${cond.slug}`}>
                      <span>Read Diagnostic Guide</span>
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        className="size-4"
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEET DR. AMEENA PATEL */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border shadow-sm lg:col-span-5">
            <Image
              src="/images/clinic-consultation-room.webp"
              alt="Dr. Ameena Practice Consultation Suite"
              fill
              className="object-cover"
            />
            <div className="absolute right-4 bottom-4 left-4 rounded-lg border border-border bg-background/90 p-3 text-xs text-muted-foreground backdrop-blur-md">
              [NEEDS CONFIRMATION: Practice Consultation Suite Image]
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <Badge variant="outline">Physician Bio &amp; Philosophy</Badge>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Meet Dr. Ameena Patel, MD, FACP
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Dr. Ameena Patel is a board-certified internal medicine physician
              with over 15 years of clinical experience. After serving as Chief
              Resident during residency training, she pursued advanced
              fellowship studies in integrative medicine and endocrine biomarker
              analysis.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              As a Fellow of the American College of Physicians (FACP) and
              member of The Menopause Society and Endocrine Society, she
              combines academic medical rigor with empathetic, unhurried patient
              listening.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              <div className="space-y-1 rounded-lg border border-border bg-card p-3.5">
                <h4 className="text-xs font-bold text-foreground">
                  Board Certifications
                </h4>
                <p className="text-xs text-muted-foreground">
                  American Board of Internal Medicine (ABIM)
                </p>
              </div>
              <div className="space-y-1 rounded-lg border border-border bg-card p-3.5">
                <h4 className="text-xs font-bold text-foreground">
                  Academic Fellowship
                </h4>
                <p className="text-xs text-muted-foreground">
                  Fellow of the American College of Physicians
                </p>
              </div>
            </div>

            <div>
              <Button asChild variant="outline" className="mt-2">
                <Link href="/about" className="flex items-center gap-2">
                  <span>Full Credentials &amp; Philosophy</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT HAPPENS AT YOUR FIRST VISIT */}
      <section className="border-y border-border bg-card py-16">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <Badge variant="outline">Appointment Orientation</Badge>
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              A Clear, Unhurried Diagnostic Process
            </h2>
            <p className="text-sm text-muted-foreground">
              What to expect when booking your initial 60-minute consultation
              with Dr. Ameena.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="space-y-3 border-border bg-background p-5">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                1
              </div>
              <h4 className="font-serif text-base font-bold text-foreground">
                Pre-Visit Health Intake
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Complete our secure online intake detailing your symptom
                timeline, previous lab work, and health goals before arriving.
              </p>
            </Card>

            <Card className="space-y-3 border-border bg-background p-5">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                2
              </div>
              <h4 className="font-serif text-base font-bold text-foreground">
                60-Min In-Depth Consultation
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                An unhurried physical examination and deep conversation
                reviewing your endocrine, gut, and metabolic history.
              </p>
            </Card>

            <Card className="space-y-3 border-border bg-background p-5">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                3
              </div>
              <h4 className="font-serif text-base font-bold text-foreground">
                Targeted Biomarker Testing
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Orders for comprehensive thyroid, hormone, fasting insulin,
                ApoB, or SIBO breath tests sent directly to your laboratory.
              </p>
            </Card>

            <Card className="space-y-3 border-border bg-background p-5">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                4
              </div>
              <h4 className="font-serif text-base font-bold text-foreground">
                Personalized Care Plan
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                A 30-minute review consultation where Dr. Ameena presents your
                diagnostic roadmap, nutrition plan, and prescription strategy.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. TRANSPARENT PRICING & INSURANCE MATRIX */}
      <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <Badge variant="outline">Practice Policies</Badge>
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
            Transparent Pricing &amp; Insurance Clarity
          </h2>
          <p className="text-sm text-muted-foreground">
            No surprise billing, hidden fees, or mandatory monthly membership
            subscriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRACTICE_LOCATION.acceptedInsurance.map((item, idx) => (
            <Card
              key={idx}
              className="flex flex-col justify-between border-border bg-card p-6"
            >
              <div className="space-y-4">
                <Badge
                  variant={idx === 0 ? "default" : "secondary"}
                  className="w-fit text-xs"
                >
                  {item.status}
                </Badge>
                <div className="space-y-1">
                  <h4 className="font-serif text-base font-bold text-foreground">
                    {item.payers.join(", ")}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 border-t border-border pt-4 text-[11px] font-medium text-accent">
                [NEEDS CONFIRMATION: Verified Payer Status]
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 7. LATEST MEDICAL BLOG POSTS */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="space-y-2">
              <Badge variant="outline">Patient Education</Badge>
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Recent Clinical Articles &amp; Insights
              </h2>
              <p className="text-sm text-muted-foreground">
                Peer-reviewed medical education written directly by Dr. Ameena
                Patel.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/blog" className="flex items-center gap-2">
                <span>View All Articles</span>
                <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {BLOG_POSTS_DATA.slice(0, 3).map((post) => (
              <Card
                key={post.slug}
                className="flex flex-col justify-between border-border bg-card"
              >
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-mono text-[11px]">
                      {post.publishedDate}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="font-serif text-base leading-snug font-bold text-foreground">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-xs leading-relaxed">
                    {post.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between text-xs font-medium text-primary"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <span>Read Article</span>
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        className="size-4"
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CONVERSION ANCHOR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="space-y-6 border-primary/30 bg-card p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <HugeiconsIcon icon={HospitalIcon} className="size-6" />
          </div>
          <div className="mx-auto max-w-2xl space-y-2">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Take the First Step Toward Diagnostic Clarity
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Reserve your unhurried 60-minute consultation with Dr. Ameena
              Patel in our Chicago clinic or via secure telehealth.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground shadow-xs"
            >
              <Link href="/booking" className="flex items-center gap-2">
                <HugeiconsIcon icon={Calendar01Icon} className="size-5" />
                <span>Schedule 60-Min Consultation</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/location" className="flex items-center gap-2">
                <HugeiconsIcon icon={Location01Icon} className="size-4" />
                <span>Clinic Directions &amp; Contact</span>
              </Link>
            </Button>
          </div>
          <MedicalDisclaimer
            variant="compact"
            lastReviewed="2025-02-01"
            className="mx-auto mt-6 max-w-xl"
          />
        </Card>
      </section>
    </div>
  )
}
