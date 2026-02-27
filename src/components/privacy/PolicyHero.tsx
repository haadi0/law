'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Printer, Link as LinkIcon } from 'lucide-react';

export default function PolicyHero() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <section className="bg-primary text-white py-16 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                <ShieldCheck className="w-4 h-4" /> Legal Protection
              </div>
              <h1 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
                Privacy Policy
              </h1>
              <p className="text-lg text-primary-foreground/70 font-light max-w-xl leading-relaxed">
                This document outlines G'Adroit Attorneys' methodology for the collection, usage, and stringent protection of personal data in alignment with international standards.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-sm text-white/50"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-white/30">Last Updated:</span>
                <span className="text-white">Oct 20, 2024</span>
              </div>
              <div className="w-px h-4 bg-white/10"></div>
              <a href="mailto:info@gadroitattorneys.co.tz" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> info@gadroitattorneys.co.tz
              </a>
            </motion.div>
          </div>

          {/* Privacy Shield Visual */}
          <div className="relative h-[250px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-full relative">
                {/* Grid Pattern */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-2 opacity-10">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className="border border-accent/40"></div>
                  ))}
                </div>
                
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 250" fill="none">
                  {/* Privacy Shield Stroke */}
                  <motion.path
                    d="M 250 30 L 380 70 L 380 180 C 380 220 250 240 250 240 C 250 240 120 220 120 180 L 120 70 Z"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  {/* Data Protection Circles */}
                  <motion.circle cx="250" cy="120" r="30" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1 }} />
                  <motion.path d="M 235 120 L 245 130 L 265 110" stroke="hsl(var(--accent))" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.5 }} />
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <span className="text-[9px] uppercase tracking-[0.5em] text-accent font-bold">Data Integrity</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Tools (Mobile/Desktop) */}
      <div className="absolute top-8 right-8 flex gap-2">
        <button 
          onClick={handleCopyLink}
          className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-colors"
          title="Copy Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
        <button 
          onClick={handlePrint}
          className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-colors"
          title="Print Policy"
        >
          <Printer className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
