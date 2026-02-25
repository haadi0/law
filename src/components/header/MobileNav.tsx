
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone } from 'lucide-react';
import MobileDrawer from './MobileDrawer';
import GadroitLogo from '@/Gadroit-Logo.png';

interface MobileNavProps {
  isScrolled: boolean;
}

export default function MobileNav({ isScrolled }: MobileNavProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      {/* Brand / Logo */}
      <Link href="/" className="flex items-center group">
        <div className="relative rounded-full overflow-hidden w-auto h-auto">
          <Image 
            src={GadroitLogo} 
            alt="G'Adroit Attorneys" 
            width={180} 
            height={54} 
            className="h-14 w-auto object-contain rounded-full"
            priority
          />
        </div>
      </Link>

      {/* Quick Actions */}
      <div className="flex items-center gap-4">
        <a
          href="tel:+1238591263"
          className="p-2 rounded-full bg-white/10 text-accent border border-accent/20 transition-all"
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
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </div>
  );
}
