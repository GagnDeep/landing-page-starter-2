"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CheckoutForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    // Wire to environment variable per brief
    const endpoint = process.env.NEXT_PUBLIC_CHECKOUT_ENDPOINT

    if (!endpoint) {
      // Graceful failure if env var is missing
      console.warn("Checkout endpoint not configured.")
      setTimeout(() => setStatus("error"), 600)
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(e.currentTarget),
      })

      if (res.ok) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="w-full border border-secondary bg-secondary/10 p-6 text-secondary">
        <h4 className="font-heading font-bold tracking-tight uppercase">
          Request Received
        </h4>
        <p className="mt-2 text-sm">
          Our stack consultants will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="sr-only text-sm font-bold tracking-widest text-muted-foreground uppercase"
        >
          Work Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="flex h-12 w-full rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter work email for consultation..."
        />
      </div>

      {status === "error" && (
        <div className="text-sm font-bold text-destructive">
          Failed to submit. Please try again later.
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="w-full bg-accent font-bold tracking-widest text-accent-foreground uppercase hover:bg-accent/90"
      >
        {status === "loading" ? "Processing..." : "Get Stack Analysis"}
      </Button>
    </form>
  )
}
