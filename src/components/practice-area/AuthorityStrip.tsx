
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const capsules = [
  'Tanzania-Rooted',
  'Investor-Focused',
  'Dispute-Ready',
  'Precision-Led',
  'Regulatory-Intelligence',
  'Global-Standard'
];

export default function AuthorityStrip() {
  return (
    <section className="py-12 border-y bg-white overflow-hidden">
      <div className="flex gap-8 px-6 animate-marquee whitespace-nowrap">
        {/* Render twice for seamless loop */}
        {[0, 1].map((set) => (
          <div key={set} className="flex gap-8 items-center">
            {capsules.map((text) => (
              <div 
                key={text} 
                className="px-6 py-2 border border-primary/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-primary/60 hover:bg-primary hover:text-white transition-colors duration-300 cursor-default"
              >
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
