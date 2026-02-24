
'use client';

import React from 'react';
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

export default function IndustryFilter() {
  const [activeTab, setActiveTab] = React.useState('All Sectors');

  return (
    <section className="py-12 bg-white border-b sticky top-20 z-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-8">
          <div className="shrink-0 hidden lg:block">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40">Sector Intelligence</span>
          </div>
          
          <div className="flex-1 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            <div className="flex items-center gap-2">
              {INDUSTRIES_LIST.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all relative whitespace-nowrap rounded-full border",
                    activeTab === tab 
                      ? "text-primary border-accent bg-accent/5" 
                      : "text-primary/40 border-transparent hover:text-primary hover:border-primary/10"
                  )}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 border border-accent rounded-full -z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
