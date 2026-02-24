
import React from 'react';
import { Metadata } from 'next';
import TermsHero from '@/components/terms/TermsHero';
import KeyTermsSummary from '@/components/terms/KeyTermsSummary';
import OutlineRail from '@/components/terms/OutlineRail';
import ExpandableTerms from '@/components/terms/ExpandableTerms';
import NextStepsStrip from '@/components/terms/NextStepsStrip';
import FinalCTA from '@/components/practice-area/FinalCTA';

export const metadata: Metadata = {
  title: "Terms of Engagement | G'Adroit Attorneys",
  description: 'The professional standards and contractual framework governing our legal partnerships.',
};

export default function TermsOfEngagementPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. Editorial Hero */}
      <TermsHero />

      {/* 2. Key Terms Summary Panel */}
      <KeyTermsSummary />

      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* 3. Sticky Outline Rail (Desktop) */}
          <aside className="lg:w-1/4 hidden lg:block">
            <OutlineRail />
          </aside>

          {/* 4. Terms Content (Modern Layout) */}
          <main className="lg:w-3/4">
            <ExpandableTerms />
            
            {/* 5. Next Steps Strip */}
            <div className="mt-24 pt-12 border-t">
              <NextStepsStrip />
            </div>
          </main>
        </div>
      </div>

      {/* 6. Final CTA */}
      <FinalCTA />
    </div>
  );
}
