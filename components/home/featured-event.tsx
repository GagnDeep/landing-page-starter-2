import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"
import { ParallaxImage } from "@/components/visuals/parallax-image"
import { homeContent } from "@/content/home"
import { siteImages } from "@/lib/images"

export function FeaturedEventSection() {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Main Image (Magazine Spread Left) */}
          <div className="lg:col-span-7 h-[60vh] lg:h-[90vh]">
            <FadeIn className="w-full h-full">
              <ParallaxImage
                src={siteImages.home.featuredEvent.main}
                alt={homeContent.featuredEvent.heading}
                containerClassName="w-full h-full rounded-sm"
              />
            </FadeIn>
          </div>

          {/* Narrative & Secondary Images (Magazine Spread Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="mb-12 lg:mb-0 lg:pt-12">
              <SlideUp>
                <span className="font-sans text-xs tracking-widest uppercase text-primary mb-4 block">
                  Featured Case Study
                </span>
                <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                  {homeContent.featuredEvent.heading}
                </h2>
                <p className="font-sans text-muted-foreground text-lg leading-relaxed font-light mb-8">
                  {homeContent.featuredEvent.description}
                </p>
                <button className="text-sm font-semibold tracking-widest uppercase text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-1">
                  View Full Gallery
                </button>
              </SlideUp>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-auto">
               <FadeIn delay={0.2} className="aspect-[4/5] relative">
                  <ParallaxImage
                    src={siteImages.home.featuredEvent.detail1}
                    alt="Event Detail"
                    containerClassName="w-full h-full rounded-sm"
                  />
               </FadeIn>
               <FadeIn delay={0.4} className="aspect-[4/5] relative">
                  <ParallaxImage
                    src={siteImages.home.featuredEvent.detail2}
                    alt="Culinary Detail"
                    containerClassName="w-full h-full rounded-sm"
                  />
               </FadeIn>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
