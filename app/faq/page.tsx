import {
  FAQHero,
  CategoryJumpLinks,
  AccordionSection,
  StillNeedHelp
} from "@/components/faq";
import { faqContent } from "@/content/faq";

export const metadata = {
  title: faqContent.seo.title,
  description: faqContent.seo.description
};

export default function FAQ() {
  return (
    <>
      <FAQHero />
      <CategoryJumpLinks />
      <div className="py-8 divide-y divide-border/20">
        <AccordionSection
          id={faqContent.accordionSectionCulinary.id}
          headline={faqContent.accordionSectionCulinary.headline}
          questions={faqContent.accordionSectionCulinary.questions}
        />
        <AccordionSection
          id={faqContent.accordionSectionLogistics.id}
          headline={faqContent.accordionSectionLogistics.headline}
          questions={faqContent.accordionSectionLogistics.questions}
        />
        <AccordionSection
          id={faqContent.accordionSectionBooking.id}
          headline={faqContent.accordionSectionBooking.headline}
          questions={faqContent.accordionSectionBooking.questions}
        />
      </div>
      <StillNeedHelp />
    </>
  );
}
