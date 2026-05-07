import { SlideUp } from "@/components/visuals/slide-up"
import { RevealText } from "@/components/visuals/reveal-text"
import { homeContent } from "@/content/home"
import Link from "next/link"

export function FinalCtaSection() {
  return (
    <section className="bg-primary text-primary-foreground py-32 md:py-48 text-center px-6">
      <div className="mx-auto max-w-4xl flex flex-col items-center">
        <SlideUp>
          <RevealText
            as="h2"
            text={homeContent.finalCta.heading}
            className="font-heading text-5xl md:text-7xl lg:text-8xl mb-12"
          />
        </SlideUp>

        <SlideUp delay={0.4}>
          <Link
            href="/contact"
            className="inline-block border border-primary-foreground text-primary-foreground px-10 py-5 font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            {homeContent.finalCta.buttonText}
          </Link>
        </SlideUp>
      </div>
    </section>
  )
}
