
import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Scale, Globe, Users, Gavel, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PRACTICE_AREAS } from '@/lib/data';

const IconMap: Record<string, any> = {
  Globe, Users, Scale, Gavel, ShieldCheck
};

export const metadata = {
  title: "Practice Areas | G'Adroit Attorneys",
  description: 'Specialized legal expertise for international business, employment, litigation, arbitration, and regulatory compliance.',
};

export default function PracticeAreasPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-headline font-bold">Specialized Legal Authority</h1>
            <p className="text-xl text-primary-foreground/80 font-light">
              Providing sophisticated legal counsel for complex commercial environments and international standard operations.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PRACTICE_AREAS.map((area) => {
              const Icon = IconMap[area.icon] || Scale;
              return (
                <div key={area.slug} className="group relative bg-white border p-12 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="w-16 h-16 bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Expert Counsel</span>
                    </div>
                    <h2 className="text-3xl font-headline font-bold text-primary group-hover:text-accent transition-colors">{area.title}</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {area.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                       {area.process.slice(0, 4).map(p => (
                         <div key={p} className="flex items-center gap-2 text-xs font-bold text-primary/60">
                           <div className="w-1 h-1 bg-accent rounded-full"></div> {p}
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t">
                    <Button asChild variant="link" className="p-0 text-primary font-bold group">
                      <Link href={`/practice-areas/${area.slug}`} className="flex items-center gap-2">
                        View Detailed Practice Scope <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategy Strip */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center space-y-8">
           <h2 className="text-4xl font-headline font-bold">Confidentiality is our baseline. <br /><span className="text-accent italic">Authority is our delivery.</span></h2>
           <p className="max-w-2xl mx-auto text-primary-foreground/60">
             We maintain strict professional discretion across all practice areas, ensuring our clients can navigate the market with total confidence.
           </p>
           <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none">
             <Link href="/contact">Engage our Partners</Link>
           </Button>
        </div>
      </section>
    </div>
  );
}
