
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Attorney } from '@/app/attorneys/page';
import { X, ArrowRight, ShieldCheck, Award, Globe, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface AttorneyGridProps {
  attorneys: Attorney[];
}

export default function AttorneyGrid({ attorneys }: AttorneyGridProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedAttorney = attorneys.find(a => a.id === selectedId);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence mode='popLayout'>
          {attorneys.map((attorney) => (
            <motion.div
              layoutId={attorney.id}
              key={attorney.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setSelectedId(attorney.id)}
              className="group relative bg-white border border-primary/5 p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 hover:border-accent hover:shadow-2xl overflow-hidden min-h-[400px]"
            >
              {/* Background Reveal Bio */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out z-0"></div>

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold group-hover:text-white transition-colors">
                    {attorney.role}
                  </span>
                  <h3 className="text-3xl font-headline font-bold text-primary group-hover:text-white transition-colors leading-tight">
                    {attorney.name}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground group-hover:text-white/60 transition-colors leading-relaxed line-clamp-3">
                  {attorney.shortBio}
                </p>

                <div className="pt-4 border-t border-primary/5 group-hover:border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="flex flex-wrap gap-2">
                    {attorney.expertise.map(exp => (
                      <span key={exp} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-white/10 text-accent border border-white/5">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-bold uppercase tracking-widest text-primary group-hover:text-white">Expertise Intelligence</span>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Profile Expansion Side Rail */}
      <AnimatePresence>
        {selectedId && selectedAttorney && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-primary/20 backdrop-blur-[2px] z-[100]"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:max-w-xl bg-white shadow-2xl z-[110] flex flex-col border-l border-border"
            >
              {/* Briefing Header */}
              <div className="p-8 border-b flex justify-between items-center bg-white sticky top-0 z-20">
                <div className="space-y-1">
                  <span className="text-accent font-bold text-[8px] tracking-[0.4em] uppercase">Intelligence Briefing</span>
                  <h3 className="text-3xl font-headline font-bold text-primary leading-none">{selectedAttorney.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedId(null)}
                  className="p-3 hover:bg-secondary rounded-none transition-colors border border-border"
                >
                  <X className="w-5 h-5 text-primary" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-12">
                {/* Hero Portrait in Drawer */}
                <div className="relative aspect-[16/9] w-full bg-secondary/20 overflow-hidden shadow-inner">
                  <Image 
                    src={selectedAttorney.image} 
                    alt={selectedAttorney.name} 
                    fill 
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>

                <section className="space-y-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent"></div> Professional Narrative
                  </h4>
                  <p className="text-lg text-primary font-light leading-relaxed italic">
                    "{selectedAttorney.fullBio}"
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <section className="space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3 text-accent" /> Specializations
                    </h4>
                    <ul className="space-y-3">
                      {selectedAttorney.expertise.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-primary text-sm font-bold border-b border-border pb-2">
                          <ChevronRight className="w-3 h-3 text-accent" /> {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Award className="w-3 h-3 text-accent" /> Recognition
                    </h4>
                    <ul className="space-y-3">
                      {selectedAttorney.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-primary text-sm font-medium leading-tight">
                          <span className="text-accent">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <section className="space-y-4 pt-8 border-t">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Globe className="w-3 h-3 text-accent" /> Linguistic Capabilities
                  </h4>
                  <div className="flex gap-2">
                    {selectedAttorney.languages.map(lang => (
                      <span key={lang} className="px-3 py-1 bg-secondary/50 text-[10px] font-bold uppercase tracking-widest text-primary">
                        {lang}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              {/* Action Row */}
              <div className="p-8 border-t bg-secondary/10 flex flex-col gap-4">
                <Button asChild className="w-full bg-primary text-white py-8 text-xs font-bold rounded-none hover:bg-accent transition-all group">
                  <Link href="/contact" onClick={() => setSelectedId(null)}>
                    REQUEST CONFIDENTIAL BRIEFING <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <p className="text-[8px] text-center text-muted-foreground font-bold tracking-[0.2em] uppercase">
                  Subject to conflict-of-interest verification protocol
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
