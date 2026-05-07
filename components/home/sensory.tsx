import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"
import { homeContent } from "@/content/home"
import { siteImages } from "@/lib/images"
import Image from "next/image"

export function SensorySection() {
  return (
    <section className="bg-muted">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Macro Image Half */}
        <div className="relative h-[50vh] lg:h-auto">
          <Image
            src={siteImages.home.ingredients}
            alt="Raw Spices and Ingredients"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Half */}
        <div className="py-24 md:py-32 px-6 md:px-16 lg:px-24 flex flex-col justify-center bg-primary text-primary-foreground">
          <SlideUp>
            <h2 className="font-heading text-4xl md:text-5xl mb-8">
              {homeContent.sensoryDetails.heading}
            </h2>
          </SlideUp>
          <FadeIn delay={0.2}>
            <p className="font-sans text-lg md:text-xl leading-relaxed font-light text-primary-foreground/90 mb-12">
              {homeContent.sensoryDetails.description}
            </p>
            <div className="h-[1px] w-24 bg-primary-foreground/30" />
          </FadeIn>
        </div>

      </div>
    </section>
  )
}
