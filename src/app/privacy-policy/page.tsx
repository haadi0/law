
import React from 'react';
import { Metadata } from 'next';
import PolicyHero from '@/components/privacy/PolicyHero';
import OutlineRail from '@/components/privacy/OutlineRail';
import PolicyContent from '@/components/privacy/PolicyContent';
import FinalCTA from '@/components/practice-area/FinalCTA';

export const metadata: Metadata = {
  title: "Privacy Policy | G'Adroit Attorneys",
  description: 'Our commitment to data protection, client confidentiality, and transparent information handling.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. Editorial Hero */}
      <PolicyHero />

      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* 2. Sticky Outline Rail (Desktop) */}
          <aside className="lg:w-1/4 hidden lg:block">
            <OutlineRail />
          </aside>

          {/* 3. Policy Content (Modern + Readable) */}
          <main className="lg:w-3/4">
            <PolicyContent />
          </main>
        </div>
      </div>

      {/* 4. Final CTA */}
      <FinalCTA />
    </div>
  );
}
