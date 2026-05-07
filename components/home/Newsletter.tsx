"use client"

import { homeContent } from "@/content/home"
import { TextFadeIn } from "@/components/visuals"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  const { newsletter } = homeContent

  return (
    <section className="py-24 bg-muted/40 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <TextFadeIn>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            {newsletter.heading}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {newsletter.subheading}
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={newsletter.placeholder}
              className="flex-1 h-12 px-6 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <Button size="lg" className="h-12 px-8 rounded-full">
              {newsletter.button}
            </Button>
          </form>
        </TextFadeIn>
      </div>
    </section>
  )
}
