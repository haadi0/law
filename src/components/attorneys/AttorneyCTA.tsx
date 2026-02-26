
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function AttorneyCTA() {
  return (
    <section className="py-32 bg-white flex justify-center px-6 lg:px-12">
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="relative w-full max-w-6xl bg-primary text-white p-12 md:p-24 overflow-hidden shadow-2xl"
      >
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10 text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-headline font-bold leading-tight">
              Engage With <br /><span className="text-accent italic font-normal">Total Confidence.</span>
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
              Request a confidential briefing with our senior partners to analyze your specific operational or investment objectives.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-16 px-12 text-xs font-bold tracking-[0.3em] transition-all duration-500 shadow-2xl">
              <Link href="/contact" className="flex items-center gap-3 uppercase">
                Initiate Consultation Protocol <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            
            <div className="flex flex-col gap-2">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent/50">
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
