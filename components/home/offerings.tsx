import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"
import { ParallaxImage } from "@/components/visuals/parallax-image"
import { homeContent } from "@/content/home"
import { siteImages } from "@/lib/images"
import Link from "next/link"

export function OfferingsSection() {
  const { punjabiFeasts, liveStalls, bespokeDesserts } = homeContent.signatureOfferings

  return (
    <section className="py-24 md:py-32 bg-muted relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col gap-32 lg:gap-48">

        {/* Offering 1: Punjabi Feasts (Asymmetric Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          <div className="lg:col-span-7 lg:pr-16 relative z-10 order-2 lg:order-1">
            <SlideUp>
              <div className="bg-background p-12 md:p-16 shadow-2xl shadow-black/5 -mt-20 lg:mt-0 lg:-mr-24 relative">
                <h3 className="font-heading text-3xl md:text-5xl text-primary mb-6">{punjabiFeasts.heading}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed text-lg mb-8">
                  {punjabiFeasts.description}
                </p>
                <Link href="/features" className="text-sm font-semibold tracking-widest uppercase text-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                  Discover Our Heritage <span className="text-primary">→</span>
                </Link>
              </div>
            </SlideUp>
          </div>
          <div className="lg:col-span-5 h-[60vh] lg:h-[80vh] relative order-1 lg:order-2">
            <FadeIn className="w-full h-full">
              <ParallaxImage
                src={siteImages.home.offerings.feasts}
                alt="Royal Punjabi Feast"
                containerClassName="w-full h-full rounded-sm"
              />
            </FadeIn>
          </div>
        </div>

        {/* Offering 2: Live Stalls (Asymmetric Left) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          <div className="lg:col-span-6 h-[60vh] lg:h-[80vh] relative">
            <FadeIn className="w-full h-full">
              <ParallaxImage
                src={siteImages.home.offerings.liveStalls}
                alt="Theatrical Live Stalls"
                containerClassName="w-full h-full rounded-sm"
              />
            </FadeIn>
          </div>
          <div className="lg:col-span-6 lg:pl-16 relative z-10">
            <SlideUp delay={0.2}>
              <div className="bg-background p-12 md:p-16 shadow-2xl shadow-black/5 -mt-20 lg:mt-0 lg:-ml-24 relative">
                <h3 className="font-heading text-3xl md:text-5xl text-primary mb-6">{liveStalls.heading}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed text-lg mb-8">
                  {liveStalls.description}
                </p>
                 <Link href="/features" className="text-sm font-semibold tracking-widest uppercase text-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                  Explore Live Stations <span className="text-primary">→</span>
                </Link>
              </div>
            </SlideUp>
          </div>
        </div>

        {/* Offering 3: Desserts (Full Width Band) */}
        <div className="relative h-[70vh] flex items-center mt-12">
            <div className="absolute inset-0 z-0">
                <ParallaxImage
                    src={siteImages.home.offerings.desserts}
                    alt="Bespoke Desserts"
                    containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center text-secondary-foreground">
                <SlideUp>
                    <h3 className="font-heading text-4xl md:text-6xl mb-6">{bespokeDesserts.heading}</h3>
                    <p className="font-sans text-lg md:text-xl max-w-3xl mx-auto opacity-90 font-light mb-10">
                        {bespokeDesserts.description}
                    </p>
                    <Link href="/features" className="px-8 py-4 border border-secondary-foreground text-sm tracking-widest uppercase hover:bg-secondary-foreground hover:text-secondary transition-colors">
                        View Confections
                    </Link>
                </SlideUp>
            </div>
        </div>

      </div>
    </section>
  )
}
