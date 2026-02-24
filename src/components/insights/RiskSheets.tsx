
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const scenarios = [
  {
    id: 'gov-contracts',
    title: 'Government Contracts',
    risk: 'Sovereign immunity and legislative shifts.',
    strategy: 'Utilize ICSID or high-standard international arbitration with explicit immunity waivers.'
  },
  {
    id: 'investor-state',
    title: 'Investor-State Disputes',
    risk: 'Regulatory expropriation or FET violations.',
    strategy: 'Invoke Bilateral Investment Treaties (BITs) to bypass domestic courts entirely.'
  },
  {
    id: 'commercial-supply',
    title: 'Supply Chain Disputes',
    risk: 'Operational downtime due to judicial delay.',
    strategy: 'Expedited arbitration rules with clear performance-based remedies.'
  },
  {
    id: 'jv-breakdown',
    title: 'JV Breakdowns',
    risk: 'Local partner influence in national courts.',
    strategy: 'Offshore arbitration seats (e.g., London, Singapore, or Mauritius) to ensure neutrality.'
  }
];

export default function RiskSheets() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-6 lg:px-12 flex flex-col gap-4">
      {scenarios.map((s) => (
        <motion.div
          key={s.id}
          layout
          onClick={() => setActiveId(activeId === s.id ? null : s.id)}
          className={cn(
            "relative p-8 border cursor-pointer transition-all duration-500 overflow-hidden group",
            activeId === s.id ? "bg-primary text-white border-primary" : "bg-white hover:border-accent"
          )}
        >
          <div className="flex justify-between items-center relative z-10">
            <div className="space-y-1">
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest",
                activeId === s.id ? "text-accent" : "text-muted-foreground"
              )}>Scenario Analysis</span>
              <h3 className="text-2xl font-headline font-bold">{s.title}</h3>
            </div>
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all",
              activeId === s.id ? "bg-accent text-primary rotate-45" : "bg-secondary text-primary group-hover:bg-accent"
            )}>
              <Plus className="w-6 h-6" />
            </div>
          </div>

          <AnimatePresence>
            {activeId === s.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="relative z-10 pt-8 grid grid-cols-1 md:grid-cols-2 gap-12"
              >
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3" /> Core Risk
                  </h4>
                  <p className="text-lg text-primary-foreground/80 leading-relaxed font-light">{s.risk}</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Recommended Strategy</h4>
                  <p className="text-lg text-white font-medium leading-relaxed">{s.strategy}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
