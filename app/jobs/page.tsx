import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/metadata"
import { getBreadcrumbSchema } from "@/lib/json-ld"

export const metadata = buildMetadata({
  title: "Jobs",
  description:
    "A specialist jobs board for recruiters hiring specialist aerospace and defence-manufacturing engineers in the UAE to expand local industry presence.",
  path: "/jobs",
})

export default function Jobs() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Jobs", item: "/jobs" },
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Jobs", href: "/jobs" }]} />
          <Prose>
            <h1>Jobs Board Hub</h1>
            <p>
              This is the future home of the detailed jobs board.{" "}
              {"{{VERIFY: jobs list and sub-routes needed}}"}
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
