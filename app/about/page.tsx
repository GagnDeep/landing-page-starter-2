import {
  AboutHero,
  OurStory,
  HeritageTimeline,
  TheFounders,
  OurValues,
  TeamGallery,
  PhilosophyStatement
} from "@/components/about";
import { FinalCallToAction } from "@/components/home";
import { aboutContent } from "@/content/about";

export const metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description
};

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <HeritageTimeline />
      <TheFounders />
      <OurValues />
      <TeamGallery />
      <PhilosophyStatement />
      <FinalCallToAction />
    </>
  );
}
