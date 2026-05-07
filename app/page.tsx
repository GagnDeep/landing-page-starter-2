import { HeroSection } from "@/components/home/hero"
import { LegacySection } from "@/components/home/legacy"
import { OfferingsSection } from "@/components/home/offerings"
import { ScaleSection } from "@/components/home/scale"
import { GalleryPreview } from "@/components/home/gallery"
import { TestimonialSection } from "@/components/home/testimonial"
import { ProcessSection } from "@/components/home/process"
import { FeaturedEventSection } from "@/components/home/featured-event"
import { TeamSection } from "@/components/home/team"
import { SensorySection } from "@/components/home/sensory"
import { HeritageSection } from "@/components/home/heritage"
import { FAQPreviewSection } from "@/components/home/faq-preview"
import { FinalCtaSection } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LegacySection />
      <OfferingsSection />
      <ScaleSection />
      <GalleryPreview />
      <TestimonialSection />
      <ProcessSection />
      <FeaturedEventSection />
      <TeamSection />
      <SensorySection />
      <HeritageSection />
      <FAQPreviewSection />
      <FinalCtaSection />
    </>
  )
}
