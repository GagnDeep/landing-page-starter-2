import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CustodyMatrix } from "@/components/custody-matrix"
import {
  buildMetadata,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/site"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Shield01Icon,
  Database01Icon,
  Delete01Icon,
  LockKeyIcon,
  UserCircleIcon,
  SaleTag02Icon,
  PoliceBadgeIcon,
  QuestionIcon,
} from "@hugeicons/core-free-icons"

export const metadata: Metadata = buildMetadata({
  title: "Consumer DNA Test Privacy Comparison",
  description:
    "Comparing consumer DNA test privacy policies and chain of custody. We assess policy, not science.",
})

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            buildOrganizationJsonLd(),
            buildWebsiteJsonLd(),
          ]),
        }}
      />
      <Header />

      <main className="flex-1">
        {/* Section 1: Split Hero (Background) */}
        <section className="section-padding border-b border-border bg-background">
          <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none">
                Independent Policy Assessment
              </div>
              <h1 className="text-display">Who owns your DNA?</h1>
              <p className="text-lead">
                Minutes from spitting in a tube, you wonder who ends up owning
                the result. We compare consumer DNA tests based solely on
                privacy, chain of custody, and what happens when they go
                bankrupt.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="/matrix"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium whitespace-nowrap text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  View the Matrix
                </a>
              </div>
            </div>
            <div className="relative">
              {/* Decorative SVG Geometric Motif */}
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/10" />
              <svg
                width="100%"
                height="400"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-full text-primary drop-shadow-sm"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="10 10"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M 50 200 L 350 200 M 200 50 L 200 350"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
                <rect
                  x="150"
                  y="150"
                  width="100"
                  height="100"
                  fill="currentColor"
                  fillOpacity="0.1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Section 2: Signature Component - Custody Matrix (Muted) */}
        <section
          id="matrix"
          className="section-padding border-b border-border bg-muted"
        >
          <div className="container mx-auto space-y-12 px-4">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-h2">The Custody Matrix</h2>
              <p className="text-lead">
                Compare the leading providers on sample destruction, data
                deletion, and law enforcement access.
              </p>
            </div>
            <CustodyMatrix />
          </div>
        </section>

        {/* Section 3: Bento Grid of Unequal Tiles (Background) */}
        <section className="section-padding border-b border-border bg-background">
          <div className="container mx-auto space-y-12 px-4">
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">
                The Risks
              </span>
              <h2 className="text-h2">What happens to your sample?</h2>
              <p className="text-lead">
                Understanding the lifecycle of your genomic data from collection
                to potential deletion.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-4 rounded-lg border border-border bg-card p-8 md:col-span-2">
                <HugeiconsIcon
                  icon={Database01Icon}
                  className="size-8 text-primary"
                />
                <h3 className="text-h3">Data Retention</h3>
                <p className="text-body">
                  Providers vary wildly on how long they retain the physical
                  sample versus the digitized sequence. Some destroy the tube
                  immediately after sequencing, while others bank it
                  indefinitely unless explicitly told otherwise.
                </p>
              </div>
              <div className="space-y-4 rounded-lg border border-border bg-card p-8">
                <HugeiconsIcon
                  icon={Delete01Icon}
                  className="size-8 text-primary"
                />
                <h3 className="text-h3">Deletion Policies</h3>
                <p className="text-body">
                  A deletion request might not mean immediate erasure. Backups
                  can persist for months.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Two-column Alternating Explainer (Accent Tint) */}
        <section className="section-padding border-b border-border bg-primary/5">
          <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
            <div className="order-2 flex justify-center md:order-1">
              {/* Diagram SVG */}
              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-sm text-primary"
              >
                <rect
                  x="50"
                  y="50"
                  width="200"
                  height="60"
                  rx="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <text
                  x="150"
                  y="85"
                  textAnchor="middle"
                  fill="currentColor"
                  className="font-mono text-sm"
                >
                  Provider Storage
                </text>

                <path
                  d="M 150 110 L 150 190"
                  stroke="currentColor"
                  strokeWidth="2"
                  markerEnd="url(#arrow)"
                />

                <rect
                  x="50"
                  y="190"
                  width="200"
                  height="60"
                  rx="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <text
                  x="150"
                  y="225"
                  textAnchor="middle"
                  fill="currentColor"
                  className="font-mono text-sm"
                >
                  Third-Party Buyer
                </text>

                <defs>
                  <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
            </div>
            <div className="order-1 space-y-6 md:order-2">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">
                Bankruptcy
              </span>
              <h2 className="text-h2">The 23andMe Precedent</h2>
              <p className="text-body">
                When a provider enters financial distress, privacy promises face
                the auction block. Terms of service often include clauses
                allowing data transfer during a merger or acquisition.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <HugeiconsIcon
                    icon={SaleTag02Icon}
                    className="mt-1 size-6 shrink-0 text-primary"
                  />
                  <div>
                    <h4 className="font-bold">Asset Liquidation</h4>
                    <p className="text-sm text-muted-foreground">
                      Genomic databases are highly valuable assets.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <HugeiconsIcon
                    icon={Shield01Icon}
                    className="mt-1 size-6 shrink-0 text-primary"
                  />
                  <div>
                    <h4 className="font-bold">Policy Changes</h4>
                    <p className="text-sm text-muted-foreground">
                      New owners can rewrite the terms of service.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Numbered Process Stepper (Background) */}
        <section className="section-padding border-b border-border bg-background">
          <div className="container mx-auto space-y-12 px-4">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">
                Action Plan
              </span>
              <h2 className="text-h2">How to minimize exposure</h2>
              <p className="text-lead">
                Steps to take before and after you submit a sample.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Read the Policy",
                  desc: "Before buying, check the matrix for red flags.",
                  icon: LockKeyIcon,
                },
                {
                  step: "02",
                  title: "Opt-Out of Research",
                  desc: "Ensure your data isn't shared broadly by default.",
                  icon: Database01Icon,
                },
                {
                  step: "03",
                  title: "Download Raw Data",
                  desc: "Get your file so you aren't locked in.",
                  icon: Shield01Icon,
                },
                {
                  step: "04",
                  title: "Request Deletion",
                  desc: "Submit a formal deletion request after reviewing results.",
                  icon: Delete01Icon,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative space-y-4 rounded-lg border border-border bg-card p-6"
                >
                  <div className="absolute top-4 right-4 font-heading text-4xl font-bold text-muted-foreground/30">
                    {item.step}
                  </div>
                  <HugeiconsIcon
                    icon={item.icon}
                    className="size-8 text-primary"
                  />
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Horizontal Metric Strip (Muted) */}
        <section className="section-padding border-b border-border bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
              <div className="space-y-2 p-8 text-center">
                <div className="font-heading text-4xl font-bold text-primary">
                  {"{{VERIFY: Number of providers tracked}}"}
                </div>
                <div className="text-sm font-medium tracking-wider uppercase">
                  Providers Tracked{" "}
                  <HugeiconsIcon icon={Shield01Icon} className="sr-only" />
                </div>
              </div>
              <div className="space-y-2 p-8 text-center">
                <div className="font-heading text-4xl font-bold text-primary">
                  {"{{VERIFY: Number of policy updates monitored}}"}
                </div>
                <div className="text-sm font-medium tracking-wider uppercase">
                  Policy Updates Monitored
                </div>
              </div>
              <div className="space-y-2 p-8 text-center">
                <div className="font-heading text-4xl font-bold text-primary">
                  {"{{VERIFY: Number of law enforcement cases}}"}
                </div>
                <div className="text-sm font-medium tracking-wider uppercase">
                  Law Enforcement Cases
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Accordion of Substantive Questions (Background) */}
        <section className="section-padding border-b border-border bg-background">
          <div className="container mx-auto max-w-3xl space-y-12 px-4">
            <div className="space-y-4 text-center">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">
                FAQ
              </span>
              <h2 className="text-h2">Common Questions</h2>
              <p className="text-lead">
                Straightforward answers about DNA privacy.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Can police access my DNA without a warrant?",
                  a: "It depends on the provider. Some strictly require a valid warrant or subpoena, while others have historically cooperated with law enforcement voluntarily.",
                },
                {
                  q: "If a company goes bankrupt, is my data sold?",
                  a: "Yes, in many cases, user data is considered a business asset and can be transferred to a buyer during bankruptcy proceedings, as seen in recent industry events.",
                },
                {
                  q: "Does deleting my account destroy the physical sample?",
                  a: "Not necessarily. Deleting your digital account often does not automatically trigger the destruction of your physical saliva sample in the lab.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="space-y-2 rounded-lg border border-border bg-card p-6"
                >
                  <h3 className="flex items-center gap-3 text-lg font-bold">
                    <HugeiconsIcon
                      icon={QuestionIcon}
                      className="size-5 shrink-0 text-primary"
                    />
                    {faq.q}
                  </h3>
                  <p className="text-body ml-8 text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Comparison of two named approaches side by side (Primary/5) */}
        <section className="section-padding border-b border-border bg-primary/5">
          <div className="container mx-auto space-y-12 px-4">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">
                Approaches
              </span>
              <h2 className="text-h2">Opt-In vs Opt-Out</h2>
              <p className="text-lead">
                How providers handle consent for third-party research.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4 rounded-lg border border-t-4 border-border border-t-destructive bg-card p-8">
                <HugeiconsIcon
                  icon={UserCircleIcon}
                  className="size-8 text-destructive"
                />
                <h3 className="text-xl font-bold">The Opt-Out Model</h3>
                <p className="text-body">
                  You are automatically enrolled in research sharing when you
                  agree to the Terms of Service. You must actively navigate
                  settings to remove yourself. This exposes the unaware.
                </p>
              </div>
              <div className="space-y-4 rounded-lg border border-t-4 border-border border-t-primary bg-card p-8">
                <HugeiconsIcon
                  icon={Shield01Icon}
                  className="size-8 text-primary"
                />
                <h3 className="text-xl font-bold">The Opt-In Model</h3>
                <p className="text-body">
                  Your data is strictly segregated from research databases by
                  default. You must explicitly consent via a separate agreement
                  to allow sharing. This is the privacy-first standard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Data as Visual / Chart representation (Background) */}
        <section className="section-padding border-b border-border bg-background">
          <div className="container mx-auto space-y-12 px-4">
            <div className="max-w-2xl space-y-4">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">
                Data Export
              </span>
              <h2 className="text-h2">The portability gap</h2>
              <p className="text-lead">
                Which providers allow you to download your raw genomic data.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              {/* Fake chart using SVG to satisfy inline SVG graphic requirement */}
              <svg
                width="100%"
                height="200"
                viewBox="0 0 600 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full text-foreground"
              >
                <rect
                  x="50"
                  y="40"
                  width="100"
                  height="20"
                  fill="currentColor"
                  opacity="0.8"
                />
                <text
                  x="160"
                  y="55"
                  fontSize="14"
                  fill="currentColor"
                  className="font-mono"
                >
                  Provider A (Yes)
                </text>

                <rect
                  x="50"
                  y="90"
                  width="100"
                  height="20"
                  fill="currentColor"
                  opacity="0.8"
                />
                <text
                  x="160"
                  y="105"
                  fontSize="14"
                  fill="currentColor"
                  className="font-mono"
                >
                  Provider B (Yes)
                </text>

                <rect
                  x="50"
                  y="140"
                  width="10"
                  height="20"
                  fill="currentColor"
                  className="text-destructive"
                />
                <text
                  x="70"
                  y="155"
                  fontSize="14"
                  fill="currentColor"
                  className="font-mono"
                >
                  Provider C (No)
                </text>

                <line
                  x1="50"
                  y1="20"
                  x2="50"
                  y2="180"
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity="0.2"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Section 10: Final Conversion Band (Muted) */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto max-w-2xl space-y-8 px-4 text-center">
            <HugeiconsIcon
              icon={PoliceBadgeIcon}
              className="mx-auto size-12 text-primary"
            />
            <h2 className="text-h2">See our Privacy Picks</h2>
            <p className="text-lead">
              We highlight the providers that clear the high bar for data
              custody and privacy protection.
            </p>
            <div>
              <a
                href="/privacy-picks"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-lg text-sm font-medium whitespace-nowrap text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                View the Picks
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
