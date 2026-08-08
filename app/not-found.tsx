import Link from "next/link"

import { JsonLd } from "@/components/json-ld"
import { siteConfig } from "@/lib/site"
import { Button } from "@/components/ui/button"

import { buildMetadata } from "@/lib/site"

export const metadata = buildMetadata(
  "Page Not Found",
  "The page you are looking for does not exist on AI and Investing. It may have been removed, changed names, or is temporarily unavailable right now.",
  "/404/"
)

export default function NotFound() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Not Found",
        item: `${siteConfig.url}/404/`,
      },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="container flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 font-heading text-6xl font-semibold tracking-tight">
          404
        </h1>
        <h2 className="mb-8 text-2xl font-medium text-muted-foreground">
          Page Not Found
        </h2>
        <p className="mb-8 max-w-md leading-loose text-muted-foreground">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </>
  )
}
