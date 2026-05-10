import React from 'react';
import type { Metadata } from 'next';
import { aboutSEO } from '@/content/about';
import { AboutHero } from '@/components/about/AboutHero';
import { TheBeginning } from '@/components/about/TheBeginning';
import { PhilosophyAndTeam } from '@/components/about/PhilosophyAndTeam';

export const metadata: Metadata = {
  title: aboutSEO.title,
  description: aboutSEO.description,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <TheBeginning />
      <PhilosophyAndTeam />
    </>
  );
}
