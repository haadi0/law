
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, AlertCircle, Scale, Gavel } from 'lucide-react';
import { cn } from '@/lib/utils';
import IndustryDetailPanel from './IndustryDetailPanel';

export type IndustryData = {
  id: string;
  name: string;
  tagline: string;
  size: 'large' | 'medium' | 'small';
  overview: string;
  risks: string[];
  considerations: string[];
  scenarios: string[];
  support: string[];
};

const INDUSTRIES_INTEL: IndustryData[] = [
  {
    id: 'energy',
    name: 'Energy & Natural Resources',
    tagline: 'Navigating power purchase agreements and resource concessions.',
    size: 'large',
    overview: 'The energy sector in East Africa is defined by complex multi-agency licensing and sovereign risk management.',
    risks: ['Environmental liability', 'State-owned enterprise negotiations', 'Sovereign immunity issues'],
    considerations: ['EIA certification', 'Energy regulator licenses', 'Local content planning'],
    scenarios: ['IPP structure development', 'Renewable energy concession negotiation'],
    support: ['Negotiating PPAs', 'Structuring project finance', 'Regulatory liaison']
  },
  {
    id: 'mining',
    name: 'Mining',
    tagline: 'Securing mineral rights and structuring extractive joint ventures.',
    size: 'medium',
    overview: 'Mining operations require meticulous adherence to the Mining Act and deep intelligence into mineral rights security.',
    risks: ['Mineral rights security', 'Resource nationalism', 'Export restrictions'],
    considerations: ['Mining licenses', 'Environmental permits', 'Export permits'],
    scenarios: ['JV structuring with local partners', 'Mineral export logistics auditing'],
    support: ['Concession protection', 'Royalties calculation advisory', 'Strategic liaison']
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    tagline: 'Structuring PPPs and managing complex project finance documentation.',
    size: 'medium',
    overview: 'Large-scale infrastructure relies on robust contractual frameworks and effective land acquisition protocols.',
    risks: ['Land acquisition hurdles', 'Construction delays', 'Financing volatility'],
    considerations: ['TIC incentives', 'Construction permits', 'Land use permits'],
    scenarios: ['Public-Private Partnership (PPP) structuring', 'LSTK contract negotiation'],
    support: ['Project finance documentation', 'Dispute avoidance strategy', 'Subcontractor compliance']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    tagline: 'Conducting deep-dive land audits and secure title transfers.',
    size: 'large',
    overview: 'Commercial real estate requires absolute clarity on land use zoning and title verification.',
    risks: ['Title verification', 'Land use zoning', 'Transfer taxes'],
    considerations: ['Certificate of title', 'Development permits', 'Tax clearances'],
    scenarios: ['Multi-use development structuring', 'Asset acquisition audits'],
    support: ['Secure title transfer', 'Zoning regulatory mapping', 'Lease enforcement']
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    tagline: 'Structuring agro-industrial investments and export logistics.',
    size: 'small',
    overview: 'Agribusiness involves navigating large-scale land leases and export regulatory frameworks.',
    risks: ['Large-scale land leases', 'Export regulations', 'Weather volatility'],
    considerations: ['Land lease agreements', 'Export licenses', 'Water usage permits'],
    scenarios: ['Agro-industrial facility setup', 'Export supply chain structuring'],
    support: ['Land audit and leasing', 'Export compliance auditing', 'Contract farming design']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'Market entry via Special Economic Zones and labor compliance auditing.',
    size: 'small',
    overview: 'Manufacturing success depends on maximizing zonal incentives and managing labor relations.',
    risks: ['Zonal incentives compliance', 'Supply chain logistics', 'Labor union dynamics'],
    considerations: ['EPZ/SEZ licenses', 'Operational permits', 'Labor certifications'],
    scenarios: ['Setting up operations in SEZs', 'Labor workforce restructuring'],
    support: ['Incentive negotiation', 'Labor law compliance auditing', 'Operational permit management']
  },
  {
    id: 'tourism',
    name: 'Tourism & Hospitality',
    tagline: 'Negotiating concessions in protected areas and international brand licensing.',
    size: 'medium',
    overview: 'The hospitality sector requires balance between conservation laws and brand standards.',
    risks: ['Concession agreements', 'Regional conservation laws', 'Security volatility'],
    considerations: ['Hotel licenses', 'Conservation permits', 'Investment approvals'],
    scenarios: ['Safari lodge concession negotiation', 'International hotel brand licensing'],
    support: ['Concession protection', 'Brand agreement drafting', 'Regulatory navigation']
  },
  {
    id: 'technology',
    name: 'Technology & Telecom',
    tagline: 'Navigating the digital economy regulations and spectrum acquisitions.',
    size: 'small',
    overview: 'The digital sector is governed by rapidly evolving spectrum and data privacy regulations.',
    risks: ['Spectrum licensing', 'Data privacy compliance', 'Infrastructure sharing'],
    considerations: ['TCRA licenses', 'Data protection registration', 'Import permits'],
    scenarios: ['Fintech entity formation', 'Spectrum license acquisition'],
    support: ['Regulatory compliance mapping', 'IP protection', 'Infrastructure sharing agreements']
  }
];

export default function IndustryBentoGrid() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryData | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
          {INDUSTRIES_INTEL.map((ind, idx) => (
            <motion.div
              key={ind.id}
              layout
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedIndustry(ind)}
              className={cn(
                "group relative bg-white border cursor-pointer p-8 lg:p-12 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-accent",
                ind.size === 'large' ? 'md:col-span-8 md:row-span-2 min-h-[400px]' : 
                ind.size === 'medium' ? 'md:col-span-6 min-h-[300px]' : 
                'md:col-span-4 min-h-[300px]'
              )}
            >
              {/* Abstract Pattern Reveal */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              </div>

              <div className="space-y-4 relative z-10">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block opacity-60 group-hover:opacity-100 transition-opacity">0{idx + 1} / Industry Sector</span>
                <h3 className={cn(
                  "font-headline font-bold text-primary group-hover:text-accent transition-colors leading-tight",
                  ind.size === 'large' ? 'text-4xl lg:text-5xl' : 'text-2xl'
                )}>
                  {ind.name}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-sm">
                  {ind.tagline}
                </p>
              </div>

              <div className="flex justify-between items-end relative z-10">
                <div className="flex items-center gap-2 text-[10px] font-bold text-primary/40 uppercase tracking-widest group-hover:text-primary transition-colors">
                  Access Intelligence <ArrowUpRight className="w-3 h-3 text-accent" />
                </div>
                <div className="w-12 h-12 bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all">
                  <span className="text-xs font-bold">INTEL</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndustry && (
          <IndustryDetailPanel 
            industry={selectedIndustry} 
            onClose={() => setSelectedIndustry(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
