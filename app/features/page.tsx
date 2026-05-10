import { FeaturesHero, FeatureCategories, ComparisonTable, FeaturesCta } from "@/components/features";

export const metadata = {
  title: "Our Services & Features | Harbhajan's Catering Patiala",
  description: "Explore the premium features of Harbhajan's Catering. From pure vegetarian live counters to impeccably trained waitstaff.",
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FeaturesHero />
      <FeatureCategories />
      <ComparisonTable />
      <FeaturesCta />
    </div>
  );
}
