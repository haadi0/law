'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="bg-primary text-white py-20 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="h-1 w-12 bg-accent mb-6"></div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
                About <br />
                <span className="text-accent italic font-normal">G&apos;Adroit Attorneys.</span>
              </h1>
              <p className="text-xl text-primary-foreground/70 font-light max-w-xl leading-relaxed">
                A Tanzania-based, East Africa-focused elite practice providing sophisticated cross-border counsel for the world&apos;s most ambitious investors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none px-8 h-16 font-bold transition-all shadow-xl shadow-black/20">
                <Link href="/contact">Request Confidential Consultation</Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-accent/50 rounded-none px-8 h-16 font-bold transition-all">
                <Link href="/practice-areas">View Practice Areas</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Side: Authority Panel (Abstract) */}
          <div className="relative h-[300px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-full relative">
                {/* Grid Pattern */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-4 opacity-20">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border border-accent/30"></div>
                  ))}
                </div>
                {/* Gold Strokes */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  <motion.path
                    d="M 50 50 L 350 50 L 350 250"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 350 250 L 50 250 L 50 50"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                  />
                  <circle cx="200" cy="150" r="2" fill="hsl(var(--accent))" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">Institutional Logic</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
