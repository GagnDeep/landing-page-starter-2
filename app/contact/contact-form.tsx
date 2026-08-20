"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { NativeSelect } from "@/components/ui/native-select"
import { Card } from "@/components/ui/card"

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false)

  if (submitted) {
    return (
      <Card className="space-y-3 border-primary/30 bg-primary/5 p-8 text-center">
        <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-5" />
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground">
          Message Received
        </h3>
        <p className="mx-auto max-w-sm text-xs leading-relaxed text-muted-foreground">
          Thank you for reaching out to Dr. Ameena Patel&apos;s practice. We
          will respond within 24 business hours.
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
      className="space-y-4"
    >
      <div className="space-y-1.5">
        <Label
          htmlFor="contactName"
          className="text-xs font-semibold text-foreground"
        >
          Full Name *
        </Label>
        <Input
          id="contactName"
          required
          placeholder="e.g. Jane Doe"
          className="bg-background text-xs"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label
            htmlFor="contactEmail"
            className="text-xs font-semibold text-foreground"
          >
            Email Address *
          </Label>
          <Input
            id="contactEmail"
            type="email"
            required
            placeholder="jane@example.com"
            className="bg-background text-xs"
          />
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor="contactPhone"
            className="text-xs font-semibold text-foreground"
          >
            Phone Number *
          </Label>
          <Input
            id="contactPhone"
            type="tel"
            required
            placeholder="(312) 555-0198"
            className="bg-background text-xs"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="inquiryType"
          className="text-xs font-semibold text-foreground"
        >
          Inquiry Type *
        </Label>
        <NativeSelect
          id="inquiryType"
          required
          className="bg-background text-xs"
        >
          <option value="general">General Practice Inquiry</option>
          <option value="billing">Insurance &amp; Billing Question</option>
          <option value="press">Press &amp; Media Interview Request</option>
          <option value="speaking">Conference Speaking Engagement</option>
        </NativeSelect>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="message"
          className="text-xs font-semibold text-foreground"
        >
          Message *
        </Label>
        <Textarea
          id="message"
          required
          placeholder="Type your non-clinical inquiry..."
          rows={4}
          className="bg-background text-xs"
        />
        <p className="text-[11px] text-muted-foreground">
          🔒 <strong>Privacy Notice:</strong> Do not send confidential medical
          history or protected health information (PHI) via this form.
        </p>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-lg bg-accent font-medium text-accent-foreground"
      >
        Send Practice Inquiry
      </Button>
    </form>
  )
}
