'use client';

import React from 'react';
import Image from 'next/image';
import { 
  FileEdit, 
  Search, 
  ShieldCheck, 
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label
} from 'recharts';

const statsData = [
  { name: 'Won', value: 755, color: '#002147' }, 
  { name: 'Running', value: 55, color: '#D4AF37' }, 
  { name: 'Others', value: 35, color: '#e5e7eb' }, 
];

const milestones = [
  {
    year: '2004',
    title: 'Established in Dar es Salaam',
    desc: 'Founded with a core focus on bridging the gap between global standards and local regulatory precision.'
  },
  {
    year: '2012',
    title: 'Regional Hub Expansion',
    desc: 'Extended operational liaison to the EAC and SADC regions, managing cross-border industrial capital.'
  },
  {
    year: '2023',
    title: 'Global Tier Recognition',
    desc: 'Ranked as a leading practice for International Investment Law and Complex Commercial Litigation.'
  }
];

export default function FirmNarrative() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden border-b">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* 1. About G'Adroit Column */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">About G&apos;Adroit.</h2>
              <div className="flex items-center gap-1">
                <div className="h-[1px] w-12 bg-accent/40"></div>
                <span className="text-accent italic font-headline text-lg">//</span>
                <div className="h-[1px] w-12 bg-accent/40"></div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                G&apos;Adroit Attorneys represents a new era of legal practice in East Africa—one defined by predictive intelligence, absolute transparency, and a commitment to protecting the capital and reputations of global institutional investors.
              </p>
            </div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: FileEdit, label: 'Strategic Review' },
                { icon: Search, label: 'Regulatory Audit' },
                { icon: ShieldCheck, label: 'Asset Protection' },
              ].map((box, i) => (
                <div key={i} className="group relative bg-primary p-4 flex flex-col items-center text-center gap-3 border border-primary/5 transition-all hover:border-accent overflow-hidden">
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <box.icon className="w-5 h-5 text-accent relative z-10" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white relative z-10">{box.label}</span>
                </div>
              ))}
            </div>

            {/* Consultation CTA */}
            <div className="space-y-6 pt-4">
              <div className="space-y-3">
                <h3 className="text-xl font-headline font-bold text-accent">Get Confidential Briefing</h3>
                <div className="h-[1px] w-12 bg-accent/30"></div>
                <p className="text-xs text-muted-foreground font-light leading-relaxed italic">
                  &quot;Providing institutional investors with a confidential strategic evaluation of their market entry or regional dispute status.&quot;
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button asChild className="w-full sm:w-auto bg-primary text-white hover:bg-accent h-12 px-8 rounded-none text-[10px] font-bold tracking-widest uppercase transition-all shadow-xl">
                  <Link href="/contact">Request Consultation</Link>
                </Button>
                <div className="flex items-center gap-3 text-accent">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-headline font-bold">+255 222 123 456</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Milestones Column */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Firm Evolution.</h2>
              <div className="flex items-center gap-1">
                <div className="h-[1px] w-12 bg-accent/40"></div>
                <span className="text-accent italic font-headline text-lg">//</span>
                <div className="h-[1px] w-12 bg-accent/40"></div>
              </div>
            </div>

            <div className="space-y-10 relative pl-4 border-l border-primary/5">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative space-y-2">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-accent border-4 border-white shadow-[0_0_0_1px_rgba(212,175,55,0.3)]"></div>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase mb-2">
                    {m.year}
                  </div>
                  <h4 className="text-lg font-headline font-bold text-primary leading-tight">{m.title}</h4>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Stats & Carousel Column */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-secondary/10 border border-primary/5 overflow-hidden">
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3].map((i) => (
                    <CarouselItem key={i}>
                      <div className="relative aspect-[4/3]">
                        <Image 
                          src={`https://picsum.photos/seed/gadroit-milestone-${i}/600/400`} 
                          alt="G'Adroit Institutional" 
                          fill 
                          className="object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <div className="p-6 flex flex-col items-center">
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statsData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {statsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                        <Label
                          value="845 Matters"
                          position="center"
                          className="font-headline font-bold fill-primary text-xs"
                        />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-3 gap-4 w-full pt-4 border-t border-primary/5">
                  <div className="text-center">
                    <div className="text-sm font-headline font-bold text-primary">755</div>
                    <div className="text-[7px] uppercase tracking-widest font-bold text-primary/40">Resolved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-headline font-bold text-accent">55</div>
                    <div className="text-[7px] uppercase tracking-widest font-bold text-primary/40">Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-headline font-bold text-muted-foreground">35</div>
                    <div className="text-[7px] uppercase tracking-widest font-bold text-primary/40">Strategic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
