"use client"

import { homeContent } from "@/content/home"
import { StaggeredGrid, CardHoverEffect } from "@/components/visuals"
import { HugeiconsIcon } from "@hugeicons/react"
import { NaturalFoodIcon, FireIcon, BirthdayCakeIcon } from "@hugeicons/core-free-icons"

const iconMap: Record<string, typeof NaturalFoodIcon> = {
  spice: NaturalFoodIcon,
  flame: FireIcon,
  dessert: BirthdayCakeIcon,
}

export function CulinaryHeritage() {
  const { culinaryHeritage } = homeContent

  return (
    <section className="py-24 bg-accent/20 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground">
            {culinaryHeritage.heading}
          </h2>
        </div>

        <StaggeredGrid columns={3}>
          {culinaryHeritage.items.map((item, idx) => {
            const IconComponent = iconMap[item.icon]
            return (
              <CardHoverEffect key={idx}>
                <div className="bg-card border border-border p-8 rounded-xl h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {IconComponent && <HugeiconsIcon icon={IconComponent} className="size-6 text-primary" strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-xl font-heading text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </CardHoverEffect>
            )
          })}
        </StaggeredGrid>
      </div>
    </section>
  )
}
