import {
  HeroCinematic,
  BrandStatement,
  StatisticsGrid,
  TheExperienceIntro,
  ServiceHighlights,
  FeaturedDestinations,
  TestimonialShowcase,
  MenuPhilosophy,
  SignatureDishGallery,
  TheProcess,
  PartnerVenues,
  PressAndMedia,
  LeadDesignerProfile,
  VideoInterlude,
  FAQTeaser,
  FinalCallToAction
} from "@/components/home";
import { homeContent } from "@/content/home";

export const metadata = {
  title: homeContent.seo.title,
  description: homeContent.seo.description
};

export default function Home() {
  return (
    <>
      <HeroCinematic />
      <BrandStatement />
      <StatisticsGrid />
      <TheExperienceIntro />
      <ServiceHighlights />
      <FeaturedDestinations />
      <TestimonialShowcase />
      <MenuPhilosophy />
      <SignatureDishGallery />
      <TheProcess />
      <PartnerVenues />
      <PressAndMedia />
      <LeadDesignerProfile />
      <VideoInterlude />
      <FAQTeaser />
      <FinalCallToAction />
    </>
  );
}
