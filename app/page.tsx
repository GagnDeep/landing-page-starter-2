import {
  HeroSection,
  TrustBar,
  PhilosophySection,
  CulinaryHeritage,
  ServicesOverview,
  GallerySection,
  Testimonials,
  MenuTeaser,
  BehindTheScenes,
  ProcessSection,
  VenuesSection,
  SustainabilitySection,
  FaqTeaser,
  PressMedia,
  BlogTeaser,
  VideoTeaser,
  CtaSection,
  Newsletter,
  Footer
} from "@/components/home"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TrustBar />
      <PhilosophySection />
      <CulinaryHeritage />
      <ServicesOverview />
      <GallerySection />
      <Testimonials />
      <MenuTeaser />
      <BehindTheScenes />
      <ProcessSection />
      <VenuesSection />
      <SustainabilitySection />
      <FaqTeaser />
      <PressMedia />
      <BlogTeaser />
      <VideoTeaser />
      <CtaSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
