import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { TheBeginning } from "@/components/about/TheBeginning";
import { Philosophy } from "@/components/about/Philosophy";
import { TheBakers } from "@/components/about/TheBakers";
import { StoryAndMilestones } from "@/components/about/StoryAndMilestones";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <TheBeginning />
      <Philosophy />
      <TheBakers />
      <StoryAndMilestones />
    </>
  );
}
