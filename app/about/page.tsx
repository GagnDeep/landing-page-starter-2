import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about The Caterer's Business Toolkit and our mission to help catering operators navigate state regulations and scale their businesses.",
  path: "/about",
})

export default function AboutPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "About", url: "https://instituteofcatering.com/about" },
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
            <Breadcrumbs items={[{ name: "About", url: "/about" }]} />
            <h1 className="mb-8 text-4xl font-bold tracking-tight lg:text-5xl">
              About Us
            </h1>
            <Prose className="max-w-3xl text-lg">
              <p>
                The Caterer&apos;s Business Toolkit is a practical resource for
                people who already run a catering business. We focus on the hard
                facts of operations: licensing, cottage-food law, pricing
                strategies, contracts, software, and food-safety certification.
              </p>
              <p>
                Whether you are operating out of a commercial kitchen or
                navigating the complexities of legal home kitchens, our goal is
                to provide clear, actionable information so you can operate
                legally and profitably.
              </p>
              <p>
                We do not teach cooking. We teach operators how to protect
                themselves from liability, price their services to ensure a
                margin, and understand the ever-changing landscape of state
                regulations.
              </p>
            </Prose>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
