
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function StrategicTakeaway() {
  return (
    <section className="py-24 bg-background px-6 lg:px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-primary text-white p-12 lg:p-24 overflow-hidden"
        >
          {/* Animated Gold Border Accent */}
          <div className="absolute inset-2 border border-accent/20 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <div className="flex justify-center">
                <ShieldCheck className="w-12 h-12 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
                Choosing the Right Forum Is a <span className="text-accent italic">Strategic Decision.</span>
              </h2>
              <p className="text-xl text-primary-foreground/60 font-light leading-relaxed">
                The most effective dispute resolution strategy is established at the time of contract execution. Our partners provide specialized advice on forum selection and arbitration clause design to ensure maximum asset security.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none h-16 px-12 font-bold text-lg">
                <Link href="/contact">Request Dispute Strategy Session</Link>
              </Button>
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent/50">
                Notice: All inquiries are treated with strict confidentiality.
              </p>
            </div>
          </div>

          {/* Abstract Geometry */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <svg width="200" height="200" viewBox="0 0 100 100">
               <rect x="10" y="10" width="80" height="80" stroke="currentColor" fill="none" strokeWidth="0.5" />
               <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5" />
             </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
