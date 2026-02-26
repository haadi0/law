'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const attorneys = [
  {
    name: 'Aisha Juma',
    role: 'MANAGING PARTNER',
    bio: 'Lead counsel for over 40 global market entries into East Africa.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'David Mwangi',
    role: 'SENIOR PARTNER',
    bio: 'Specialist in multi-billion dollar commercial arbitrations.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Sophia Hassan',
    role: 'COMPLIANCE LEAD',
    bio: 'Balancing international standards with complex regional labor laws.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
  },
];

export default function AttorneysSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <div className="w-12 h-[1px] bg-accent mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Our Attorneys</h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto font-light text-sm md:text-base">
            Distinguished professionals dedicated to institutional success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {attorneys.map((attorney, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 shadow-2xl">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* 20% Opacity Overlay for Clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/20 to-transparent opacity-100"></div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-headline font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {attorney.name}
                </h3>
                <p className="text-[9px] font-bold text-accent tracking-[0.3em] uppercase">
                  {attorney.role}
                </p>
                <p className="text-xs text-primary-foreground/50 leading-relaxed font-light line-clamp-2">
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