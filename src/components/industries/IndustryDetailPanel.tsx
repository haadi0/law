
'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ShieldCheck, AlertCircle, Scale, Gavel, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IndustryData } from './IndustryBentoGrid';

interface IndustryDetailPanelProps {
  industry: IndustryData;
  onClose: () => void;
}

export default function IndustryDetailPanel({ industry, onClose }: IndustryDetailPanelProps) {
  // ESC to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100]"
      />
      
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-full md:max-w-xl bg-white shadow-2xl z-[110] flex flex-col"
      >
        {/* Header */}
        <div className="p-8 lg:p-12 border-b flex justify-between items-center bg-white sticky top-0 z-20">
          <div>
            <span className="text-accent font-bold text-[10px] tracking-[0.3em] mb-2 block uppercase">Sector Briefing</span>
            <h3 className="text-3xl font-headline font-bold text-primary">{industry.name}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-3 hover:bg-secondary rounded-full transition-colors"
            aria-label="Close panel"
          >
            <X className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-12">
          <section className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Overview</h4>
            <p className="text-lg text-primary font-light leading-relaxed">
              {industry.overview}
            </p>
          </section>

          <div className="grid grid-cols-1 gap-10">
            <section className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <AlertCircle className="w-3 h-3 text-destructive" /> Key Legal Risks
              </h4>
              <ul className="space-y-4">
                {industry.risks.map((risk, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary text-base font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5"></div>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Scale className="w-3 h-3 text-accent" /> Regulatory Considerations
              </h4>
              <ul className="space-y-4">
                {industry.considerations.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary text-base font-light">
                    <div className="w-1.5 h-1.5 bg-accent mt-2.5"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Gavel className="w-3 h-3 text-primary" /> How G&apos;Adroit Supports
              </h4>
              <ul className="space-y-4">
                {industry.support.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary font-bold">
                    <ShieldCheck className="w-4 h-4 text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Action Row */}
        <div className="p-8 lg:p-12 border-t bg-secondary/10 space-y-4">
          <Button asChild className="w-full bg-primary text-white py-8 text-lg font-bold rounded-none group">
            <Link href="/contact" onClick={onClose}>
              Request Confidential Consultation <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <div className="flex justify-center">
             <Link href="/investor-resources" className="text-xs font-bold text-primary/60 hover:text-accent transition-colors">
               Access Investor Resources archive →
             </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
