import { SlideUp } from "@/components/visuals/slide-up"
import { homeContent } from "@/content/home"

export function HeritageSection() {
  return (
    <section className="py-32 md:py-48 bg-background relative overflow-hidden flex items-center justify-center border-b border-border/50">
      {/* Subtle watermark background texture placeholder */}
      <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
        <SlideUp>
          <span className="font-sans text-xs tracking-widest uppercase text-primary mb-8 block font-semibold">
            Our Philosophy
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
            {homeContent.heritageStatement.heading}
          </h2>
          <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            {homeContent.heritageStatement.content}
          </p>
        </SlideUp>
      </div>
    </section>
  )
}