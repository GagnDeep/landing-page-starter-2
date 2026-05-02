import React from "react";
import { homeContent } from "@/content/home";
import {
  Hero,
  BrandEssence,
  SherwaniCollection,
  KurtaCollection,
  MasterTailor,
  Process,
  FabricGallery,
  Testimonials,
  Heritage,
  FAQTeaser,
  Newsletter,
  Location,
  TrustIndicators,
} from "@/components/home";

export const metadata = {
  title: homeContent.seo.title,
  description: homeContent.seo.description,
};

export default function HomePage() {
  return (
    <>
      {/* 2. Hero/Opening Statement */}
      <Hero />

      {/* 3. Brand Essence */}
      <BrandEssence />

      {/* Trust Indicators (Not explicitly numbered but needed for 5.0 rating rep) */}
      <TrustIndicators />

      {/* 4. Featured Collection - Sherwanis */}
      <SherwaniCollection />

      {/* 5. Featured Collection - Kurta Pajamas */}
      <KurtaCollection />

      {/* 6. The Master Tailor */}
      <MasterTailor />

      {/* 7-10. The Process */}
      <Process />

      {/* 11. Fabric Gallery */}
      <FabricGallery />

      {/* 12, 16. Testimonials (Combined) */}
      <Testimonials />

      {/* 15. The Patiala Heritage */}
      <Heritage />

      {/* 17. FAQ Teaser */}
      <FAQTeaser />

      {/* 18. Newsletter */}
      <Newsletter />

      {/* 19. Location */}
      <Location />
    </>
  );
}
