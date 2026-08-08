import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/metadata"
import { getBreadcrumbSchema } from "@/lib/json-ld"

export const metadata = buildMetadata({
  title: "Suppliers",
  description:
    "A curated directory of UAE aerospace, MRO, and defence-manufacturing suppliers for prime procurement staff looking to build sovereign capabilities.",
  path: "/suppliers",
})

export default function Suppliers() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Suppliers", item: "/suppliers" },
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Suppliers", href: "/suppliers" }]} />
          <Prose>
            <h1>Suppliers Directory Hub</h1>
            <p>
              This is the future home of the detailed supplier directory hub.{" "}
              {"{{VERIFY: suppliers list and sub-routes needed}}"}
            </p>
          </Prose>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  )
}
