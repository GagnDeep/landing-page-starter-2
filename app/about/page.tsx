import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/metadata"
import { getBreadcrumbSchema } from "@/lib/json-ld"

export const metadata = buildMetadata({
  title: "About",
  description:
    "Aerospace UAE is a curated directory of UAE aerospace, MRO, and defence-manufacturing suppliers, offering a specialist jobs board and verified vendor index.",
  path: "/about",
})

export default function About() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "About", item: "/about" },
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
          <Prose>
            <h1>About Aerospace UAE</h1>
            <p>
              Aerospace UAE is a curated directory of UAE aerospace, MRO, and
              defence-manufacturing suppliers. We also host a specialist jobs
              board. Our audience is procurement staff at primes and recruiters
              hiring specialist engineers, providing curation of the tier two
              and tier three subcontractor layer that generic B2B databases do
              not cover.
            </p>
            <h2>Focus & Permitted Facts</h2>
            <p>
              The UAE is building a sovereign aerospace manufacturing base.
              In-Country Value is a UAE local-content programme, and AS9100 and
              Nadcap are aerospace quality standards.
            </p>
            <p>
              Our directory focuses purely on commercial capability and
              certifications. We do not publish news or sensitive defence
              details such as combat systems or classified capabilities. Every
              company name, spend figure, and certification claim is strictly
              verified.
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
