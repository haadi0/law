
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, CheckCircle2, Globe, Shield, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PRACTICE_AREAS, INDUSTRIES } from '@/lib/data';
import AttorneysSection from '@/components/sections/AttorneysSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image')?.imageUrl || "https://picsum.photos/seed/gadroit-hero/1200/800";

  return (
    <div className="w-full">
      {/* Hero Section - Optimized for 3-tier header */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-64 md:pt-72 pb-24 overflow-hidden bg-primary text-white">
        {/* Background Subtle Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content: The Strategy */}
            <div className="lg:col-span-7 space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-accent"></div>
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">Tanzania-Rooted Authority</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-headline font-bold leading-[1.05]">
                  International Strategy. <br />
                  <span className="text-accent italic font-normal">Local Authority.</span>
                </h1>
                <p className="text-lg md:text-2xl text-primary-foreground/70 max-w-2xl font-light leading-relaxed">
                  We provide the elite legal architecture required for significant cross-border investment and complex dispute resolution in the East African region.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-6 pt-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none px-12 h-16 text-base font-bold transition-all shadow-2xl shadow-black/20 group">
                  <Link href="/contact" className="flex items-center gap-2">
                    Request Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-accent/50 rounded-none px-10 h-16 text-base font-bold transition-all">
                  <Link href="/practice-areas">Practice Expertise</Link>
                </Button>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
                <div>
                  <div className="text-2xl font-headline font-bold text-accent">40+</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Market Entries</div>
                </div>
                <div>
                  <div className="text-2xl font-headline font-bold text-accent">$2B+</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Assets Advised</div>
                </div>
                <div>
                  <div className="text-2xl font-headline font-bold text-accent">100%</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Confidentiality</div>
                </div>
              </div>
            </div>

            {/* Right Visual: The Authority Mesh */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative aspect-square w-full">
                {/* Main Composition Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Rotating Orbit rings */}
                  <div className="absolute inset-0 border border-accent/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-8 border border-accent/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  
                  {/* The Anchor Image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/5 shadow-2xl group">
                    <Image
                      src={heroImage}
                      alt="G'Adroit Authority"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      priority
                      data-ai-hint="modern architecture law office"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Floating Intel Tags */}
                  <div className="absolute -top-4 -right-4 bg-white text-primary p-4 shadow-2xl animate-bounce duration-[3000ms]">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-accent" />
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest">Protocol</div>
                        <div className="text-xs font-bold">BIT Protected</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-12 -left-8 bg-accent text-white p-4 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <Scale className="w-5 h-5 text-white" />
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/80">Compliance</div>
                        <div className="text-xs font-bold">TIC & BRELA Sync</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 -bottom-10 -right-10 w-48 h-48 bg-accent/20 blur-3xl rounded-full"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Authority Marquee Strip */}
      <section className="py-10 border-b bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {['Tanzania-rooted', 'International-standard', 'Investor-focused', 'Dispute-ready', 'Regulatory-intelligence'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Firm Philosophy */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">Firm Narrative</span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight">Navigating Complexity <br />with Precision.</h2>
              </div>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                G&apos;Adroit Attorneys is an elite legal practice serving as the preferred counsel for international corporations entering the East African market. We bridge the gap between global requirements and local regulatory precision.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {[
                  { title: 'Predictive Intelligence', desc: 'Identifying regulatory shifts before they impact operations.' },
                  { title: 'Sovereign Recourse', desc: 'Utilizing international treaties to safeguard foreign capital.' },
                ].map((pillar) => (
                  <div key={pillar.title} className="space-y-3 p-6 bg-white border border-primary/5 shadow-sm group hover:border-accent transition-all">
                    <h4 className="font-headline font-bold text-primary text-lg">{pillar.title}</h4>
                    <p className="text-sm text-muted-foreground font-light">{pillar.desc}</p>
                  </div>
                ))}
              </div>
              <Button asChild variant="link" className="text-accent p-0 font-bold group text-base">
                <Link href="/about" className="flex items-center">
                  Explore our Methodology <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-[4/5] shadow-2xl overflow-hidden group">
              <Image
                src="https://picsum.photos/seed/gadroit-office/800/1000"
                alt="Elite Law Office"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                data-ai-hint="luxury office meeting"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-primary via-primary/40 to-transparent text-white">
                 <div className="text-3xl font-headline italic font-normal mb-2">"Absolute professional discretion is our baseline."</div>
                 <div className="text-xs uppercase tracking-widest font-bold text-accent">Founding Principle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Snapshot */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <div className="inline-block h-1 w-12 bg-accent"></div>
              <h2 className="text-4xl md:text-6xl font-headline font-bold">Specialized Expertise.</h2>
              <p className="text-primary-foreground/60 max-w-xl text-lg font-light">
                Our practice is built around the specific high-stakes requirements of cross-border commerce and industrial operations.
              </p>
            </div>
            <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white rounded-none px-10 h-14 font-bold tracking-widest text-xs">
              <Link href="/practice-areas">ALL PRACTICES</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/10 border border-white/10">
            {PRACTICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group relative p-12 bg-primary hover:bg-white/5 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-accent font-bold opacity-10 text-6xl group-hover:opacity-20 transition-opacity">
                  {PRACTICE_AREAS.indexOf(area) + 1}
                </div>
                <h3 className="text-2xl font-headline font-bold mb-6 group-hover:text-accent transition-colors">{area.title}</h3>
                <p className="text-sm text-primary-foreground/50 mb-8 leading-relaxed font-light">
                  {area.description}
                </p>
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] flex items-center">
                  Access Intelligence <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Integration */}
      <section className="py-24 bg-background border-b">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
               <h2 className="text-4xl font-headline font-bold text-primary mb-6 leading-tight">Sectoral <br /><span className="text-accent italic font-normal">Command.</span></h2>
               <p className="text-muted-foreground font-light leading-relaxed">Tailored legal strategies for the high-growth industries driving East African transformation.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {INDUSTRIES.map((industry) => (
                <div
                  key={industry.name}
                  className="p-8 bg-white border border-border flex flex-col items-center justify-center text-center group hover:border-accent transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-headline font-bold text-primary text-sm tracking-tight">{industry.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Attorneys Section */}
      <AttorneysSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Investor Challenges Accordion */}
      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-10 sticky top-40">
              <div className="space-y-6">
                <span className="text-accent font-bold text-xs tracking-[0.4em] uppercase">Investor Friction</span>
                <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary leading-tight">Common Market <br />Hurdles.</h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  We understand the specific friction points of foreign direct investment. Our role is to provide the legal lubrication that ensures smooth operations.
                </p>
              </div>
              <div className="p-10 bg-primary text-white space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 -mr-24 -mt-24 rounded-full"></div>
                <h4 className="text-2xl font-headline font-bold">Secure Your Entry Strategy</h4>
                <p className="text-sm text-primary-foreground/60 font-light leading-relaxed">Schedule a partner-led session to map your regulatory path in Tanzania.</p>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none px-8 h-14 font-bold tracking-widest text-xs">
                  <Link href="/contact">BOOK STRATEGY SESSION</Link>
                </Button>
              </div>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: 'Market Entry & Structuring Risk', a: 'Navigating local content laws and selecting optimal business vehicles (TIC vs EPZ) for maximum asset protection and operational efficiency.' },
                  { q: 'Multi-Agency Regulatory Approvals', a: 'Aggressively managing the licensing requirements of multiple governing bodies to ensure zero downtime in starting operations.' },
                  { q: 'HR & Labor Compliance', a: 'Balancing international corporate standards with complex local labor laws and strict expatriate work permit requirements.' },
                  { q: 'Dispute & Asset Protection', a: 'Securing robust arbitration clauses that allow for international recourse, shielding your capital from judicial volatility.' },
                  { q: 'JV Governance & Local Partnerships', a: 'Mitigating risks in local joint ventures through ironclad shareholder agreements that define clear exit and control mechanisms.' },
                ].map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-primary/10">
                    <AccordionTrigger className="text-xl font-headline font-bold text-primary py-8 hover:no-underline text-left group">
                      <span className="group-hover:text-accent transition-colors">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg font-light leading-relaxed pb-8 pr-12">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Stage */}
      <section className="py-40 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-8xl font-headline font-bold text-white leading-tight">Engage With <br /><span className="text-accent italic font-normal">Confidence.</span></h2>
            <p className="text-xl md:text-2xl text-primary-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
              Providing the legal authority and international perspective required for significant institutional investment in Tanzania and beyond.
            </p>
            <div className="pt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary py-10 px-16 text-2xl rounded-none transition-all duration-500 shadow-2xl font-bold">
                <Link href="/contact">Request Confidential Consultation</Link>
              </Button>
            </div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent/50">Notice: High-Priority Professional Discretion Guaranteed</p>
          </div>
        </div>
      </section>
    </div>
  );
}
