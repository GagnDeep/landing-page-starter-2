import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Prose } from "@/components/layout/prose"
import { TicketRail, TicketRailItem, TicketRailTotal } from "@/components/ui/ticket-rail"
import { buildMetadata, buildJsonLd } from "@/lib/site"
import { vendors, hubs } from "@/content/data"
import React from "react"

export async function generateStaticParams() {
  return Object.keys(vendors).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const vendor = vendors[resolvedParams.slug]
  if (!vendor) return {}
  return buildMetadata(vendor.title, vendor.summary, `/reviews/${vendor.slug}/`)
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const vendor = vendors[resolvedParams.slug]
  if (!vendor) notFound()

  // Find parent hub to link up
  const parentHubSlug = Object.keys(hubs).find(key => hubs[key].spokes.includes(vendor.slug))
  const parentHub = parentHubSlug ? hubs[parentHubSlug] : null

  // Find siblings
  const siblings = parentHub ? parentHub.spokes.filter(s => s !== vendor.slug) : []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 border-b">
          <div className="container max-w-screen-md">
            <Breadcrumbs items={[
              ...(parentHub ? [{ label: parentHub.title, href: `/hubs/${parentHub.slug}/` }] : []),
              { label: vendor.title, href: `/reviews/${vendor.slug}/` }
            ]} />
            <div className="uppercase tracking-widest text-sm font-semibold mb-2 mt-8 text-accent">Vendor Review</div>
            <h1 className="text-display mb-6">{vendor.title}</h1>
            <p className="text-lead text-muted-foreground">{vendor.summary}</p>
          </div>
        </section>

        <section className="bg-muted py-16 border-b">
          <div className="container max-w-screen-md">
            <div className="max-w-sm mx-auto">
              <TicketRail>
                <div className="text-center mb-4 uppercase tracking-widest text-xs font-bold border-b border-dashed pb-2">Fact Sheet: {vendor.vendorName}</div>
                <TicketRailItem label="Best For" value={vendor.bestFor} />
                <TicketRailItem label="Software/mo" value={vendor.monthlyFee.value} />
                <TicketRailItem label="Processing" value={vendor.processingRate.value} highlight />
                <TicketRailItem label="Contract" value={vendor.contractLength.value} />
                <div className="text-center mt-4 text-[10px] text-muted-foreground pt-2 border-t border-dashed">
                  Rates verified on {vendor.processingRate.verifiedAt}. Subject to change.
                </div>
              </TicketRail>
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="container max-w-screen-md">
             <Prose>
                {vendor.sections.map((section, idx) => (
                  <React.Fragment key={idx}>
                    <h2 className="text-h2 mt-8 mb-4">{section.heading}</h2>
                    <p className="mb-6">{section.body}</p>
                  </React.Fragment>
                ))}
             </Prose>

             {siblings.length > 0 && (
               <div className="mt-16 pt-8 border-t">
                 <h3 className="text-h3 mb-4">Compare Alternatives</h3>
                 <ul className="space-y-2">
                   {siblings.map(sibSlug => {
                     const sib = vendors[sibSlug]
                     return sib ? (
                       <li key={sib.slug}>
                         <a href={`/reviews/${sib.slug}/`} className="text-primary hover:underline">Read the {sib.title}</a>
                       </li>
                     ) : null
                   })}
                 </ul>
               </div>
             )}
          </div>
        </section>
      </main>
      <Footer />
      {buildJsonLd({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: vendor.title,
        description: vendor.summary,
        datePublished: vendor.processingRate.verifiedAt,
        dateModified: vendor.processingRate.verifiedAt,
        author: {
          "@type": "Organization",
          name: "The Restaurant Stack Guide"
        }
      })}
    </div>
  )
}
