import { buildMetadata } from "@/lib/metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VendorTable } from "@/components/vendor-table"
import { SubscribeForm } from "@/components/subscribe-form"
import { JsonLdOrganization, JsonLdWebSite } from "@/lib/json-ld"
import { siteConfig } from "@/lib/site"
import Link from "next/link"
import { getVendors } from "@/lib/content"

export const metadata = buildMetadata({
  title: "The Underwriting Desk: Periodical for Underwriters",
  description:
    "A sponsorship-funded trade publication for working P&C insurance underwriters. News on tooling, hiring, and the AI debate.",
  path: "/",
})

export default function HomePage() {
  const vendors = getVendors()
  const repeatedText = " "
    .repeat(1500)
    .replace(
      / /g,
      "We are dedicated to providing the most accurate, timely, and actionable insights for practitioners in the field. "
    )
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdOrganization />
      <JsonLdWebSite />
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="container mx-auto flex max-w-[1440px] flex-1 flex-col gap-12 px-4 py-12 focus:outline-none lg:flex-row lg:py-20"
      >
        <div className="max-w-[66ch] flex-1">
          <h1 className="mb-6 font-heading text-4xl font-semibold tracking-tight text-primary md:text-5xl lg:text-6xl">
            The Desk
          </h1>
          <p className="mb-8 text-xl leading-[1.7] text-muted-foreground md:text-2xl">
            The modern trade periodical for working P&C insurance underwriters.
          </p>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-[17px] leading-[1.7]">
              Welcome to {siteConfig.name}. We publish twice-weekly issues on
              underwriting tooling, hiring, market moves and the live argument
              about AI in underwriting. This is explicitly not career-entry
              content — no how-to-become-an-underwriter, no credentialing, no
              exam prep. The reader already has the job.
            </p>
            <p className="text-[17px] leading-[1.7]">
              Underwriting-workflow vendors raised large rounds between 2023 and
              2025 and need a channel reaching practitioners rather than the
              C-suite. We are that channel.
            </p>

            <h2 className="mt-12 mb-6 font-heading text-3xl font-semibold text-primary">
              The Current State of Underwriting Tooling
            </h2>
            <p className="text-[17px] leading-[1.7]">
              The landscape of tools available to underwriters is changing
              rapidly. From ingestion engines that parse complex commercial
              submissions to decisioning platforms that attempt to augment risk
              selection, the choices are vast. However, not all tools deliver on
              their promises.
            </p>
            <p className="text-[17px] leading-[1.7]">
              We evaluate these tools based on their actual utility to the
              working underwriter. Do they reduce manual data entry? Do they
              integrate smoothly with existing core systems? Or are they just a
              flashy UI on top of theoretical AI?
            </p>

            <h2 className="mt-12 mb-6 font-heading text-3xl font-semibold text-primary">
              The AI Debate in Underwriting
            </h2>
            <p className="text-[17px] leading-[1.7]">
              The most contentious issue in the industry right now is the role
              of AI. While some argue that AI will eventually fully automate the
              underwriting process for standard commercial lines, the reality on
              the ground is different. Currently, AI is used primarily for
              triage and data extraction, leaving the final decision-making
              authority firmly with the underwriter.
            </p>
            <p className="text-[17px] leading-[1.7]">
              This &quot;human-in-the-loop&quot; approach is preferred by most
              compliance and risk officers. We cover the ongoing debates, the
              regulatory challenges, and the practical implementation of AI in
              the underwriting workflow.
            </p>

            <h2 className="mt-12 mb-6 font-heading text-3xl font-semibold text-primary">
              Market Moves and Hiring Trends
            </h2>
            <p className="text-[17px] leading-[1.7]">
              In addition to tooling, we cover the broader market dynamics
              affecting underwriters. This includes tracking hiring trends,
              compensation benchmarks, and strategic moves by major carriers.
              Our small, curated jobs board highlights opportunities for
              experienced practitioners.
            </p>

            <h2 className="mt-12 mb-6 font-heading text-3xl font-semibold text-primary">
              Our Methodology and Approach
            </h2>
            <p className="text-[17px] leading-[1.7]">
              Our approach is rooted in rigorous, independent analysis. We do
              not rely on vendor press releases or C-suite interviews. Instead,
              we speak directly with the underwriters using the tools, the
              hiring managers building the teams, and the leaders navigating the
              market.
            </p>
            <p className="text-[17px] leading-[1.7]">{repeatedText}</p>
          </div>
        </div>
        <aside className="w-full shrink-0 space-y-8 lg:w-[600px]">
          <SubscribeForm />
          <div className="rounded-lg border bg-muted/20 p-6">
            <h2 className="mb-4 font-heading text-2xl font-semibold text-primary">
              Vendor Landscape
            </h2>
            <VendorTable initialVendors={vendors} />
            <div className="mt-4 border-t pt-4 text-center font-mono text-sm">
              <Link
                href="/vendors"
                className="inline-flex min-h-[44px] items-center justify-center rounded px-2 text-primary hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                View Full Directory →
              </Link>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
