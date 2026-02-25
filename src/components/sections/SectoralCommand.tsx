
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Pickaxe, 
  Construction, 
  Building2, 
  Sprout, 
  Factory, 
  Palmtree, 
  Rss,
  ArrowRight,
  X,
  ShieldCheck,
  AlertCircle,
  Scale,
  Gavel,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type IndustrySize = 'large' | 'medium' | 'small';

interface IndustrySector {
  id: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  size: IndustrySize;
  overview: string;
  risks: string[];
  considerations: string[];
  support: string[];
}

const INDUSTRIES: IndustrySector[] = [
  {
    id: 'energy',
    name: 'Energy & Natural Resources',
    tagline: 'Navigating power purchase agreements and resource concessions.',
    icon: Zap,
    size: 'large',
    overview: 'The energy sector in East Africa is defined by complex multi-agency licensing and sovereign risk management.',
    risks: ['Environmental liability', 'State-owned enterprise negotiations', 'Sovereign immunity issues'],
    considerations: ['EIA certification', 'Energy regulator licenses', 'Local content planning'],
    support: ['Negotiating PPAs', 'Structuring project finance', 'Regulatory liaison']
  },
  {
    id: 'mining',
    name: 'Mining',
    tagline: 'Securing mineral rights and structuring extractive joint ventures.',
    icon: Pickaxe,
    size: 'large',
    overview: 'Mining operations require meticulous adherence to the Mining Act and deep intelligence into mineral rights security.',
    risks: ['Mineral rights security', 'Resource nationalism', 'Export restrictions'],
    considerations: ['Mining licenses', 'Environmental permits', 'Export permits'],
    support: ['Concession protection', 'Royalties calculation advisory', 'Strategic liaison']
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    tagline: 'Structuring agro-industrial investments and export logistics.',
    icon: Sprout,
    size: 'small',
    overview: 'Agribusiness involves navigating large-scale land leases and export regulatory frameworks.',
    risks: ['Large-scale land leases', 'Export regulations', 'Weather volatility'],
    considerations: ['Land lease agreements', 'Export licenses', 'Water usage permits'],
    support: ['Land audit and leasing', 'Export compliance auditing', 'Contract farming design']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'Market entry via Special Economic Zones.',
    icon: Factory,
    size: 'small',
    overview: 'Manufacturing success depends on maximizing zonal incentives and managing labor relations.',
    risks: ['Zonal incentives compliance', 'Supply chain logistics', 'Labor union dynamics'],
    considerations: ['EPZ/SEZ licenses', 'Operational permits', 'Labor certifications'],
    support: ['Incentive negotiation', 'Labor law compliance auditing', 'Operational permit management']
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    tagline: 'Structuring PPPs and complex project finance.',
    icon: Construction,
    size: 'small',
    overview: 'Large-scale infrastructure relies on robust contractual frameworks and effective land acquisition protocols.',
    risks: ['Land acquisition hurdles', 'Construction delays', 'Financing volatility'],
    considerations: ['TIC incentives', 'Construction permits', 'Land use permits'],
    support: ['Project finance documentation', 'Dispute avoidance strategy', 'Subcontractor compliance']
  },
  {
    id: 'telecom',
    name: 'Technology & Telecom',
    tagline: 'Navigating digital economy and spectrum acquisitions.',
    icon: Rss,
    size: 'small',
    overview: 'The digital sector is governed by rapidly evolving spectrum and data privacy regulations.',
    risks: ['Spectrum licensing', 'Data privacy compliance', 'Infrastructure sharing'],
    considerations: ['TCRA licenses', 'Data protection registration', 'Import permits'],
    support: ['Regulatory compliance mapping', 'IP protection', 'Infrastructure sharing agreements']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    tagline: 'Deep-dive land audits and secure title transfers.',
    icon: Building2,
    size: 'medium',
    overview: 'Commercial real estate requires absolute clarity on land use zoning and title verification.',
    risks: ['Title verification', 'Land use zoning', 'Transfer taxes'],
    considerations: ['Certificate of title', 'Development permits', 'Tax clearances'],
    support: ['Secure title transfer', 'Zoning regulatory mapping', 'Lease enforcement']
  },
  {
    id: 'tourism',
    name: 'Tourism & Hospitality',
    tagline: 'Negotiating concessions and brand licensing.',
    icon: Palmtree,
    size: 'medium',
    overview: 'The hospitality sector requires balance between conservation laws and brand standards.',
    risks: ['Concession agreements', 'Regional conservation laws', 'Security volatility'],
    considerations: ['Hotel licenses', 'Conservation permits', 'Investment approvals'],
    support: ['Concession protection', 'Brand agreement drafting', 'Regulatory navigation']
  }
];

