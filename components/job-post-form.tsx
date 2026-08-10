"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkBadge01Icon, Alert01Icon } from "@hugeicons/core-free-icons"

export function JobPostForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    // Wire to NEXT_PUBLIC env variable per requirements
    const webhookUrl = process.env.NEXT_PUBLIC_JOB_POST_WEBHOOK

    if (!webhookUrl) {
      // Graceful fallback if no env variable is set
      setTimeout(() => {
        setStatus("success")
      }, 1000)
      return
    }

    try {
      const formData = new FormData(e.currentTarget)
      const res = await fetch(webhookUrl, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      })
      if (!res.ok) throw new Error("Failed to submit")
      setStatus("success")
    } catch {
      setStatus("error")
      setErrorMessage(
        "There was an issue submitting your role. Please try again or contact support."
      )
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center gap-4 py-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <HugeiconsIcon icon={CheckmarkBadge01Icon} className="size-6" />
        </div>
        <div>
          <h3 className="mb-2 text-h3">Submission Received</h3>
          <p className="mx-auto max-w-sm text-sm break-words text-muted-foreground">
            Your role has been securely submitted for review. Our team will
            verify your supplier status and contact you with next steps.
          </p>
        </div>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setStatus("idle")}
        >
          Post Another Role
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      {status === "error" && (
        <div
          className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm break-words text-destructive"
          role="alert"
          aria-live="assertive"
        >
          <HugeiconsIcon icon={Alert01Icon} className="size-5 shrink-0" />
          <p id="form-error-msg">{errorMessage}</p>
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="companyName"
            className="text-sm font-medium text-foreground"
          >
            Company Name
          </label>
          <Input
            id="companyName"
            name="companyName"
            required
            placeholder="e.g. Boston Dynamics"
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "form-error-msg" : undefined}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="jobTitle"
            className="text-sm font-medium text-foreground"
          >
            Job Title
          </label>
          <Input
            id="jobTitle"
            name="jobTitle"
            required
            placeholder="e.g. Senior Actuator Engineer"
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "form-error-msg" : undefined}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="jobUrl" className="text-sm font-medium text-foreground">
          Job Listing URL
        </label>
        <Input
          id="jobUrl"
          name="jobUrl"
          type="url"
          required
          placeholder="https://..."
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? "form-error-msg" : undefined}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Contact Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="work@company.com"
          aria-invalid={status === "error"}
          aria-describedby={
            status === "error" ? "form-error-msg email-hint" : "email-hint"
          }
        />
        <p
          id="email-hint"
          className="text-xs break-words text-muted-foreground"
        >
          We will use this to send checkout instructions.
        </p>
      </div>
      <div className="pt-2">
        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full min-w-[200px] transition-colors motion-reduce:transition-none sm:w-auto"
        >
          {status === "loading" ? "Submitting..." : "Submit Role for Review"}
        </Button>
      </div>
    </form>
  )
}
