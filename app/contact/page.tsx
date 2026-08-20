import type { Metadata } from "next"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Location01Icon,
  CallIcon,
  Clock01Icon,
  Calendar01Icon,
} from "@hugeicons/core-free-icons"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MedicalDisclaimer } from "@/components/medical-disclaimer"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact Practice | Dr. Ameena Patel, MD",
  description:
    "Contact Dr. Ameena Patel's Chicago office for general practice inquiries, billing questions, media requests, or location directions.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <Badge variant="outline" className="text-xs">
          Contact Practice
        </Badge>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Get in Touch with Our Practice
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Have general questions about consultation scheduling, insurance
          coverage, or media requests? Reach out to our practice coordinator
          below.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Contact Form */}
        <Card className="border-border bg-card p-6 shadow-sm lg:col-span-7">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="font-serif text-xl font-bold text-foreground">
              Send a General Practice Inquiry
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <ContactForm />
          </CardContent>
        </Card>

        {/* Practice Quick Info */}
        <div className="space-y-6 lg:col-span-5">
          <Card className="space-y-4 border-border bg-card p-6">
            <h3 className="font-serif text-lg font-bold text-foreground">
              Direct Contact Information
            </h3>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <HugeiconsIcon
                  icon={Location01Icon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <div>
                  <strong>Address:</strong> 450 N Michigan Ave, Suite 1200,
                  Chicago, IL 60611
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <HugeiconsIcon
                  icon={CallIcon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <div>
                  <strong>Phone:</strong> (312) 555-0198
                  <br />
                  <strong>HIPAA Fax:</strong> (312) 555-0199
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <HugeiconsIcon
                  icon={Clock01Icon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <div>
                  <strong>Hours:</strong> Mon–Thu 8:30 AM – 4:30 PM | Fri
                  Telehealth
                </div>
              </div>
            </div>
            <div className="text-[11px] text-accent">
              [NEEDS CONFIRMATION: Practice Phone &amp; Fax]
            </div>
          </Card>

          <Card className="space-y-3 border-border bg-card p-6">
            <h3 className="font-serif text-lg font-bold text-foreground">
              Looking to Book a Patient Visit?
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              If you are a new or returning patient seeking a 60-minute
              diagnostic consultation, use our online booking system.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full rounded-lg bg-accent font-medium text-accent-foreground"
            >
              <Link
                href="/booking"
                className="flex items-center justify-center gap-2"
              >
                <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
                <span>Go to Appointment Booking</span>
              </Link>
            </Button>
          </Card>
        </div>
      </div>

      <MedicalDisclaimer variant="standard" lastReviewed="2025-02-01" />
    </div>
  )
}
