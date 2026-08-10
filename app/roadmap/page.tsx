import { Metadata } from "next"
import { buildMetadata, getBreadcrumbSchema } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = buildMetadata(
  "Handpan Buyer's Roadmap",
  "The ultimate $29 guide to confidently purchasing your first handpan. Navigate scales, materials, and maker reputations before you commit to spending thousands.",
  "/roadmap"
)

export default function Roadmap() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([{ name: "Roadmap", item: "/roadmap" }])
          ),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="container mx-auto max-w-3xl flex-1 px-6 py-12">
          <Breadcrumbs items={[{ name: "Roadmap", href: "/roadmap" }]} />
          <h1 className="mb-8 font-heading text-4xl font-bold tracking-tight">
            Handpan Buyer&apos;s Roadmap
          </h1>
          <div className="space-y-6 text-lg">
            <p className="text-muted-foreground">
              Don&apos;t spend $2,000 blindly. Our comprehensive guide helps you
              navigate scales, materials, and maker reputations before you
              commit.
            </p>
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 font-heading text-2xl font-bold">
                Get the guide for $29
              </h2>
              <ul className="mb-6 list-inside list-disc space-y-2">
                <li>Scale selection matrix</li>
                <li>Nitrided vs Stainless comparison</li>
                <li>Red flags to avoid in secondhand markets</li>
              </ul>
              <Button size="lg" className="w-full sm:w-auto">
                Buy Now
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
