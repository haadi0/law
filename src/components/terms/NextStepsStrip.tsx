
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NextStepsStrip() {
  return (
    <div className="bg-secondary/20 p-12 lg:p-16 space-y-8">
      <div className="flex items-center gap-4 text-accent">
        <ShieldCheck className="w-8 h-8" />
        <h3 className="text-2xl font-headline font-bold text-primary">Next Steps for Engagement</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Step 01</span>
          <h4 className="font-bold text-primary">Initial Consultation</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">Request a confidential briefing to discuss your operational objectives and sectoral challenges.</p>
        </div>
        <div className="space-y-4">
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Step 02</span>
          <h4 className="font-bold text-primary">Conflict Verification</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">Our firm conducts a meticulous internal audit to ensure zero conflicts with existing representations.</p>
        </div>
        <div className="space-y-4">
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Step 03</span>
          <h4 className="font-bold text-primary">Engagement Letter</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">Formalize the partnership with a precise scope of work and agreed-upon fee structure.</p>
        </div>
      </div>

      <div className="pt-8">
        <Link href="/contact" className="inline-flex items-center gap-3 text-sm font-bold text-primary group">
          Initiate Engagement Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
