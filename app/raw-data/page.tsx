import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/site"

export const metadata: Metadata = buildMetadata({
  title: "Raw Data",
  description: "Raw Data consumer DNA test privacy policies.",
  path: "/compare",
})

export default function RawDataPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            buildBreadcrumbJsonLd([{ name: "Raw Data", url: "/compare" }]),
          ]),
        }}
      />
      <Header />
      <main className="section-padding flex-1 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ name: "Raw Data", url: "/compare" }]} />
          <h1 className="text-h1">Raw Data Providers</h1>
          <p className="mt-4">VERIFY: Content needed in Pass 2</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
