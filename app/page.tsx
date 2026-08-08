import Link from "next/link"

import { buildMetadata, buildOrganizationJsonLd, buildJsonLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TicketRail } from "@/components/ticket-rail"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "The Restaurant Stack Guide",
})

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([buildOrganizationJsonLd(), buildJsonLd()]),
        }}
      />
      <Header />
      <main className="flex-1">
        <section className="container flex flex-col items-center justify-between gap-12 px-4 py-12 md:flex-row md:py-24 lg:py-32 xl:py-48">
          <div className="flex max-w-[800px] flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The First-Time Independent Restaurant Owner&apos;s Setup Guide
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              You&apos;ve signed a lease. You are opening a restaurant. Now you
              have 90 days to make a ten-to-one-hundred-thousand-dollar tech
              stack decision, and you are drowning in sales calls. This guide
              gives you the facts on POS systems, payroll, online ordering, and
              reservations.
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/about">
                  Read the Guide{" "}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="ml-2 size-5"
                  />
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <TicketRail
              eyebrow="Tech Stack Estimates"
              title="Line Check"
              items={[
                {
                  label: "POS System (Toast)",
                  value: "{{VERIFY: Toast POS estimate}}",
                },
                {
                  label: "Payroll (Square)",
                  value: "{{VERIFY: Square payroll estimate}}",
                },
                {
                  label: "Reservations",
                  value: "{{VERIFY: Square payroll estimate}}",
                },
                {
                  label: "Online Ordering",
                  value: "{{VERIFY: Online ordering estimate}}",
                },
              ]}
              totalLabel="Est. Initial Cost"
              totalValue="{{VERIFY: Total estimate}}"
              action={
                <Button className="w-full bg-accent font-bold tracking-widest text-accent-foreground uppercase hover:bg-accent/90">
                  Start Planning
                </Button>
              }
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
