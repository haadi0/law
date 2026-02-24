
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const capsules = [
  'Tanzania-rooted',
  'East Africa coordination',
  'Cross-border structuring',
  'Dispute-ready',
];

export default function RegionalStrategy() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left side: Copy */}
          <div className="lg:w-3/5 space-y-10">
            <div className="space-y-6">
              <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase block">Strategic Positioning</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold text-primary leading-tight">
                Industry Knowledge <br />Backed by <span className="text-accent italic font-normal">Regional Strategy.</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                Our approach bridges the gap between international corporate standards and the complex, nuanced regulatory environments of East Africa. We don&apos;t just practice law; we engineer market entry and operational stability.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {capsules.map((text) => (
                <div 
                  key={text} 
                  className="px-6 py-2 bg-secondary/30 border border-primary/5 rounded-full text-[10px] uppercase tracking-widest font-bold text-primary"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Abstract Regional Grid */}
          <div className="lg:w-2/5 relative h-[400px] w-full hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-full relative border border-primary/5">
                {/* Visual Grid */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border border-accent/20"></div>
                  ))}
                </div>
                
                {/* Abstract "Map" Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <motion.path
                    d="M 100 100 L 300 100 L 300 300 L 100 300 Z"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 50 200 L 350 200 M 200 50 L 200 350"
                    stroke="hsl(var(--accent))"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                  {/* Strategic Nodes */}
                  <motion.circle cx="100" cy="100" r="4" fill="hsl(var(--accent))" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2 }} />
                  <motion.circle cx="300" cy="100" r="4" fill="hsl(var(--accent))" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.2 }} />
                  <motion.circle cx="300" cy="300" r="4" fill="hsl(var(--accent))" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.4 }} />
                  <motion.circle cx="100" cy="300" r="4" fill="hsl(var(--accent))" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2.6 }} />
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">Authority Mesh</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
