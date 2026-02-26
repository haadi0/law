'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import DesktopNav from '@/components/header/DesktopNav';
import MobileNav from '@/components/header/MobileNav';
import Link from 'next/link';
import { Search, Globe, ChevronDown, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex flex-col w-full">
      {/* Tier 1: Top Promise Bar - Compact */}
      <div className="bg-accent text-white py-1 px-6 lg:px-12 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[8px] font-bold uppercase tracking-wider">
          <div className="flex items-center gap-1">
            <span>Precision counsel for <span className="underline italic">institutional investors</span> in East Africa.</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer hover:text-white/80 transition-colors">
              <span>Search Intelligence</span>
              <Search className="w-2 h-2 text-white/80 group-hover:text-white" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white/80 transition-colors">
              <Globe className="w-2 h-2 text-white/80" />
              <span>English</span>
              <ChevronDown className="w-2 h-2 text-white/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Middle Contact Hub - Tyopgraphic Wordmark Focus */}
      <div className="bg-white py-2 px-6 lg:px-12 hidden md:block border-b border-secondary/50 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          {/* Left: Address & Phone */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 text-[7px] text-muted-foreground font-medium uppercase tracking-widest">
              <MapPin className="w-2 h-2 text-accent" />
              <span>Elite Towers, Dar es Salaam.</span>
            </div>
            <a href="tel:+255222123456" className="text-xs font-headline font-bold text-accent hover:opacity-80 transition-opacity">
              +255 (0) 222 123 456
            </a>
          </div>

          {/* Center: Bespoke Typographic Mark */}
          <Link href="/" className="flex flex-col items-center justify-center group">
            <span className="text-xl lg:text-3xl font-headline font-bold text-primary leading-none tracking-tight">G&apos;ADROIT</span>
            <span className="text-[7px] font-bold text-accent tracking-[0.5em] uppercase mt-1">Attorneys</span>
          </Link>

          {/* Right: Hours & Email */}
          <div className="flex flex-col items-end gap-0.5">
            <div className="flex items-center gap-2 text-[7px] text-muted-foreground font-medium uppercase tracking-widest">
              <Clock className="w-2 h-2 text-accent" />
              <span>Briefings: 09:00 - 17:00 EAT</span>
            </div>
            <a href="mailto:consult@gadroit.com" className="text-xs font-headline font-bold text-accent hover:opacity-80 transition-opacity">
              consult@gadroit.com
            </a>
          </div>
        </div>
      </div>

      {/* Tier 3: Main Navigation Bar - STICKY */}
      <div className={cn(
        "bg-primary transition-all duration-300 px-6 lg:px-12 w-full border-b border-white/5",
        isScrolled ? "fixed top-0 left-0 right-0 shadow-xl" : "relative"
      )}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-12">
          <div className="md:hidden py-1 w-full">
            <MobileNav isScrolled={true} />
          </div>
          <div className="hidden md:flex w-full items-center justify-between">
            <DesktopNav isScrolled={true} linkTextColor="text-white" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
