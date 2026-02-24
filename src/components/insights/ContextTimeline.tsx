
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const stages = [
  {
    title: 'Filing & Institution',
    context: 'In East Africa, the choice of seat (e.g., Dar es Salaam vs. Kigali) significantly impacts initial stays of proceedings.'
  },
  {
    title: 'Interim Measures',
    context: 'The availability of emergency arbitrators vs. High Court commercial divisions for asset freezing.'
  },
  {
    title: 'Hearings',
    context: 'Managing virtual vs. in-person proceedings in regional arbitration hubs like TIAC.'
  },
  {
    title: 'Award/Judgment',
    context: 'Understanding the timeframe for written rulings in complex commercial cases.'
  },
  {
    title: 'Enforcement',
    context: 'Navigating the regional reciprocal enforcement of foreign judgments act.'
  }
];

export default function ContextTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="relative">
      {/* Horizontal Rail */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2 hidden md:block"></div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
        {stages.map((s, i) => (
          <div 
            key={i} 
            className="group cursor-pointer"
            onClick={() => setActiveIdx(i)}
          >
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${activeIdx === i ? 'bg-accent border-accent scale-150' : 'bg-primary border-white/20'}`}></div>
              <div className={`space-y-2 transition-all duration-300 ${activeIdx === i ? 'opacity-100' : 'opacity-40'}`}>
                <h4 className="text-sm font-bold uppercase tracking-widest">{s.title}</h4>
                <p className="text-xs text-primary-foreground/40 leading-relaxed md:max-w-[150px]">{activeIdx === i ? s.context : ''}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Detail Panel */}
      <div className="md:hidden mt-8 p-6 bg-white/5 border border-white/10 rounded-none">
        <h4 className="text-accent font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
          <Info className="w-4 h-4" /> Regional Context
        </h4>
        <p className="text-sm text-primary-foreground/80 leading-relaxed">
          {stages[activeIdx].context}
        </p>
      </div>
    </div>
  );
}
