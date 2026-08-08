"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function SubscribeForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setStatus("error")
      setMessage("Please enter a valid email address.")
      return
    }

    setStatus("loading")
    setMessage("")

    try {
      const endpoint = process.env.NEXT_PUBLIC_SUBSCRIBE_URL
      if (!endpoint) {
        // Graceful failure if env var is missing
        console.warn("NEXT_PUBLIC_SUBSCRIBE_URL is not set.")
        throw new Error("Subscription service unavailable.")
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        throw new Error("Failed to subscribe.")
      }

      setStatus("success")
      setMessage("Thank you for subscribing to The Desk.")
      setEmail("")
    } catch (err: unknown) {
      setStatus("error")
      setMessage(
        (err instanceof Error ? err.message : "An unknown error occurred") ||
          "An error occurred. Please try again."
      )
    }
  }

  return (
    <div
      className={cn(
        "rounded-lg bg-primary p-6 text-primary-foreground shadow-sm",
        className
      )}
    >
      <h3 className="mb-2 font-heading text-xl font-semibold">
        Subscribe to The Desk
      </h3>
      <p className="mb-6 text-sm opacity-90">
        Twice-weekly issues on underwriting tooling, hiring, market moves, and
        the AI debate. No spam, ever.
      </p>

      {status === "success" ? (
        <div className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 p-4">
          <p className="text-center font-mono text-sm font-medium">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="email-subscribe" className="sr-only">
              Email address
            </label>
            <input
              id="email-subscribe"
              type="email"
              placeholder="name@carrier.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm placeholder:text-primary-foreground/50 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:outline-none disabled:opacity-50"
              aria-describedby={
                status === "error" ? "subscribe-error" : undefined
              }
            />
            {status === "error" && (
              <p
                id="subscribe-error"
                className="mt-1 text-xs font-medium text-destructive"
              >
                {message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:outline-none disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  )
}
