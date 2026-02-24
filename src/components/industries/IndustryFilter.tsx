
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
    <section className="py-12 bg-white border-b sticky top-20 z-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10">
          {/* Label Rail */}
          <div className="shrink-0 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary/30 block">
              Intelligence Stream
            </span>
            <div className="h-[1px] w-12 bg-accent/20"></div>
          </div>
          
          {/* Precision Navigation Rail */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-x-auto no-scrollbar touch-pan-x"
          >
            <div className="flex items-center gap-8 min-w-max">
              {INDUSTRIES_LIST.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    ref={isActive ? activeBtnRef : null}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "group relative py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500",
                      isActive 
                        ? "text-primary" 
                        : "text-primary/30 hover:text-primary"
                    )}
                  >
                    {tab}
                    
                    {/* Active Precision Indicator */}
                    {isActive ? (
                      <motion.div
                        layoutId="active-rail-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.6 }}
                      >
                        <motion.div 
                          className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]"
                        />
                      </motion.div>
                    ) : (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent/10 group-hover:w-full transition-all duration-500" />
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
