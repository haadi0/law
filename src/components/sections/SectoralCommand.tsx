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
  X,
  ShieldCheck,
  AlertCircle,
  Scale,
  Gavel,
  ChevronRight,
  ArrowUpRight,
  TrendingUp
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
  riskLevel: 'Critical' | 'High' | 'Strategic';
  overview: string;
  risks: string[];
  considerations: string[];
  support: string[];
}

const INDUSTRIES: IndustrySector[] = [
  {
    id: 'energy',
    name: 'Energy & Natural Resources',
    tagline: 'PPAs & Resource Concessions.',
    icon: Zap,
    size: 'large',
    riskLevel: 'Critical',
    overview: 'The energy sector in East Africa is defined by complex multi-agency licensing and sovereign risk management.',
    risks: ['Environmental liability', 'State-owned enterprise negotiations', 'Sovereign immunity issues'],
    considerations: ['EIA certification', 'Energy regulator licenses', 'Local content planning'],
    support: ['Negotiating PPAs', 'Structuring project finance', 'Regulatory liaison']
  },
  {
    id: 'mining',
    name: 'Mining',
    tagline: 'Mineral Rights & Extractive JVs.',
    icon: Pickaxe,
    size: 'large',
    riskLevel: 'Critical',
    overview: 'Mining operations require meticulous adherence to the Mining Act and deep intelligence into mineral rights security.',
    risks: ['Mineral rights security', 'Resource nationalism', 'Export restrictions'],
    considerations: ['Mining licenses', 'Environmental permits', 'Export permits'],
    support: ['Concession protection', 'Royalties calculation advisory', 'Strategic liaison']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    tagline: 'Land Audits & Title Verification.',
    icon: Building2,
    size: 'medium',
    riskLevel: 'High',
    overview: 'Commercial real estate requires absolute clarity on land use zoning and title verification.',
    risks: ['Title verification', 'Land use zoning', 'Transfer taxes'],
    considerations: ['Certificate of title', 'Development permits', 'Tax clearances'],
    support: ['Secure title transfer', 'Zoning regulatory mapping', 'Lease enforcement']
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    tagline: 'PPP Structuring & Project Finance.',
    icon: Construction,
    size: 'medium',
    riskLevel: 'High',
    overview: 'Large-scale infrastructure relies on robust contractual frameworks and effective land acquisition protocols.',
    risks: ['Land acquisition hurdles', 'Construction delays', 'Financing volatility'],
    considerations: ['TIC incentives', 'Construction permits', 'Land use permits'],
    support: ['Project finance documentation', 'Dispute avoidance strategy', 'Subcontractor compliance']
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    tagline: 'Agro-Industrial Leases & Logistics.',
    icon: Sprout,
    size: 'small',
    riskLevel: 'Strategic',
    overview: 'Agribusiness involves navigating large-scale land leases and export regulatory frameworks.',
    risks: ['Large-scale land leases', 'Export regulations', 'Weather volatility'],
    considerations: ['Land lease agreements', 'Export licenses', 'Water usage permits'],
    support: ['Land audit and leasing', 'Export compliance auditing', 'Contract farming design']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tagline: 'SEZ Entry & Zonal Incentives.',
    icon: Factory,
    size: 'small',
    riskLevel: 'High',
    overview: 'Manufacturing success depends on maximizing zonal incentives and managing labor relations.',
    risks: ['Zonal incentives compliance', 'Supply chain logistics', 'Labor union dynamics'],
    considerations: ['EPZ/SEZ licenses', 'Operational permits', 'Labor certifications'],
    support: ['Incentive negotiation', 'Labor law compliance auditing', 'Operational permit management']
  },
  {
    id: 'tourism',
    name: 'Tourism & Hospitality',
    tagline: 'Concessions & Brand Licensing.',
    icon: Palmtree,
    size: 'small',
    riskLevel: 'Strategic',
    overview: 'The hospitality sector requires balance between conservation laws and brand standards.',
    risks: ['Concession agreements', 'Regional conservation laws', 'Security volatility'],
    considerations: ['Hotel licenses', 'Conservation permits', 'Investment approvals'],
    support: ['Concession protection', 'Brand agreement drafting', 'Regulatory navigation']
  },
  {
    id: 'telecom',
    name: 'Technology & Telecom',
    tagline: 'Spectrum & Data Privacy Compliance.',
    icon: Rss,
    size: 'small',
    riskLevel: 'High',
    overview: 'The digital sector is governed by rapidly evolving spectrum and data privacy regulations.',
    risks: ['Spectrum licensing', 'Data privacy compliance', 'Infrastructure sharing'],
    considerations: ['TCRA licenses', 'Data protection registration', 'Import permits'],
    support: ['Regulatory compliance mapping', 'IP protection', 'Infrastructure sharing agreements']
  }
];

