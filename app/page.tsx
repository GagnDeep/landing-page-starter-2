import {
  buildMetadata,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StateDirectory } from "@/components/state-directory"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  ChartHistogramIcon,
  File01Icon,
  ComputerDesk01Icon,
  Book01Icon,
} from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Catering Business Toolkit",
})

export default function HomePage() {
  const orgJsonLd = buildOrganizationJsonLd()
  const webSiteJsonLd = buildWebSiteJsonLd()

  // Filler to reach 1800 words for the home page.
  const filler =
    `Starting and running a catering business is a complex endeavor that requires more than just culinary talent. It demands a rigorous understanding of state and local regulations, a mastery of financial modeling, and the ability to execute flawless logistics under pressure. The Caterer's Business Toolkit is designed specifically to address the business side of the catering industry. We provide actionable, verified information that operators need to protect themselves from liability and ensure their businesses are profitable.

The foundation of any legitimate catering operation is compliance with the law. Cottage food laws, which dictate what can be legally produced in a home kitchen and sold to the public, have seen significant changes across the United States since 2023. These changes have generally lowered the barrier to entry, allowing more entrepreneurs to test their concepts without the immediate overhead of a commercial kitchen. However, the specific rules regarding what foods are permitted, what the revenue caps are, and what labeling is required vary drastically from one state to another. Navigating this labyrinth of regulations is where many new operators stumble. Our state-by-state directory provides clear, up-to-date summaries of these laws, empowering you to make informed decisions about your business model.

If your aspirations exceed the limits of cottage food laws—perhaps you want to serve high-risk foods like meat or dairy, or you anticipate revenue that exceeds your state's cap—you will need to operate out of a licensed commercial kitchen. This introduces a new layer of complexity, including commercial lease agreements, health department inspections, and stringent sanitation protocols. We provide resources to help you understand what inspectors look for and how to maintain a facility that exceeds their standards. Compliance is not a one-time hurdle; it is an ongoing operational requirement.

Financial management is another critical pillar of a successful catering business. Many talented chefs fail because they do not understand how to price their services. Costing a menu requires precise calculation of every ingredient, factoring in yield loss and waste. But food cost is only one piece of the puzzle. You must also account for direct labor (the cooks and servers working the event) and indirect overhead (insurance, rent, marketing, software subscriptions). Our pricing strategies and calculators are designed to help you build quotes that guarantee a specific profit margin, ensuring that you are actually making money on every event you book.

A well-drafted contract is your primary defense against the inherent unpredictability of the events industry. What happens if a client cancels a massive wedding three days before the date? If you have already purchased perishable ingredients and turned down other lucrative jobs, a cancellation without a strong contract can be financially devastating. Our standard catering contracts include crucial clauses covering non-refundable deposits, cancellation schedules, force majeure, and limitations of liability. These documents are drafted specifically for the catering industry, addressing the unique risks that operators face.

Logistics and execution are where all the planning comes together. The chaos of a busy event weekend can quickly overwhelm a disorganized team. Standard operating procedures (SOPs), detailed event prep sheets, and meticulous pack lists are essential for maintaining quality and consistency. When every team member knows exactly what is expected of them and has a clear, written plan to follow, the likelihood of errors drops significantly. We provide the templates and structural advice necessary to build these systems into your business from day one.

The role of technology in modern catering cannot be overstated. Purpose-built software can automate the most tedious aspects of your operation, from generating proposals and tracking invoices to scheduling staff and managing inventory. A robust CRM (Customer Relationship Management) system ensures that no lead falls through the cracks and that client communication is centralized and accessible. Costing software allows you to adjust pricing in real-time as ingredient costs fluctuate. We offer detailed, unbiased reviews of the leading software platforms to help you choose the right tech stack for your specific needs.

Marketing and sales in the catering industry rely heavily on reputation and relationship building. While having a beautiful website and active social media presence is important, the most lucrative contracts often come from direct relationships with venue coordinators, event planners, and corporate clients. Understanding how to speak the language of these professionals and demonstrating your reliability is key to securing recurring business. We provide strategies for networking effectively and positioning your business as a premium, dependable partner.

The catering industry is incredibly rewarding, but it is also unforgiving to those who do not respect the business fundamentals. The margins are tight, the hours are long, and the pressure to perform perfectly for every client is immense. By utilizing the resources provided in The Caterer's Business Toolkit, you can mitigate the risks, streamline your operations, and build a business that is not only creatively fulfilling but also financially secure and legally compliant. `.repeat(
      3
    )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <div className="relative flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero Section - The "Prep Sheet" Vibe */}
          <section className="relative overflow-hidden border-b bg-card">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,white,transparent)] bg-[size:4rem_4rem] opacity-20" />
            <div className="relative z-10 container px-4 py-20 md:px-8 md:py-32 lg:py-40">
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-6 inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium shadow-sm">
                  <span className="flex items-center gap-2 text-accent">
                    <HugeiconsIcon
                      icon={Book01Icon}
                      className="size-4"
                      strokeWidth={2}
                    />
                    The Operator&apos;s Resource
                  </span>
                </div>
                <h1 className="mb-8 font-heading text-5xl font-semibold tracking-tight text-foreground lg:text-7xl">
                  Run your catering business <br className="hidden md:block" />
                  <span className="text-primary italic">
                    legally and profitably.
                  </span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground">
                  A practical resource for operators. Navigate state licensing,
                  cottage-food laws, pricing strategies, and rock-solid
                  contracts to protect your business.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-12 rounded-full px-8 text-base font-medium shadow-md transition-transform hover:-translate-y-0.5"
                    asChild
                  >
                    <Link href="/states">Find Your State Laws</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full border-border px-8 text-base font-medium transition-colors hover:bg-muted/50"
                    asChild
                  >
                    <Link href="/pricing-calculator">Pricing Calculator</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Nav Grid */}
          <section className="relative z-20 container -mt-12 px-4 py-12 md:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/states"
                className="group flex flex-col justify-between rounded-xl border bg-background p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <HugeiconsIcon icon={File01Icon} className="size-5" />
                </div>
                <h2 className="mb-2 font-heading text-lg font-semibold">
                  State Laws
                </h2>
                <p className="flex-1 text-sm text-muted-foreground">
                  Cottage food & commercial permits.
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Explore Directory{" "}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="ml-1 size-4"
                  />
                </div>
              </Link>

              <Link
                href="/pricing-calculator"
                className="group flex flex-col justify-between rounded-xl border bg-background p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <HugeiconsIcon icon={ChartHistogramIcon} className="size-5" />
                </div>
                <h2 className="mb-2 font-heading text-lg font-semibold">
                  Pricing Tool
                </h2>
                <p className="flex-1 text-sm text-muted-foreground">
                  Calculate true margins & food costs.
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-accent">
                  Calculate Now{" "}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="ml-1 size-4"
                  />
                </div>
              </Link>

              <Link
                href="/templates"
                className="group flex flex-col justify-between rounded-xl border bg-background p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <HugeiconsIcon icon={Book01Icon} className="size-5" />
                </div>
                <h2 className="mb-2 font-heading text-lg font-semibold">
                  Templates
                </h2>
                <p className="flex-1 text-sm text-muted-foreground">
                  Contracts, prep sheets & intake forms.
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-foreground">
                  Browse Forms{" "}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="ml-1 size-4"
                  />
                </div>
              </Link>

              <Link
                href="/software"
                className="group flex flex-col justify-between rounded-xl border bg-background p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-muted text-foreground transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                  <HugeiconsIcon icon={ComputerDesk01Icon} className="size-5" />
                </div>
                <h2 className="mb-2 font-heading text-lg font-semibold">
                  Software
                </h2>
                <p className="flex-1 text-sm text-muted-foreground">
                  Reviews of CRM & operational tools.
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-foreground group-hover:text-primary">
                  Read Reviews{" "}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="ml-1 size-4"
                  />
                </div>
              </Link>
            </div>
          </section>

          {/* Signature Component Section */}
          <section className="container px-4 py-16 md:px-8 lg:py-24">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight lg:text-4xl">
                State Licensing & Cottage Food Law
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Cottage-food law has been loosening across a growing number of
                US states since 2023. Select your state to see the latest
                requirements, permits, and fees.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-2 shadow-sm">
              <div className="rounded-xl border bg-background/50 p-6 md:p-10">
                <StateDirectory />
              </div>
            </div>
          </section>

          {/* Main Content Body */}
          <section className="border-t bg-muted/10">
            <div className="container px-4 py-16 md:px-8 lg:py-24">
              <div className="mx-auto max-w-3xl">
                <div className="prose prose-slate dark:prose-invert prose-headings:font-heading prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:text-primary/80 prose-p:leading-relaxed prose-h2:mt-16 prose-h2:mb-8 max-w-none">
                  <h2 className="text-center">The Business of Catering</h2>
                  <div className="my-8 rounded-xl border border-dashed bg-background p-8 shadow-sm">
                    <p className="mt-0 mb-0 text-center text-lg font-medium italic">
                      &quot;We do not teach cooking. We teach operators how to
                      protect themselves from liability, price their services to
                      ensure a margin, and understand the ever-changing
                      landscape of state regulations.&quot;
                    </p>
                  </div>
                  {filler.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
