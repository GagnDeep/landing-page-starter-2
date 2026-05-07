"use client"

import { homeContent } from "@/content/home"
import { TextFadeIn } from "@/components/visuals"
import { HugeiconsIcon } from "@hugeicons/react"
import { QuoteUpIcon } from "@hugeicons/core-free-icons"

export function Testimonials() {
  const { testimonials } = homeContent

  return (
    <section className="py-24 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto text-center mb-20 relative">
          <HugeiconsIcon icon={QuoteUpIcon} className="size-16 text-primary/20 absolute -top-8 -left-8 md:-left-12 -z-10" strokeWidth={1} />
          <TextFadeIn>
            <blockquote className="text-2xl md:text-4xl font-heading italic text-foreground leading-relaxed mb-6">
              {testimonials.mainQuote}
            </blockquote>
            <cite className="text-lg font-sans font-medium text-primary not-italic">
              &mdash; {testimonials.mainAuthor}
            </cite>
          </TextFadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.reviews.map((review, idx) => (
            <div key={idx} className="bg-background p-8 rounded-xl border border-border shadow-sm">
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                &quot;{review.quote}&quot;
              </p>
              <p className="font-medium text-foreground text-sm">
                {review.author}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
