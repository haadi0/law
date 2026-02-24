
'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ArrowUpRight, ShieldCheck, AlertCircle, Scale, Gavel } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const INDUSTRIES_INTEL = [
  {
    id: 'energy',
    name: 'Energy & Natural Resources',
    category: 'Regulated',
    size: 'large',
    risks: ['Environmental liability', 'State-owned enterprise negotiations', 'Sovereign immunity issues'],
    approvals: ['EIA certification', 'Energy regulator licenses', 'Local content planning'],
    help: 'Negotiating power purchase agreements and resource concessions.',
    disputes: 'Force majeure claims in infrastructure delivery.'
  },
  {
    id: 'mining',
    name: 'Mining',
    category: 'Extractive',
    size: 'medium',
    risks: ['Mineral rights security', 'Mining act compliance', 'Resource nationalism'],
    approvals: ['Mining licenses', 'Environmental permits', 'Export permits'],
    help: 'Securing mineral rights and structuring joint ventures with local partners.',
    disputes: 'Royalties calculation and export restriction challenges.'
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    category: 'Development',
    size: 'medium',
    risks: ['Land acquisition hurdles', 'Construction delays', 'Financing volatility'],
    approvals: ['TIC incentives', 'Construction permits', 'Land use permits'],
    help: 'Structuring PPPs and managing complex project finance documentation.',
    disputes: 'LSTK contract breaches and subcontractor non-performance.'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    category: 'Commercial',
    size: 'small',
    risks: ['Title verification', 'Land use zoning', 'Transfer taxes'],
    approvals: ['Certificate of title', 'Development permits', 'Tax clearances'],
    help: 'Conducting deep-dive land audits and secure title transfers.',
    disputes: 'Boundary disagreements and lease enforcement.'
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    category: 'Industrial',
    size: 'small',
    risks: ['Large-scale land leases', 'Export regulations', 'Weather volatility'],
    approvals: ['Land lease agreements', 'Export licenses', 'Water usage permits'],
    help: 'Structuring agro-industrial investments and export logistics.',
    disputes: 'Contract farming enforcement and land lease revisions.'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    category: 'Regulated',
    size: 'large',
    risks: ['Zonal incentives compliance', 'Supply chain logistics', 'Labor union dynamics'],
    approvals: ['EPZ/SEZ licenses', 'Operational permits', 'Labor certifications'],
    help: 'Market entry via Special Economic Zones and labor compliance auditing.',
    disputes: 'IP infringement and product liability claims.'
  },
  {
    id: 'tourism',
    name: 'Tourism & Hospitality',
    category: 'Strategic',
    size: 'small',
    risks: ['Concession agreements', 'Regional conservation laws', 'Security volatility'],
    approvals: ['Hotel licenses', 'Conservation permits', 'Investment approvals'],
    help: 'Negotiating concessions in protected areas and international brand licensing.',
    disputes: 'Management agreement breaches and concession revocations.'
  },
  {
    id: 'technology',
    name: 'Technology & Telecom',
    category: 'Strategic',
    size: 'medium',
    risks: ['Spectrum licensing', 'Data privacy compliance', 'Infrastructure sharing'],
    approvals: ['TCRA licenses', 'Data protection registration', 'Import permits'],
    help: 'Navigating the digital economy regulations and spectrum acquisitions.',
    disputes: 'Interconnection disagreements and regulatory fines.'
  }
];

export default function IndustryBentoGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState<typeof INDUSTRIES_INTEL[0] | null>(null);

  const filteredIndustries = useMemo(() => {
    if (activeFilter === 'All') return INDUSTRIES_INTEL;
    return INDUSTRIES_INTEL.filter(ind => ind.category === activeFilter);
  }, [activeFilter]);

  const categories = ['All', 'Regulated', 'Extractive', 'Development', 'Commercial', 'Industrial', 'Strategic'];

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Filter Bar - Mobile Scrollable */}
        <div className="flex justify-start md:justify-center mb-12 sticky top-20 z-30 overflow-x-auto no-scrollbar pb-4 md:pb-0">
          <div className="inline-flex bg-white/80 backdrop-blur-md border p-1 rounded-full shadow-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "px-4 md:px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all relative whitespace-nowrap",
                  activeFilter === cat ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div 
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-accent/10 border-b-2 border-accent -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid - Responsive Stacking */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {filteredIndustries.map((ind) => (
            <motion.div
              key={ind.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedIndustry(ind)}
              className={cn(
                "group relative bg-white border cursor-pointer p-6 md:p-10 flex flex-col justify-between overflow-hidden min-h-[240px]",
                ind.size === 'large' ? 'md:col-span-2 md:row-span-2' : ind.size === 'medium' ? 'md:col-span-2' : 'md:col-span-1'
              )}
            >
              <div className="absolute inset-0 border border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="space-y-3 relative z-10">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">{ind.category}</span>
                <h3 className={cn(
                  "font-headline font-bold text-primary transition-colors group-hover:text-accent leading-tight",
                  ind.size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                )}>
                  {ind.name}
                </h3>
              </div>

              <div className="flex justify-between items-end relative z-10 mt-6">
                <p className="text-[10px] md:text-xs text-muted-foreground max-w-[180px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Access deep-sector regulatory intelligence.
                </p>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Intel Drawer - Responsive Width */}
      <AnimatePresence>
        {selectedIndustry && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:max-w-xl bg-white shadow-2xl z-[110] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 p-3 hover:bg-secondary rounded-full transition-colors z-20"
              >
                <X className="w-6 h-6 text-primary" />
              </button>

              <div className="p-8 md:p-12 space-y-12">
                <div>
                  <span className="text-accent font-bold text-xs tracking-[0.3em] mb-3 block uppercase">Sector Intelligence</span>
                  <h3 className="text-3xl md:text-5xl font-headline font-bold text-primary leading-tight">{selectedIndustry.name}</h3>
                </div>

                <div className="space-y-10">
                  <section className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <AlertCircle className="w-3 h-3 text-destructive" /> Key Risks
                    </h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedIndustry.risks.map((risk, i) => (
                        <li key={i} className="flex items-start gap-3 text-primary text-base md:text-lg font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5"></div>
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3 text-accent" /> Typical Approvals
                    </h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedIndustry.approvals.map((app, i) => (
                        <li key={i} className="flex items-start gap-3 text-primary text-base md:text-lg font-light">
                          <div className="w-1.5 h-1.5 bg-accent mt-2.5"></div>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-secondary/30 space-y-2">
                      <h5 className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                        <Scale className="w-3 h-3" /> How We Help
                      </h5>
                      <p className="text-xs text-muted-foreground leading-relaxed">{selectedIndustry.help}</p>
                    </div>
                    <div className="p-5 bg-secondary/30 space-y-2">
                      <h5 className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                        <Gavel className="w-3 h-3" /> Common Disputes
                      </h5>
                      <p className="text-xs text-muted-foreground leading-relaxed">{selectedIndustry.disputes}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t space-y-4">
                  <Button asChild className="w-full bg-primary text-white py-6 md:py-8 text-base md:text-lg rounded-none">
                    <Link href="/contact">Request Sector Review</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-primary/10 rounded-none py-6 md:py-8">
                    <Link href="/investor-resources">Investor Resources</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
