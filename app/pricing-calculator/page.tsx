import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <div className="container px-4 py-8 md:px-8 md:py-12">
            <Breadcrumbs
              items={[
                { name: "Pricing Calculator", url: "/pricing-calculator" },
              ]}
            />
            <h1 className="mb-8 text-4xl font-bold tracking-tight lg:text-5xl">
              Pricing Calculator
            </h1>
            <p className="max-w-2xl text-xl text-muted-foreground">
              {
                "{{VERIFY: Interactive tool will be built in PASS 3. This is a static placeholder for the route manifest.}}"
              }
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
