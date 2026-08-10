import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Prose } from "@/components/layout/prose"
import { buildMetadata, buildJsonLd } from "@/lib/site"
import { hubs, vendors } from "@/content/data"
import Link from "next/link"
import React from "react"

export async function generateStaticParams() {
  return Object.keys(hubs).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const hub = hubs[resolvedParams.slug]
  if (!hub) return {}
  return buildMetadata(hub.title, hub.description, `/hubs/${hub.slug}/`)
}

export default async function HubPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const hub = hubs[resolvedParams.slug]
  if (!hub) notFound()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background py-16 border-b">
          <div className="container max-w-screen-md">
            <Breadcrumbs items={[{ label: "Hubs", href: "/" }, { label: hub.title, href: `/hubs/${hub.slug}/` }]} />
            <h1 className="text-display mt-8 mb-6">{hub.title}</h1>
            <p className="text-lead text-muted-foreground">{hub.description}</p>
          </div>
        </section>

        <section className="bg-muted py-16 border-b">
          <div className="container max-w-screen-md">
             <div className="grid gap-6">
                {hub.spokes.map((spokeSlug) => {
                  const vendor = vendors[spokeSlug]
                  if (!vendor) return null
                  return (
                    <Link key={vendor.slug} href={`/reviews/${vendor.slug}/`} className="block group">
                      <div className="bg-card text-card-foreground border p-6 rounded-md shadow-sm transition-colors group-hover:border-primary">
                         <h2 className="text-h3 mb-2">{vendor.title}</h2>
                         <p className="text-muted-foreground mb-4">{vendor.summary}</p>
                         <div className="text-sm font-semibold text-accent uppercase tracking-widest">Read Review &rarr;</div>
                      </div>
                    </Link>
                  )
                })}
             </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="container max-w-screen-md">
             <Prose>
                {hub.contentSections.map((section, idx) => (
                  <React.Fragment key={idx}>
                    <h2 className="text-h2 mt-8 mb-4">{section.heading}</h2>
                    <p className="mb-6">{section.body}</p>
                  </React.Fragment>
                ))}
             </Prose>
          </div>
        </section>
      </main>
      <Footer />
      {buildJsonLd({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: hub.title,
        description: hub.description,
        url: `https://instituteofrestaurants.com/hubs/${hub.slug}/`,
      })}
    </div>
  )
}
