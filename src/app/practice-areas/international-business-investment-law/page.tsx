import React from 'react';
import { Metadata } from 'next';
import HeroSection from '@/components/practice-area/HeroSection';
import BentoScenarios from '@/components/practice-area/BentoScenarios';
import ProcessTimeline from '@/components/practice-area/ProcessTimeline';
import RiskComparison from '@/components/practice-area/RiskComparison';
import AuthorityStrip from '@/components/practice-area/AuthorityStrip';
import FinalCTA from '@/components/practice-area/FinalCTA';

export const metadata: Metadata = {
  title: "International Business & Investment Law | G'Adroit Attorneys",
  description: 'Precision market entry strategies and asset protection for international investors in Tanzania and East Africa.',
};

export default function InternationalBusinessPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* (1) Hero - Updated to match consistent practice area styling */}
      <HeroSection />

      {/* (2) Authority Strip - Interactive Marquee */}
      <AuthorityStrip />

      {/* (3) Investor Scenarios - Bento Grid + Strategy Drawers */}
      <BentoScenarios />

      {/* (4) Strategic Path - Vertical Process Rail */}
      <ProcessTimeline />

      {/* (5) Risk Mitigation - Split Comparison Panel */}
      <RiskComparison />

      {/* (6) Final CTA - Elite Conversion Panel */}
      <FinalCTA />
    </div>
  );
}
