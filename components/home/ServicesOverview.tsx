"use client"

import { homeContent } from "@/content/home"
import { IMAGES } from "@/lib/images"
import { TextFadeIn, SubtleScaleImage, WarmthGlow } from "@/components/visuals"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

export function ServicesOverview() {
  const { servicesOverview } = homeContent

  // We map the images from features to match the services
  const images = [
    IMAGES.features.weddings,
    IMAGES.features.corporate,
    IMAGES.home.philosophy, // Fallback for private dinners
  ]

  return (
    <section className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <WarmthGlow color="var(--secondary)" intensity="low" className="-top-1/4 -right-1/4 w-[800px] h-[800px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <TextFadeIn className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white">
            {servicesOverview.heading}
          </h2>
        </TextFadeIn>

        <div className="flex flex-col gap-24">
          {servicesOverview.services.map((service, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                <div className={`order-1 lg:w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative bg-black/20">
                    <SubtleScaleImage
                      src={images[idx]}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover opacity-90"
                    />
                  </div>
                </div>

                <div className={`order-2 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <TextFadeIn delay={0.1}>
                    <h3 className="text-3xl md:text-4xl font-heading text-white mb-6">
                      {service.title}
                    </h3>
                  </TextFadeIn>
                  <TextFadeIn delay={0.2}>
                    <p className="text-lg text-white/80 leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </TextFadeIn>
                  <TextFadeIn delay={0.3}>
                    <Link href="/features" className="inline-flex items-center text-secondary hover:text-white transition-colors font-medium group">
                      {service.cta}
                      <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 size-5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                    </Link>
                  </TextFadeIn>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
