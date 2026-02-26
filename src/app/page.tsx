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
import FirmNarrative from '@/components/sections/FirmNarrative';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import SectoralCommand from '@/components/sections/SectoralCommand';
import NewsUpdatesSection from '@/components/sections/NewsUpdatesSection';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image')?.imageUrl || "https://picsum.photos/seed/gadroit-hero/1200/800";

  return (
    <div className="w-full">
      {/* Hero Section - Compacted Padding */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center pt-20 md:pt-24 pb-8 overflow-hidden bg-primary text-white border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-accent"></div>
                  <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-accent">Tanzania-Rooted Authority</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-tight">
                  International Strategy. <br />
                  <span className="text-accent italic font-normal">Local Authority.</span>
                </h1>
                <p className="text-base md:text-lg text-primary-foreground/70 max-w-xl font-light leading-relaxed">
                  Elite legal architecture for high-stakes cross-border investment and complex dispute resolution in East Africa.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <Button asChild className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none px-8 h-12 text-[10px] font-bold tracking-widest transition-all group">
                  <Link href="/contact" className="flex items-center gap-2">
                    REQUEST CONSULTATION <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild className="w-full sm:w-auto bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-accent/50 rounded-none px-8 h-12 text-[10px] font-bold tracking-widest transition-all">
                  <Link href="/practice-areas">PRACTICE EXPERTISE</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-md">
                <div>
                  <div className="text-lg font-headline font-bold text-accent">40+</div>
                  <div className="text-[7px] uppercase tracking-widest text-white/40 font-bold">Market Entries</div>
                </div>
                <div>
                  <div className="text-lg font-headline font-bold text-accent">$2B+</div>
                  <div className="text-[7px] uppercase tracking-widest text-white/40 font-bold">Assets Advised</div>
                </div>
                <div>
                  <div className="text-lg font-headline font-bold text-accent">100%</div>
                  <div className="text-[7px] uppercase tracking-widest text-white/40 font-bold">Discretion</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative aspect-square w-full max-w-[350px] mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 border border-accent/10 rounded-full animate-[spin_25s_linear_infinite]"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/5 shadow-2xl group">
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

                  <div className="absolute -top-2 -right-2 bg-white text-primary p-3 shadow-2xl border border-primary/5">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-accent" />
                      <div>
                        <div className="text-[8px] font-bold uppercase tracking-widest leading-none">Protocol</div>
                        <div className="text-[9px] font-bold">BIT Protected</div>
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

      {/* Investor Friction - Compacted Vertical Spacing */}
      <section className="py-12 md:py-16 bg-secondary/20 overflow-hidden border-b">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 lg:sticky lg:top-32">
              <div className="space-y-3">
                <span className="text-accent font-bold text-[10px] tracking-[0.4em] uppercase">Investor Friction</span>
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary leading-tight">Common Market <br />Hurdles.</h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed max-w-lg">
                  We provide the legal lubrication that ensures smooth operations through specific regional friction points.
                </p>
              </div>
              <div className="p-6 bg-primary text-white space-y-4 relative overflow-hidden max-w-sm border border-white/5 shadow-xl">
                <h4 className="text-xl font-headline font-bold leading-tight">Secure Your Strategy</h4>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none h-12 px-8 font-bold tracking-widest text-[9px] w-full">
                  <Link href="/contact">BOOK STRATEGY SESSION</Link>
                </Button>
              </div>
            </div>
            <div className="w-full bg-white/50 backdrop-blur-sm p-4 md:p-8 border border-primary/5 shadow-inner">
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: 'Market Entry & Structuring', a: 'Navigating local content laws and selecting business vehicles (TIC vs EPZ) for maximum protection.' },
                  { q: 'Regulatory Approvals', a: 'Managing licensing requirements across multiple bodies to ensure zero downtime.' },
                  { q: 'HR & Labor Compliance', a: 'Balancing international standards with complex local labor laws.' },
                  { q: 'Dispute & Asset Protection', a: 'Securing robust arbitration clauses to shield capital from judicial volatility.' },
                ].map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-primary/10">
                    <AccordionTrigger className="text-lg font-headline font-bold text-primary py-5 hover:no-underline text-left group">
                      <span className="group-hover:text-accent transition-colors">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xs md:text-sm font-light leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Attorneys & Firm Narrative */}
      <AttorneysSection />
      <FirmNarrative />
      
      <TestimonialsSection />

      {/* News & Updates Section - From Reference Image */}
      <NewsUpdatesSection />

      {/* Final Conversion Stage - High Performance h-12 standard */}
      <section className="py-12 md:py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight">Engage With <br /><span className="text-accent italic font-normal">Confidence.</span></h2>
            <p className="text-base md:text-xl text-primary-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
              Providing the legal authority required for institutional investment in Tanzania and across East Africa.
            </p>
            <div className="pt-2">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-white hover:text-primary h-12 px-10 md:px-12 text-[10px] font-bold tracking-widest rounded-none shadow-xl w-full md:w-auto uppercase">
                <Link href="/contact">Request Confidential Consultation</Link>
              </Button>
            </div>
            <p className="text-[8px] uppercase tracking-[0.5em] font-bold text-accent/50 mt-4">Notice: Strict Professional Discretion Guaranteed</p>
          </div>
        </div>
      </section>
    </div>
  );
}
