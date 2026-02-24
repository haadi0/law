
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import KeyTakeawaysStrip from './KeyTakeawaysStrip';
import ExpandableClause from './ExpandableClause';

const clauses = [
  {
    id: 'collection',
    title: 'Information We Collect',
    content: "We collect information provided directly by you when you engage our services, subscribe to our insights, or use our digital portal. This includes identifiers, professional information, and details of your legal inquiries.",
    bullets: ['Name and contact credentials', 'Professional background and company data', 'Specific details of legal matters disclosed via portal']
  },
  {
    id: 'usage',
    title: 'How We Use Information',
    content: "Our usage methodology is strictly governed by the provision of elite legal counsel. We use data to facilitate strategic advisory, maintain client relationships, and ensure regulatory compliance.",
    bullets: ['Legal representation and conflict checks', 'Delivery of requested investor resources', 'Internal administrative protocols']
  },
  {
    id: 'legal-basis',
    title: 'Legal Basis for Processing',
    content: "Processing is conducted on the basis of contractual necessity, legal obligation, and legitimate professional interests involved in high-stakes commercial law.",
    bullets: ['Fulfillment of Engagement Letters', 'Anti-Money Laundering (AML) compliance', 'Legitimate strategic communication']
  },
  {
    id: 'sharing',
    title: 'Sharing & Disclosure',
    content: "G'Adroit Attorneys does not trade client data. Disclosure only occurs through client mandate, legal compulsion, or to vetted strategic partners necessary for your specific case (e.g., expert witnesses).",
    bullets: ['Mandated regulatory filings', 'Vetted technology service providers', 'Legal requirement by court order']
  },
  {
    id: 'rights',
    title: 'Your Data Rights',
    content: "In alignment with international privacy frameworks (e.g., GDPR, CCPA), you maintain complete authority over your information stored within our systems.",
    bullets: ['Right of Access and Portability', 'Right to Rectification', 'Right to Erasure (Subject to legal retention)']
  }
];

export default function PolicyContent() {
  return (
    <div className="space-y-20 pb-32">
      {/* Intro section */}
      <section id="overview" className="space-y-8">
        <h2 className="text-3xl font-headline font-bold text-primary">Overview</h2>
        <p className="text-xl md:text-2xl font-light leading-relaxed text-primary/80">
          Trust is the foundation of our firm. This policy serves as a transparent audit of how we protect the digital footprint of our international and local clients.
        </p>
        <KeyTakeawaysStrip />
      </section>

      <div className="h-px w-24 bg-accent my-16"></div>

      {/* Expandable Clauses */}
      <section className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-8">Detailed Clauses</h3>
        {clauses.map((clause) => (
          <ExpandableClause key={clause.id} {...clause} />
        ))}
      </section>

      {/* Static Sections */}
      <section id="cookies" className="space-y-6 pt-12">
        <h2 className="text-2xl font-headline font-bold text-primary">Cookies & Analytics</h2>
        <p className="text-muted-foreground leading-relaxed">
          Our portal utilizes essential cookies to ensure session security and performance. Analytical cookies are used solely to improve our investor resources hub and do not track individual behavior outside our environment.
        </p>
      </section>

      <section id="transfers" className="space-y-6 pt-12">
        <h2 className="text-2xl font-headline font-bold text-primary">International Transfers</h2>
        <p className="text-muted-foreground leading-relaxed">
          As a firm with international reach, data may be processed in jurisdictions with differing privacy standards. We ensure that any cross-border data movement is protected by Standard Contractual Clauses (SCCs).
        </p>
      </section>

      <section id="retention" className="space-y-6 pt-12">
        <h2 className="text-2xl font-headline font-bold text-primary">Data Retention</h2>
        <p className="text-muted-foreground leading-relaxed">
          Client data is retained for the duration of our professional engagement and for a statutory period thereafter to comply with Tanzanian legal requirements and insurance protocols.
        </p>
      </section>

      <section id="security" className="space-y-6 pt-12">
        <h2 className="text-2xl font-headline font-bold text-primary">Data Security</h2>
        <div className="p-8 bg-primary text-white border-l-4 border-accent">
          <p className="text-lg font-light italic">
            "We employ enterprise-grade encryption and multi-layered security protocols to safeguard all electronic correspondence and document repositories."
          </p>
        </div>
      </section>

      <section id="contact" className="space-y-8 pt-12 border-t">
        <h2 className="text-2xl font-headline font-bold text-primary">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Data Protection Officer</h4>
            <p className="text-primary font-bold">Privacy Compliance Unit</p>
            <p className="text-sm text-muted-foreground">G'Adroit Attorneys</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Electronic Inquiry</h4>
            <a href="mailto:consult@gadroit.com" className="text-accent font-bold hover:underline">consult@gadroit.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
