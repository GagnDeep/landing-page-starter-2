import { Metadata } from "next"
import { termsContent } from "@/content/terms"
import { SlideUp } from "@/components/visuals/slide-up"

export const metadata: Metadata = {
  title: termsContent.seo.title,
  description: termsContent.seo.description,
}

export default function TermsPage() {
  return (
    <div className="bg-background pt-32 pb-32 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 md:px-12">

        {/* Header */}
        <div className="mb-16 border-b border-border/50 pb-8">
            <SlideUp>
                <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-4">
                    {termsContent.header.headline}
                </h1>
                <p className="font-sans text-sm text-muted-foreground tracking-widest uppercase">
                    {termsContent.header.lastUpdated}
                </p>
            </SlideUp>
        </div>

        {/* Content Body */}
        <article className="prose prose-p:font-sans prose-p:text-muted-foreground prose-p:leading-loose prose-h2:font-heading prose-h2:text-2xl prose-h2:text-foreground prose-h2:mt-12 prose-h2:mb-6 max-w-none">
            {termsContent.content.map((section, idx) => (
                <SlideUp key={idx} delay={0.1 * (idx + 1)}>
                    <h2>{section.heading}</h2>
                    <p>{section.text}</p>
                </SlideUp>
            ))}
        </article>

      </div>
    </div>
  )
}
