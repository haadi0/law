'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import DesktopNav from '@/components/header/DesktopNav';
import MobileNav from '@/components/header/MobileNav';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Globe, ChevronDown, Phone, Mail, MapPin, Clock } from 'lucide-react';
import GadroitLogo from '@/Gadroit-Logo.png';

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
      {/* Tier 1: Top Promise Bar - NOT STICKY */}
      <div className="bg-accent text-white py-2 px-6 lg:px-12 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-wider">
          <div className="flex items-center gap-1">
            <span>Our <span className="underline italic">No Fee Promise</span> Means, No Cost Until Your Case Is Won.</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 group cursor-pointer">
              <span>Search Your Needs Here</span>
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

      {/* Tier 2: Middle Contact Hub - NOT STICKY */}
      <div className="bg-white py-6 px-6 lg:px-12 hidden md:block border-b border-secondary/50">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          {/* Left: Address & Phone */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
              <MapPin className="w-3 h-3 text-accent" />
              <span>5648 VK 26th Lane - Florida 26154.</span>
            </div>
            <a href="tel:+1238591263" className="text-2xl font-headline font-bold text-accent hover:opacity-80 transition-opacity">
              +123.859.1263
            </a>
          </div>

          {/* Center: Branding (Logo replaces text) */}
          <Link href="/" className="flex items-center justify-center group">
            <Image 
              src={GadroitLogo} 
              alt="G'Adroit Attorneys" 
              width={220} 
              height={60} 
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Right: Hours & Email */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
              <Clock className="w-3 h-3 text-accent" />
              <span>Office Hours: 09:00am - 17:00pm</span>
            </div>
            <a href="mailto:info@domain.com" className="text-2xl font-headline font-bold text-accent hover:opacity-80 transition-opacity">
              info@domain.com
            </a>
          </div>
        </div>
      </div>

      {/* Tier 3: Main Navigation Bar - STICKY */}
      <div className={cn(
        "bg-primary transition-all duration-300 px-6 lg:px-12 w-full",
        isScrolled ? "fixed top-0 left-0 right-0 shadow-xl py-2" : "relative py-0"
      )}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile View: Logo/Brand (Visible only on mobile) */}
          <div className="md:hidden py-4 w-full">
            <MobileNav isScrolled={true} />
          </div>

          {/* Desktop Navigation Link Container */}
          <div className="hidden md:flex w-full items-center justify-between">
            <DesktopNav isScrolled={true} linkTextColor="text-white" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;