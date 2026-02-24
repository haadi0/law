
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileDrawer from './MobileDrawer';
import GIcon from '@/new-logo-G-alphabet.png';

interface MobileNavProps {
  isScrolled: boolean;
}

export default function MobileNav({ isScrolled }: MobileNavProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="lg:hidden flex items-center justify-between w-full">
      {/* Brand / Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <Image 
          src={GIcon} 
          alt="G" 
          width={36} 
          height={36} 
          className={cn(
            "h-8 w-auto transition-all duration-300",
            !isScrolled && "brightness-0 invert opacity-90"
          )}
          priority
        />
        <div className={cn(
          "flex flex-col leading-none transition-colors duration-300",
          isScrolled ? "text-primary" : "text-accent"
        )}>
          <span className="text-lg font-headline font-bold tracking-tighter">'ADROIT</span>
          <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-80">Attorneys</span>
        </div>
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
          <Phone className="w-4 h-4" />
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
