'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-background flex justify-center px-6 lg:px-12">
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="relative w-full max-w-6xl bg-primary text-white p-10 md:p-16 overflow-hidden shadow-2xl"
      >
        {/* Animated Gold Border */}
        <div className="absolute inset-2 border border-accent/20 pointer-events-none">
          <motion.div 
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-[1px] bg-accent"
          />
        </div>

        <div className="relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-headline font-bold">Engage With Confidence.</h2>
            <p className="text-primary-foreground/60 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Initiate a partner-led strategic review of your investment objectives. Our response protocols ensure absolute discretion.
            </p>
          </div>

          <div className="space-y-6">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none h-12 md:h-14 px-10 text-xs font-bold tracking-widest transition-all duration-500 shadow-xl w-full md:w-auto">
              <Link href="/contact">Request Confidential Consultation</Link>
            </Button>
            
            <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent/50 max-w-xs mx-auto">
              Notice: Strict Professional Discretion Guaranteed
            </p>
          </div>
        </div>

        {/* Abstract Geometry */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </motion.div>
    </section>
  );
}
