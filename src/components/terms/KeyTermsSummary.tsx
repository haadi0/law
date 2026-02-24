
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const summaryItems = [
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'scope', label: 'Scope of Work' },
  { id: 'fees', label: 'Fees & Billing' },
  { id: 'conflicts', label: 'Conflicts of Interest' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'termination', label: 'Termination' },
];

export default function KeyTermsSummary() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-white border-b sticky top-20 z-30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="shrink-0">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40">Quick Navigation</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {summaryItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-5 py-2 bg-secondary/30 border border-primary/5 hover:border-accent hover:bg-white text-[11px] font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-all rounded-none"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
