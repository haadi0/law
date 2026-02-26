
'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FAQS = [
  {
    q: 'What areas of law does your firm specialize in?',
    a: 'G\'Adroit Attorneys specializes in high-stakes International Business & Investment Law, complex Commercial Litigation, Arbitration, Employment Compliance, and Corporate Regulatory navigation across East Africa.'
  },
  {
    q: 'How experienced are your attorneys in handling cases like mine?',
    a: 'Our partners have combined experience overseeing market entry for over 40 global institutional investors and leading multi-billion dollar arbitrations. We assign a senior partner to oversee every engagement directly.'
  },
  {
    q: 'What is your approach to client communication and updates during my case?',
    a: 'We operate with absolute transparency. Clients receive scheduled strategic intelligence briefings and have direct lines to assigned partners, ensuring zero downtime in communication.'
  },
  {
    q: 'How do you determine the best strategy for my case?',
    a: 'We combine meticulous regulatory auditing with predictive legal engineering. Our strategy is built on local authority and international standards to ensure your assets are shielded from regional volatility.'
  },
  {
    q: 'What are your fees and payment structures?',
    a: 'Our fee structure is transparent and based on professional value and complexity. We offer a combination of hourly rates and project-based retainers, formalized in a precise Engagement Letter.'
  },
  {
    q: 'How can I schedule a consultation with your firm?',
    a: 'You can schedule a confidential briefing by calling our Dar es Salaam headquarters directly or by filling out the secure contact form on our website. We review all inquiries within 24 hours.'
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-bold text-[10px] tracking-[0.4em] uppercase">FAQS</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-primary leading-tight">
                Answers to Your <br />Common Questions
              </h2>
              <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed max-w-md">
                Find essential intelligence on our engagement protocols, specialized practice areas, and the strategic methodology we apply to institutional legal challenges.
              </p>
            </div>
            
            <div className="pt-4">
              <Button asChild className="bg-[#545e5e] hover:bg-primary text-white h-12 px-8 rounded-none text-[10px] font-bold tracking-widest uppercase">
                <Link href="/contact">SEE MORE FAQS</Link>
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border-b-primary/10">
                  <AccordionTrigger className="text-lg font-headline font-bold text-primary py-6 hover:no-underline text-left group border-none">
                    <span className="group-hover:text-accent transition-colors">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm font-light leading-relaxed pb-6 pr-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
