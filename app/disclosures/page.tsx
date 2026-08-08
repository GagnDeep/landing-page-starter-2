import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata, buildArticleJsonLd } from "@/lib/site"

const TITLE = "Disclosures"
const DESCRIPTION =
  "Important information regarding our affiliate relationships, how we fund our independent research, and our strict conflict management and objectivity policies."
const PATH = "/disclosures/"

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

export default function DisclosuresPage() {
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
              { name: "Disclosures", url: PATH },
            ]}
          />
          <h1 className="mb-8 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {TITLE}
          </h1>
          <Prose>
            <p>
              We believe in complete transparency. This page explains how we
              make money and how we manage potential conflicts of interest.
            </p>
            <h2>Affiliate Disclosure</h2>
            <p>
              We earn a commission when you click through our affiliate links
              and purchase a subscription to some of the tools evaluated on this
              site. This is how we fund our independent research.
            </p>
            <h2>Conflict Management</h2>
            <p>To ensure our reviews and tracking remain objective:</p>
            <ul>
              <li>
                We apply the same tracking methodology to all tools, regardless
                of whether they have an affiliate program.
              </li>
              <li>
                Our performance data is derived mathematically against a
                standard benchmark, not based on editorial opinion.
              </li>
              <li>
                We publish unflattering data when the tracking results demand
                it, even for partners.
              </li>
            </ul>
            <h2>Not Investment Advice</h2>
            <p>
              <strong>Informational only. Not investment advice.</strong> This
              site does not provide financial advice, and none of the content
              should be construed as a recommendation to buy or sell any
              security.
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
