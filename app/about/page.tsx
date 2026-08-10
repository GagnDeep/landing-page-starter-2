import { Metadata } from "next"
import { buildMetadata, getBreadcrumbSchema } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"

export const metadata: Metadata = buildMetadata(
  "About Us",
  "Learn why Handpano was created and how we independently verify handpan maker data directly to help you confidently select and invest in your next handpan.",
  "/about"
)

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([{ name: "About", item: "/about" }])
          ),
        }}
      />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="container mx-auto max-w-3xl flex-1 px-6 py-12">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
          <h1 className="mb-8 font-heading text-4xl font-bold tracking-tight">
            About Handpano
          </h1>
          <Prose>
            <p>
              The handpan market is opaque. First-time buyers are expected to
              spend thousands of dollars on an instrument they have never
              played, from a maker they cannot visit, with wait times that
              stretch into years.
            </p>
            <p>
              Handpano exists to reduce that friction. We are independent and
              maker-agnostic. We do not sell our own brand of instruments and we
              do not sell online courses.
            </p>
            <p>
              Our data is verified. Every price and wait time listed on our site
              is confirmed by direct outreach to the makers.
            </p>
          </Prose>
        </main>
        <Footer />
      </div>
    </>
  )
}
