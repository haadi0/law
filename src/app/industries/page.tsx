
import React from 'react';
import { Metadata } from 'next';
import IndustryHero from '@/components/industries/IndustryHero';
import IndustryBentoGrid from '@/components/industries/IndustryBentoGrid';
import RiskSignals from '@/components/industries/RiskSignals';
import InvestorConcernsRail from '@/components/industries/InvestorConcernsRail';
import FinalCTA from '@/components/practice-area/FinalCTA';

export const metadata: Metadata = {
  title: "Industries Served | G'Adroit Attorneys",
  description: 'Deep sector expertise across energy, mining, infrastructure, and the core growth industries of East Africa.',
};

export default function IndustriesPage() {
  return (
    <div className="pt-20 min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero - Locked Style, Optimized Spacing */}
      <IndustryHero />

      {/* 2. Bento Industry Tiles + Filter Bar + Intel Drawers */}
      <IndustryBentoGrid />

      {/* 3. Risk Signals - Compact Snap Scroll */}
      <RiskSignals />

      {/* 4. Cross-Industry Investor Concerns - Responsive Timeline Rail */}
      <InvestorConcernsRail />

      {/* 5. Final CTA */}
      <div className="py-12 md:py-24">
        <FinalCTA />
      </div>
    </div>
  );
}
