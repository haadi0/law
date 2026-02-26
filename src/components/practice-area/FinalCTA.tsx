'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-16 bg-background flex justify-center px-6 lg:px-12">
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="relative w-full max-w-6xl bg-primary text-white p-8 md:p-12 overflow-hidden shadow-2xl border border-white/5"
      >
        <div className="absolute inset-2 border border-accent/10 pointer-events-none"></div>

        <div className="relative z-10 text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-headline font-bold">Engage With Confidence.</h2>
            <p className="text-primary-foreground/60 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
              Initiate a partner-led strategic review of your investment objectives. Our response protocols ensure absolute discretion.
            </p>
          </div>

          <div className="space-y-4">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none h-12 px-10 text-[10px] font-bold tracking-widest transition-all duration-500 shadow-xl w-full md:w-auto">
              <Link href="/contact">REQUEST CONSULTATION</Link>
            </Button>
            
            <p className="text-[8px] uppercase tracking-[0.4em] font-bold text-accent/40 max-w-xs mx-auto">
              Notice: Strict Professional Discretion Guaranteed
            </p>
          </div>
        </div>

        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </motion.div>
    </section>
  );
}
