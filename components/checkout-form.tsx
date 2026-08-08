"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CheckoutForm() {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = React.useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL

    if (!checkoutUrl) {
      setStatus("error")
      setErrorMessage(
        "Checkout system is currently unavailable. Please try again later."
      )
      return
    }

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real implementation this would redirect to checkout or post to the endpoint
      if (email.includes("error")) throw new Error("Payment processor error")

      setStatus("success")
    } catch (err: unknown) {
      setStatus("error")
      if (err instanceof Error) {
        setErrorMessage(err.message)
      } else {
        setErrorMessage("An error occurred during checkout")
      }
    }
  }

  if (status === "success") {
    return (
      <Card className="mx-auto mt-8 w-full max-w-md border-border bg-card">
        <CardContent className="space-y-4 pt-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3 className="font-heading text-xl font-semibold">
            Ready for Download
          </h3>
          <p className="text-sm text-muted-foreground">
            Your Handpan Buyer&apos;s Roadmap has been sent to{" "}
            <strong>{email}</strong>.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mx-auto mt-8 w-full max-w-md border-border bg-card">
      <CardHeader>
        <CardTitle className="font-heading text-xl">
          Get the Complete Roadmap
        </CardTitle>
        <CardDescription>
          $29.00 USD — Delivered instantly to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
              className="bg-background"
            />
          </div>

          {status === "error" && (
            <div className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
              {errorMessage}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Processing..." : "Purchase Roadmap"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
