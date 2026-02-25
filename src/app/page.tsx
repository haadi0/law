import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PRACTICE_AREAS, INDUSTRIES } from '@/lib/data';
import AttorneysSection from '@/components/sections/AttorneysSection';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Optimized padding for 3-tier header */}
      <section className="relative min-h-screen flex items-center pt-64 md:pt-72 pb-24 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://picsum.photos/seed/gadroit-hero/1920/1080"
            alt="Dar es Salaam Skyline"
            fill
            className="object-cover"
            priority
            data-ai-hint="modern architecture office"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-1"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="space-y-4">
              <div className="inline-block h-1.5 w-16 bg-accent mb-4"></div>
              <h1 className="text-5xl md:text-8xl font-headline font-bold leading-[1.1]">
                International Strategy. <br />
                <span className="text-accent italic font-normal">Local Authority.</span>
              </h1>
              <p className="text-lg md:text-2xl text-primary-foreground/80 max-w-2xl font-light leading-relaxed">
                Tanzania-based, investor-focused, and dispute-ready. We bridge the gap between global standards and local regulatory precision.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-6 pt-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none px-10 h-16 text-base font-bold transition-all shadow-xl shadow-black/20">
                <Link href="/contact">Request Consultation</Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-accent/50 hover:text-primary rounded-none px-10 h-16 text-base font-bold transition-all">
                <Link href="/practice-areas">Practice Areas</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Authority Strip Decorative lines */}
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 border-l border-t border-accent/20 -mr-12 -mb-12 pointer-events-none"></div>
      </section>

      {/* Authority Strip */}
      <section className="py-12 border-b bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-between items-center gap-8">
            {['Tanzania-rooted', 'International-standard', 'Investor-focused', 'Dispute-ready'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-xs uppercase tracking-widest font-bold text-primary/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold text-primary">Navigating Complexity with Precision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                G&apos;Adroit Attorneys is an elite legal practice serving as the preferred counsel for international corporations entering the East African market. We specialize in mitigating the risks inherent in emerging markets through deep local knowledge and international legal excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {[
                  { title: 'Precision', desc: 'Meticulous attention to regulatory nuances.' },
                  { title: 'Risk Mitigation', desc: 'Proactive protection of foreign assets.' },
                  { title: 'Commercial Alignment', desc: 'Law that serves your business growth.' },
                ].map((pillar) => (
                  <div key={pillar.title} className="space-y-2 border-l-2 border-accent pl-4">
                    <h4 className="font-bold text-primary">{pillar.title}</h4>
                    <p className="text-xs text-muted-foreground">{pillar.desc}</p>
                  </div>
                ))}
              </div>
              <Button asChild variant="link" className="text-accent p-0 font-bold group">
                <Link href="/about" className="flex items-center">
                  Our Firm Philosophy <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] shadow-2xl overflow-hidden group">
              <Image
                src="https://picsum.photos/seed/gadroit-office/800/600"
                alt="Elite Law Office"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="luxury office meeting"
              />
              <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Snapshot */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <div className="inline-block h-1 w-12 bg-accent"></div>
              <h2 className="text-4xl font-headline font-bold">Specialized Expertise</h2>
              <p className="text-primary-foreground/60 max-w-xl">
                Our practice is built around the specific needs of cross-border commerce and complex industrial operations.
              </p>
            </div>
            <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white rounded-none">
              <Link href="/practice-areas">View All Practices</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group relative p-8 bg-primary-foreground/5 border border-white/10 hover:border-accent/50 transition-all duration-300"
              >
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full"></div>
                <h3 className="text-xl font-headline font-bold mb-4">{area.title}</h3>
                <p className="text-sm text-primary-foreground/60 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <span className="text-xs font-bold text-accent flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">Strategic Industry Focus</h2>
            <p className="text-muted-foreground">Tailored legal solutions for the sectors driving East African growth.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.name}
                className="p-8 bg-white border border-border flex flex-col items-center justify-center text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-headline font-bold text-primary">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Attorneys Section */}
      <AttorneysSection />

      {/* Investor Challenges Accordion */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold text-primary">Investor Challenges in East Africa</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand the friction points of foreign direct investment. Our role is to provide the legal lubrication that ensures smooth operations.
              </p>
              <div className="p-8 bg-primary text-white space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 -mr-16 -mt-16 rounded-full"></div>
                <h4 className="text-xl font-headline font-bold">Ready to secure your investment?</h4>
                <p className="text-sm text-primary-foreground/60">Schedule a confidential strategy session with our senior partners.</p>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: 'Market Entry Risk', a: 'Navigating local content laws and structuring entities for maximum protection and efficiency.' },
                  { q: 'Regulatory Approvals', a: 'Managing multi-agency licensing requirements to ensure zero downtime in operations.' },
                  { q: 'HR Compliance', a: 'Balancing international corporate standards with local labor laws and work permit requirements.' },
                  { q: 'Dispute Protection', a: 'Securing robust arbitration clauses and protecting assets from judicial volatility.' },
                  { q: 'JV Structuring', a: 'Mitigating risks in local partnerships through ironclad shareholder agreements.' },
                ].map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-border">
                    <AccordionTrigger className="text-lg font-headline font-semibold text-primary py-6 hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-headline font-bold text-white mb-8">Engage With Confidence.</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 font-light">
            Providing the legal authority and international perspective required for significant investment in Tanzania and beyond.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary py-8 px-12 text-xl rounded-none transition-all duration-300">
            <Link href="/contact">Request Confidential Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
