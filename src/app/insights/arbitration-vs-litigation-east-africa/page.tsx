
import React from 'react';
import { Metadata } from 'next';
import EditorialHero from '@/components/insights/EditorialHero';
import ForumSelector from '@/components/insights/ForumSelector';
import ComparisonStage from '@/components/insights/ComparisonStage';
import ContextTimeline from '@/components/insights/ContextTimeline';
import RiskSheets from '@/components/insights/RiskSheets';
import StrategicTakeaway from '@/components/insights/StrategicTakeaway';
import BentoRelated from '@/components/insights/BentoRelated';
import FinalCTA from '@/components/practice-area/FinalCTA';

export const metadata: Metadata = {
  title: "Arbitration vs Litigation in East Africa | G'Adroit Attorneys",
  description: 'Comparing the efficiency and enforceability of dispute resolution mechanisms in East Africa.',
};

export default function ArbitrationVsLitigationPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. Editorial Hero Stage with "Scales of Justice" Visual */}
      <EditorialHero 
        title="Arbitration vs Litigation in East Africa: Making the Choice"
        subtitle="Choosing the right forum is a strategic decision that defines the safety of your assets."
        category="Disputes"
        author="David Mwangi"
        date="Aug 05, 2024"
        readingTime="15 min read"
      />

      {/* 2. Forum Selector (Segmented Control) */}
      <section className="py-24 bg-white border-b">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
          <h2 className="text-3xl font-headline font-bold text-primary mb-4">Strategic Forum Comparison</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Select a forum to analyze its performance across key commercial metrics in the region.</p>
        </div>
        <ForumSelector />
      </section>

      {/* 3. Side-by-Side Comparison Stage */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary">Direct Advantages</h2>
            <div className="h-1 w-12 bg-accent mt-4"></div>
          </div>
          <ComparisonStage />
        </div>
      </section>

      {/* 4. Regional Context Timeline */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-headline font-bold mb-6">Regional Lifecycle</h2>
            <p className="text-primary-foreground/60">How disputes actually progress through East African institutions.</p>
          </div>
          <ContextTimeline />
        </div>
      </section>

      {/* 5. Risk Consideration Sheets */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mb-16">
          <h2 className="text-3xl font-headline font-bold text-primary">Scenario-Specific Risks</h2>
          <p className="text-muted-foreground mt-4">Tailoring the forum to the nature of the dispute.</p>
        </div>
        <RiskSheets />
      </section>

      {/* 6. Strategic Takeaway Panel */}
      <StrategicTakeaway />

      {/* 7. Related Insights (Bento) */}
      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary">Related Strategic Intelligence</h2>
            <div className="h-1 w-12 bg-accent mt-4"></div>
          </div>
          <BentoRelated />
        </div>
      </section>

      {/* 8. Final CTA */}
      <FinalCTA />
    </div>
  );
}
