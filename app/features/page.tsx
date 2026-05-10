import React from "react";
import { FeaturesHero } from "@/components/features/FeaturesHero";
import { ServicesGrid } from "@/components/features/ServicesGrid";
import { OrderProcess } from "@/components/features/OrderProcess";
import { FeatureDetails } from "@/components/features/FeatureDetails";
import { FeaturesCTA } from "@/components/features/FeaturesCTA";

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <ServicesGrid />
      <OrderProcess />
      <FeatureDetails />
      <FeaturesCTA />
    </>
  );
}
