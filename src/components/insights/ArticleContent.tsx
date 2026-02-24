
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import InsightBox from './InsightBox';
import { CheckCircle2, Globe, Shield, Scale, ArrowRight } from 'lucide-react';

const steps = [
  { title: 'Investment Initiation', desc: 'Capital enters the host state under BIT framework.' },
  { title: 'Host Action', desc: 'Regulatory change or state interference occurs.' },
  { title: 'Negotiation Period', desc: 'Required cooling-off phase for diplomatic resolution.' },
  { title: 'Notice of Dispute', desc: 'Investor formally invokes treaty protections.' },
  { title: 'Arbitral Award', desc: 'Binding decision from international tribunal (e.g., ICSID).' },
];

export default function ArticleContent() {
  return (
    <div className="space-y-24">
      {/* Intro section */}
      <section id="intro" className="max-w-3xl">
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-primary">
          For international investors in emerging markets like Tanzania, the legal landscape is often defined by two parallel systems: the domestic judicial framework and the supranational network of Bilateral Investment Treaties (BITs).
        </p>
      </section>

      {/* Mechanisms */}
      <section id="mechanism" className="space-y-12">
        <div className="h-px w-24 bg-accent mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-bold text-primary">How Treaty Protections Work</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BITs are agreements between two sovereign states that establish the "rules of engagement" for investors from one state operating in another. Unlike standard commercial contracts, BITs provide a direct link between the private investor and the foreign government.
            </p>
            <ul className="space-y-4">
              {[
                'Fair and Equitable Treatment (FET)',
                'Full Protection and Security (FPS)',
                'Most-Favored-Nation (MFN) status',
                'National Treatment'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary font-bold">
                  <CheckCircle2 className="w-5 h-5 text-accent" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <InsightBox 
            title="Key Investor Protection Mechanisms"
            content="The FET standard is the most frequently invoked protection. It requires host states to maintain a stable and predictable legal environment, preventing arbitrary or discriminatory regulatory changes that destroy the value of your investment."
          />
        </div>
      </section>

      {/* Timeline Rail */}
      <section id="arbitration" className="bg-primary text-white p-12 lg:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 -mr-32 -mt-32 rounded-full blur-3xl"></div>
        <div className="relative z-10 space-y-12">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-3xl font-headline font-bold">The Path to International Recourse</h3>
            <p className="text-primary-foreground/60">Understanding how BIT protections activate when a dispute arises.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="space-y-4 relative">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-headline font-bold text-accent">0{idx + 1}</span>
                  <div className="h-px flex-grow bg-white/10 hidden md:block"></div>
                </div>
                <h4 className="font-bold text-sm uppercase tracking-widest">{step.title}</h4>
                <p className="text-xs text-primary-foreground/40 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expropriation Section */}
      <section id="expropriation" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-headline font-bold text-primary">Expropriation & Fair Treatment</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Direct expropriation (seizure of land or assets) is rare today. The modern threat is "indirect expropriation"—a series of regulatory measures that have an equivalent effect, rendering your business unviable.
          </p>
          <div className="p-8 border-l-4 border-accent bg-secondary/20">
            <p className="italic text-primary font-medium">
              "Treaties ensure that any state action resulting in the deprivation of value must be accompanied by prompt, adequate, and effective compensation."
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Direct Seizure', type: 'Traditional' },
            { label: 'License Revocation', type: 'Regulatory' },
            { label: 'Tax Discrimination', type: 'Fiscal' },
            { label: 'Market Exclusion', type: 'Strategic' },
          ].map((item) => (
            <div key={item.label} className="p-6 border bg-white flex flex-col justify-between aspect-square">
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold">{item.type}</span>
              <h5 className="font-headline font-bold text-primary text-xl">{item.label}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* Enforcement section */}
      <section id="enforcement" className="space-y-8">
        <h2 className="text-4xl font-headline font-bold text-primary">Enforcement Advantages</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          The ultimate power of BITs lies in enforcement. Unlike domestic court rulings, which can be difficult to enforce against the state, arbitral awards from tribunals like ICSID are enforceable in nearly every country worldwide under the New York Convention.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {[
            { icon: Globe, title: 'Global Reach', desc: 'Enforceable in 160+ countries.' },
            { icon: Scale, title: 'Bypassing Local Courts', desc: 'Direct neutrality and expert tribunals.' },
            { icon: Shield, title: 'Asset Security', desc: 'Ability to seize host state assets globally.' },
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <item.icon className="w-8 h-8 text-accent" />
              <h4 className="text-xl font-headline font-bold text-primary">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Call-out */}
      <section className="pt-12">
        <div className="bg-secondary/30 p-12 lg:p-16 border text-center space-y-8">
          <h3 className="text-3xl font-headline font-bold text-primary">Is Your Investment Secured?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            G'Adroit Attorneys provides comprehensive treaty audits for institutional investors, ensuring your corporate structure is optimized to access the strongest possible international protections.
          </p>
          <button className="bg-primary text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-primary/90 transition-all">
            Consult a Partner
          </button>
        </div>
      </section>
    </div>
  );
}
