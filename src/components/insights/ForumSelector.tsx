
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Clock, Coins, Globe, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

const forums = [
  {
    id: 'arbitration',
    label: 'Arbitration',
    metrics: [
      { icon: Clock, label: 'Speed', value: 'High', desc: 'Typically 12-18 months for an award.' },
      { icon: Shield, label: 'Confidentiality', value: 'Absolute', desc: 'Proceedings are closed to the public.' },
      { icon: Globe, label: 'Enforcement', value: 'Global', desc: 'New York Convention allows seizure globally.' },
      { icon: Coins, label: 'Cost Predictability', value: 'Moderate', desc: 'Higher upfront fees, fewer hidden delays.' },
      { icon: Scale, label: 'Reliability', value: 'Elite', desc: 'Expert panels avoid local judicial volatility.' },
    ]
  },
  {
    id: 'litigation',
    label: 'Litigation',
    metrics: [
      { icon: Clock, label: 'Speed', value: 'Low', desc: 'Can span 3-7 years with appeals.' },
      { icon: Shield, label: 'Confidentiality', value: 'None', desc: 'Court records are public documents.' },
      { icon: Globe, label: 'Enforcement', value: 'Regional', desc: 'Depends on bilateral judicial treaties.' },
      { icon: Coins, label: 'Cost Predictability', value: 'Low', desc: 'Lower filing fees, but massive legal spend over time.' },
      { icon: Scale, label: 'Reliability', value: 'Variable', desc: 'Dependent on specific local judge and court capacity.' },
    ]
  },
  {
    id: 'mediation',
    label: 'Mediation',
    metrics: [
      { icon: Clock, label: 'Speed', value: 'Instant', desc: 'Can be resolved in days or weeks.' },
      { icon: Shield, label: 'Confidentiality', value: 'High', desc: 'Strictly private between parties.' },
      { icon: Globe, label: 'Enforcement', value: 'Contractual', desc: 'Relies on a new settlement agreement.' },
      { icon: Coins, label: 'Cost Predictability', value: 'High', desc: 'Minimal costs compared to formal disputes.' },
      { icon: Scale, label: 'Reliability', value: 'Voluntary', desc: 'Depends entirely on party cooperation.' },
    ]
  }
];

export default function ForumSelector() {
  const [activeForum, setActiveForum] = useState(forums[0]);

  return (
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-secondary/30 p-1 border rounded-none">
          {forums.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveForum(f)}
              className={cn(
                "px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all",
                activeForum.id === f.id ? "bg-primary text-white shadow-lg" : "text-primary/60 hover:text-primary"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeForum.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          {activeForum.metrics.map((m, idx) => (
            <div key={idx} className="bg-white border p-8 space-y-4 hover:border-accent transition-colors group">
              <m.icon className="w-6 h-6 text-accent" />
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">{m.label}</span>
                <span className="text-xl font-headline font-bold text-primary">{m.value}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
