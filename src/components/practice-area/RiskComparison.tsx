
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ShieldCheck } from 'lucide-react';

const risks = [
  { 
    exposure: 'Entity Misclassification', 
    reduction: 'Precision selection of business vehicle for maximum asset protection.',
    impact: 'High'
  },
  { 
    exposure: 'Local Content Friction', 
    reduction: 'Bespoke compliance frameworks that balance local law with corporate control.',
    impact: 'Critical'
  },
  { 
    exposure: 'Regulatory Bottlenecks', 
    reduction: 'Aggressive permit management and predictive liaison with government agencies.',
    impact: 'Operational'
  },
  { 
    exposure: 'Sovereign Volatility', 
    reduction: 'Structuring through Bilateral Investment Treaties (BITs) to ensure international recourse.',
    impact: 'Strategic'
  }
];

export default function RiskComparison() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Risk Mitigation Panel</h2>
          <p className="text-muted-foreground text-lg">Comparing standard market exposure against G&apos;Adroit&apos;s engineered reduction strategies.</p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/5 hidden lg:block overflow-hidden">
             <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-accent"
             />
          </div>

          <div className="space-y-12">
            {risks.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative group">
                {/* Typical Exposure */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col lg:items-end lg:text-right space-y-4 p-8 bg-secondary/10 lg:bg-transparent"
                >
                  <AlertCircle className="text-destructive w-8 h-8 lg:ml-auto" />
                  <h4 className="text-2xl font-headline font-bold text-primary">{item.exposure}</h4>
                  <p className="text-muted-foreground text-sm font-light max-w-xs">Typical exposure faced by unsupported international market entrants.</p>
                </motion.div>

                {/* Reduction Strategy */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col space-y-4 p-8 bg-primary/5 lg:bg-transparent border-l-4 border-accent lg:border-none"
                >
                  <ShieldCheck className="text-accent w-8 h-8" />
                  <h4 className="text-2xl font-headline font-bold text-primary">The G&apos;Adroit Approach</h4>
                  <p className="text-primary font-medium leading-relaxed max-w-sm">{item.reduction}</p>
                </motion.div>
                
                {/* Horizontal Divider Line */}
                <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-primary/5 lg:hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
