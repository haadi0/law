
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface InsightBoxProps {
  title: string;
  content: string;
}

export default function InsightBox({ title, content }: InsightBoxProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative p-8 bg-white border shadow-sm group overflow-hidden"
    >
      <div className="absolute top-0 left-0 h-1 w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
      <div className="space-y-4 relative z-10">
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {content}
        </p>
      </div>
      {/* Decorative background element */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
    </motion.div>
  );
}
