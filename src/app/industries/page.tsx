
import React from 'react';
import { Metadata } from 'next';
import IndustryHero from '@/components/industries/IndustryHero';
import IndustryFilter from '@/components/industries/IndustryFilter';
import IndustryBentoGrid from '@/components/industries/IndustryBentoGrid';
import RiskTimeline from '@/components/industries/RiskTimeline';
import RegionalStrategy from '@/components/industries/RegionalStrategy';
import FinalCTA from '@/components/industries/FinalCTA';

export const metadata: Metadata = {
  title: "Industries Served | G'Adroit Attorneys",
  description: 'Deep sector expertise across energy, mining, infrastructure, and the core growth industries of East Africa.',
};

export default function IndustriesPage() {
  return (
    <div className="pt-20 min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero - EXACTLY UNCHANGED */}
      <IndustryHero />

      {/* 2. Industry Intelligence Filter - Animated Pill System */}
      <IndustryFilter />

      {/* 3. Industry Bento Grid - Triggering Detail Panels */}
      <IndustryBentoGrid />

      {/* 4. Risk Timeline - Sticky Split Layout */}
      <RiskTimeline />

      {/* 5. Regional Strategy - Visual Authority Block */}
      <RegionalStrategy />

      {/* 6. Final CTA - Navy + Gold Border Animation */}
      <FinalCTA />
    </div>
  );
}
