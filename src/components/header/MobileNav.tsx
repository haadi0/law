'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import MobileDrawer from './MobileDrawer';

interface MobileNavProps {
  isScrolled: boolean;
}

export default function MobileNav({ isScrolled }: MobileNavProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      {/* Brand / Logo - Typography Based */}
      <Link href="/" className="flex flex-col items-start group">
        <span className="text-xl font-headline font-bold text-accent leading-none">G&apos;ADROIT</span>
        <span className="text-[7px] font-bold text-white tracking-[0.3em] uppercase mt-1">Attorneys</span>
      </Link>

      {/* Quick Actions - Compacted CTA */}
      <div className="flex items-center gap-3">
        <a
          href="tel:+255222123456"
          className="flex items-center gap-2 px-3 py-1.5 rounded-none bg-accent text-white border border-accent transition-all text-[9px] font-bold uppercase tracking-widest hover:bg-white hover:text-accent shadow-lg"
          aria-label="Call office"
        >
          <Phone className="w-3 h-3" />
          <span>Call</span>
        </a>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="p-2 text-white transition-colors"
          aria-label="Open menu"
          aria-expanded={isDrawerOpen}
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </div>
  );
}
