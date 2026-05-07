import { RevealText } from "@/components/visuals/reveal-text"
import { FadeIn } from "@/components/visuals/fade-in"
import { homeContent } from "@/content/home"
import { siteImages } from "@/lib/images"
import Image from "next/image"

export function TestimonialSection() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      {/* Background Image with heavy blur and overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteImages.home.testimonialBackground}
          alt="Luxury Event Ambient Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 text-center text-white">
        <div className="mb-12">
           <svg className="w-12 h-12 mx-auto text-accent opacity-80" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
        </div>

        <RevealText
          as="blockquote"
          text={`"${homeContent.testimonial.quote}"`}
          className="font-heading text-3xl md:text-5xl lg:text-6xl italic leading-tight mb-12 text-white/90"
        />

        <FadeIn delay={0.8}>
          <cite className="not-italic flex flex-col items-center gap-2">
            <span className="font-sans text-sm tracking-widest uppercase text-accent font-semibold">
              {homeContent.testimonial.author}
            </span>
            <span className="font-sans text-xs tracking-widest uppercase text-white/50">
              {homeContent.testimonial.event}
            </span>
          </cite>
        </FadeIn>
      </div>
    </section>
  )
}