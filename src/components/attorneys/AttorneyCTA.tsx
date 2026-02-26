
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function AttorneyCTA() {
  return (
    <section className="py-20 md:py-32 bg-white flex justify-center px-6 lg:px-12">
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="relative w-full max-w-6xl bg-primary text-white p-10 md:p-20 lg:p-24 overflow-hidden shadow-2xl"
      >
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10 text-center space-y-8 md:space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight">
              Engage With <br /><span className="text-accent italic font-normal">Total Confidence.</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
              Request a confidential briefing with our senior partners to analyze your specific operational or investment objectives.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 md:gap-8">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-14 md:h-16 px-10 md:px-12 text-[10px] md:text-xs font-bold tracking-[0.3em] transition-all duration-500 shadow-2xl w-full md:w-auto">
              <Link href="/contact" className="flex items-center gap-3 uppercase justify-center">
                Initiate Consultation Protocol <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            
            <div className="flex flex-col gap-2">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold text-accent/50">
                Notice: All inquiries are treated with strict professional discretion.
              </p>
              <div className="h-[1px] w-24 bg-accent/20 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Abstract Geometry */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </motion.div>
    </section>
  );
}
