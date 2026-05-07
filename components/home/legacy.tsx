import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"
import { homeContent } from "@/content/home"

export function LegacySection() {
  return (
    <section className="py-24 md:py-32 lg:py-48 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Pull Quote */}
          <div className="lg:col-span-7">
            <FadeIn>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground italic pr-4">
                &ldquo;{homeContent.legacyIntroduction.pullQuote}&rdquo;
              </h2>
            </FadeIn>
          </div>

          {/* Paragraph */}
          <div className="lg:col-span-5 flex flex-col justify-center border-l border-primary/20 pl-8 lg:pl-12">
            <SlideUp delay={0.2}>
              <p className="font-sans text-muted-foreground text-lg leading-relaxed font-light">
                {homeContent.legacyIntroduction.paragraph}
              </p>
            </SlideUp>
            <SlideUp delay={0.4}>
               <div className="mt-8 h-[1px] w-16 bg-primary" />
            </SlideUp>
          </div>

        </div>
      </div>
    </section>
  )
}