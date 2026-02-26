
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AttorneysSection from '@/components/sections/AttorneysSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import SectoralCommand from '@/components/sections/SectoralCommand';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image')?.imageUrl || "https://picsum.photos/seed/gadroit-hero/1200/800";

  return (
    <div className="w-full">
      {/* Hero Section - Reduced bottom padding & min-height */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-48 pb-8 overflow-hidden bg-primary text-white border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-accent"></div>
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">Tanzania-Rooted Authority</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold leading-[1.1]">
                  International Strategy. <br />
                  <span className="text-accent italic font-normal">Local Authority.</span>
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl font-light leading-relaxed">
                  Elite legal architecture for high-stakes cross-border investment and complex dispute resolution in East Africa.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <Button asChild className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none px-10 h-12 text-[10px] font-bold tracking-widest transition-all group">
                  <Link href="/contact" className="flex items-center gap-2">
                    REQUEST CONSULTATION <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild className="w-full sm:w-auto bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-accent/50 rounded-none px-8 h-12 text-[10px] font-bold tracking-widest transition-all">
                  <Link href="/practice-areas">PRACTICE EXPERTISE</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-xl font-headline font-bold text-accent">40+</div>
                  <div className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Market Entries</div>
                </div>
                <div>
                  <div className="text-xl font-headline font-bold text-accent">$2B+</div>
                  <div className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Assets Advised</div>
                </div>
                <div>
                  <div className="text-xl font-headline font-bold text-accent">100%</div>
                  <div className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Discretion</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative aspect-square w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 border border-accent/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/5 shadow-2xl group">
                    <Image
                      src={heroImage}
                      alt="G'Adroit Authority"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      priority
                      sizes="(max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                  </div>

                  <div className="absolute -top-4 -right-4 bg-white text-primary p-4 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-accent" />
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-widest leading-none">Protocol</div>
                        <div className="text-[10px] font-bold">BIT Protected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectoral Command - High Density */}
      <SectoralCommand />

      {/* Investor Friction - Compact & Fluid */}
      <section className="py-16 md:py-24 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 lg:sticky lg:top-40">
              <div className="space-y-4">
                <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">Investor Friction</span>
                <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary leading-tight">Common Market <br />Hurdles.</h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  We provide the legal lubrication that ensures smooth operations through specific regional friction points.
                </p>
              </div>
              <div className="p-8 bg-primary text-white space-y-6 relative overflow-hidden">
                <h4 className="text-2xl font-headline font-bold leading-tight">Secure Your <br />Strategy</h4>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none h-12 px-8 font-bold tracking-widest text-[9px] w-full md:w-auto">
                  <Link href="/contact">BOOK STRATEGY SESSION</Link>
                </Button>
              </div>
            </div>
            <div className="w-full">
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: 'Market Entry & Structuring', a: 'Navigating local content laws and selecting business vehicles (TIC vs EPZ) for maximum protection.' },
                  { q: 'Regulatory Approvals', a: 'Managing licensing requirements across multiple bodies to ensure zero downtime.' },
                  { q: 'HR & Labor Compliance', a: 'Balancing international standards with complex local labor laws.' },
                  { q: 'Dispute & Asset Protection', a: 'Securing robust arbitration clauses to shield capital from judicial volatility.' },
                ].map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-primary/10">
                    <AccordionTrigger className="text-xl font-headline font-bold text-primary py-6 hover:no-underline text-left group">
                      <span className="group-hover:text-accent transition-colors">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm font-light leading-relaxed pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Attorneys & Testimonials */}
      <AttorneysSection />
      <TestimonialsSection />

      {/* Final Conversion Stage - Compact */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-7xl font-headline font-bold text-white leading-tight">Engage With <br /><span className="text-accent italic font-normal">Confidence.</span></h2>
            <p className="text-lg text-primary-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
              Providing the legal authority required for institutional investment in Tanzania and across East Africa.
            </p>
            <div className="pt-4">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-white hover:text-primary h-12 md:h-14 px-12 text-[10px] font-bold tracking-widest rounded-none shadow-xl w-full md:w-auto">
                <Link href="/contact">REQUEST CONFIDENTIAL CONSULTATION</Link>
              </Button>
            </div>
            <p className="text-[9px] uppercase tracking-[0.5em] font-bold text-accent/50">Notice: Strict Professional Discretion Guaranteed</p>
          </div>
        </div>
      </section>
    </div>
  );
}
