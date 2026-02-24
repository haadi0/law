
'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const INDUSTRIES_LIST = [
  'All Sectors',
  'Energy & Natural Resources',
  'Mining',
  'Infrastructure',
  'Real Estate',
  'Agriculture',
  'Manufacturing',
  'Tourism & Hospitality',
  'Technology & Telecom',
];

interface IndustryFilterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function IndustryFilter({ activeTab, setActiveTab }: IndustryFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  // Auto-centering logic for the active pill
  useEffect(() => {
    if (activeBtnRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeBtn = activeBtnRef.current;
      
      const scrollLeft = activeBtn.offsetLeft - (container.offsetWidth / 2) + (activeBtn.offsetWidth / 2);
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  return (
    <section className="py-8 bg-white border-b sticky top-20 z-40 shadow-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
          <div className="shrink-0">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/40 block mb-1">Sector Intelligence</span>
            <div className="h-0.5 w-8 bg-accent/30 hidden lg:block"></div>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-x-auto no-scrollbar pb-2 lg:pb-0 snap-x snap-mandatory touch-pan-x"
          >
            <div className="flex items-center gap-3">
              {INDUSTRIES_LIST.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    ref={isActive ? activeBtnRef : null}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] transition-all relative whitespace-nowrap rounded-none border snap-center",
                      isActive 
                        ? "text-primary border-accent bg-accent/5" 
                        : "text-primary/40 border-transparent hover:text-primary hover:border-primary/10"
                    )}
                  >
                    {tab}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill-border"
                        className="absolute inset-0 border-b-2 border-accent -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
