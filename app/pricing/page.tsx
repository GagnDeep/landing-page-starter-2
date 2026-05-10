import { PricingHero, PricingTiers, AddonsAndStandards, PricingLogistics } from "@/components/pricing";
import { FeaturesCta } from "@/components/features";

export const metadata = {
  title: "Catering Packages & Pricing | Harbhajan's Catering Patiala",
  description: "Transparent, premium catering packages for your events in Patiala. Choose from The Classic Feast, The Royal Punjabi, or The Imperial Banquet.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PricingHero />
      <PricingTiers />
      <AddonsAndStandards />
      <PricingLogistics />
      <FeaturesCta />
    </div>
  );
}
