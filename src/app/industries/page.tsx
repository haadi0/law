
'use client';

import React, { useState } from 'react';
import IndustryHero from '@/components/industries/IndustryHero';
import IndustryFilter from '@/components/industries/IndustryFilter';
import IndustryBentoGrid from '@/components/industries/IndustryBentoGrid';
import RiskTimeline from '@/components/industries/RiskTimeline';
import RegionalStrategy from '@/components/industries/RegionalStrategy';
import FinalCTA from '@/components/industries/FinalCTA';

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState('All Sectors');

  return (
    <div className="pt-20 min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero - UNCHANGED */}
      <IndustryHero />

      {/* 2. Industry Intelligence Filter - State managed here for sync */}
      <IndustryFilter activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 3. Industry Bento Grid - Responds to activeTab */}
      <IndustryBentoGrid activeTab={activeTab} />

      {/* 4. Risk Timeline */}
      <RiskTimeline />

      {/* 5. Regional Strategy */}
      <RegionalStrategy />

      {/* 6. Final CTA */}
      <FinalCTA />
    </div>
  );
}
