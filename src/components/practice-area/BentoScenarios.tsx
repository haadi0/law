
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Plus } from 'lucide-react';

const scenarios = [
  {
    id: 'market-entry',
    title: 'Market Entry Strategy',
    desc: 'Bespoke entry structures that balance control and compliance.',
    icon: '01',
    details: {
      handle: ['Entity formation (TIC/EPZ)', 'Local content structuring', 'Capital importation advisory'],
      gain: ['Fast-track approvals', 'Optimized tax structures', 'Regulatory immunity'],
      pitfalls: ['Misaligned ownership structures', 'Undercapitalization errors']
    }
  },
  {
    id: 'licensing',
    title: 'Licensing & Approvals',
    desc: 'Navigating multi-agency regulatory hurdles with precision.',
    icon: '02',
    details: {
      handle: ['Sector-specific licensing', 'Environmental permits', 'Strategic liaison'],
      gain: ['Zero-downtime operations', 'Predictable timelines', 'Stakeholder confidence'],
      pitfalls: ['Incomplete documentation', 'Overlooking sectoral requirements']
    }
  },
  {
    id: 'jv-structuring',
    title: 'JV Structuring',
    desc: 'Protecting foreign assets in local partnerships.',
    icon: '03',
    details: {
      handle: ['Shareholder agreements', 'Management control protocols', 'Exit strategy design'],
      gain: ['Ironclad IP protection', 'Clear governance', 'Risk separation'],
      pitfalls: ['Vague dispute clauses', 'Unequal leverage assumptions']
    }
  },
  {
    id: 'investment-protection',
    title: 'Investment Protection',
    desc: 'Securing capital against political and judicial volatility.',
    icon: '04',
    details: {
      handle: ['BIT utilization', 'Asset protection trusts', 'Arbitration clause optimization'],
      gain: ['Recourse to international forums', 'Currency protection', 'Sovereign risk mitigation'],
      pitfalls: ['Reliance on local courts', 'Outdated treaty references']
    }
  },
  {
    id: 'contract-strategy',
    title: 'Contract Strategy',
    desc: 'Drafting agreements that hold weight in regional contexts.',
    icon: '05',
    details: {
      handle: ['Supply chain agreements', 'LSTK contracts', 'Force Majeure optimization'],
      gain: ['Operational certainty', 'Enforceable remedies', 'Local law alignment'],
      pitfalls: ['Template-driven drafting', 'Cultural misinterpretations']
    }
  }
];

export default function BentoScenarios() {
  const [activeScenario, setActiveScenario] = useState<typeof scenarios[0] | null>(null);

  return (
    <section className="py-24 bg-background px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Investor Scenarios</h2>
          <p className="text-muted-foreground text-lg font-light max-w-xl">
            Real-world challenges solved through structural precision and regulatory intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto md:h-[600px]">
          {/* Main Large Tile */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            onClick={() => setActiveScenario(scenarios[0])}
            className="md:col-span-3 md:row-span-2 bg-primary text-white p-12 cursor-pointer relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-accent font-bold opacity-20 text-8xl leading-none">
              {scenarios[0].icon}
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-headline font-bold mb-4">{scenarios[0].title}</h3>
                <p className="text-primary-foreground/60 text-lg leading-relaxed">{scenarios[0].desc}</p>
              </div>
              <div className="flex items-center gap-2 font-bold text-accent">
                Explore Strategy <Plus className="group-hover:rotate-90 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>

          {/* Grid of smaller tiles */}
          {scenarios.slice(1).map((s, idx) => (
            <motion.div 
              key={s.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveScenario(s)}
              className={`p-8 border cursor-pointer group flex flex-col justify-between transition-colors hover:border-accent ${idx === 0 ? 'md:col-span-3' : 'md:col-span-2'}`}
            >
              <div>
                <span className="text-xs font-bold text-accent mb-4 block tracking-widest">{s.icon}</span>
                <h3 className="text-xl font-headline font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{s.desc}</p>
              </div>
              <div className="flex justify-end">
                <ArrowUpRight className="text-primary/20 group-hover:text-accent transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Drawer Panel */}
      <AnimatePresence>
        {activeScenario && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveScenario(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-xl bg-white shadow-2xl z-[70] p-12 overflow-y-auto"
            >
              <button 
                onClick={() => setActiveScenario(null)}
                className="absolute top-8 right-8 p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-12">
                <div>
                  <span className="text-accent font-bold text-sm tracking-[0.2em] mb-4 block uppercase">Scenario Details</span>
                  <h3 className="text-4xl font-headline font-bold text-primary">{activeScenario.title}</h3>
                </div>

                <div className="space-y-8">
                  <section>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">What We Handle</h4>
                    <ul className="space-y-3">
                      {activeScenario.details.handle.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-primary">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">What You Gain</h4>
                    <ul className="space-y-3">
                      {activeScenario.details.gain.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-primary font-medium">
                          <div className="w-1.5 h-1.5 bg-green-500 mt-2 shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="p-6 bg-destructive/5 border border-destructive/10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-destructive mb-4">Common Pitfalls</h4>
                    <ul className="space-y-3">
                      {activeScenario.details.pitfalls.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                          <span className="text-destructive font-bold">!</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="pt-8 border-t">
                  <button className="w-full bg-primary text-white py-5 font-bold hover:bg-primary/90 transition-all">
                    Inquire About This Scenario
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
