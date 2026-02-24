
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const arbitrationAdv = [
  'Neutrality of venue and tribunal selection.',
  'Direct enforcement via the New York Convention.',
  'Preservation of commercial relationships through privacy.',
  'Finality of awards (limited appeal grounds).',
  'Ability to appoint industry experts as arbitrators.'
];

const litigationAdv = [
  'Precedential value for systemic issues.',
  'Ability to join third parties easily.',
  'Availability of summary judgment in clear cases.',
  'Cost-effective for smaller, local claims.',
  'Direct access to coercive court powers (e.g. injunctions).'
];

export default function ComparisonStage() {
  return (
    <div className="relative">
      {/* Central Animated Gold Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/5 hidden lg:block overflow-hidden">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full bg-accent"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        {/* Arbitration Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12 lg:text-right"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-headline font-bold text-primary">Arbitration Strategy</h3>
            <p className="text-muted-foreground italic">Preferred for cross-border industrial capital.</p>
          </div>
          <div className="space-y-6">
            {arbitrationAdv.map((adv, i) => (
              <div key={i} className="flex lg:flex-row-reverse items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span className="text-primary font-medium">{adv}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Litigation Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-headline font-bold text-primary">Litigation Logic</h3>
            <p className="text-muted-foreground italic">Utilized for local compliance and public record.</p>
          </div>
          <div className="space-y-6">
            {litigationAdv.map((adv, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span className="text-primary font-medium">{adv}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
