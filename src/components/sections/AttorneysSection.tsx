
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const attorneys = [
  {
    name: 'James Anderson',
    role: 'MANAGING PARTNER',
    bio: '30 years of experience in corporate litigation and business law. Harvard Law School graduate.',
    image: PlaceHolderImages.find(img => img.id === 'attorney-james')?.imageUrl || '',
  },
  {
    name: 'Sarah Mitchell',
    role: 'SENIOR PARTNER',
    bio: 'Expert in family law and estate planning. Known for compassionate client advocacy.',
    image: PlaceHolderImages.find(img => img.id === 'attorney-sarah')?.imageUrl || '',
  },
  {
    name: 'Michael Chen',
    role: 'CRIMINAL DEFENSE LEAD',
    bio: 'Former prosecutor with deep insight into criminal defense strategies and trial litigation.',
    image: PlaceHolderImages.find(img => img.id === 'attorney-michael')?.imageUrl || '',
  },
];

export default function AttorneysSection() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header with gold line */}
        <div className="text-center mb-20 space-y-6">
          <div className="w-12 h-[1px] bg-accent mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Our Attorneys</h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto font-light text-sm md:text-base">
            Distinguished professionals dedicated to achieving the best possible outcomes.
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {attorneys.map((attorney, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group"
            >
              {/* Image Container with Grayscale and Bottom Gradient */}
              <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-2xl">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  data-ai-hint="professional lawyer portrait"
                />
                {/* Bottom dark gradient overlay as seen in reference */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"></div>
                {/* Subtle border around image */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-headline font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {attorney.name}
                </h3>
                <p className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase">
                  {attorney.role}
                </p>
                <p className="text-xs md:text-sm text-primary-foreground/50 leading-relaxed font-light">
                  {attorney.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
