
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 'who-we-are',
    label: 'Who We Are',
    title: 'Precision in a Complex Market',
    content: "G'Adroit Attorneys was founded to solve the structural gap between international investment requirements and the intricate local regulatory environment of Tanzania and the wider East African region."
  },
  {
    id: 'stand-for',
    label: 'What We Stand For',
    title: 'Uncompromising Integrity',
    content: "We represent a new era of African legal practice: one defined by predictive intelligence, absolute transparency, and a commitment to protecting the capital and reputations of our global clients."
  },
  {
    id: 'how-we-work',
    label: 'How We Work',
    title: 'The G&apos;Adroit Methodology',
    content: "We don't just identify legal risks; we engineer their reduction. Our team operates as a strategic extension of your leadership, providing the local authority needed to execute complex cross-border transactions."
  },
  {
    id: 'tanzania-based',
    label: 'Why Tanzania-Based',
    title: 'The Strategic Hub',
    content: "Our presence in Dar es Salaam is a choice. We are positioned at the gateway of East African trade, providing a bridge for investors to navigate one of the continent&apos;s most dynamic and regulated economies."
  }
];

export default function FirmOverview() {
  return (
    <section className="py-24 bg-white border-b">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Left: Sticky Rail */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 space-y-6">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-primary/40 mb-12">Firm Narrative</h3>
              <div className="flex flex-col gap-8">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-xs font-bold uppercase tracking-widest text-primary/60 hover:text-accent transition-colors block border-l-2 border-transparent hover:border-accent pl-4"
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content Blocks */}
          <div className="lg:w-3/4 space-y-32">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl space-y-8"
              >
                <div className="inline-block px-4 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest">
                  {section.label}
                </div>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight">
                  {section.title}
                </h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  {section.content}
                </p>
                <div className="h-[1px] w-full bg-primary/5"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
