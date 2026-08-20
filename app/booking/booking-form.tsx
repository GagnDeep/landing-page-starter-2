"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calendar01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { NativeSelect } from "@/components/ui/native-select"
import { Card } from "@/components/ui/card"

export function BookingForm() {
  const [submitted, setSubmitted] = React.useState(false)

  if (submitted) {
    return (
      <Card className="space-y-4 border-primary/30 bg-primary/5 p-8 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-6" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-foreground">
          Consultation Request Received
        </h3>
        <p className="mx-auto max-w-md text-xs leading-relaxed text-muted-foreground">
          Thank you for reaching out. Our practice coordinator will contact you
          within 1 business day via phone or secure email to finalize your
          appointment time and pre-visit health intake packet.
        </p>
      </Card>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label
            htmlFor="fullName"
            className="text-xs font-semibold text-foreground"
          >
            Full Name *
          </Label>
          <Input
            id="fullName"
            required
            placeholder="e.g. Sarah Jenkins"
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-xs font-semibold text-foreground"
          >
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="sarah@example.com"
            className="bg-background"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label
            htmlFor="phone"
            className="text-xs font-semibold text-foreground"
          >
            Phone Number *
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            placeholder="(312) 555-0198"
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="consultType"
            className="text-xs font-semibold text-foreground"
          >
            Consultation Format *
          </Label>
          <NativeSelect
            id="consultType"
            required
            className="bg-background text-xs"
          >
            <option value="chicago-in-person">
              In-Person (Chicago Clinic - 450 N Michigan Ave)
            </option>
            <option value="telehealth-il">
              Telehealth Consultation (Illinois Resident)
            </option>
            <option value="telehealth-in">
              Telehealth Consultation (Indiana Resident)
            </option>
            <option value="telehealth-wi">
              Telehealth Consultation (Wisconsin Resident)
            </option>
          </NativeSelect>
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="topic"
          className="text-xs font-semibold text-foreground"
        >
          Primary Clinical Area of Concern *
        </Label>
        <NativeSelect id="topic" required className="bg-background text-xs">
          <option value="thyroid-hashimotos">
            Thyroid Imbalance / Hashimoto&apos;s
          </option>
          <option value="perimenopause-hormones">
            Perimenopause / Hormonal Shift
          </option>
          <option value="pcos-metabolic">PCOS / Insulin Resistance</option>
          <option value="chronic-fatigue">Unexplained Chronic Fatigue</option>
          <option value="gut-sibo">
            Gut Microbiome / Chronic Bloating / SIBO
          </option>
          <option value="general-integrative">
            General Integrative Health Evaluation
          </option>
        </NativeSelect>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="notes"
          className="text-xs font-semibold text-foreground"
        >
          General Practice Notes (Do NOT include detailed Protected Health
          Information)
        </Label>
        <Textarea
          id="notes"
          placeholder="Briefly state preferred scheduling days or general questions..."
          rows={3}
          className="bg-background text-xs"
        />
        <p className="text-[11px] text-muted-foreground">
          🔒 <strong>HIPAA Privacy Notice:</strong> This form collects contact
          details for scheduling purposes only. Do not submit detailed medical
          history or confidential personal health details.
        </p>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-lg bg-accent font-medium text-accent-foreground"
      >
        <HugeiconsIcon icon={Calendar01Icon} className="mr-2 size-4" />
        <span>Request 60-Minute Diagnostic Consultation</span>
      </Button>
    </form>
  )
}
