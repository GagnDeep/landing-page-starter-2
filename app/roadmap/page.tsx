import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/site"
import { buildBreadcrumbLd } from "@/lib/json-ld"

export const metadata = buildMetadata(
  "Handpan Buyer's Roadmap | Handpano",
  "A comprehensive step-by-step guide to buying your first handpan without the stress. Learn about scales, makers, materials, and how to avoid red flags.",
  "/roadmap/"
)

export default function RoadmapPage() {
  const jsonLd = buildBreadcrumbLd([
    { name: "Buyer's Roadmap", item: "/roadmap/" },
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto max-w-7xl flex-1 px-4 py-12">
        <Breadcrumbs items={[{ name: "Buyer's Roadmap" }]} />
        <Prose className="mx-auto">
          <h1>Handpan Buyer&apos;s Roadmap</h1>
          <p className="lead">
            The decision is genuinely confusing: makers publish little pricing
            or lead-time detail, cheap marketplace imports have a bad
            reputation. This roadmap is your guide.
          </p>

          <h2>Step 1: Understand the Investment</h2>
          <p>
            You are about to spend fifteen hundred to three thousand dollars on
            an instrument you have never played, from a maker you cannot visit,
            with a wait time you do not understand. Our goal is to reduce that
            fear with specifics.
          </p>

          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>
              A quality instrument requires time. Makers carefully hammer, tune,
              and treat the steel. Understanding the difference between nitrided
              steel, stainless steel, and Ember steel is crucial to finding the
              resonance you desire. Stainless offers long, ethereal sustain,
              while nitrided gives a punchy, ceramic sound ideal for percussive
              players.
            </p>
          ))}
        </Prose>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
