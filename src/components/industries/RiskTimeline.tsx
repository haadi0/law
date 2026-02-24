
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const RISK_ITEMS = [
  {
    title: 'Market Entry Risk',
    content: 'Navigating local content laws and selection of optimal investment vehicles (TIC vs EPZ) to ensure capital protection.',
    bullets: ['Entity classification audits', 'Local content planning', 'Incentive qualification']
  },
  {
    title: 'Licensing & Approvals',
    content: 'Managing multi-agency regulatory hurdles to ensure zero downtime in operational startup.',
    bullets: ['Sector-specific permits', 'Environmental certifications', 'Strategic liaison']
  },
  {
    title: 'Local Partnership Risks',
    content: 'Mitigating friction in local joint ventures through ironclad shareholder agreements and governance protocols.',
    bullets: ['Governance design', 'Exit mechanism strategy', 'IP protection']
  },
  {
    title: 'Employment Compliance',
    content: 'Balancing international HR standards with strict Tanzanian labor laws and work permit requirements.',
    bullets: ['Expatriate work permits', 'Labor union negotiation', 'Compliance audits']
  },
  {
    title: 'Dispute Exposure',
    content: 'Securing robust arbitration clauses to protect assets from judicial volatility in the regional courts.',
    bullets: ['BIT utilization', 'Neutral forum selection', 'Enforcement strategy']
  },
  {
    title: 'Cross-Border Structuring',
    content: 'Optimizing corporate structures for tax efficiency and seamless capital repatriation across East Africa.',
    bullets: ['EAC expansion advisory', 'Tax treaty utilization', 'Capital repatriation']
  }
];

export default function RiskTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side - Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-40 space-y-8">
              <div className="h-1 w-12 bg-accent"></div>
              <h2 className="text-5xl md:text-6xl font-headline font-bold text-primary leading-tight">
                Where Investors <br /><span className="text-accent italic font-normal">Face Legal Risk.</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Strategic friction points require localized authority and predictive legal engineering.
              </p>
            </div>
          </div>

          {/* Right Side - Vertical Timeline Rail */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {RISK_ITEMS.map((item, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "border transition-all duration-500",
                    activeIndex === idx ? "bg-white border-accent shadow-xl" : "bg-transparent border-primary/5 hover:border-primary/10"
                  )}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                    className="w-full p-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-8">
                      <span className={cn(
                        "text-3xl font-headline font-bold transition-colors",
                        activeIndex === idx ? "text-accent" : "text-primary/20"
                      )}>
                        0{idx + 1}
                      </span>
                      <h3 className={cn(
                        "text-2xl font-headline font-bold transition-colors",
                        activeIndex === idx ? "text-primary" : "text-primary/60 group-hover:text-primary"
                      )}>
                        {item.title}
                      </h3>
                    </div>
                    <ChevronDown className={cn(
                      "w-6 h-6 transition-transform duration-500",
                      activeIndex === idx ? "rotate-180 text-accent" : "text-primary/20"
                    )} />
                  </button>

                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                      >
                        <div className="px-24 pb-12 space-y-8">
                          <p className="text-lg text-muted-foreground leading-relaxed font-light">
                            {item.content}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {item.bullets.map((bullet, i) => (
                              <div key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-primary">
                                <AlertTriangle className="w-3 h-3 text-accent" /> {bullet}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
