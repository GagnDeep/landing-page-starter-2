import { AboutHero, HeritageStory, CoreValues, MeetTheTeam, KitchenSourcing } from "@/components/about";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata = {
  title: "About Us | Harbhajan's Catering Patiala",
  description: "Discover the multi-generational story behind Harbhajan's Catering. Learn about our heritage, core values, and the family dedicated to bringing authentic Punjabi flavors to your events.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <HeritageStory />
      <CoreValues />
      <MeetTheTeam />
      <KitchenSourcing />
      <FinalCta />
    </div>
  );
}
