
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function IndustryHero() {
  return (
    <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side: Content */}
          <div className="space-y-6 md:space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 md:space-y-6"
            >
              <div className="h-1 w-12 bg-accent mb-4 md:mb-6"></div>
              <h1 className="text-4xl md:text-7xl font-headline font-bold leading-tight">
                Strategic <br />
                <span className="text-accent italic font-normal">Sector Expertise.</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 font-light max-w-xl leading-relaxed">
                We focus on the high-growth, regulated industries that define the future of the East African economy.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Abstract Visual */}
          <div className="relative h-[200px] md:h-[300px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-full relative">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-3 opacity-20">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0.1 }}
                      animate={{ opacity: [0.1, 0.4, 0.1] }}
                      transition={{ duration: 4, delay: i * 0.1, repeat: Infinity }}
                      className="border border-accent/40"
                    ></motion.div>
                  ))}
                </div>
                
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 250" fill="none">
                  <motion.path
                    d="M 50 125 L 450 125 M 250 25 L 250 225"
                    stroke="hsl(var(--accent))"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.circle 
                    cx="250" cy="125" r="40" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth="1" 
                    strokeDasharray="4 4" 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">Industry Mapping</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
