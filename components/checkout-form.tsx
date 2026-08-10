"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CheckoutForm({
  templateName,
  price,
}: {
  templateName: string
  price: string
}) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const endpoint = process.env.NEXT_PUBLIC_CHECKOUT_ENDPOINT

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!endpoint) {
      // Graceful failure if env var is missing
      setStatus("error")
      return
    }

    setStatus("loading")

    try {
      // Simulate network request to the webhook/endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, templateName, price }),
      })

      if (!response.ok) {
        throw new Error("Failed to process")
      }

      setStatus("success")
      setEmail("")
    } catch {
      // Graceful failure fallback
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md bg-primary/10 p-4 text-center">
        <h4 className="mb-1 font-heading font-medium text-primary">
          Check your inbox
        </h4>
        <p className="text-sm text-primary/80">
          We&apos;ve sent the secure download link for {templateName} to your
          email.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@cateringbusiness.com"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      {status === "error" && (
        <div className="text-sm font-medium text-destructive">
          There was a problem processing your request. Please try again later.
        </div>
      )}

      <Button type="submit" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Processing..." : `Purchase Template`}
      </Button>
    </form>
  )
}
