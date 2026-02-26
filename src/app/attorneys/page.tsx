'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ArrowRight, ShieldCheck, Award, Globe, ChevronRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export type Specialization = 'All' | 'International Business' | 'Litigation' | 'Arbitration' | 'HR & Compliance' | 'Regulatory';
export type Language = 'All' | 'English' | 'Swahili' | 'French';

export interface Attorney {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  expertise: string[];
  achievements: string[];
  languages: string[];
  specialization: Specialization;
  image: string;
}

const ATTORNEYS_DATA: Attorney[] = [
  {
    id: 'aisha-juma',
    name: 'Aisha Juma',
    role: 'Managing Partner',
    shortBio: 'Strategic lead for over 40 global market entries into East Africa.',
    fullBio: 'Aisha Juma is a recognized authority in International Investment Law. She has spent two decades bridging the gap between global corporate requirements and Tanzanian regulatory precision. Her practice focuses on high-stakes market entry strategies and sovereign risk management.',
    expertise: ['Investment Law', 'Sovereign Risk', 'Strategic Liaison'],
    achievements: ['Chambers Global Ranked 2023', 'Top 50 African Legal Leads'],
    languages: ['English', 'Swahili'],
    specialization: 'International Business',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'david-mwangi',
    name: 'David Mwangi',
    role: 'Senior Partner',
    shortBio: 'Lead counsel for multi-billion dollar commercial arbitrations.',
    fullBio: 'David specializes in complex commercial litigation and international arbitration. With a track record of successfully defending institutional assets in regional courts, he provides the "Dispute-Ready" assurance that global investors require.',
    expertise: ['Arbitration', 'Mining Disputes', 'Asset Protection'],
    achievements: ['Lead Counsel on $2B Resource Dispute', 'TIAC Board Member'],
    languages: ['English', 'Swahili', 'French'],
    specialization: 'Arbitration',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sophia-hassan',
    name: 'Sophia Hassan',
    role: 'Partner',
    shortBio: 'Expert in navigating the complex Tanzanian labor and HR landscape.',
    fullBio: 'Sophia leads the firm’s Employment & HR Compliance unit. She is instrumental for foreign employers needing to balance international corporate standards with strict local labor laws and work permit requirements.',
    expertise: ['Labor Law', 'HR Audits', 'Expatriate Compliance'],
    achievements: ['Author of "The Investor’s Guide to Tanzanian Labor"', 'Legal Advisor to 5 Fortune 500 Firms'],
    languages: ['English', 'Swahili'],
    specialization: 'HR & Compliance',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'omar-said',
    name: 'Omar Said',
    role: 'Partner',
    shortBio: 'Specializing in regulatory navigation and sectoral licensing.',
    fullBio: 'Omar provides the technical precision required for multi-agency regulatory approvals. His expertise spans energy, telecom, and industrial manufacturing, ensuring zero-downtime operational startups.',
    expertise: ['Regulatory Path', 'Licensing', 'Energy Sector'],
    achievements: ['Fast-Tracked 15+ IPP Licenses', 'Former BRELA Consultant'],
    languages: ['English', 'Swahili'],
    specialization: 'Regulatory',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
  }
];

export default function AttorneysPage() {
  const [activeSpec, setActiveSpec] = useState<Specialization>('All');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredAttorneys = useMemo(() => {
    return ATTORNEYS_DATA.filter(a => activeSpec === 'All' || a.specialization === activeSpec);
  }, [activeSpec]);

  const selectedAttorney = ATTORNEYS_DATA.find(a => a.id === selectedId);

  return (
    <div className="pt-48 md:pt-60 min-h-screen bg-white">
      {/* Editorial Hero */}
      <section className="container mx-auto px-6 lg:px-12 mb-12">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-accent"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">The Human Capital</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-headline font-bold text-primary leading-tight">
            Our <span className="text-accent italic font-normal">Experts.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
            Trusted advisors providing unparalleled authority across East Africa’s complex regulatory and commercial landscape.
          </p>
        </div>
      </section>

      {/* Institutional Filters */}
      <section className="container mx-auto px-6 lg:px-12 mb-16">
        <div className="flex flex-wrap gap-2 items-center border-y py-6">
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary/40 mr-4 flex items-center gap-2">
            <Filter className="w-3 h-3" /> Filter Specialization
          </span>
          {['All', 'International Business', 'Litigation', 'Arbitration', 'HR & Compliance', 'Regulatory'].map((spec) => (
            <button
              key={spec}
              onClick={() => setActiveSpec(spec as Specialization)}
              className={cn(
                "px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all border",
                activeSpec === spec 
                  ? "bg-primary text-white border-primary" 
                  : "bg-white text-primary/60 border-primary/10 hover:border-accent hover:text-accent"
              )}
            >
              {spec}
            </button>
          ))}
        </div>
      </section>

      {/* Expertise Canvas */}
      <section className="container mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode='popLayout'>
            {filteredAttorneys.map((attorney) => (
              <motion.div
                key={attorney.id}
                layoutId={attorney.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedId(attorney.id)}
                className="group relative bg-primary p-8 flex flex-col justify-between cursor-pointer overflow-hidden min-h-[400px] border border-primary/5 hover:border-accent transition-all duration-500"
              >
                {/* Visual Background - 20% Opacity */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={attorney.image} 
                    alt={attorney.name} 
                    fill 
                    className="object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
                </div>

                <div className="relative z-10 space-y-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold group-hover:text-white transition-colors">
                      {attorney.role}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-headline font-bold text-white leading-tight mt-1">
                      {attorney.name}
                    </h3>
                  </div>
                  <p className="text-xs text-primary-foreground/60 leading-relaxed line-clamp-3">
                    {attorney.shortBio}
                  </p>
                </div>

                <div className="relative z-10 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-accent">Briefing Access</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Briefing Side Panel */}
      <AnimatePresence>
        {selectedId && selectedAttorney && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100]"
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
                  <h3 className="text-3xl font-headline font-bold text-primary">{selectedAttorney.name}</h3>
                </div>
                <button onClick={() => setSelectedId(null)} className="p-2 border hover:bg-secondary">
                  <X className="w-5 h-5 text-primary" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10">
                <div className="relative aspect-[16/10] w-full bg-secondary/20 grayscale shadow-inner">
                  <Image src={selectedAttorney.image} alt={selectedAttorney.name} fill className="object-cover" />
                </div>

                <section className="space-y-4">
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent"></div> Professional Narrative
                  </h4>
                  <p className="text-lg text-primary font-light leading-relaxed italic">
                    "{selectedAttorney.fullBio}"
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <section className="space-y-4">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3 text-accent" /> Expertise
                    </h4>
                    <div className="space-y-2">
                      {selectedAttorney.expertise.map(exp => (
                        <div key={exp} className="text-xs font-bold text-primary border-b pb-2">{exp}</div>
                      ))}
                    </div>
                  </section>
                  <section className="space-y-4">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Award className="w-3 h-3 text-accent" /> Recognition
                    </h4>
                    <div className="space-y-2">
                      {selectedAttorney.achievements.map(award => (
                        <div key={award} className="text-xs text-primary/70">{award}</div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              <div className="p-6 md:p-8 border-t bg-secondary/10 flex flex-col gap-4">
                <Button asChild className="w-full bg-primary text-white h-12 text-xs font-bold rounded-none hover:bg-accent transition-all group">
                  <Link href="/contact" onClick={() => setSelectedId(null)}>
                    REQUEST CONFIDENTIAL BRIEFING <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
