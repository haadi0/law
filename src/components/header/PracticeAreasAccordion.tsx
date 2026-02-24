
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PRACTICE_AREAS } from '@/lib/data';

interface PracticeAreasAccordionProps {
  onItemClick: () => void;
}

export default function PracticeAreasAccordion({ onItemClick }: PracticeAreasAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-practice-areas"
        className="w-full py-4 flex items-center justify-between text-left group"
      >
        <span className="text-2xl font-headline font-bold text-white group-hover:text-accent transition-colors">
          Practice Areas
        </span>
        <ChevronDown 
          className={cn(
            "w-6 h-6 text-accent transition-transform duration-300",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-practice-areas"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 pb-6 pl-4 border-l border-accent/20 mt-2">
              <Link
                href="/practice-areas"
                onClick={onItemClick}
                className="text-lg font-medium text-white/60 hover:text-accent transition-all hover:translate-x-2"
              >
                All Areas
              </Link>
              {PRACTICE_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/practice-areas/${area.slug}`}
                  onClick={onItemClick}
                  className="text-lg font-medium text-white/60 hover:text-accent transition-all hover:translate-x-2"
                >
                  {area.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
