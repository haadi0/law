
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const signals = [
  { label: 'Licensing Intelligence', level: 'Critical' },
  { label: 'Land Rights Verification', level: 'Strategic' },
  { label: 'Fiscal/Tax Stability', level: 'High' },
  { label: 'Labor Law Compliance', level: 'Operational' },
  { label: 'JV Governance', level: 'Critical' },
  { label: 'Dispute Recourse', level: 'Elite' },
  { label: 'Capital Repatriation', level: 'High' },
];

export default function RiskSignals() {
  return (
    <section className="py-12 md:py-16 border-y bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-8 md:mb-12">
        <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/40 text-center">Sector Risk Signals</h3>
      </div>
      
      {/* Horizontal Snap Scroll - Mobile Focused */}
      <div className="flex gap-4 overflow-x-auto pb-6 px-6 lg:px-12 snap-x snap-mandatory no-scrollbar scroll-smooth">
        {signals.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="flex-shrink-0 snap-center bg-background border p-6 md:p-8 w-56 md:w-64 space-y-3 md:space-y-4 hover:border-accent transition-all duration-500"
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{s.level}</span>
              <div className="w-1 h-1 rounded-full bg-accent"></div>
            </div>
            <h4 className="text-base md:text-lg font-headline font-bold text-primary leading-tight">
              {s.label}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
