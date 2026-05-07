import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"
import { homeContent } from "@/content/home"

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SlideUp>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground text-center mb-24">
            {homeContent.process.heading}
          </h2>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-[1px] bg-border z-0" />

          {homeContent.process.steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.2} className="relative z-10 flex flex-col items-center text-center">
              {/* Number/Icon Indicator */}
              <div className="w-20 h-20 rounded-full bg-background border border-border flex items-center justify-center mb-8 shadow-sm">
                <span className="font-heading text-2xl text-primary italic">0{index + 1}</span>
              </div>

              <h3 className="font-sans text-sm tracking-widest uppercase text-foreground font-semibold mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
