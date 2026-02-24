
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileDrawer from './MobileDrawer';
import logo from '@/Gadroit-Logo.png';

interface MobileNavProps {
  isScrolled: boolean;
}

export default function MobileNav({ isScrolled }: MobileNavProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="lg:hidden flex items-center justify-between w-full">
      {/* Brand / Logo */}
      <Link href="/" className="flex items-center group">
        <Image 
          src={logo} 
          alt="G'ADROIT ATTORNEYS" 
          width={140} 
          height={40} 
          className={cn(
            "h-8 w-auto transition-all duration-300",
            !isScrolled && "brightness-0 invert opacity-90"
          )}
          priority
        />
      </Link>

      {/* Quick Actions */}
      <div className="flex items-center gap-4">
        <a
          href="tel:+255222123456"
          className={cn(
            "p-2 rounded-full transition-all border",
            isScrolled 
              ? "bg-secondary text-primary border-primary/10" 
              : "bg-white/10 text-accent border-accent/20"
          )}
          aria-label="Call office"
        >
          <Phone className="w-5 h-5" />
        </a>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className={cn(
            "p-2 transition-colors",
            isScrolled ? "text-primary" : "text-accent"
          )}
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
