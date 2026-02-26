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
      {/* Tier 1: Top Promise Bar */}
      <div className="bg-accent text-white py-2 px-6 lg:px-12 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
          <div className="flex items-center gap-1">
            <span>Precision counsel for <span className="underline italic">institutional investors</span> in East Africa.</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 group cursor-pointer">
              <span>Search Intelligence</span>
              <Search className="w-3 h-3 text-white/80 group-hover:text-white" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Globe className="w-3 h-3 text-white/80" />
              <span>English</span>
              <ChevronDown className="w-3 h-3 text-white/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Middle Contact Hub */}
      <div className="bg-white py-4 px-6 lg:px-12 hidden md:block border-b border-secondary/50">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          {/* Left: Address & Phone */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[9px] text-muted-foreground font-medium uppercase tracking-widest">
              <MapPin className="w-3 h-3 text-accent" />
              <span>Ohio Street, Elite Towers, Dar es Salaam.</span>
            </div>
            <a href="tel:+255222123456" className="text-lg font-headline font-bold text-accent hover:opacity-80 transition-opacity">
              +255 (0) 222 123 456
            </a>
          </div>

          {/* Center: Branding - Wordmark */}
          <Link href="/" className="flex flex-col items-center justify-center group">
            <span className="text-3xl lg:text-4xl font-headline font-bold text-accent leading-none tracking-tight">G&apos;ADROIT</span>
            <span className="text-[8px] font-bold text-primary tracking-[0.5em] uppercase mt-1">Attorneys</span>
          </Link>

          {/* Right: Hours & Email */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2 text-[9px] text-muted-foreground font-medium uppercase tracking-widest">
              <Clock className="w-3 h-3 text-accent" />
              <span>Strategic Briefings: 09:00 - 17:00</span>
            </div>
            <a href="mailto:consult@gadroit.com" className="text-lg font-headline font-bold text-accent hover:opacity-80 transition-opacity">
              consult@gadroit.com
            </a>
          </div>
        </div>
      </div>

      {/* Tier 3: Main Navigation Bar - STICKY */}
      <div className={cn(
        "bg-primary transition-all duration-300 px-6 lg:px-12 w-full",
        isScrolled ? "fixed top-0 left-0 right-0 shadow-xl py-1" : "relative py-0"
      )}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile View */}
          <div className="md:hidden py-3 w-full">
            <MobileNav isScrolled={true} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex w-full items-center justify-between">
            <DesktopNav isScrolled={true} linkTextColor="text-white" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
