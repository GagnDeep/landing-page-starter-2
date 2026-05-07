import { StaggerContainer, StaggerItem } from "@/components/visuals/stagger-container"
import { AnimatedCounter } from "@/components/visuals/animated-counter"
import { homeContent } from "@/content/home"

export function ScaleSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
        <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-20">{homeContent.scaleOfMagnificence.heading}</h2>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {homeContent.scaleOfMagnificence.stats.map((stat, index) => (
            <StaggerItem key={index} className="flex flex-col items-center">
              <AnimatedCounter
                value={stat.number}
                className="text-5xl md:text-6xl lg:text-7xl font-heading text-primary mb-4 block"
              />
              <span className="font-sans tracking-widest uppercase text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
