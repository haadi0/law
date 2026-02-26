
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Specialization, Language } from '@/app/attorneys/page';
import { cn } from '@/lib/utils';

interface AttorneyFiltersProps {
  activeSpec: Specialization;
  setActiveSpec: (s: Specialization) => void;
  activeLang: Language;
  setActiveLang: (l: Language) => void;
}

const SPECIALIZATIONS: Specialization[] = ['All', 'International Business', 'Litigation', 'Arbitration', 'HR & Compliance', 'Regulatory'];
const LANGUAGES: Language[] = ['All', 'English', 'Swahili', 'French'];

export default function AttorneyFilters({ activeSpec, setActiveSpec, activeLang, setActiveLang }: AttorneyFiltersProps) {
  return (
    <div className="flex flex-col gap-8 mb-16 border-b pb-12">
      <div className="space-y-4">
        <span className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Filter by Specialization</span>
        <div className="flex flex-wrap gap-2">
          {SPECIALIZATIONS.map((spec) => (
            <button
              key={spec}
              onClick={() => setActiveSpec(spec)}
              className={cn(
                "px-6 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border",
                activeSpec === spec 
                  ? "bg-primary text-white border-primary shadow-lg" 
                  : "bg-white text-primary/60 border-primary/10 hover:border-accent hover:text-accent"
              )}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <span className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Filter by Language</span>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={cn(
                "px-6 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border",
                activeLang === lang 
                  ? "bg-accent text-primary border-accent shadow-lg" 
                  : "bg-white text-primary/60 border-primary/10 hover:border-accent hover:text-accent"
              )}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
