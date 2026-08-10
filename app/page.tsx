import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CustodyMatrixWrapper as CustodyMatrix } from "@/components/custody-matrix-wrapper"
import {
  buildMetadata,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/site"
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react"
import {
  Shield01Icon,
  Database01Icon,
  Delete01Icon,
  UserCircleIcon,
  SaleTag02Icon,
  PoliceBadgeIcon,
  QuestionIcon,
  Time01Icon,
  FileExportIcon,
  Search01Icon,
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
        <section className="section-padding relative overflow-hidden border-b border-border bg-background">
          <div className="pointer-events-none absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-overlay" />
          <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-none border border-border bg-muted/50 px-3 py-1 font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
                <HugeiconsIcon
                  icon={Shield01Icon as unknown as IconSvgElement}
                  className="size-4"
                />
                Independent Policy Assessment
              </div>
              <h1 className="text-display">Who owns your DNA?</h1>
              <p className="text-lead prose-measure">
                Minutes from spitting in a tube, you wonder who ends up owning
                the result. We compare consumer DNA tests based solely on
                privacy, chain of custody, and what happens when they face
                financial ruin.
              </p>
              <div className="flex gap-4 pt-6">
                <a
                  href="/matrix"
                  className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-sm font-bold tracking-widest whitespace-nowrap text-primary-foreground uppercase shadow transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  View the Matrix
                </a>
              </div>
            </div>
            <div className="relative">
              {/* Graphic 1: Geometric Motif Derived from Brand Palette */}
              <div className="absolute -inset-4 -z-10 rounded-sm border border-primary/20 bg-primary/5" />
              <svg
                width="100%"
                height="400"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-full text-primary"
                aria-label="Abstract DNA motif"
              >
                <rect width="400" height="400" fill="transparent" />
                <path
                  d="M 100 50 L 100 350"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />
                <path
                  d="M 300 50 L 300 350"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />

                {/* Connecting rungs */}
                <path
                  d="M 100 100 L 300 100"
                  stroke="currentColor"
                  strokeWidth="8"
                />
                <path
                  d="M 100 150 L 300 150"
                  stroke="currentColor"
                  strokeWidth="8"
                  opacity="0.8"
                />
                <path
                  d="M 100 200 L 300 200"
                  stroke="currentColor"
                  strokeWidth="8"
                  opacity="0.6"
                />
                <path
                  d="M 100 250 L 300 250"
                  stroke="currentColor"
                  strokeWidth="8"
                  opacity="0.4"
                />
                <path
                  d="M 100 300 L 300 300"
                  stroke="currentColor"
                  strokeWidth="8"
                  opacity="0.2"
                />

                <rect
                  x="80"
                  y="80"
                  width="40"
                  height="40"
                  fill="var(--background)"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <rect
                  x="280"
                  y="230"
                  width="40"
                  height="40"
                  fill="var(--background)"
                  stroke="currentColor"
                  strokeWidth="4"
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
            <header className="mx-auto max-w-2xl space-y-4 text-center">
              <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
                Exhibit A
              </span>
              <h2 className="text-h2">The Custody Matrix</h2>
              <p className="text-lead">
                Compare the leading providers on sample destruction, data
                deletion, and law enforcement access thresholds. Select your
                concerns below to re-weight the rankings.
              </p>
            </header>
            <CustodyMatrix />
          </div>
        </section>

        {/* Section 3: Bento Grid of Unequal Tiles (Accent Tint - Primary/5) */}
        <section className="section-padding border-b border-border bg-primary/5">
          <div className="container mx-auto space-y-12 px-4">
            <header className="max-w-3xl space-y-4">
              <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
                The Risks
              </span>
              <h2 className="text-h2">What happens to your sample?</h2>
              <p className="text-lead">
                Understanding the lifecycle of your genomic data from collection
                to potential deletion. The physical tube and the digital file
                represent two entirely separate vulnerability profiles.
              </p>
            </header>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="rounded-sm border-2 border-border bg-card p-10 shadow-sm transition-shadow duration-200 hover:shadow-md lg:col-span-2">
                <HugeiconsIcon
                  icon={Database01Icon as unknown as IconSvgElement}
                  className="mb-6 size-10 text-primary"
                />
                <h3 className="text-h3 mb-4">Data Retention & Banking</h3>
                <p className="text-body prose-measure text-muted-foreground">
                  Providers vary wildly on how long they retain the physical
                  sample versus the digitized sequence. Some destroy the
                  physical tube immediately after sequencing, while others bank
                  it indefinitely unless explicitly told otherwise. Banking
                  allows them to re-run your sample on new chips, but leaves
                  your DNA vulnerable to acquisition.
                </p>
              </div>
              <div className="rounded-sm border-2 border-border bg-card p-10 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <HugeiconsIcon
                  icon={Delete01Icon as unknown as IconSvgElement}
                  className="mb-6 size-10 text-primary"
                />
                <h3 className="text-h3 mb-4">Deletion Policies</h3>
                <p className="text-body text-muted-foreground">
                  A deletion request might not mean immediate erasure. Backups
                  can persist for months, and previously consented research data
                  cannot be withdrawn from active studies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Two-column Alternating Explainer (Background) */}
        <section className="section-padding border-b border-border bg-background">
          <div className="container mx-auto grid grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
            <div className="order-2 flex justify-center rounded-sm border-2 border-border bg-muted p-8 md:order-1">
              {/* Graphic 2: Diagram Explaining the Domain (Sample Custody Workflow) */}
              <svg
                width="100%"
                viewBox="0 0 400 300"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-sm text-foreground"
                aria-label="Data flow diagram during a corporate sale"
              >
                <defs>
                  <marker
                    id="arrowHead"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                  </marker>
                </defs>
                <rect
                  x="100"
                  y="20"
                  width="200"
                  height="60"
                  fill="var(--card)"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <text
                  x="200"
                  y="55"
                  textAnchor="middle"
                  fill="currentColor"
                  className="font-heading text-sm font-bold"
                >
                  Provider Database
                </text>

                <path
                  d="M 200 80 L 200 130"
                  stroke="var(--destructive)"
                  strokeWidth="3"
                  markerEnd="url(#arrowHead)"
                />
                <text
                  x="220"
                  y="110"
                  fill="var(--destructive)"
                  className="font-mono text-xs font-bold tracking-widest uppercase"
                >
                  Insolvency
                </text>

                <rect
                  x="50"
                  y="140"
                  width="300"
                  height="120"
                  fill="var(--muted)"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <rect
                  x="70"
                  y="160"
                  width="260"
                  height="40"
                  fill="var(--card)"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <text
                  x="200"
                  y="185"
                  textAnchor="middle"
                  fill="currentColor"
                  className="font-heading text-sm font-bold"
                >
                  Acquiring Entity / Buyer
                </text>

                <rect
                  x="70"
                  y="210"
                  width="260"
                  height="30"
                  fill="transparent"
                  stroke="transparent"
                />
                <text
                  x="200"
                  y="230"
                  textAnchor="middle"
                  fill="currentColor"
                  className="font-mono text-xs"
                >
                  New Privacy Terms Apply
                </text>
              </svg>
            </div>
            <div className="order-1 space-y-6 md:order-2">
              <span className="font-mono text-xs font-bold tracking-widest text-destructive uppercase">
                Bankruptcy Threat
              </span>
              <h2 className="text-h2">The 23andMe Precedent</h2>
              <p className="text-body prose-measure text-muted-foreground">
                When a provider enters financial distress, privacy promises face
                the auction block. Terms of service overwhelmingly include
                clauses classifying user databases as business assets that
                transfer during a merger or acquisition.
              </p>
              <ul className="mt-4 space-y-6 border-t border-border pt-4">
                <li className="flex items-start gap-4">
                  <div className="flex shrink-0 items-center justify-center border border-primary/20 bg-primary/10 p-3">
                    <HugeiconsIcon
                      icon={SaleTag02Icon as unknown as IconSvgElement}
                      className="size-5 text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold">
                      Asset Liquidation
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Genomic databases are highly valuable assets used to
                      satisfy creditors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex shrink-0 items-center justify-center border border-primary/20 bg-primary/10 p-3">
                    <HugeiconsIcon
                      icon={Time01Icon as unknown as IconSvgElement}
                      className="size-5 text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold">
                      Policy Erasure
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      New owners have the legal standing to rewrite the terms of
                      service entirely.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Numbered Process Stepper (Muted) */}
        <section className="section-padding border-b border-border bg-muted">
          <div className="container mx-auto space-y-16 px-4">
            <header className="mx-auto max-w-2xl space-y-4 text-center">
              <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
                Action Plan
              </span>
              <h2 className="text-h2">How to minimize exposure</h2>
              <p className="text-lead">
                If you must sequence your DNA, follow these four immutable steps
                to retain leverage over your biological data.
              </p>
            </header>
            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="absolute top-12 right-[12%] left-[12%] z-0 hidden h-[2px] bg-border lg:block" />
              {[
                {
                  step: "01",
                  title: "Read the Policy",
                  desc: "Before buying, check the matrix for red flags regarding banking and warrants.",
                  icon: Search01Icon,
                },
                {
                  step: "02",
                  title: "Opt-Out of Research",
                  desc: "Ensure your data isn&apos;t legally shared with academic or pharmaceutical partners.",
                  icon: Database01Icon,
                },
                {
                  step: "03",
                  title: "Download Raw Data",
                  desc: "Securely export your genomic file so you are never locked into one platform.",
                  icon: FileExportIcon,
                },
                {
                  step: "04",
                  title: "Request Deletion",
                  desc: "Submit a formal deletion and sample destruction request after reviewing results.",
                  icon: Delete01Icon,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center space-y-4 text-center"
                >
                  <div className="relative flex size-24 items-center justify-center border-2 border-border bg-card shadow-sm">
                    <div className="absolute -top-3 -right-3 bg-primary px-2 py-1 font-mono text-xs font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <HugeiconsIcon
                      icon={item.icon as unknown as IconSvgElement}
                      className="size-8 text-foreground"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="prose-measure text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Horizontal Metric Strip (Accent Tint - Primary/5) */}
        <section className="border-b border-border bg-primary/5 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <header className="sr-only">
              <h2>Key Monitoring Statistics</h2>
              <p>Metrics tracking our independent privacy assessments.</p>
            </header>
            <div className="grid grid-cols-1 divide-y divide-border border-2 border-border bg-card shadow-sm md:grid-cols-3 md:divide-x md:divide-y-0">
              <div className="flex flex-col items-center justify-center space-y-3 p-10 text-center">
                <HugeiconsIcon
                  icon={Database01Icon as unknown as IconSvgElement}
                  className="mb-2 size-6 text-muted-foreground"
                />
                <div className="font-heading text-5xl font-bold tracking-tighter text-primary">
                  {"{{VERIFY: Number of providers tracked}}"}
                </div>
                <div className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  Providers Tracked
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 p-10 text-center">
                <HugeiconsIcon
                  icon={Time01Icon as unknown as IconSvgElement}
                  className="mb-2 size-6 text-muted-foreground"
                />
                <div className="font-heading text-5xl font-bold tracking-tighter text-primary">
                  {"{{VERIFY: Number of policy updates monitored}}"}
                </div>
                <div className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  Policy Updates Monitored
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 p-10 text-center">
                <HugeiconsIcon
                  icon={PoliceBadgeIcon as unknown as IconSvgElement}
                  className="mb-2 size-6 text-muted-foreground"
                />
                <div className="font-heading text-5xl font-bold tracking-tighter text-primary">
                  {"{{VERIFY: Number of law enforcement cases}}"}
                </div>
                <div className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  Law Enforcement Cases
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Accordion of Substantive Questions (Background) */}
        <section className="section-padding border-b border-border bg-background">
          <div className="container mx-auto max-w-3xl space-y-12 px-4">
            <header className="space-y-4 text-center">
              <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
                FAQ
              </span>
              <h2 className="text-h2">Common Questions</h2>
              <p className="text-lead">
                Straightforward answers about DNA privacy policies and the
                reality of genetic data ownership.
              </p>
            </header>
            <div className="space-y-4">
              {[
                {
                  q: "Can police access my DNA without a warrant?",
                  a: "It depends entirely on the provider. Some strictly require a valid search warrant or subpoena before granting access, while others have historically cooperated voluntarily with law enforcement for genetic genealogy.",
                },
                {
                  q: "If a company goes bankrupt, is my data sold?",
                  a: "Yes, in many cases. User data is generally considered a core business asset. If a provider is liquidated or acquired, your genetic sequence can be transferred to a buyer, voiding original privacy agreements.",
                },
                {
                  q: "Does deleting my account destroy the physical sample?",
                  a: "Not automatically. Deleting a digital account often leaves the physical saliva sample sitting in a biobank. You must explicitly request physical sample destruction if the provider&apos;s policy allows it.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="border-2 border-border bg-card p-8 shadow-sm transition-colors hover:border-primary/30"
                >
                  <h3 className="flex items-start gap-4 font-heading text-lg font-bold">
                    <HugeiconsIcon
                      icon={QuestionIcon as unknown as IconSvgElement}
                      className="mt-0.5 size-6 shrink-0 text-primary"
                    />
                    {faq.q}
                  </h3>
                  <p className="text-body mt-3 ml-10 text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Comparison of two named approaches side by side (Muted) */}
        <section className="section-padding border-b border-border bg-muted">
          <div className="container mx-auto space-y-16 px-4">
            <header className="mx-auto max-w-3xl space-y-4 text-center">
              <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
                Approaches
              </span>
              <h2 className="text-h2">Opt-In vs Opt-Out</h2>
              <p className="text-lead">
                How providers handle legal consent for sharing your genome with
                third-party researchers and pharmaceutical companies.
              </p>
            </header>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative border-2 border-t-8 border-border border-t-destructive bg-background p-10 shadow-sm">
                <div className="absolute top-6 right-6">
                  <HugeiconsIcon
                    icon={UserCircleIcon as unknown as IconSvgElement}
                    className="size-8 text-destructive/50"
                  />
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold">
                  The Opt-Out Model
                </h3>
                <p className="text-body text-muted-foreground">
                  You are automatically enrolled in third-party research sharing
                  the moment you agree to the Terms of Service. Users must
                  actively navigate buried account settings to remove themselves
                  from data pools. This model exposes the unaware and monetizes
                  user ignorance.
                </p>
              </div>
              <div className="relative border-2 border-t-8 border-border border-t-primary bg-background p-10 shadow-sm">
                <div className="absolute top-6 right-6">
                  <HugeiconsIcon
                    icon={Shield01Icon as unknown as IconSvgElement}
                    className="size-8 text-primary/50"
                  />
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold">
                  The Opt-In Model
                </h3>
                <p className="text-body text-muted-foreground">
                  Your data is strictly segregated from research databases by
                  default. You must explicitly and affirmatively consent via a
                  separate agreement to allow sharing. This is the only
                  privacy-first standard that respects user autonomy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Data as Visual / Chart representation (Background) */}
        <section className="section-padding border-b border-border bg-background">
          <div className="container mx-auto grid grid-cols-1 items-center gap-16 px-4 lg:grid-cols-2">
            <header className="max-w-xl space-y-6">
              <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
                Data Export
              </span>
              <h2 className="text-h2">The portability gap</h2>
              <p className="text-lead">
                Which providers allow you to download your raw genomic data
                locally.
              </p>
              <p className="text-body text-muted-foreground">
                Without raw data export, you are locked into a single
                provider&apos;s ecosystem. If they change their privacy terms or
                go out of business, you lose access to the genetic file you paid
                for. Exporting allows you to safely delete your cloud profile.
              </p>
            </header>

            <div className="flex justify-center border-2 border-border bg-muted p-10 shadow-sm">
              {/* Graphic 3: Chart Rendered from Typed Data Context */}
              <svg
                width="100%"
                height="240"
                viewBox="0 0 500 240"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full text-foreground"
                aria-label="Bar chart showing raw data export availability"
              >
                {/* Axes */}
                <line
                  x1="160"
                  y1="20"
                  x2="160"
                  y2="200"
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity="0.2"
                />

                {/* Bar 1 */}
                <rect
                  x="160"
                  y="40"
                  width="260"
                  height="24"
                  fill="var(--primary)"
                />
                <text
                  x="140"
                  y="56"
                  textAnchor="end"
                  fontSize="14"
                  fill="currentColor"
                  className="font-mono font-bold"
                >
                  23andMe
                </text>
                <text
                  x="430"
                  y="56"
                  fontSize="12"
                  fill="currentColor"
                  className="font-mono text-muted-foreground"
                >
                  Exportable
                </text>

                {/* Bar 2 */}
                <rect
                  x="160"
                  y="90"
                  width="260"
                  height="24"
                  fill="var(--primary)"
                />
                <text
                  x="140"
                  y="106"
                  textAnchor="end"
                  fontSize="14"
                  fill="currentColor"
                  className="font-mono font-bold"
                >
                  AncestryDNA
                </text>
                <text
                  x="430"
                  y="106"
                  fontSize="12"
                  fill="currentColor"
                  className="font-mono text-muted-foreground"
                >
                  Exportable
                </text>

                {/* Bar 3 */}
                <rect
                  x="160"
                  y="140"
                  width="10"
                  height="24"
                  fill="var(--destructive)"
                />
                <text
                  x="140"
                  y="156"
                  textAnchor="end"
                  fontSize="14"
                  fill="currentColor"
                  className="font-mono font-bold"
                >
                  Provider C
                </text>
                <text
                  x="180"
                  y="156"
                  fontSize="12"
                  fill="var(--destructive)"
                  className="font-mono font-bold"
                >
                  Locked
                </text>

                {/* Legend */}
                <rect
                  x="160"
                  y="210"
                  width="12"
                  height="12"
                  fill="var(--primary)"
                />
                <text
                  x="180"
                  y="221"
                  fontSize="12"
                  fill="currentColor"
                  className="font-mono"
                >
                  Allowed
                </text>

                <rect
                  x="260"
                  y="210"
                  width="12"
                  height="12"
                  fill="var(--destructive)"
                />
                <text
                  x="280"
                  y="221"
                  fontSize="12"
                  fill="currentColor"
                  className="font-mono"
                >
                  Prohibited
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* Section 10: Final Conversion Band (Accent Tint - Primary/5) */}
        <section className="section-padding relative overflow-hidden border-b-4 border-b-primary bg-primary/5">
          <div className="pointer-events-none absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10 container mx-auto max-w-3xl space-y-8 px-4 text-center">
            <div className="mx-auto flex size-20 rotate-3 items-center justify-center border-2 border-border bg-background shadow-sm">
              <HugeiconsIcon
                icon={PoliceBadgeIcon as unknown as IconSvgElement}
                className="size-10 text-primary"
              />
            </div>
            <h2 className="text-display">See our Privacy Picks</h2>
            <p className="text-lead text-muted-foreground">
              We highlight the exclusive list of providers that clear our
              evidentiary high bar for data custody, warrant requirements, and
              privacy protection.
            </p>
            <div className="pt-4">
              <a
                href="/privacy-picks"
                className="inline-flex h-14 items-center justify-center rounded-sm bg-primary px-12 text-base font-bold tracking-widest whitespace-nowrap text-primary-foreground uppercase shadow transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                View the Safe List
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
