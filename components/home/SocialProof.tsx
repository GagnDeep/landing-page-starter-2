import React from "react";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { homeContent } from "@/content/home";

export function SocialProof() {
  const items = homeContent.socialProof.items;

  return (
    <section className="border-y border-border">
      <LogoMarquee items={items} speed="normal" />
    </section>
  );
}
