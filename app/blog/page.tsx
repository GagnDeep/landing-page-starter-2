import Link from "next/link"
import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MedicalDisclaimer } from "@/components/medical-disclaimer"
import { BLOG_POSTS_DATA } from "@/lib/clinical-data"

export const metadata: Metadata = {
  title: "Integrative Internal Medicine Blog | Dr. Ameena Patel, MD",
  description:
    "Peer-reviewed health articles written by Dr. Ameena Patel covering thyroid conversion, bioidentical HRT, PCOS insulin resistance, SIBO, and advanced lipids.",
}

export default function BlogHubPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <Badge variant="outline" className="text-xs">
          Evidence-Based Medical Education
        </Badge>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Integrative Internal Medicine Insights
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Deep, peer-reviewed clinical articles explaining the science behind
          chronic symptoms, lab marker interpretation, and root-cause medical
          treatment.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS_DATA.map((post) => (
          <Card
            key={post.slug}
            className="flex flex-col justify-between border-border bg-card transition-all hover:border-primary/60 hover:shadow-md"
          >
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>{post.publishedDate}</span>
                <span>{post.readTime}</span>
              </div>
              <CardTitle className="font-serif text-xl leading-snug font-bold text-foreground">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-3 text-xs leading-relaxed">
                {post.summary}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 pt-0">
              <div className="border-t border-border pt-2 font-mono text-[11px] text-muted-foreground">
                By {post.author.name}, {post.author.credentials}
              </div>

              <Button
                asChild
                className="w-full justify-between rounded-lg bg-primary text-xs font-medium text-primary-foreground"
              >
                <Link href={`/blog/${post.slug}`}>
                  <span>Read Clinical Article</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <MedicalDisclaimer variant="standard" lastReviewed="2025-02-01" />
    </div>
  )
}
