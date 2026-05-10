import React from 'react';
import type { Metadata } from 'next';
import { featuresSEO } from '@/content/features';
import { FeaturesHero } from '@/components/features/FeaturesHero';
import { IngredientFocus } from '@/components/features/IngredientFocus';
import { TechniquesAndGuarantees } from '@/components/features/TechniquesAndGuarantees';
import { FeatureDetails } from '@/components/features/FeatureDetails';

export const metadata: Metadata = {
  title: featuresSEO.title,
  description: featuresSEO.description,
};

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <IngredientFocus />
      <TechniquesAndGuarantees />
      <FeatureDetails />
    </>
  );
}
