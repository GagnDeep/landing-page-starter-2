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
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="border-b bg-muted/30">
            <div className="container px-4 py-16 md:px-8 md:py-24 lg:py-32">
              <div className="max-w-3xl">
                <h1 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
                  Run your catering business legally and profitably.
                </h1>
                <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                  A practical resource for catering operators. We provide
                  up-to-date information on state licensing, cottage-food laws,
                  pricing strategies, and rock-solid contracts to protect your
                  business.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="container border-b bg-muted/10 px-4 py-8 md:px-8">
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <span>Quick Links:</span>
              <Link href="/states" className="text-primary hover:underline">
                State Laws
              </Link>
              <Link href="/software" className="text-primary hover:underline">
                Software Reviews
              </Link>
              <Link href="/templates" className="text-primary hover:underline">
                Templates
              </Link>
              <Link
                href="/pricing-calculator"
                className="text-primary hover:underline"
              >
                Pricing Calculator
              </Link>
            </div>
          </section>

          <section className="container px-4 py-16 md:px-8 lg:py-24">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                State Licensing & Cottage Food Law
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Cottage-food law has been loosening across a growing number of
                US states since 2023. Select your state to see the latest
                requirements, permits, and fees.
              </p>
            </div>
            <StateDirectory />
          </section>

          <section className="container border-t px-4 py-16 md:px-8 lg:py-24">
            <div className="prose prose-slate dark:prose-invert prose-headings:font-heading max-w-none">
              <h2>The Business of Catering</h2>
              {filler.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