export default function SectoralCommand() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrySector | null>(null);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary leading-tight">
              Sectoral <br /><span className="text-accent italic font-normal">Command.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Tailored legal strategies for the high-growth industries driving East African transformation.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          {INDUSTRIES.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedIndustry(industry)}
              className={cn(
                "group relative bg-white border border-border p-8 lg:p-10 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:border-accent hover:shadow-2xl hover:shadow-accent/5",
                industry.size === 'large' ? 'md:col-span-6 lg:col-span-8' : 
                industry.size === 'medium' ? 'md:col-span-6' : 
                'md:col-span-4 lg:col-span-3'
              )}
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-full bg-secondary/30 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <industry.icon className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className={cn(
                    "font-headline font-bold text-primary group-hover:text-accent transition-colors leading-tight",
                    industry.size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl'
                  )}>
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
                    {industry.tagline}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest group-hover:text-primary transition-colors flex items-center gap-2">
                  Access Intelligence <ArrowRight className="w-3 h-3 text-accent" />
                </span>
                <div className="h-[1px] w-0 bg-accent group-hover:w-12 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <Button asChild size="lg" className="bg-primary text-white hover:bg-accent hover:text-white rounded-none px-12 h-16 text-lg font-bold transition-all group shadow-xl">
            <Link href="/contact">
              Learn more about our tailored services <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Side Intelligence Panel */}
      <AnimatePresence>
        {selectedIndustry && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100]"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:max-w-xl bg-white shadow-2xl z-[110] flex flex-col"
            >
              {/* Panel Header */}
              <div className="p-8 lg:p-12 border-b flex justify-between items-center bg-white sticky top-0 z-20">
                <div>
                  <span className="text-accent font-bold text-[10px] tracking-[0.3em] mb-2 block uppercase">Sector Briefing</span>
                  <h3 className="text-3xl font-headline font-bold text-primary">{selectedIndustry.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedIndustry(null)}
                  className="p-3 hover:bg-secondary rounded-full transition-colors"
                  aria-label="Close panel"
                >
                  <X className="w-6 h-6 text-primary" />
                </button>
              </div>

              {/* Panel Content */}
              <div className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-12">
                <section className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Overview</h4>
                  <p className="text-lg text-primary font-light leading-relaxed">
                    {selectedIndustry.overview}
                  </p>
                </section>

                <div className="grid grid-cols-1 gap-10">
                  <section className="space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <AlertCircle className="w-3 h-3 text-destructive" /> Key Legal Risks
                    </h4>
                    <ul className="space-y-4">
                      {selectedIndustry.risks.map((risk, i) => (
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
                      {selectedIndustry.considerations.map((item, i) => (
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
                      {selectedIndustry.support.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-primary font-bold">
                          <ShieldCheck className="w-4 h-4 text-accent" /> {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              {/* Panel Footer */}
              <div className="p-8 lg:p-12 border-t bg-secondary/10 space-y-4">
                <Button asChild className="w-full bg-primary text-white py-8 text-lg font-bold rounded-none group">
                  <Link href="/contact" onClick={() => setSelectedIndustry(null)}>
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
        )}
      </AnimatePresence>
    </section>
  );
}
