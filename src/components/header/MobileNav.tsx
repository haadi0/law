
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

      {/* Quick Actions */}
      <div className="flex items-center gap-4">
        <a
          href="tel:+1238591263"
          className="p-3 rounded-full bg-white/10 text-accent border border-accent/20 transition-all"
          aria-label="Call office"
        >
          <Phone className="w-4 h-4" />
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
