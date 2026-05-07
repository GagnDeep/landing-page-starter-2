import {
  FeaturesHero,
  ServiceIndex,
  DetailSectionWeddingCatering,
  DetailSectionDestinationManagement,
  DetailSectionEventStyling,
  DetailSectionBeverageMixology,
  ServiceInclusions
} from "@/components/features";
import { FinalCallToAction } from "@/components/home";
import { featuresContent } from "@/content/features";

export const metadata = {
  title: featuresContent.seo.title,
  description: featuresContent.seo.description
};

export default function Features() {
  return (
    <>
      <FeaturesHero />
      <ServiceIndex />
      <DetailSectionWeddingCatering />
      <DetailSectionDestinationManagement />
      <DetailSectionEventStyling />
      <DetailSectionBeverageMixology />
      <ServiceInclusions />
      <FinalCallToAction />
    </>
  );
}
