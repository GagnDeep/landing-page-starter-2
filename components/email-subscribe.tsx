"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function EmailSubscribe({ className }: { className?: string }) {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  // We use NEXT_PUBLIC_CONTACT_ENDPOINT to conditionally attempt network fetch
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    if (!endpoint) {
      // Graceful failure/mock success when endpoint is not configured (expected behavior for static template)
      setTimeout(() => {
        setStatus("success")
      }, 800)
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Failed to subscribe")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div
      className={cn(
        "rounded-[0.375rem] border border-border bg-muted p-8",
        className
      )}
    >
      <h3 className="mb-4 font-heading text-3xl text-foreground">
        Stay Updated
      </h3>
      <p className="mb-6 max-w-[50ch] text-muted-foreground">
        Get the latest updates on commercial aerospace compliance and specific
        regional operational guidelines.
      </p>

      {status === "success" ? (
        <div className="animate-in rounded-[0.375rem] border border-accent bg-background p-4 font-medium text-foreground fade-in zoom-in">
          Successfully subscribed! Thank you.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 rounded-[0.375rem] border border-border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
            disabled={status === "loading"}
            required
            aria-label="Email address for updates"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-[0.375rem] bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-ring focus:outline-none disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-2 text-sm text-destructive">
          Failed to connect to the server. Please try again later.
        </p>
      )}
    </div>
  )
}
