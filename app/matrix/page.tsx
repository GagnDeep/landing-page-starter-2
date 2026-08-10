import { getPageById } from "@/content/data"
import { PageTemplate } from "@/components/page-template"
import { buildMetadata } from "@/lib/site"
import { notFound } from "next/navigation"

export function generateMetadata() {
  const page = getPageById("matrix")
  if (!page) return {}
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.id}`,
  })
}

export default function MatrixHub() {
  const page = getPageById("matrix")
  if (!page) return notFound()
  return <PageTemplate page={page} />
}
