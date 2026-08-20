import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  HospitalIcon,
  Location01Icon,
  CallIcon,
  Clock01Icon,
  Calendar01Icon,
  SecurityCheckIcon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons"

import { MedicalDisclaimer } from "@/components/medical-disclaimer"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      {/* Top Banner with NAP Quick Bar */}
      <div className="border-b border-border bg-secondary/40 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <HugeiconsIcon icon={Location01Icon} className="size-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                Clinic Address
              </h4>
              <p className="text-xs text-muted-foreground">
                450 N Michigan Ave, Suite 1200
                <br />
                Chicago, IL 60611
              </p>
              <span className="mt-1 inline-block text-[11px] font-medium text-accent">
                [NEEDS CONFIRMATION: Practice Address]
              </span>
            </div>
          </div>

          {/* Phone & Fax */}
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <HugeiconsIcon icon={CallIcon} className="size-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                Phone &amp; HIPAA Fax
              </h4>
              <p className="text-xs text-muted-foreground">
                Phone: (312) 555-0198
                <br />
                Fax: (312) 555-0199
              </p>
              <span className="mt-1 inline-block text-[11px] font-medium text-accent">
                [NEEDS CONFIRMATION: Office Numbers]
              </span>
            </div>
          </div>

          {/* Practice Hours */}
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <HugeiconsIcon icon={Clock01Icon} className="size-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                Consultation Hours
              </h4>
              <p className="text-xs text-muted-foreground">
                Mon – Thu: 8:30 AM – 4:30 PM
                <br />
                Fri: Telehealth Appointments Only
              </p>
              <span className="mt-1 inline-block text-[11px] font-medium text-accent">
                [NEEDS CONFIRMATION: Practice Hours]
              </span>
            </div>
          </div>

          {/* Telehealth & Licensing */}
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <HugeiconsIcon icon={SecurityCheckIcon} className="size-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                Medical Licensing
              </h4>
              <p className="text-xs text-muted-foreground">
                Licensed Physician (IL Lic. No. 036.198201)
                <br />
                Telehealth in IL, IN, &amp; WI
              </p>
              <span className="mt-1 inline-block text-[11px] font-medium text-accent">
                [NEEDS CONFIRMATION: License Numbers]
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Tree */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Practice Bio */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <HugeiconsIcon icon={HospitalIcon} className="size-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                Dr. Ameena Patel, MD, FACP
              </span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
              Board-certified internal medicine physician delivering
              evidence-led, root-cause diagnostic care for women navigating
              hormonal shifts, thyroid conditions, gut dysbiosis, and metabolic
              exhaustion.
            </p>
            <div className="pt-2">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-medium text-accent-foreground shadow-xs transition-transform hover:scale-[1.02]"
              >
                <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Conditions Library */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-foreground">
              Conditions Evaluated
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link
                  href="/conditions/hashimotos-hypothyroidism"
                  className="hover:text-foreground"
                >
                  Hashimoto&apos;s &amp; Hypothyroidism
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/pcos-insulin-resistance"
                  className="hover:text-foreground"
                >
                  PCOS &amp; Insulin Resistance
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/perimenopause-hormonal-transition"
                  className="hover:text-foreground"
                >
                  Perimenopause &amp; Hormonal Shift
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/chronic-fatigue-adrenal-dysfunction"
                  className="hover:text-foreground"
                >
                  Chronic Fatigue &amp; Burnout
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/gut-dysbiosis-sibo"
                  className="hover:text-foreground"
                >
                  Gut Microbiome &amp; SIBO
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/metabolic-syndrome-prediabetes"
                  className="hover:text-foreground"
                >
                  Metabolic Health &amp; Prediabetes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Treatments & Symptoms */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-foreground">
              Clinical Pathways
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link
                  href="/treatments/comprehensive-hormone-evaluation"
                  className="hover:text-foreground"
                >
                  Comprehensive Hormone Panel
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/gut-microbiome-restoration"
                  className="hover:text-foreground"
                >
                  Gut Microbiome Restoration
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/bioidentical-hormone-therapy"
                  className="hover:text-foreground"
                >
                  Bioidentical HRT Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/symptoms/unexplained-fatigue"
                  className="hover:text-foreground"
                >
                  Symptom Guide: Unexplained Fatigue
                </Link>
              </li>
              <li>
                <Link
                  href="/symptoms/brain-fog-memory"
                  className="hover:text-foreground"
                >
                  Symptom Guide: Brain Fog &amp; Focus
                </Link>
              </li>
              <li>
                <Link
                  href="/symptoms/chronic-bloating-digestive"
                  className="hover:text-foreground"
                >
                  Symptom Guide: Chronic Bloating
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Practice & Media */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-foreground">
              Practice &amp; Media
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About Dr. Ameena &amp; Credentials
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-foreground">
                  Press Kit &amp; Speaking Inquiries
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-foreground">
                  Clinic Location &amp; Map
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-foreground">
                  Appointment Scheduling
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground">
                  Medical Education Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact Practice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Medical Disclaimer */}
        <div className="mt-12 border-t border-border pt-8">
          <MedicalDisclaimer variant="standard" lastReviewed="2025-02-01" />
        </div>

        {/* Bottom Copyright & Verification Notice */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-6 text-[11px] text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Dr. Ameena Patel, MD, FACP. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-accent">
              [NEEDS CONFIRMATION: Client Fact Verification Pending]
            </span>
            <Link
              href="/location"
              className="flex items-center gap-1 hover:underline"
            >
              <span>Directions &amp; Parking</span>
              <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
