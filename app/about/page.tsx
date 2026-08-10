import { buildMetadata, buildJsonLd } from "@/lib/site"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Prose } from "@/components/layout/prose"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import React from "react"

export const metadata = buildMetadata(
  "About",
  "Learn about The Restaurant Stack Guide, our mission, and how we help independent restaurant owners make crucial technology decisions before opening their doors.",
  "/about"
)

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-screen-md py-16 md:py-24">
        <div className="mb-8">
          <Breadcrumbs items={[{ label: "About", href: "/about/" }]} />
        </div>
        <Prose>
          <h1 className="text-4xl md:text-5xl mb-6">About Us</h1>
          <p className="text-lead text-muted-foreground mb-8">
            The Restaurant Stack Guide is a pre-opening buying guide for first-time independent restaurant owners.
          </p>
          <p className="mb-4">
            Opening a restaurant is hard. In the ninety days before opening, you face decisions that will cost between ten and one hundred thousand dollars. We help you choose the right point-of-sale, payroll, online-ordering, and reservation systems.
          </p>
          <p>
            We are not a culinary school and not a restaurant blog. We cut through the noise and give you the facts you need to make the right call, right now.
          </p>
        </Prose>
      </main>
      <Footer />
      {buildJsonLd({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "About | The Restaurant Stack Guide",
        description: "Learn about The Restaurant Stack Guide, our mission, and how we help independent restaurant owners make crucial technology decisions before opening their doors.",
        url: "https://instituteofrestaurants.com/about/",
      })}
    </div>
  )
}
