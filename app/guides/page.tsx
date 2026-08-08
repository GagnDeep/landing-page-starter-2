import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/site"
import { getContent, getChildren } from "@/lib/content"
import Link from "next/link"
import { notFound } from "next/navigation"

export const dynamic = "force-static"

export function generateMetadata() {
  const page = getContent("guides")
  if (!page) return notFound()
  return buildMetadata({
    title: page.title,
    description: page.description,
  })
}

export default function GuidesHub() {
  const page = getContent("guides")
  if (!page) return notFound()

  const children = getChildren("guides")

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
        <Breadcrumbs items={[{ label: "Guides" }]} />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <Prose className="max-w-3xl">{renderContent(page.content)}</Prose>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg bg-muted p-6">
              <h2 className="mb-4 font-heading text-xl font-bold">
                In this section
              </h2>
              <ul className="space-y-3">
                {children.map((child) => (
                  <li key={child.slug}>
                    <Link
                      href={`/guides/${child.slug}/`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
