import React from 'react';
import type { Metadata } from 'next';
import { pricingSEO } from '@/content/pricing';
import { PricingHero } from '@/components/pricing/PricingHero';
import { MenuSection } from '@/components/pricing/MenuSection';
import { CustomCakePricing } from '@/components/pricing/CustomCakePricing';

export const metadata: Metadata = {
  title: pricingSEO.title,
  description: pricingSEO.description,
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <MenuSection />
      <CustomCakePricing />
    </>
  );
}
