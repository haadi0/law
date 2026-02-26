
'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AttorneyHero from '@/components/attorneys/AttorneyHero';
import AttorneyFilters from '@/components/attorneys/AttorneyFilters';
import AttorneyGrid from '@/components/attorneys/AttorneyGrid';
import AttorneyTestimonials from '@/components/attorneys/AttorneyTestimonials';
import AttorneyCTA from '@/components/attorneys/AttorneyCTA';

export type Specialization = 'All' | 'International Business' | 'Litigation' | 'Arbitration' | 'HR & Compliance' | 'Regulatory';
export type Language = 'All' | 'English' | 'Swahili' | 'French';

export interface Attorney {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  expertise: string[];
  achievements: string[];
  languages: string[];
  specialization: Specialization;
  image: string;
}

const ATTORNEYS_DATA: Attorney[] = [
  {
    id: 'aisha-juma',
    name: 'Aisha Juma',
    role: 'Managing Partner',
    shortBio: 'Strategic lead for over 40 global market entries into East Africa.',
    fullBio: 'Aisha Juma is a recognized authority in International Investment Law. She has spent two decades bridging the gap between global corporate requirements and Tanzanian regulatory precision. Her practice focuses on high-stakes market entry strategies and sovereign risk management.',
    expertise: ['Investment Law', 'Sovereign Risk', 'Strategic Liaison'],
    achievements: ['Chambers Global Ranked 2023', 'Top 50 African Legal Leads'],
    languages: ['English', 'Swahili'],
    specialization: 'International Business',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'david-mwangi',
    name: 'David Mwangi',
    role: 'Senior Partner',
    shortBio: 'Lead counsel for multi-billion dollar commercial arbitrations.',
    fullBio: 'David specializes in complex commercial litigation and international arbitration. With a track record of successfully defending institutional assets in regional courts, he provides the "Dispute-Ready" assurance that global investors require.',
    expertise: ['Arbitration', 'Mining Disputes', 'Asset Protection'],
    achievements: ['Lead Counsel on $2B Resource Dispute', 'TIAC Board Member'],
    languages: ['English', 'Swahili', 'French'],
    specialization: 'Arbitration',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sophia-hassan',
    name: 'Sophia Hassan',
    role: 'Partner',
    shortBio: 'Expert in navigating the complex Tanzanian labor and HR landscape.',
    fullBio: 'Sophia leads the firm’s Employment & HR Compliance unit. She is instrumental for foreign employers needing to balance international corporate standards with strict local labor laws and work permit requirements.',
    expertise: ['Labor Law', 'HR Audits', 'Expatriate Compliance'],
    achievements: ['Author of "The Investor’s Guide to Tanzanian Labor"', 'Legal Advisor to 5 Fortune 500 Firms'],
    languages: ['English', 'Swahili'],
    specialization: 'HR & Compliance',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'omar-said',
    name: 'Omar Said',
    role: 'Partner',
    shortBio: 'Specializing in regulatory navigation and sectoral licensing.',
    fullBio: 'Omar provides the technical precision required for multi-agency regulatory approvals. His expertise spans energy, telecom, and industrial manufacturing, ensuring zero-downtime operational startups.',
    expertise: ['Regulatory Path', 'Licensing', 'Energy Sector'],
    achievements: ['Fast-Tracked 15+ IPP Licenses', 'Former BRELA Consultant'],
    languages: ['English', 'Swahili'],
    specialization: 'Regulatory',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
  }
];

export default function AttorneysPage() {
  const [activeSpec, setActiveSpec] = useState<Specialization>('All');
  const [activeLang, setActiveLang] = useState<Language>('All');

  const filteredAttorneys = useMemo(() => {
    return ATTORNEYS_DATA.filter(a => {
      const specMatch = activeSpec === 'All' || a.specialization === activeSpec;
      const langMatch = activeLang === 'All' || a.languages.includes(activeLang);
      return specMatch && langMatch;
    });
  }, [activeSpec, activeLang]);

  return (
    <div className="pt-48 min-h-screen bg-white overflow-x-hidden">
      <AttorneyHero />
      
      <section className="container mx-auto px-6 lg:px-12 py-12">
        <AttorneyFilters 
          activeSpec={activeSpec} 
          setActiveSpec={setActiveSpec}
          activeLang={activeLang}
          setActiveLang={setActiveLang}
        />
        
        <AttorneyGrid attorneys={filteredAttorneys} />
      </section>

      <AttorneyTestimonials />
      <AttorneyCTA />
    </div>
  );
}
