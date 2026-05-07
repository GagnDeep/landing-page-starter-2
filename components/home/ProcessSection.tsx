"use client"

import { homeContent } from "@/content/home"
import { TextFadeIn } from "@/components/visuals"

export function ProcessSection() {
  const { process } = homeContent

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        <div className="text-center mb-16">
          <TextFadeIn>
            <h2 className="text-3xl md:text-5xl font-heading text-foreground">
              {process.heading}
            </h2>
          </TextFadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-border z-0" />

          {process.steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-heading mb-6 shadow-xl">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
