'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Pickaxe, 
  Building2, 
  Construction, 
  Sprout, 
  Factory, 
  X,
  ShieldCheck,
  AlertCircle,
  Scale,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface IndustrySector {
  id: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  size: 'large' | 'medium' | 'small';
  riskLevel: 'Critical' | 'High' | 'Strategic';
  overview: string;
  risks: string[];
  considerations: string[];
  support: string[];
  image: string;
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
    support: ['Negotiating PPAs', 'Structuring project finance', 'Regulatory liaison'],
    image: 'https://images.unsplash.com/photo-1638068109816-651dc602fe4c?auto=format&fit=crop&q=80&w=800'
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
    support: ['Concession protection', 'Royalties calculation advisory', 'Strategic liaison'],
    image: 'https://images.unsplash.com/photo-1654461339456-66664ede67dd?auto=format&fit=crop&q=80&w=800'
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
    support: ['Secure title transfer', 'Zoning regulatory mapping', 'Lease enforcement'],
    image: 'https://images.unsplash.com/photo-1647654337839-aefb90cc15aa?auto=format&fit=crop&q=80&w=800'
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
    support: ['Project finance documentation', 'Dispute avoidance strategy', 'Subcontractor compliance'],
    image: 'https://images.unsplash.com/photo-1770965568850-6a4616d936cc?auto=format&fit=crop&q=80&w=800'
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
    support: ['Land audit and leasing', 'Export compliance auditing', 'Contract farming design'],
    image: 'https://images.unsplash.com/photo-1684552389273-3928c8047ca8?auto=format&fit=crop&q=80&w=800'
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
    support: ['Incentive negotiation', 'Labor law compliance auditing', 'Operational permit management'],
    image: 'https://images.unsplash.com/photo-1763621550224-6ff277b8c754?auto=format&fit=crop&q=80&w=800'
  }
];

export default function SectoralCommand() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrySector | null>(null);

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-accent"></div>
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">Sectoral Command</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary leading-tight">
              Tailored Legal <span className="text-accent italic font-normal">Strategies.</span>
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-lg">
              Precision counsel for high-growth sectors driving the East African economic transformation.
            </p>
          </div>
        </div>

        {/* Bento Grid - Refined 20% Opacity Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.id}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedIndustry(industry)}
              className={cn(
                "group relative bg-primary p-6 md:p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 border border-border/10 hover:border-accent shadow-sm overflow-hidden",
                industry.size === 'large' ? 'md:col-span-12 lg:col-span-6 min-h-[280px]' : 
                industry.size === 'medium' ? 'md:col-span-6 min-h-[220px]' : 
                'md:col-span-6 lg:col-span-3 min-h-[220px]'
              )}
            >
              {/* Background Image - Lightened Overlay (20%) */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={industry.image} 
                  alt={industry.name} 
                  fill 
                  className="object-cover grayscale opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint="industrial sector"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent"></div>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                    <industry.icon className="w-5 h-5" />
                  </div>
                  <span className={cn(
                    "text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5",
                    industry.riskLevel === 'Critical' ? 'text-destructive' : 'text-accent'
                  )}>
                    {industry.riskLevel} Risk
                  </span>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-white group-hover:text-accent transition-colors leading-tight">
                    {industry.name}
                  </h3>
                  <p className="text-[10px] text-white/60 font-bold leading-relaxed uppercase tracking-wider">
                    {industry.tagline}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">Access Briefing</span>
                <ArrowUpRight className="w-3 h-3 text-accent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Action */}
        <div className="mt-10 flex items-center justify-center">
          <Button asChild className="bg-primary text-white hover:bg-accent rounded-none h-11 px-10 text-[9px] font-bold tracking-widest transition-all w-full md:w-auto uppercase">
            <Link href="/industries" className="flex items-center gap-2">
              ACCESS SECTORAL ARCHIVE <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Intelligence Panel */}
      <AnimatePresence>
        {selectedIndustry && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="fixed inset-0 bg-primary/20 backdrop-blur-[2px] z-[100]"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:max-w-xl bg-white shadow-2xl z-[110] flex flex-col border-l border-border"
            >
              <div className="p-6 md:p-8 border-b flex justify-between items-center bg-white sticky top-0 z-20">
                <div className="space-y-1">
                  <span className="text-accent font-bold text-[9px] tracking-[0.4em] uppercase">Intelligence Briefing</span>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary leading-none">{selectedIndustry.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedIndustry(null)}
                  className="p-2 border hover:bg-secondary rounded-none transition-colors border-border"
                >
                  <X className="w-5 h-5 text-primary" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10">
                <section className="space-y-3">
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent"></div> Executive Summary
                  </h4>
                  <p className="text-base text-primary font-light leading-relaxed">
                    {selectedIndustry.overview}
                  </p>
                </section>

                <div className="space-y-8">
                  <section className="p-6 bg-destructive/[0.03] border border-destructive/10 space-y-4">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-destructive flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" /> Strategic Risks
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedIndustry.risks.map((risk, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs font-medium text-primary/80">
                          <span className="text-destructive mt-1">•</span>
                          <span>{risk}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Scale className="w-4 h-4 text-accent" /> Regulatory Path
                    </h4>
                    <div className="space-y-2">
                      {selectedIndustry.considerations.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs font-light border-b border-border pb-2 text-primary/70">
                          <div className="w-1 h-1 bg-accent rounded-full"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="p-6 bg-primary text-white space-y-4 shadow-xl">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-accent" /> G&apos;Adroit Support
                    </h4>
                    <div className="space-y-3">
                      {selectedIndustry.support.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs font-bold leading-tight">
                          <ArrowUpRight className="w-3 h-3 text-accent shrink-0" /> 
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              <div className="p-6 md:p-8 border-t bg-secondary/10 flex flex-col gap-3">
                <Button asChild className="w-full bg-primary text-white h-12 text-[10px] font-bold tracking-widest rounded-none hover:bg-accent transition-all group uppercase">
                  <Link href="/contact" onClick={() => setSelectedIndustry(null)}>
                    REQUEST SECTORAL AUDIT <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
