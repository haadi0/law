
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const pillars = [
  {
    id: 'precision',
    title: 'Precision',
    subtitle: 'Absolute Regulatory Clarity',
    content: 'In emerging markets, ambiguity is the primary source of risk. We provide meticulous audits of the regulatory landscape, ensuring your operations are built on a foundation of total compliance.',
    bullets: ['TIC & BRELA alignment', 'Sectoral license mapping', 'Local content verification']
  },
  {
    id: 'risk-mitigation',
    title: 'Risk Mitigation',
    subtitle: 'Foresight as a Service',
    content: 'We identify potential friction points before they become operational hurdles. Our approach involves predictive liaison and the utilization of international treaties to protect your assets.',
    bullets: ['BIT utilization', 'Dispute avoidance strategy', 'Asset protection protocols']
  },
  {
    id: 'commercial-alignment',
    title: 'Commercial Alignment',
    subtitle: 'Law that Drives Growth',
    content: 'Legal counsel must serve the commercial objective. We structure agreements and entities that not only comply with local law but also optimize your operational efficiency and tax position.',
    bullets: ['JV governance design', 'Capital repatriation advisory', 'Tax incentive negotiation']
  }
];

export default function ApproachPillars() {
  const [activeId, setActiveId] = useState<string | null>('precision');

  return (
    <section className="py-32 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20 space-y-4 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary leading-tight">
            The Pillars of <br /><span className="text-accent italic">Our Practice.</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Our approach is built on three fundamental requirements for international standard operations in East Africa.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px]">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              onClick={() => setActiveId(pillar.id)}
              className={cn(
                "relative cursor-pointer overflow-hidden transition-all duration-700 p-8 lg:p-12 flex flex-col justify-between group",
                activeId === pillar.id ? "flex-[3] bg-primary text-white" : "flex-1 bg-white border border-primary/5 hover:border-accent"
              )}
            >
              {/* Background Accent */}
              <div className={cn(
                "absolute top-0 right-0 p-8 text-8xl font-bold opacity-5 leading-none transition-all duration-700",
                activeId === pillar.id ? "text-accent translate-x-4 -translate-y-4" : "text-primary group-hover:text-accent"
              )}>
                {pillar.id === 'precision' ? '01' : pillar.id === 'risk-mitigation' ? '02' : '03'}
              </div>

              <div className="relative z-10 space-y-6">
                <span className={cn(
                  "text-[10px] uppercase tracking-[0.4em] font-bold block mb-4 transition-colors",
                  activeId === pillar.id ? "text-accent" : "text-muted-foreground"
                )}>
                  Pillar {pillars.indexOf(pillar) + 1}
                </span>
                <h3 className={cn(
                  "text-3xl lg:text-4xl font-headline font-bold leading-tight transition-colors",
                  activeId === pillar.id ? "text-white" : "text-primary"
                )}>
                  {pillar.title}
                </h3>
                
                <AnimatePresence>
                  {activeId === pillar.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="space-y-8 pt-8"
                    >
                      <h4 className="text-xl font-headline italic text-accent">{pillar.subtitle}</h4>
                      <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-md">
                        {pillar.content}
                      </p>
                      <ul className="space-y-3">
                        {pillar.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-3 text-sm">
                            <ChevronRight className="w-4 h-4 text-accent" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className={cn(
                "flex items-center gap-4 transition-all duration-700",
                activeId === pillar.id ? "opacity-100" : "opacity-40"
              )}>
                <div className={cn(
                  "w-12 h-[1px] transition-all",
                  activeId === pillar.id ? "bg-accent w-16" : "bg-primary"
                )}></div>
                <span className="text-[10px] uppercase tracking-widest font-bold">Strategy details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
