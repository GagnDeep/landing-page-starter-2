import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/site"
import { getContent, getAllContent, ContentPage } from "@/lib/content"
import Link from "next/link"
import { notFound } from "next/navigation"

export const dynamic = "force-static"

export function generateStaticParams() {
  const all = getAllContent()
  const spokes = all.filter((c) => c.type === "spoke")
  return spokes.map((spoke) => ({
    slug: spoke.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const page = getContent(resolvedParams.slug)
  if (!page) return notFound()
  return buildMetadata({
    title: page.title,
    description: page.description,
  })
}

export default async function SpokePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const page = getContent(resolvedParams.slug)
  if (!page) return notFound()

  const allContent = getAllContent()
  const siblings = page.relatedSlugs
    .map((slug) => allContent.find((c) => c.slug === slug))
    .filter((c): c is ContentPage => c !== undefined)

  const renderContent = (content: string) => {
    return content.split("\n\n").map((para, i) => {
      if (para.startsWith("# ")) {
        return (
          <h1 key={i} className="font-heading text-4xl font-bold">
            {para.replace("# ", "")}
          </h1>
        )
      }
      return <p key={i}>{para}</p>
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12 md:px-6">
        <Breadcrumbs
          items={[{ label: "Guides", href: "/guides/" }, { label: page.title }]}
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <Prose className="max-w-3xl">{renderContent(page.content)}</Prose>

            {siblings.length > 0 && (
              <div className="mt-12 border-t pt-8">
                <h2 className="mb-4 font-heading text-2xl font-bold">
                  Related Guides
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {siblings.map((sibling) => (
                    <Link
                      key={sibling.slug}
                      href={`/guides/${sibling.slug}/`}
                      className="block rounded-lg border p-4 transition-colors hover:border-primary"
                    >
                      <h3 className="font-medium">{sibling.title}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {sibling.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
