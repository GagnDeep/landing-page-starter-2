import React from "react";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqContentArea } from "@/components/faq/FaqContentArea";
import { FaqCTA } from "@/components/faq/FaqCTA";

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqContentArea />
      <FaqCTA />
    </>
  );
}
