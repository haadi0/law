
'use client';

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const steps = [
  {
    title: 'Discovery',
    desc: 'Deep audit of your operational goals and local regulatory mapping.',
    detail: 'We begin with a strategic workshop to identify sectoral overlaps, potential tax incentives, and the specific regulatory bodies (TIC, BRELA, sectoral ministries) that will govern your entry.'
  },
  {
    title: 'Structuring',
    desc: 'Engineering the entity to balance protection and efficiency.',
    detail: 'We design the shareholding structure to ensure compliance with local content requirements while maintaining the integrity of your global governance protocols.'
  },
  {
    title: 'Regulatory Path',
    desc: 'Aggressive management of licensing and government liaison.',
    detail: 'Our team acts as your local proxy, navigating the complex web of environmental, operational, and sectoral permits to ensure a friction-free launch.'
  },
  {
    title: 'Execution',
    desc: 'Capital importation, asset acquisition, and workforce setup.',
    detail: 'We oversee the legal mechanics of funding your local operations, securing physical assets (land/leases), and drafting standard-setting employment frameworks.'
  },
  {
    title: 'Ongoing Protection',
    desc: 'Active monitoring and predictive risk mitigation.',
    detail: 'Our engagement continues as your outsourced legal intelligence unit, monitoring regulatory shifts and maintaining your status as an elite market participant.'
  }
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-32 bg-primary text-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Sticky Timeline Rail */}
          <div className="lg:col-span-4 relative h-auto">
            <div className="sticky top-40 space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-headline font-bold">Our Work</h2>
                <p className="text-primary-foreground/60 font-light">The definitive path from inquiry to market authority.</p>
              </div>

              <div className="relative pl-8">
                {/* Rail line */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
                
                {/* Timeline Items */}
                <div className="space-y-10">
                  {steps.map((step, idx) => (
                    <div 
                      key={idx}
                      onMouseEnter={() => setActiveStep(idx)}
                      className={`relative cursor-pointer transition-all duration-300 ${activeStep === idx ? 'opacity-100 translate-x-2' : 'opacity-30'}`}
                    >
                      <div className={`absolute -left-8 top-1.5 w-2 h-2 rounded-full transition-all duration-300 ${activeStep === idx ? 'bg-accent scale-150 shadow-[0_0_10px_rgba(212,175,55,1)]' : 'bg-white'}`}></div>
                      <h3 className="text-lg font-bold font-headline">{step.title}</h3>
                      <p className="text-sm font-light mt-1">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Content Panel */}
          <div className="lg:col-span-8 bg-white/5 border border-white/10 p-12 lg:p-24 min-h-[500px] flex items-center">
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="text-accent text-8xl font-headline font-bold opacity-10">0{activeStep + 1}</div>
              <h4 className="text-4xl lg:text-5xl font-headline font-bold leading-tight">
                {steps[activeStep].title}
              </h4>
              <p className="text-xl text-primary-foreground/80 font-light leading-relaxed max-w-2xl">
                {steps[activeStep].detail}
              </p>
              
              <div className="pt-8 flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-1px bg-accent group-hover:w-16 transition-all duration-500"></div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-accent">Learn Process Strategy</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
