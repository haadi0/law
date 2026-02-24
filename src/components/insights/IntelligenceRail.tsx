
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ChevronRight, FileText, Shield } from 'lucide-react';
import Link from 'next/link';

const sections = [
  { id: 'intro', label: 'Briefing Context' },
  { id: 'mechanism', label: 'Treaty Mechanisms' },
  { id: 'expropriation', label: 'Expropriation Defense' },
  { id: 'arbitration', label: 'Arbitration Access' },
  { id: 'enforcement', label: 'Enforcement Logic' },
];

export default function IntelligenceRail() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -60% 0%' }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-32 space-y-12 pr-8 border-r border-primary/5">
      {/* Outline */}
      <div className="space-y-6">
        <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40 flex items-center gap-2">
          <FileText className="w-3 h-3" /> Briefing Outline
        </h3>
        <nav className="flex flex-col gap-4">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 ${
                activeSection === s.id ? 'text-accent' : 'text-primary/60 hover:text-primary'
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full transition-all ${activeSection === s.id ? 'bg-accent scale-125' : 'bg-primary/10'}`}></div>
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Quick Take */}
      <div className="p-6 bg-primary/5 border border-primary/10 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
          <Shield className="w-3 h-3 text-accent" /> Quick Take
        </h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Bilateral Investment Treaties (BITs) are the strongest legal shielding for international capital, bypassing local courts to offer direct recourse to global arbitration.
        </p>
      </div>

      {/* Risk Indicators */}
      <div className="space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
          <AlertTriangle className="w-3 h-3 text-destructive" /> Key Risk Indicators
        </h4>
        <div className="space-y-3">
          {['Regulatory Volatility', 'Asset Seizure', 'Judicial Delay'].map((risk) => (
            <div key={risk} className="flex items-center justify-between text-[10px] font-bold text-primary/60 border-b border-primary/5 pb-2">
              <span>{risk}</span>
              <span className="text-destructive">Critical</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button className="w-full bg-primary text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
        Inquire <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
