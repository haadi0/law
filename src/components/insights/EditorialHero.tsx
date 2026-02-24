
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EditorialHeroProps {
  title: string;
  subtitle: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
}

export default function EditorialHero({ title, subtitle, category, author, date, readingTime }: EditorialHeroProps) {
  return (
    <section className="bg-primary text-white py-24 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Editorial Stage */}
          <div className="space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                <span className="px-2 py-1 bg-accent/10 border border-accent/20">{category}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="text-white/60">{readingTime}</span>
              </div>

              <div className="relative">
                <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
                  {title}
                </h1>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1.2 }}
                  className="absolute -bottom-2 left-0 h-0.5 bg-accent/30"
                />
              </div>

              <p className="text-xl text-primary-foreground/70 font-light max-w-xl leading-relaxed italic">
                {subtitle}
              </p>

              <div className="pt-8 flex items-center gap-6 border-t border-white/10 text-sm text-white/50 font-medium">
                <div>By <span className="text-white">{author}</span></div>
                <div className="w-px h-4 bg-white/10"></div>
                <div>{date}</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Treaty Shield Visual */}
          <div className="relative h-[400px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-full relative">
                {/* Abstract Geometric Shield */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-2 opacity-10">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border border-accent/40"></div>
                  ))}
                </div>
                
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" fill="none">
                  {/* Central Shield Stroke */}
                  <motion.path
                    d="M 250 50 L 400 120 L 400 280 L 250 350 L 100 280 L 100 120 Z"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                  />
                  {/* Internal Strategic Grid Lines */}
                  <motion.path
                    d="M 100 120 L 400 120 M 100 280 L 400 280 M 250 50 L 250 350"
                    stroke="hsl(var(--accent))"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 1.5, duration: 1 }}
                  />
                  {/* Connection Nodes */}
                  <motion.circle cx="250" cy="50" r="3" fill="hsl(var(--accent))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 }} />
                  <motion.circle cx="400" cy="120" r="3" fill="hsl(var(--accent))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2 }} />
                  <motion.circle cx="400" cy="280" r="3" fill="hsl(var(--accent))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.4 }} />
                  <motion.circle cx="250" cy="350" r="3" fill="hsl(var(--accent))" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.6 }} />
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-[10px] uppercase tracking-[0.6em] text-accent font-bold block mb-2">Legal Security</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold block">Asset Protection Protocol</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
