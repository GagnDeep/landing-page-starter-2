import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/site"

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "About the Institute of DNA.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            buildBreadcrumbJsonLd([{ name: "About", url: "/about" }]),
          ]),
        }}
      />
      <Header />
      <main className="section-padding flex-1 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ name: "About", url: "/about" }]} />

          <div className="mx-auto max-w-3xl space-y-12">
            <div className="space-y-4">
              <h1 className="text-h1">About the Institute of DNA</h1>
              <p className="text-lead">
                We analyze and compare consumer DNA testing companies on their
                privacy policies, data retention, and chain of custody.
              </p>
            </div>

            <Prose>
              <p>
                When you spit in a tube and mail it to a genetic testing
                company, you are handing over the most deeply personal data
                imaginable: your genome. Yet, the purchase is often emotionally
                driven—a desire to uncover ancestry or explore traits—while the
                long-term reality of data ownership is buried in legal jargon.
              </p>

              <h2>Our Mission</h2>
              <p>
                We do not assess the science. We do not review accuracy. We are
                entirely focused on the legal and policy frameworks that govern
                what happens to your biological sample and the resulting digital
                sequence once it leaves your hands.
              </p>

              <h2>Our Focus Areas</h2>
              <ul>
                <li>
                  <strong>Sample Destruction:</strong> Does the lab destroy your
                  physical saliva or swab after sequencing?
                </li>
                <li>
                  <strong>Data Deletion:</strong> Can you permanently wipe your
                  digitized DNA from their servers and backups?
                </li>
                <li>
                  <strong>Law Enforcement Access:</strong> Under what conditions
                  does the company cooperate with police?
                </li>
                <li>
                  <strong>Corporate Bankruptcy:</strong> If the provider goes
                  under, is your genetic code sold as a distressed asset?
                </li>
              </ul>

              <p>
                We maintain the Custody Matrix to provide a clear, evidentiary
                assessment of these policies, helping you make an informed
                choice before you forfeit control of your genetic information.
              </p>
            </Prose>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
