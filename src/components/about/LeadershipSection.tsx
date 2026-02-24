
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const leaders = [
  {
    name: 'Aisha Juma',
    role: 'Managing Partner',
    bio: 'Specializing in international investment law and complex regulatory navigation. Aisha has overseen market entry for over 40 global institutional investors into the East African market.',
    focus: 'Investment / Regulatory',
    image: 'https://picsum.photos/seed/leader1/800/1000'
  },
  {
    name: 'David Mwangi',
    role: 'Senior Partner',
    bio: 'A veteran of commercial litigation and international arbitration. David represents the firm in high-stakes disputes involving mineral rights and large-scale infrastructure projects.',
    focus: 'Disputes / Arbitration',
    image: 'https://picsum.photos/seed/leader2/800/1000'
  },
  {
    name: 'Sophia Hassan',
    role: 'Partner',
    bio: 'An expert in corporate compliance and labor relations. Sophia leads the firm&apos;s HR compliance unit, ensuring foreign employers maintain international standards while navigating local labor laws.',
    focus: 'Compliance / HR',
    image: 'https://picsum.photos/seed/leader3/800/1000'
  }
];

export default function LeadershipSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 space-y-6">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary">Firm Leadership.</h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl leading-relaxed">
            Our partners provide direct, senior-level oversight for every engagement, ensuring strategic alignment from the first consultation to final execution.
          </p>
        </div>

        <div className="space-y-4">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative border-b border-primary/5 py-12 lg:py-20 flex flex-col lg:flex-row gap-8 lg:items-center overflow-hidden"
            >
              {/* Background Reveal Bio */}
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>

              {/* Name & Role */}
              <div className="lg:w-1/3 relative z-10 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold group-hover:text-white transition-colors">
                  {leader.role}
                </span>
                <h3 className="text-4xl lg:text-5xl font-headline font-bold text-primary group-hover:text-white transition-colors">
                  {leader.name}
                </h3>
              </div>

              {/* Bio Panel - Slides in on hover */}
              <div className="lg:w-1/2 relative z-10 opacity-0 lg:group-hover:opacity-100 lg:translate-x-12 transition-all duration-700 delay-100">
                <p className="text-lg text-white font-light leading-relaxed max-w-lg">
                  {leader.bio}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{leader.focus}</span>
                  <div className="h-[1px] w-12 bg-accent/30"></div>
                </div>
              </div>

              {/* Simple View Mobile */}
              <div className="lg:hidden relative z-10 space-y-6">
                <p className="text-muted-foreground">{leader.bio}</p>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">{leader.focus}</span>
              </div>

              {/* Vertical Role Label Desktop */}
              <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 -rotate-90 origin-right relative z-10">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary/10 group-hover:text-accent transition-colors whitespace-nowrap">
                  Elite Counsel
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
