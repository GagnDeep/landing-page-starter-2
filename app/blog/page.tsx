import Link from "next/link"
import { BLOG_POSTS } from "@/lib/blog-data"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  BookOpen01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tax Articles & Guides for Independent Workers | bro.tax",
  description:
    "Plain-English tax advice, IRS deadline guides, deduction lists, and 1099 calculation formulas for freelancers, creators, and gig drivers.",
}

export default function BlogHubPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase">
          No Jargon. Zero Fluff.
        </span>
        <h1 className="font-mono text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          1099 Tax Intelligence Articles
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Deep-dive tax guides written strictly from official IRS rules, broken
          down into plain English with real-world calculation examples.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="ledger-card group block flex flex-col justify-between space-y-4 p-6 transition-colors hover:border-primary"
          >
            <div className="ledger-rail" />
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span className="font-bold tracking-wider text-primary uppercase">
                  {post.publishedDate}
                </span>
                <span className="flex items-center gap-1">
                  <HugeiconsIcon icon={Clock01Icon} className="size-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="font-mono text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h2>

              <p className="text-xs leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-border pt-4 font-mono text-xs font-semibold text-primary">
              <span>Read Full Article</span>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