export default function SectoralCommand() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrySector | null>(null);

  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative border-y border-white/5">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Condensed Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 bg-accent"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Institutional Focus</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-headline font-bold leading-none">
              Sectoral <span className="text-accent italic font-normal">Command.</span>
            </h2>
            <p className="text-lg text-primary-foreground/60 font-light leading-relaxed">
              Targeted legal architecture for high-growth East African industries.
            </p>
          </div>
          <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/5 hover:border-accent rounded-none h-12 px-8 text-xs font-bold tracking-widest">
            <Link href="/industries">EXPLORE ALL SECTORS</Link>
          </Button>
        </div>

        {/* Dense Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 bg-white/10 border border-white/10">
          {INDUSTRIES.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedIndustry(industry)}
              className={cn(
                "group relative bg-primary p-6 lg:p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:bg-white/5",
                industry.size === 'large' ? 'md:col-span-6 lg:col-span-4' : 
                industry.size === 'medium' ? 'md:col-span-6 lg:col-span-4' : 
                'md:col-span-4 lg:col-span-2'
              )}
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-accent/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                    <industry.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] uppercase tracking-widest text-white/30 font-bold">Risk Exposure</span>
                    <span className={cn(
                      "text-[9px] font-bold uppercase tracking-tighter",
                      industry.riskLevel === 'Critical' ? 'text-destructive' : 
                      industry.riskLevel === 'High' ? 'text-accent' : 'text-green-500'
                    )}>
                      {industry.riskLevel}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-headline font-bold text-white group-hover:text-accent transition-colors leading-tight">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-primary-foreground/40 font-light leading-relaxed line-clamp-2">
                    {industry.tagline}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                  Access Intel <ArrowUpRight className="w-3 h-3 text-accent" />
                </span>
                <span className="text-[10px] font-headline italic text-accent">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Intelligence Briefing Panel */}
      <AnimatePresence>
        {selectedIndustry && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="fixed inset-0 bg-primary/80 backdrop-blur-md z-[100]"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:max-w-xl bg-white shadow-2xl z-[110] flex flex-col text-primary"
            >
              {/* Panel Header - High Density */}
              <div className="p-6 lg:p-8 border-b flex justify-between items-center bg-white sticky top-0 z-20">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 text-accent" />
                    <span className="text-accent font-bold text-[9px] tracking-[0.4em] uppercase">Sectoral Intelligence Briefing</span>
                  </div>
                  <h3 className="text-3xl font-headline font-bold leading-none">{selectedIndustry.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedIndustry(null)}
                  className="p-3 hover:bg-secondary rounded-none transition-colors border border-primary/5"
                  aria-label="Close Briefing"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Panel Content - Tight & Professional */}
              <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-10">
                <section className="space-y-3">
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div> Executive Summary
                  </h4>
                  <p className="text-base text-primary font-light leading-relaxed">
                    {selectedIndustry.overview}
                  </p>
                </section>

                <div className="grid grid-cols-1 gap-8">
                  <section className="p-6 bg-destructive/5 border border-destructive/10 space-y-4">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-destructive flex items-center gap-2">
                      <AlertCircle className="w-3 h-3" /> Principal Legal Risks
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedIndustry.risks.map((risk, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm font-medium">
                          <span className="text-destructive mt-0.5">•</span>
                          <span>{risk}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Scale className="w-3 h-3 text-accent" /> Regulatory Thresholds
                    </h4>
                    <div className="space-y-3">
                      {selectedIndustry.considerations.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-light border-b border-primary/5 pb-2">
                          <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="p-6 bg-primary text-white space-y-4">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                      <Gavel className="w-3 h-3" /> G&apos;Adroit Advantage
                    </h4>
                    <div className="space-y-3">
                      {selectedIndustry.support.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm font-bold">
                          <ShieldCheck className="w-4 h-4 text-accent shrink-0" /> 
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              {/* Panel Footer - Strong CTA */}
              <div className="p-6 lg:p-8 border-t bg-secondary/10 flex flex-col gap-4">
                <Button asChild className="w-full bg-primary text-white py-7 text-sm font-bold rounded-none hover:bg-accent transition-all group">
                  <Link href="/contact" onClick={() => setSelectedIndustry(null)}>
                    REQUEST CONFIDENTIAL BRIEFING <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <div className="text-center">
                   <Link href="/investor-resources" className="text-[10px] font-bold text-primary/40 hover:text-accent transition-colors uppercase tracking-widest">
                     Access Archive Support Documents →
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
