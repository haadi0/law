
'use client';

import React, { useEffect, useState } from 'react';
import { FileText, ChevronRight } from 'lucide-react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'collection', label: 'Information Collection' },
  { id: 'usage', label: 'Usage Methodology' },
  { id: 'legal-basis', label: 'Legal Basis' },
  { id: 'cookies', label: 'Cookies & Analytics' },
  { id: 'sharing', label: 'Sharing & Disclosure' },
  { id: 'transfers', label: 'International Transfers' },
  { id: 'retention', label: 'Data Retention' },
  { id: 'security', label: 'Data Security' },
  { id: 'rights', label: 'Your Rights' },
  { id: 'children', label: 'Children’s Privacy' },
  { id: 'changes', label: 'Policy Evolution' },
  { id: 'contact', label: 'Contact Information' },
];

export default function OutlineRail() {
  const [activeSection, setActiveSection] = useState('overview');

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
      <div className="space-y-6">
        <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40 flex items-center gap-2">
          <FileText className="w-3 h-3" /> Document Outline
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

      <div className="p-6 bg-accent/5 border border-accent/20 space-y-4">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary">Confidentiality Protocol</h4>
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          G'Adroit Attorneys adheres to absolute attorney-client privilege. Your data is treated with the highest level of professional discretion.
        </p>
      </div>

      <button className="w-full bg-primary text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
        Inquire <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
