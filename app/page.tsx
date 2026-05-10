import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBanner } from '@/components/home/TrustBanner';
import { IntroEditorial } from '@/components/home/IntroEditorial';
import { SignatureSweets } from '@/components/home/SignatureSweets';
import { BespokeCakes } from '@/components/home/BespokeCakes';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { Testimonials } from '@/components/home/Testimonials';
import { IngredientsHighlight } from '@/components/home/IngredientsHighlight';
import { FeaturedCollections } from '@/components/home/FeaturedCollections';
import { VisitUs } from '@/components/home/VisitUs';
import { Newsletter } from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBanner />
      <IntroEditorial />
      <SignatureSweets />
      <BespokeCakes />
      <ProcessTimeline />
      <Testimonials />
      <IngredientsHighlight />
      <FeaturedCollections />
      <VisitUs />
      <Newsletter />
    </>
  );
}
