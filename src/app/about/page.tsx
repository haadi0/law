
import React from 'react';
import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import FirmOverview from '@/components/about/FirmOverview';
import ApproachPillars from '@/components/about/ApproachPillars';
import TanzaniaAdvantage from '@/components/about/TanzaniaAdvantage';
import LeadershipSection from '@/components/about/LeadershipSection';
import FinalCTA from '@/components/practice-area/FinalCTA';

export const metadata: Metadata = {
  title: "About the Firm | G'Adroit Attorneys",
  description: 'Precision, authority, and international standard legal counsel rooted in Tanzania.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero - Editorial Split */}
      <AboutHero />

      {/* 2. Firm Overview - Sticky Side-Rail */}
      <FirmOverview />

      {/* 3. Approach Pillars - Stacked Sheets */}
      <ApproachPillars />

      {/* 4. Why Tanzania - Timeline Rail */}
      <TanzaniaAdvantage />

      {/* 5. Leadership - Profile Rails */}
      <LeadershipSection />

      {/* 6. Final CTA */}
      <FinalCTA />
    </div>
  );
}
