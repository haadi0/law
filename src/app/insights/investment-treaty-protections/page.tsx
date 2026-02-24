
import React from 'react';
import { Metadata } from 'next';
import EditorialHero from '@/components/insights/EditorialHero';
import IntelligenceRail from '@/components/insights/IntelligenceRail';
import ArticleContent from '@/components/insights/ArticleContent';
import BentoRelated from '@/components/insights/BentoRelated';
import FinalCTA from '@/components/practice-area/FinalCTA';

export const metadata: Metadata = {
  title: "Investment Treaty Protections | Insights | G'Adroit Attorneys",
  description: 'How bilateral investment treaties provide a safety net for foreign direct investment in East Africa.',
};

export default function InvestmentTreatyArticlePage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. Editorial Hero Stage */}
      <EditorialHero 
        title="Investment Treaty Protections: Securing Your Assets"
        subtitle="How bilateral investment treaties can provide a safety net for foreign direct investment."
        category="Investment"
        author="Aisha Juma"
        date="Sep 12, 2024"
        readingTime="12 min read"
      />

      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* 2. Sticky Intelligence Rail */}
          <aside className="lg:w-1/4 hidden lg:block">
            <IntelligenceRail />
          </aside>

          {/* 3. Article Body (Split Editorial) */}
          <main className="lg:w-3/4">
            <ArticleContent />
          </main>
        </div>
      </div>

      {/* 4. Related Insights (Bento) */}
      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary">Related Strategic Insights</h2>
            <div className="h-1 w-12 bg-accent mt-4"></div>
          </div>
          <BentoRelated />
        </div>
      </section>

      {/* 5. Final CTA */}
      <FinalCTA />
    </div>
  );
}
