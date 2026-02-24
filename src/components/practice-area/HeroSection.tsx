'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-primary text-white py-24 relative overflow-hidden">
      {/* Background Subtle Geometry */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-12 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl space-y-10">
          {/* Breadcrumb / Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/practice-areas"
              className="!text-accent text-sm font-bold flex items-center gap-2 mb-8 w-fit transition-all duration-300 hover:-translate-x-1 hover:opacity-80"
            >
              <ArrowRight className="rotate-180 w-4 h-4" />
              All Practice Areas
            </Link>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 bg-accent"
            />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-headline font-bold leading-[1.1]"
            >
              International Business <br />
              <span className="text-accent italic font-normal">& Investment Law.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-foreground/80 font-light max-w-2xl leading-relaxed"
            >
              Navigating Tanzanian regulatory complexity with absolute precision. We engineer secure market entry strategies for global institutional capital.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6 pt-4"
          >
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none px-10 h-16 text-base font-bold transition-all shadow-xl shadow-black/20">
              <Link href="/contact">Request Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-accent/50 rounded-none px-10 h-16 text-base font-bold transition-all">
              <Link href="/investor-resources">Investor Resources</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
