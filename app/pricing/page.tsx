import React from "react";
import { PricingHero } from "@/components/pricing/PricingHero";
import { CakeTiers } from "@/components/pricing/CakeTiers";
import { StandardMenu } from "@/components/pricing/StandardMenu";
import { LogisticsAndPolicies } from "@/components/pricing/LogisticsAndPolicies";
import { PricingCTA } from "@/components/pricing/PricingCTA";

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <CakeTiers />
      <StandardMenu />
      <LogisticsAndPolicies />
      <PricingCTA />
    </>
  );
}
