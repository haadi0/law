
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const advantages = [
  {
    title: 'Regulatory Familiarity',
    desc: 'Deep intelligence into the historical and current regulatory trends governing FDI.',
    detail: 'We don&apos;t just read the laws; we understand the unspoken precedents that govern how multi-agency licensing and land acquisition processes are actually executed.'
  },
  {
    title: 'Local Execution',
    desc: 'The power to turn strategic legal advice into operational reality.',
    detail: 'Being on the ground in Dar es Salaam allows us to provide real-time government liaison and asset protection that remote international firms simply cannot duplicate.'
  },
  {
    title: 'Regional Coordination',
    desc: 'Using Tanzania as the launchpad for East African expansion.',
    detail: 'We leverage Tanzania&apos;s strategic position within the EAC and SADC to help clients build robust, cross-border corporate structures.'
  },
  {
    title: 'Dispute Readiness',
    desc: 'Protecting your interests in the regional judiciary.',
    detail: 'Our local authority ensures that your arbitration clauses are enforceable and that your assets are shielded from local judicial volatility through proven litigation strategies.'
  }
];

export default function TanzaniaAdvantage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-32 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* Left: Gold Rail */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
                Why <span className="text-accent italic">Tanzania-Based</span> Matters.
              </h2>
              <p className="text-primary-foreground/60 text-lg font-light leading-relaxed">
                Local roots are the prerequisite for international-standard authority in East Africa.
              </p>
            </div>

            <div className="relative pl-12 space-y-12">
              {/* Rail Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 overflow-hidden">
                 <motion.div 
                   animate={{ y: activeStep * 100 + '%' }}
                   className="w-full h-1/4 bg-accent shadow-[0_0_15px_rgba(212,175,55,1)]"
                 />
              </div>

              {advantages.map((adv, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative cursor-pointer transition-all duration-500 group ${activeStep === idx ? 'opacity-100' : 'opacity-30 hover:opacity-50'}`}
                >
                  <div className={`absolute -left-12 top-1.5 w-2 h-2 rounded-full transition-all duration-300 ${activeStep === idx ? 'bg-accent scale-150' : 'bg-white'}`}></div>
                  <h3 className="text-xl font-headline font-bold text-white group-hover:text-accent transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/60 mt-2 font-light">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Display */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-12 lg:p-24 relative overflow-hidden">
             {/* Large Number Background */}
             <div className="absolute top-0 right-0 p-8 text-[12rem] font-headline font-bold text-accent/5 leading-none select-none">
               0{activeStep + 1}
             </div>

             <motion.div
               key={activeStep}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               className="space-y-8 relative z-10"
             >
               <h4 className="text-3xl md:text-5xl font-headline font-bold leading-tight">
                 {advantages[activeStep].title}
               </h4>
               <p className="text-xl text-primary-foreground/80 font-light leading-relaxed max-w-xl">
                 {advantages[activeStep].detail}
               </p>
               
               <div className="pt-12">
                 <div className="inline-flex items-center gap-4 group cursor-pointer">
                    <div className="w-16 h-[1px] bg-accent group-hover:w-24 transition-all duration-500"></div>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Strategic Advantage</span>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
