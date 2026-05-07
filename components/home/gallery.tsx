import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"
import { ParallaxImage } from "@/components/visuals/parallax-image"
import { homeContent } from "@/content/home"
import { siteImages } from "@/lib/images"

export function GalleryPreview() {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        <div className="text-center mb-16 md:mb-24">
          <SlideUp>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              {homeContent.galleryPreview.heading}
            </h2>
            <p className="font-sans text-muted-foreground text-lg">
              {homeContent.galleryPreview.description}
            </p>
          </SlideUp>
        </div>

        {/* Masonry/Staggered Grid Approximation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          <div className="flex flex-col gap-8 lg:gap-12 md:mt-16">
            <FadeIn>
              <div className="relative aspect-[4/5] w-full overflow-hidden group">
                <ParallaxImage
                  src={siteImages.home.gallery[0]}
                  alt="Gallery Event Setup"
                  containerClassName="w-full h-full rounded-sm"
                  className="transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[3/2] w-full overflow-hidden group">
                <ParallaxImage
                  src={siteImages.home.gallery[1]}
                  alt="Gallery Details"
                  containerClassName="w-full h-full rounded-sm"
                  className="transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-8 lg:gap-12">
            <FadeIn delay={0.1}>
              <div className="relative aspect-[3/2] w-full overflow-hidden group">
                <ParallaxImage
                  src={siteImages.home.gallery[2]}
                  alt="Gallery Venue"
                  containerClassName="w-full h-full rounded-sm"
                  className="transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative aspect-[4/5] w-full overflow-hidden group">
                <ParallaxImage
                  src={siteImages.home.gallery[3]}
                  alt="Gallery Culinary Presentation"
                  containerClassName="w-full h-full rounded-sm"
                  className="transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
