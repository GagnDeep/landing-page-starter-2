import Link from "next/link"
import { notFound } from "next/navigation"
import { BLOG_POSTS } from "@/lib/blog-data"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeft01Icon,
  Clock01Icon,
  Calculator01Icon,
  HelpCircleIcon,
} from "@hugeicons/core-free-icons"
import { Metadata } from "next"

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return { title: "Article Not Found | bro.tax" }

  return {
    title: `${post.title} | bro.tax`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
        <span>Back to All Articles</span>
      </Link>

      <article className="ledger-card space-y-8 p-6 md:p-8">
        <div className="ledger-rail" />

        <header className="space-y-3 border-b border-border pb-6">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="font-bold tracking-widest text-primary uppercase">
              Target Keyword: {post.targetKeyword}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <HugeiconsIcon icon={Clock01Icon} className="size-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-mono text-2xl leading-tight font-black text-foreground sm:text-4xl">
            {post.title}
          </h1>

          <p className="font-sans text-sm leading-relaxed text-muted-foreground italic">
            {post.excerpt}
          </p>
        </header>

        <div className="space-y-8 font-sans text-sm leading-relaxed text-foreground/90 sm:text-base">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="border-l-2 border-primary pl-3 font-mono text-lg font-bold text-foreground sm:text-xl">
                {section.h2}
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <HugeiconsIcon
              icon={HelpCircleIcon}
              className="size-4 text-accent"
            />
            <span>Updated for Tax Years 2024 & 2025</span>
          </div>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 font-mono text-xs font-semibold text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            <HugeiconsIcon icon={Calculator01Icon} className="size-4" />
            <span>Calculate Your 1099 Taxes</span>
          </Link>
        </footer>
      </article>
    </div>
  )
}
