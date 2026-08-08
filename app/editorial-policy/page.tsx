import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata, buildArticleJsonLd } from "@/lib/site"

const TITLE = "Editorial Policy"
const DESCRIPTION =
  "Read our strict editorial standards for accuracy, mathematical verification, objectivity, and publishing when reviewing and tracking AI investing tools."
const PATH = "/editorial-policy/"

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

export default function EditorialPolicyPage() {
  const jsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Editorial Policy", url: PATH },
            ]}
          />
          <h1 className="mb-8 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {TITLE}
          </h1>
          <Prose>
            <p>
              Our editorial policy is built on a foundation of skepticism,
              mathematical verification, and transparency.
            </p>
            <h2>Accuracy and Verification</h2>
            <p>
              We do not publish performance claims, win rates, or accuracy
              percentages without independent verification. If a vendor makes a
              claim that we cannot verify through our own tracking methodology,
              we state clearly that the claim is unverified.
            </p>
            <h2>Corrections</h2>
            <p>
              If we discover an error in our tracking data or methodology, we
              will correct it promptly and add a prominent note explaining the
              change and its impact.
            </p>
            <h2>Independence</h2>
            <p>
              Our editorial content is never dictated by our affiliate partners.
              We do not accept payment for favorable reviews or altered tracking
              results.
            </p>
            <p className="mt-8 text-sm text-muted-foreground italic">
              Last updated: November 2023
            </p>
          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  )
}
