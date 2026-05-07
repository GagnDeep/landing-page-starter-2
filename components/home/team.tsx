import { SlideUp } from "@/components/visuals/slide-up"
import { FadeIn } from "@/components/visuals/fade-in"
import { homeContent } from "@/content/home"
import { siteImages } from "@/lib/images"
import Image from "next/image"

export function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-20">
          <SlideUp>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              {homeContent.team.heading}
            </h2>
            <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
              {homeContent.team.description}
            </p>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
          {homeContent.team.chefs.map((chef, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] w-full overflow-hidden mb-6 bg-muted rounded-sm">
                  {/* Subtle zoom on hover */}
                  <Image
                    src={siteImages.home.chefs[index]}
                    alt={chef.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {chef.name}
                  </h3>
                  <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
                    {chef.title}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
