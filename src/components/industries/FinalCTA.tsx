
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Animated SVG Border */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <motion.rect
            x="20" y="20" width="calc(100% - 40px)" height="calc(100% - 40px)"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-white">Engage With Confidence.</h2>
          <p className="text-xl text-primary-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
            G&apos;Adroit Attorneys provides the legal authority and international perspective required for significant institutional investment in Tanzania and across East Africa.
          </p>
        </div>

        <div className="space-y-8">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none px-12 h-20 text-xl font-bold transition-all shadow-2xl">
            <Link href="/contact">Request Confidential Consultation</Link>
          </Button>
          
          <div className="pt-4">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent/50">
              Notice: All inquiries are treated with strict confidentiality.
            </p>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
}
