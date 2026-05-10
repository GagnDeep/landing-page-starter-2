import { HeroSection } from "@/components/home/HeroSection";
import { TrustBanner } from "@/components/home/TrustBanner";
import { IntroSection } from "@/components/home/IntroSection";
import { SignatureDishes } from "@/components/home/SignatureDishes";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { GenerousPromise } from "@/components/home/GenerousPromise";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { ChefPhilosophy } from "@/components/home/ChefPhilosophy";
import { FaqTeaser } from "@/components/home/FaqTeaser";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustBanner />
      <IntroSection />
      <SignatureDishes />
      <ServicesOverview />
      <GenerousPromise />
      <TestimonialsSection />
      <GalleryTeaser />
      <WhyChooseUs />
      <ChefPhilosophy />
      <FaqTeaser />
      <FinalCta />
    </div>
  );
}
