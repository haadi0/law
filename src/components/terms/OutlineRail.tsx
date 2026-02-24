
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ListOrdered, ChevronRight } from 'lucide-react';

const sections = [
  { id: 'scope', label: 'Scope of Engagement' },
  { id: 'authority', label: 'Instructions & Authority' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'conflicts', label: 'Conflicts of Interest' },
  { id: 'fees', label: 'Fees & Billing' },
  { id: 'responsibilities', label: 'Client Responsibilities' },
  { id: 'communications', label: 'Communications' },
  { id: 'retention', label: 'Document Retention' },
  { id: 'third-party', label: 'Third-Party Services' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'termination', label: 'Termination' },
  { id: 'governing-law', label: 'Governing Law' },
];

export default function OutlineRail() {
  const [activeSection, setActiveSection] = useState('scope');

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
    <div className="sticky top-48 space-y-12 pr-8 border-r border-primary/5">
      <div className="space-y-6">
        <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40 flex items-center gap-2">
          <ListOrdered className="w-3 h-3" /> Engagement Outline
        </h3>
        <nav className="flex flex-col gap-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 ${
                activeSection === s.id ? 'text-accent' : 'text-primary/60 hover:text-primary'
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full transition-all ${activeSection === s.id ? 'bg-accent scale-125 shadow-[0_0_8px_rgba(212,175,55,0.5)]' : 'bg-primary/10'}`}></div>
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="p-6 bg-primary text-white space-y-4">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent">Strategic Note</h4>
        <p className="text-[10px] text-primary-foreground/40 leading-relaxed font-light">
          Our terms are designed to facilitate high-stakes investment and dispute resolution with absolute regulatory clarity.
        </p>
      </div>

      <button className="w-full bg-accent text-accent-foreground py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group">
        Inquire <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
