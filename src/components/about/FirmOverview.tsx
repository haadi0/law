'use client';

import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    id: 'who-we-are',
    label: 'Firm Overview',
    title: 'Deep Roots. Global Expertise.',
    content: "G'Adroit Attorneys is a Tanzania-based international law firm serving businesses and institutional investors across the East African region. We bridge the gap between global requirements and local regulatory precision."
  },
  {
    id: 'positioning',
    label: 'Positioning',
    title: 'The Best of Both Worlds',
    content: "G'Adroit Attorneys offers the best of both worlds—an elite Tanzania-based firm with global expertise and international standard practice protocols."
  },
  {
    id: 'mission-vision',
    label: 'Our Purpose',
    title: 'Trusted Legal Partners',
    content: "Our mission is to help businesses and investors thrive by providing comprehensive, predictive legal solutions. Our vision is to be the most trusted legal partner for businesses and investors in East Africa and globally."
  },
  {
    id: 'tanzania-advantage',
    label: 'Why Tanzania Matters',
    title: 'Strategic Hub Presence',
    content: "Our presence in Dar es Salaam is strategic. We provide deep local knowledge, regulatory familiarity, and the regional coordination required for successful cross-border expansion."
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
