import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MedicalDisclaimer } from "@/components/medical-disclaimer"
import { BookingForm } from "./booking-form"

export const metadata: Metadata = {
  title: "Book Consultation | Dr. Ameena Patel, MD Practice",
  description:
    "Schedule your 60-minute in-person clinical consultation in Chicago or via secure telehealth in IL, IN, and WI with Dr. Ameena Patel.",
}

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <Badge variant="outline" className="text-xs">
          Appointment Scheduling
        </Badge>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Schedule Your 60-Minute Consultation
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          In-person clinical evaluations at our Chicago office (450 N Michigan
          Ave) or secure HIPAA telehealth consultations for residents of
          Illinois, Indiana, and Wisconsin.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Left Col: Booking Form */}
        <Card className="border-border bg-card p-6 shadow-sm lg:col-span-7">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="font-serif text-xl font-bold text-foreground">
              Request Initial Appointment
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <BookingForm />
          </CardContent>
        </Card>

        {/* Right Col: Consultation Details */}
        <div className="space-y-6 lg:col-span-5">
          <Card className="space-y-4 border-border bg-card p-6">
            <h3 className="font-serif text-lg font-bold text-foreground">
              Consultation Fee &amp; Insurance
            </h3>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>
                <strong className="text-foreground">
                  Initial Consult (60 min):
                </strong>{" "}
                $250
              </p>
              <p>
                <strong className="text-foreground">
                  Follow-Up Review (30 min):
                </strong>{" "}
                $125
              </p>
              <p className="border-t border-border pt-2">
                <strong className="text-foreground">Insurance:</strong> We bill
                BCBS PPO &amp; Medicare Part B directly. For out-of-network PPO
                plans, we provide itemized superbills.
              </p>
            </div>
            <div className="text-[11px] font-medium text-accent">
              [NEEDS CONFIRMATION: Consultation Fee Schedule]
            </div>
          </Card>

          <Card className="space-y-3 border-border bg-card p-6">
            <h3 className="font-serif text-lg font-bold text-foreground">
              What Happens Next?
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>
                  Our patient coordinator contacts you within 24 hours to
                  confirm date and time.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>
                  You receive a secure digital intake packet to complete prior
                  to your visit.
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <MedicalDisclaimer variant="standard" lastReviewed="2025-02-01" />
    </div>
  )
}
