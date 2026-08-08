import {
  buildMetadata,
  generateOrganizationJsonLd,
  generateWebSiteJsonLd,
} from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FilingCallout } from "@/components/filing-callout"
import { Prose } from "@/components/prose"

export const metadata = buildMetadata({
  title: "B2B Media for RIA Transition",
  description:
    "Navigate the complex landscape of launching, registering, or selling a Registered Investment Adviser firm. We cater to the breakaway advisor.",
  path: "/",
})

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteJsonLd()),
          }}
        />

        {/* Hero Section */}
        <section className="border-b border-border py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
              <div className="hidden lg:col-span-1 lg:block">
                <div className="pt-2 font-mono text-xs text-muted-foreground">
                  §1.01
                </div>
              </div>
              <div className="max-w-3xl lg:col-span-11">
                <h1 className="mb-6 font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  Navigate the complex landscape of RIA transition.
                </h1>
                <p className="mb-8 max-w-2xl text-xl text-muted-foreground">
                  Not a consumer find-an-advisor site. We serve professionals
                  launching, registering, or selling a Registered Investment
                  Adviser firm.
                </p>
                <div className="flex gap-4 font-mono text-sm">
                  <a
                    href="#vendors"
                    className="border border-border bg-foreground px-4 py-2 text-background transition-colors hover:bg-muted-foreground"
                  >
                    Explore Vendors
                  </a>
                  <a
                    href="/about"
                    className="border border-border px-4 py-2 transition-colors hover:bg-muted"
                  >
                    Our Methodology
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Signature Component Section */}
        <section className="border-b border-border bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
              <div className="hidden lg:col-span-1 lg:block">
                <div className="pt-2 font-mono text-xs text-muted-foreground">
                  §1.02
                </div>
              </div>
              <div className="max-w-4xl lg:col-span-11">
                <h2 className="mb-6 font-heading text-2xl font-semibold">
                  Regulatory Market Context
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <FilingCallout docket="M&A-VOL-2025" date="2025">
                    <Prose>
                      <p>
                        2025 was the most active year on record for RIA M&A per
                        the DeVoe and Company RIA Deal Book.
                      </p>
                    </Prose>
                  </FilingCallout>

                  <FilingCallout docket="SEC-MKT-RULE" date="2022">
                    <Prose>
                      <p>
                        The amended SEC Marketing Rule, effective 2022, is still
                        reshaping what advisers and vendors may publish.
                      </p>
                    </Prose>
                  </FilingCallout>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directory / Table Showpiece (Empty State for now, waiting for real data) */}
        <section id="vendors" className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
              <div className="hidden lg:col-span-1 lg:block">
                <div className="pt-2 font-mono text-xs text-muted-foreground">
                  §1.03
                </div>
              </div>
              <div className="w-full overflow-x-auto lg:col-span-11">
                <h2 className="mb-6 font-heading text-2xl font-semibold">
                  Vendor Compliance Registry
                </h2>
                <div className="min-w-[800px] border border-border">
                  <div className="grid grid-cols-4 border-b border-border bg-muted/50 p-4 font-mono text-sm font-medium">
                    <div>Provider</div>
                    <div>Category</div>
                    <div>AUM Threshold</div>
                    <div>Status</div>
                  </div>
                  {/* Empty state per rules */}
                  <div className="flex min-h-[200px] flex-col items-center justify-center p-8 text-center font-mono text-sm text-muted-foreground">
                    <p className="mb-2">
                      No vendor records match current filter criteria.
                    </p>
                    <p className="text-xs">
                      Database pending initial load of certified partners.
                    </p>
                    {/* Real content naming comment: Waiting for verified vendor dataset from brief/backend */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
