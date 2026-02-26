
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AttorneyHero() {
  return (
    <section className="container mx-auto px-6 lg:px-12 mb-20">
      <div className="max-w-4xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-accent"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">The Human Capital</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-headline font-bold text-primary leading-tight">
            Our <span className="text-accent italic font-normal">Experts.</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl"
        >
          Your trusted advisors with unparalleled authority in East Africa’s complex regulatory and commercial landscape.
        </motion.p>

        {/* Abstract Pattern Element */}
        <div className="pt-12 opacity-10">
          <svg width="100%" height="20" viewBox="0 0 1000 20" fill="none">
            <motion.path 
              d="M0 10 H1000" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              strokeDasharray="10 10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
