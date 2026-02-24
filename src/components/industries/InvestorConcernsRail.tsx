
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  {
    id: 'entry',
    label: 'Market Entry & Structuring',
    bullets: [
      'Selection of TIC vs EPZ vehicles.',
      'Optimization of initial capital importation.',
      'Local content requirement auditing.'
    ]
  },
  {
    id: 'approvals',
    label: 'Regulatory Approvals',
    bullets: [
      'Multi-agency licensing coordination.',
      'Sector-specific permit acquisition.',
      'Predictable government liaison.'
    ]
  },
  {
    id: 'hr',
    label: 'HR & Workforce Compliance',
    bullets: [
      'Expatriate work permit management.',
      'Local labor union negotiation.',
      'Standardized employment frameworks.'
    ]
  },
  {
    id: 'contract',
    label: 'Contract Risk & Enforcement',
    bullets: [
      'Ironclad arbitration clause design.',
      'Force Majeure optimization for regional risks.',
      'Operational asset security.'
    ]
  },
  {
    id: 'dispute',
    label: 'Dispute Protection',
    bullets: [
      'International treaty utilization (BITs).',
      'Neutral forum selection (LCIA, ICSID).',
      'Regional judgment enforcement.'
    ]
  }
];

export default function InvestorConcernsRail() {
  const [activeId, setActiveId] = useState(items[0].id);

  const activeItem = items.find(i => i.id === activeId);

  return (
    <section className="py-16 md:py-32 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 md:mb-24 space-y-4 md:space-y-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-headline font-bold leading-tight">
            Cross-Industry <br /><span className="text-accent italic">Investor Concerns.</span>
          </h2>
          <p className="text-primary-foreground/60 text-base md:text-lg font-light leading-relaxed">
            Universal friction points identified by our senior partners.
          </p>
        </div>

        {/* Responsive Grid - Stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-32 items-start">
          
          {/* Timeline Rail - Becomes horizontal scroll or list on mobile */}
          <div className="lg:col-span-6 space-y-8 md:space-y-12 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 overflow-hidden hidden lg:block">
              <motion.div 
                animate={{ y: items.findIndex(i => i.id === activeId) * 100 + '%' }}
                className="w-full h-1/5 bg-accent shadow-[0_0_15px_rgba(212,175,55,1)]"
              />
            </div>

            <div className="lg:pl-12 space-y-6 md:space-y-10 flex flex-col">
              {items.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "relative cursor-pointer transition-all duration-500 group border-l-2 lg:border-l-0 pl-6 lg:pl-0",
                    activeId === item.id 
                      ? "opacity-100 border-accent" 
                      : "opacity-30 hover:opacity-50 border-white/10"
                  )}
                >
                  <div className={cn(
                    "absolute -left-[5px] lg:-left-12 top-2 lg:top-3 w-2 h-2 rounded-full transition-all duration-300 hidden lg:block",
                    activeId === item.id ? "bg-accent scale-150" : "bg-white"
                  )}></div>
                  <h3 className="text-lg md:text-2xl font-headline font-bold group-hover:text-accent transition-colors">
                    {item.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Panel - Stacks below rail on mobile */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 md:p-12 lg:p-20 relative min-h-[300px]">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeId}
                 initial={{ opacity: 0, x: 10 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -10 }}
                 transition={{ duration: 0.3 }}
                 className="space-y-6 md:space-y-8"
               >
                 <div className="flex items-center gap-3 text-accent">
                   <Info className="w-4 h-4 md:w-5 md:h-5" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Strategic Insight</span>
                 </div>
                 <h4 className="text-2xl md:text-3xl font-headline font-bold leading-tight">{activeItem?.label}</h4>
                 <ul className="space-y-4 md:space-y-6">
                   {activeItem?.bullets.map((bullet, i) => (
                     <li key={i} className="flex items-start gap-3 text-primary-foreground/70 text-base md:text-lg font-light leading-relaxed">
                       <span className="text-accent font-bold mt-1">→</span>
                       <span>{bullet}</span>
                     </li>
                   ))}
                 </ul>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
