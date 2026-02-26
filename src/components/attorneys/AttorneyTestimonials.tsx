
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Aisha's guidance during our market entry was the definitive difference between delay and operational success.",
    author: "CEO, Global Mining Corp",
    expert: "Aisha Juma"
  },
  {
    quote: "David Mwangi provides a level of litigation strategy usually reserved for the largest international forums.",
    author: "Head of Legal, Infrastructure Fund",
    expert: "David Mwangi"
  },
  {
    quote: "The HR audits conducted by Sophia Hassan have standardized our operations to international levels while staying 100% TIC compliant.",
    author: "Regional Director, Tech Frontier",
    expert: "Sophia Hassan"
  }
];

export default function AttorneyTestimonials() {
  return (
    <section className="py-32 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 space-y-8 sticky top-48 h-fit">
            <div className="h-[1px] w-12 bg-accent"></div>
            <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
              Client <br /><span className="text-accent italic font-normal">Intelligence.</span>
            </h2>
            <p className="text-primary-foreground/60 text-lg font-light leading-relaxed">
              Real-time feedback on the precision and impact of our partner-led engagements.
            </p>
          </div>

          <div className="lg:w-2/3 space-y-12">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative p-12 bg-white/5 border border-white/10 hover:border-accent transition-all duration-500"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/10 group-hover:text-accent/30 transition-all" />
                <div className="space-y-8 relative z-10">
                  <p className="text-2xl md:text-3xl font-light leading-relaxed italic text-primary-foreground/80">
                    "{t.quote}"
                  </p>
                  <div className="flex justify-between items-end border-t border-white/10 pt-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-accent">{t.author}</h4>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">Strategic Audit</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest block mb-1">Assigned Partner</span>
                      <span className="font-headline text-lg italic text-white/80">{t.expert}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
