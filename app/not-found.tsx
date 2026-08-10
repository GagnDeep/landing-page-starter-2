import { buildMetadata, buildJsonLd } from "@/lib/site"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import React from "react"

export const metadata = buildMetadata(
  "404 Not Found",
  "The page you are looking for does not exist on The Restaurant Stack Guide. Please return to the homepage to find the information you need.",
  "/404"
)

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-display mb-4">404</h1>
        <h2 className="text-h3 mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </main>
      <Footer />
      {buildJsonLd({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "404 Not Found | The Restaurant Stack Guide",
        description: "The page you are looking for does not exist on The Restaurant Stack Guide. Please return to the homepage to find the information you need.",
        url: "https://instituteofrestaurants.com/404",
      })}
    </div>
  )
}
