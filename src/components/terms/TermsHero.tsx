
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Mail, Calendar } from 'lucide-react';

export default function TermsHero() {
  return (
    <section className="bg-primary text-white py-20 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                <FileCheck className="w-4 h-4" /> Professional Standards
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
                Terms of <br />
                <span className="text-accent italic font-normal">Engagement.</span>
              </h1>
              <p className="text-lg text-primary-foreground/70 font-light max-w-xl leading-relaxed">
                This document establishes the strategic and operational framework for our professional relationship, ensuring absolute clarity on scope, fees, and confidentiality.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-sm text-white/50"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent/50" />
                <span className="font-bold text-white/30">Effective:</span>
                <span className="text-white">Jan 01, 2024</span>
              </div>
              <div className="w-px h-4 bg-white/10"></div>
              <a href="mailto:consult@gadroit.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent/50" /> consult@gadroit.com
              </a>
            </motion.div>
          </div>

          {/* Abstract Framework Visual */}
          <div className="relative h-[300px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-full relative">
                {/* Grid Pattern */}
                <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 gap-2 opacity-10">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div key={i} className="border border-accent/40"></div>
                  ))}
                </div>
                
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 300" fill="none">
                  {/* Engagement Framework Path */}
                  <motion.path
                    d="M 100 50 L 400 50 L 400 250 L 100 250 Z"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 100 150 L 400 150 M 250 50 L 250 250"
                    stroke="hsl(var(--accent))"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                  {/* Connection Nodes */}
                  <circle cx="100" cy="50" r="3" fill="hsl(var(--accent))" />
                  <circle cx="400" cy="50" r="3" fill="hsl(var(--accent))" />
                  <circle cx="400" cy="250" r="3" fill="hsl(var(--accent))" />
                  <circle cx="100" cy="250" r="3" fill="hsl(var(--accent))" />
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <span className="text-[9px] uppercase tracking-[0.5em] text-accent font-bold">Contractual Logic</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
