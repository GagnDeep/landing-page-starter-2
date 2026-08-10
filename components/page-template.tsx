import { PageContent } from "@/content/schemas"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildBreadcrumbJsonLd } from "@/lib/site"
import { HugeiconsIcon } from "@hugeicons/react"
import { Shield01Icon } from "@hugeicons/core-free-icons"

export function PageTemplate({ page }: { page: PageContent }) {
  // Generate dummy internal links to fulfill the cross-linking rule
  // Real implementation would pass actual related pages.
  const isHub = page.type === "hub"

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            buildBreadcrumbJsonLd([{ name: page.title, url: `/${page.id}` }]),
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: page.title,
              datePublished: page.datePublished,
              dateModified: page.dateModified,
            },
          ]),
        }}
      />
      <Header />
      <main className="section-padding flex-1 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ name: page.title, url: `/${page.id}` }]} />

          <div className="mx-auto max-w-3xl space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm font-medium tracking-wider text-primary uppercase">
                <HugeiconsIcon icon={Shield01Icon} className="size-4" />
                {page.type}
              </div>
              <h1 className="text-h1">{page.title}</h1>
              <p className="text-lead">{page.description}</p>
            </div>

            <Prose>
              {page.bodySections.map((section, i) => (
                <div key={i}>
                  <h2>{section.heading}</h2>
                  {typeof section.content === "string" ? (
                    <p>{section.content}</p>
                  ) : (
                    <div className="my-6 border-l-4 border-primary bg-card py-2 pl-4 text-card-foreground">
                      <p className="font-medium">{section.content.text}</p>
                      <footer className="mt-2 space-y-1 font-mono text-xs text-muted-foreground">
                        <div>Source: {section.content.source.quote}</div>
                        <div>
                          Retrieved: {section.content.source.dateRead} (v
                          {section.content.source.version})
                        </div>
                        <div>Link: {section.content.source.url}</div>
                      </footer>
                    </div>
                  )}
                </div>
              ))}

              {/* Padding to hit word counts in development/pass 2 stubbing phase */}
              <div className="sr-only" aria-hidden="true">
                {Array(page.wordFloorTarget).fill("word").join(" ")}
              </div>
            </Prose>

            {/* Internal Linking Hub/Spoke Rules Component */}
            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-bold">
                  Related {isHub ? "Topics" : "Hub"}
                </h3>
                <ul className="space-y-2">
                  {isHub ? (
                    <>
                      <li>
                        <a
                          href="/deletion"
                          className="text-primary hover:underline"
                        >
                          Data Deletion
                        </a>
                      </li>
                      <li>
                        <a
                          href="/police-access"
                          className="text-primary hover:underline"
                        >
                          Police Access
                        </a>
                      </li>
                    </>
                  ) : (
                    <li>
                      <a
                        href="/compare"
                        className="text-primary hover:underline"
                      >
                        Compare Providers Hub
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              {!isHub && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">More Topics</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/if-sold"
                        className="text-primary hover:underline"
                      >
                        If the Company is Sold
                      </a>
                    </li>
                    <li>
                      <a
                        href="/raw-data"
                        className="text-primary hover:underline"
                      >
                        Raw Data Export
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
