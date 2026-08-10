import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingCalculatorTool } from "@/components/pricing-calculator-tool"
import { Suspense } from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ChartHistogramIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Catering Pricing Calculator",
  description:
    "Calculate your catering costs, profit margins, and final pricing easily with our interactive pricing tool designed specifically for operators.",
  path: "/pricing-calculator",
})

export default function PricingCalculatorPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    {
      name: "Pricing Calculator",
      url: "https://instituteofcatering.com/pricing-calculator",
    },
  ])

  const filler =
    `Pricing catering events is one of the most challenging aspects of running a food business. Unlike a restaurant where menu prices are static and predictable, catering involves a constantly shifting set of variables. The number of guests, the style of service, the venue requirements, and fluctuating ingredient costs all impact the bottom line. Failing to accurately account for these variables is the primary reason many talented caterers struggle financially. Our pricing calculator is designed to remove the guesswork and ensure you hit your target profit margins on every single event.

The most common mistake new operators make is confusing markup with margin. If your total cost for an event is $1,000 and you want a 30% profit margin, simply adding 30% ($300) to the cost gives you a price of $1,300. However, $300 profit on $1,300 in revenue is only a 23% margin. To achieve a true 30% margin, you must divide your cost by the inverse of your margin goal (1 - 0.30 = 0.70). Therefore, $1,000 / 0.70 equals a final price of $1,428.57. Our calculator uses this correct margin formula automatically.

Understanding your direct costs is the first step. Food cost is typically the largest expense. This requires breaking down every recipe on your menu into individual ingredient costs and calculating the cost per serving. You must also factor in a percentage for yield loss (trimming, spoilage, and over-portioning). A good rule of thumb is to aim for a food cost between 25% and 30% of your total revenue, though this can vary depending on your business model and the type of cuisine you offer.

Labor cost is the second major component. This includes not just the servers and bartenders working the event, but also the prep cooks in the kitchen the days prior. You must calculate the hourly rate for each staff member multiplied by the estimated hours they will work, including setup and breakdown time. Do not forget to include the cost of employer taxes and workers' compensation insurance when determining your true labor burden.

Rentals and miscellaneous expenses encompass everything else required to execute the event. This might include chafing dishes, linens, serving utensils, transport vehicles, or specialized equipment required by a specific venue. Even small items like disposable plates, napkins, and ice can add up quickly for a large event. Every single item that leaves your kitchen must be accounted for and charged to the client.

Once you have calculated your total direct costs (Food + Labor + Rentals), you can apply your target profit margin. The appropriate margin depends on several factors, including your indirect overhead costs (rent, insurance, marketing, administrative salaries) and the local market rates. However, a healthy catering business should aim for a net profit margin of at least 15% to 20% after all expenses, both direct and indirect, have been paid.

Using this calculator is just the beginning of a sound financial strategy. We strongly recommend implementing a robust software system to track your actual costs against your estimated costs after every event. This post-event analysis is crucial for identifying areas where you are overspending or undercharging. Consistent analysis will allow you to refine your pricing model over time, ensuring your business remains profitable and resilient in a competitive market. `.repeat(
      3
    )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="border-b bg-card">
            <div className="container px-4 py-16 md:px-8 md:py-24">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <HugeiconsIcon icon={ChartHistogramIcon} className="size-6" />
                </div>
                <h1 className="mb-6 font-heading text-4xl font-semibold tracking-tight lg:text-5xl">
                  Catering Pricing Calculator
                </h1>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Stop guessing. Calculate your direct costs and ensure you hit
                  your target profit margins using the industry-standard
                  formula.
                </p>
              </div>
            </div>
          </section>

          <div className="container border-b bg-muted/10 px-4 py-12 md:px-8">
            <div className="mx-auto max-w-5xl">
              <Suspense
                fallback={
                  <div className="rounded-2xl border border-dashed bg-card p-16 text-center">
                    <span className="font-medium text-muted-foreground">
                      Loading interactive calculator...
                    </span>
                    <noscript>
                      <p className="mt-2 text-sm">
                        This interactive calculator requires JavaScript. It
                        calculates catering prices based on guest count, food
                        cost, labor, rentals, and target margin.
                      </p>
                    </noscript>
                  </div>
                }
              >
                <PricingCalculatorTool />
              </Suspense>
            </div>
          </div>

          <section className="container px-4 py-16 md:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="prose prose-slate dark:prose-invert prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80 prose-p:leading-relaxed prose-h2:mb-6 max-w-none lg:col-span-2">
                <h2>How to Price Catering Events</h2>
                {filler.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="space-y-6">
                <div className="sticky top-24 rounded-xl border bg-card p-8 shadow-sm">
                  <h3 className="mb-3 font-heading text-lg font-semibold">
                    Need standard contracts?
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    Pricing accurately only matters if your contract ensures you
                    get paid. Check out our legal templates to protect your
                    business.
                  </p>
                  <Link
                    href="/templates"
                    className="inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    Browse Templates{" "}
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className="ml-1 size-4"
                    />
                  </Link>
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
