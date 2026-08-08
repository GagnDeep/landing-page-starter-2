"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Wire email to a NEXT_PUBLIC environment variable gracefully falling back if not set
    const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT

    if (!endpoint) {
      // Graceful fallback if no env variable is set
      setTimeout(() => {
        setStatus("success")
        setMessage(
          "Thanks for subscribing! (Demo mode - no endpoint configured)"
        )
        setEmail("")
      }, 800)
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus("success")
        setMessage("Thanks for subscribing!")
        setEmail("")
      } else {
        throw new Error("Failed to subscribe")
      }
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-3">
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email address"
          required
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex h-12 w-full rounded-none border-2 border-input bg-background px-4 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-12 rounded-none px-6 font-semibold tracking-wider uppercase transition-transform active:scale-95"
        >
          {status === "loading" ? "..." : "Join"}
        </Button>
      </div>
      {status === "success" && (
        <p className="animate-in text-sm font-medium text-success fade-in">
          {message}
        </p>
      )}
      {status === "error" && (
        <p className="animate-in text-sm font-medium text-destructive fade-in">
          {message}
        </p>
      )}
    </form>
  )
}
