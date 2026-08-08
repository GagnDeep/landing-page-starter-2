import { buildMetadata, generateBreadcrumbJsonLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { FilingCallout } from "@/components/filing-callout"

export const metadata = buildMetadata({
  title: "About Our Methodology",
  description:
    "Learn about the strict criteria we use to evaluate compliance, custody, and technology vendors for RIAs. We only feature properly vetted solutions.",
  path: "/about",
})

export default function AboutPage() {
  const breadcrumbItems = [{ name: "About", url: "/about" }]

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbJsonLd(breadcrumbItems)),
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="hidden lg:col-span-1 lg:block">
              <div className="pt-2 font-mono text-xs text-muted-foreground">
                §2.01
              </div>
            </div>
            <div className="max-w-3xl lg:col-span-11">
              <h1 className="mb-8 font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                Editorial Methodology
              </h1>

              <Prose>
                <p>
                  This publication exists for one purpose: to route breakaway
                  advisors and succession-stage principals to the compliance,
                  custody, and technology vendors they are legally required to
                  hire.
                </p>
                <p>
                  We write for skeptics. Our readers are compliance-trained,
                  hold budgets, and are primed to discount anything that
                  resembles marketing. Therefore, our methodology relies on
                  verifiable facts, structured comparison, and strict adherence
                  to regulatory context.
                </p>

                <h2>Guiding Principles</h2>
                <ul>
                  <li>
                    <strong>Regulatory Precision:</strong> Content must reflect
                    current SEC guidelines. The amended SEC Marketing Rule,
                    effective 2022, is still reshaping what advisers and vendors
                    may publish.
                  </li>
                  <li>
                    <strong>Market Reality:</strong> 2025 was the most active
                    year on record for RIA M&A per the DeVoe and Company RIA
                    Deal Book. We structure our vendor routing to address this
                    consolidation.
                  </li>
                  <li>
                    <strong>Absolute Verification:</strong> Any figure,
                    threshold, or payout not explicitly documented is marked for
                    strict verification. We never estimate.
                  </li>
                </ul>
              </Prose>

              <div className="mt-12">
                <FilingCallout docket="ED-POL-01" date="Current">
                  <p className="mb-2 font-semibold">Notice to Vendors</p>
                  <p>
                    Inclusion in our registry requires documented compliance
                    with current SEC marketing parameters. Promotional claims
                    lacking verifiable data will be redacted.
                  </p>
                </FilingCallout>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
