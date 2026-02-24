
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const termsData = [
  {
    id: 'scope',
    title: 'Scope of Engagement',
    content: "Our services are strictly defined by the Engagement Letter issued at the commencement of each matter. We provide legal counsel based on Tanzanian and international standards relevant to your specific operational footprint.",
    bullets: ['Advice limited to the agreed jurisdiction', 'Specific to the facts disclosed by the client', 'Subject to ongoing conflict verification']
  },
  {
    id: 'authority',
    title: 'Instructions & Authority',
    content: "We act upon the instructions of authorized representatives designated by the client. Instructions should ideally be in writing to ensure accuracy and procedural record-keeping.",
    bullets: ['Presumption of authority for designated contacts', 'Verbal instructions confirmed via email', 'Duty to inform of changes in authorized personnel']
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    content: "All information disclosed is protected by attorney-client privilege. We maintain rigorous data security protocols and non-disclosure standards for all sensitive commercial intelligence.",
    bullets: ['Absolute professional discretion', 'Encryption of electronic correspondence', 'Disclosure only under legal compulsion or client mandate']
  },
  {
    id: 'conflicts',
    title: 'Conflicts of Interest',
    content: "Prior to engagement, we conduct a meticulous conflict check. We represent multiple international and local entities and will disclose any potential conflict that may arise during representation.",
    bullets: ['Pre-engagement database audit', 'Liaison in case of potential sectoral conflict', 'Adherence to TLS code of ethics']
  },
  {
    id: 'fees',
    title: 'Fees, Billing & Expenses',
    content: "Our fee structure is transparent and based on professional value, complexity, and seniority of the partners involved. We utilize a combination of hourly rates and project-based retainers as agreed.",
    bullets: ['Invoicing on a monthly or milestone basis', 'Detailed breakdown of professional hours', 'Standard reimbursement for out-of-pocket expenses']
  },
  {
    id: 'responsibilities',
    title: 'Client Responsibilities',
    content: "The efficacy of our counsel depends on the accuracy and timeliness of the information provided by the client. Clients must disclose all relevant facts and material changes to the firm.",
    bullets: ['Timely provision of requested documentation', 'Full disclosure of material risks', 'Active participation in strategic reviews']
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: "Our liability is limited to the extent permitted by Tanzanian law and professional indemnity insurance coverage. We are not liable for losses arising from incomplete information provided by the client.",
    bullets: ['Indemnity limited to professional fees paid', 'No liability for indirect or consequential losses', 'Protected by professional indemnity insurance']
  },
  {
    id: 'termination',
    title: 'Termination of Engagement',
    content: "Either party may terminate the engagement with written notice. Upon termination, the firm will hand over relevant documents subject to the settlement of all outstanding professional fees.",
    bullets: ['Notice period as per Engagement Letter', 'Final fee reconciliation', 'Lien on files until account settlement']
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Dispute Resolution',
    content: "These terms are governed by the laws of the United Republic of Tanzania. Any dispute arising from our engagement shall be resolved via arbitration in Dar es Salaam.",
    bullets: ['Jurisdiction of Tanzanian courts', 'Preference for TIAC Arbitration', 'Finality of arbitral awards']
  }
];

export default function ExpandableTerms() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {termsData.map((section) => (
        <div 
          key={section.id} 
          id={section.id}
          className={cn(
            "border transition-all duration-500 overflow-hidden",
            activeId === section.id ? "bg-white border-accent shadow-xl" : "bg-transparent border-primary/5 hover:border-accent/30"
          )}
        >
          <button 
            onClick={() => setActiveId(activeId === section.id ? null : section.id)}
            className="w-full p-8 flex justify-between items-center text-left group"
          >
            <div className="flex items-center gap-6">
              <div className={cn(
                "w-2 h-2 rounded-full transition-all duration-500",
                activeId === section.id ? "bg-accent scale-150" : "bg-primary/20"
              )}></div>
              <h3 className={cn(
                "text-xl font-headline font-bold transition-colors duration-300",
                activeId === section.id ? "text-primary" : "text-primary/60 group-hover:text-primary"
              )}>{section.title}</h3>
            </div>
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
              activeId === section.id ? "bg-accent text-white rotate-45" : "bg-secondary text-primary/40 group-hover:bg-accent group-hover:text-white"
            )}>
              <Plus className="w-5 h-5" />
            </div>
          </button>

          <AnimatePresence>
            {activeId === section.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="px-8 lg:px-24 pb-12 space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    {section.content}
                  </p>
                  <ul className="space-y-4">
                    {section.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-sm font-medium text-primary">
                        <ChevronRight className="w-4 h-4 text-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
