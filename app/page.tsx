import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { ValueProp } from "@/components/home/ValueProp";
import { FeaturedCakes } from "@/components/home/FeaturedCakes";
import { FeaturedGifts } from "@/components/home/FeaturedGifts";
import { NightRescue } from "@/components/home/NightRescue";
import { Testimonials } from "@/components/home/Testimonials";
import { InteractiveTeaser } from "@/components/home/InteractiveTeaser";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Location } from "@/components/home/Location";
import { FaqSnippets } from "@/components/home/FaqSnippets";
import { BlogTeaser } from "@/components/home/BlogTeaser";
import { Newsletter } from "@/components/home/Newsletter";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { SecondaryCTA } from "@/components/home/SecondaryCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ValueProp />
      <FeaturedCakes />
      <FeaturedGifts />
      <NightRescue />
      <Testimonials />
      <InteractiveTeaser />
      <AboutTeaser />
      <Location />
      <FaqSnippets />
      <BlogTeaser />
      <Newsletter />
      <InstagramFeed />
      <SecondaryCTA />
    </>
  );
}
