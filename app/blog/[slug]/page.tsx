import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { Calendar01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MedicalDisclaimer } from "@/components/medical-disclaimer"
import { BLOG_POSTS_DATA } from "@/lib/clinical-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS_DATA.find((b) => b.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} | Dr. Ameena Patel, MD`,
    description: post.summary,
  }
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = BLOG_POSTS_DATA.find((b) => b.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {/* Article Header */}
      <div className="space-y-4 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
          <Badge variant="outline">Medical Article</Badge>
          <span>Published: {post.publishedDate}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="text-accent">
            Medically Reviewed: {post.lastReviewedDate}
          </span>
        </div>

        <h1 className="font-serif text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 pt-2 text-xs text-muted-foreground">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary font-serif font-bold text-primary-foreground">
            AP
          </div>
          <div>
            <strong className="block text-foreground">
              {post.author.name}, {post.author.credentials}
            </strong>
            <span>{post.author.title}</span>
          </div>
        </div>
      </div>

      {/* Article Summary Lead */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm leading-relaxed font-medium text-foreground">
        <strong>Summary:</strong> {post.summary}
      </div>

      {/* Article Body Sections */}
      <article className="space-y-8 text-sm leading-relaxed text-foreground">
        {post.sections.map((sec, i) => (
          <section key={i} className="space-y-3">
            <h2 className="border-b border-border/60 pb-2 font-serif text-xl font-bold text-foreground">
              {sec.h2Title}
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {sec.content}
            </p>
          </section>
        ))}
      </article>

      {/* Closing CTA */}
      <Card className="space-y-4 border-border bg-card p-8 text-center">
        <h3 className="font-serif text-2xl font-bold text-foreground">
          {post.closingCta.headline}
        </h3>
        <p className="mx-auto max-w-lg text-xs leading-relaxed text-muted-foreground">
          {post.closingCta.description}
        </p>
        <Button
          asChild
          size="lg"
          className="rounded-lg bg-accent font-medium text-accent-foreground"
        >
          <Link
            href={post.closingCta.buttonHref}
            className="flex items-center justify-center gap-2"
          >
            <HugeiconsIcon icon={Calendar01Icon} className="size-4" />
            <span>{post.closingCta.buttonText}</span>
          </Link>
        </Button>
      </Card>

      {/* Primary Citations */}
      {post.citations.length > 0 && (
        <section className="space-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <h4 className="font-bold text-foreground">
            Peer-Reviewed Literature References:
          </h4>
          <ol className="list-decimal space-y-1 pl-5 font-mono text-[11px]">
            {post.citations.map((cit) => (
              <li key={cit.id}>
                {cit.authors} ({cit.year}). <em>{cit.title}</em>. {cit.journal}.
              </li>
            ))}
          </ol>
        </section>
      )}

      <MedicalDisclaimer
        variant="standard"
        lastReviewed={post.lastReviewedDate}
      />
    </div>
  )
}
