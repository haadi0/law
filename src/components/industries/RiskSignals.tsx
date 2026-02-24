
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Activity, FileText, Scale, Globe } from 'lucide-react';

const signals = [
  { label: 'Licensing Intelligence', level: 'Critical', icon: Target },
  { label: 'Land Rights Verification', level: 'Strategic', icon: Shield },
  { label: 'Fiscal Stability', level: 'High', icon: Activity },
  { label: 'Labor Compliance', level: 'Operational', icon: FileText },
  { label: 'JV Governance', level: 'Critical', icon: Scale },
  { label: 'Regional Recourse', level: 'Elite', icon: Globe },
];

export default function RiskSignals() {
  return (
    <section className="py-20 border-y bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/40">Real-Time Risk Signals</span>
          <div className="h-1 w-12 bg-accent/20"></div>
        </div>
      </div>
      
      {/* Horizontal Stream */}
      <div className="flex gap-6 overflow-x-auto pb-8 px-6 lg:px-12 snap-x snap-mandatory no-scrollbar">
        {signals.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, borderColor: 'hsl(var(--accent))' }}
            className="flex-shrink-0 snap-center bg-white border border-primary/5 p-8 w-64 space-y-6 transition-all duration-700 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-accent/5 flex items-center justify-center text-accent">
                <s.icon className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-2 py-0.5">{s.level}</span>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-lg font-headline font-bold text-primary leading-tight">
                {s.label}
              </h4>
              <div className="h-[1px] w-8 bg-accent/30 group-hover:w-full transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
