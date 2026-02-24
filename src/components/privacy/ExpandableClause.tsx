
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpandableClauseProps {
  id: string;
  title: string;
  content: string;
  bullets: string[];
}

export default function ExpandableClause({ id, title, content, bullets }: ExpandableClauseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      id={id}
      className={cn(
        "border transition-all duration-500 overflow-hidden",
        isOpen ? "bg-white border-accent shadow-xl" : "bg-transparent border-primary/5 hover:border-accent/30"
      )}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex justify-between items-center text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-6">
          <div className={cn(
            "w-2 h-2 rounded-full transition-all duration-500",
            isOpen ? "bg-accent scale-150" : "bg-primary/20"
          )}></div>
          <h3 className={cn(
            "text-xl font-headline font-bold transition-colors duration-300",
            isOpen ? "text-primary" : "text-primary/60 group-hover:text-primary"
          )}>{title}</h3>
        </div>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
          isOpen ? "bg-accent text-white rotate-45" : "bg-secondary text-primary/40 group-hover:bg-accent group-hover:text-white"
        )}>
          <Plus className="w-5 h-5" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="px-24 pb-12 space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                {content}
              </p>
              <ul className="space-y-4">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm font-medium text-primary">
                    <ChevronRight className="w-4 h-4 text-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
