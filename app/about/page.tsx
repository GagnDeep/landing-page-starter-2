import { buildMetadata } from "@/lib/metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { JsonLdBreadcrumbList } from "@/lib/json-ld"
import { siteConfig } from "@/lib/site"

export const metadata = buildMetadata({
  title: `About ${siteConfig.name}`,
  description:
    "Learn more about our mission to serve working P&C insurance underwriters with insights on tooling, hiring, and the AI debate.",
  path: "/about",
})

export default function AboutPage() {
  const breadcrumbs = [{ name: "About", url: "/about" }]

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdBreadcrumbList items={breadcrumbs} />
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <Breadcrumbs items={breadcrumbs} />
        <Prose>
          <h1>About The Desk</h1>
          <p>
            {siteConfig.name} is a sponsorship-funded trade publication
            dedicated entirely to working P&C insurance underwriters. We focus
            on the tools, the market moves, the hiring trends, and the ongoing
            debate surrounding AI in the underwriting workflow.
          </p>
          <h2>Our Focus</h2>
          <p>
            We are not a career-entry blog. You won&apos;t find exam prep or
            beginner guides here. Our readers already have the job. They are
            practitioners looking for insights into the rapidly evolving
            landscape of underwriting technology.
          </p>
          <p>
            With underwriting-workflow vendors having raised significant rounds
            recently, there is a pressing need for a channel that speaks
            directly to the practitioners rather than the C-suite. We bridge
            that gap.
          </p>
          <h2>Editorial Independence</h2>
          <p>
            Our content is independent. While we are sponsorship-funded, our
            editorial decisions are driven by what matters most to working
            underwriters. We report on the facts: the named vendors exist and
            operate in this category, and AI-assisted underwriting is an active,
            unresolved debate inside carriers.
          </p>
          <p className="mt-12 font-mono text-sm text-muted-foreground">
            Subscriber Count: {"{{VERIFY: Subscriber count}}"}
          </p>
        </Prose>
      </main>
      <Footer />
    </div>
  )
}
