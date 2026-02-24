
'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import DesktopNav from '@/components/header/DesktopNav';
import MobileNav from '@/components/header/MobileNav';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkTextColor = isScrolled ? 'text-foreground' : 'text-accent';
  const headerTextColor = isScrolled ? 'text-primary' : 'text-accent';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12',
        isScrolled 
          ? 'py-4 bg-background/95 backdrop-blur-md shadow-sm border-b border-accent/20' 
          : 'py-6 bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Desktop Only (MobileNav handles its own logo) */}
        <Link href="/" className="hidden lg:flex flex-col group">
          <span className={cn(
            "font-headline text-2xl font-bold tracking-tight leading-tight transition-colors duration-300",
            headerTextColor
          )}>
            G&apos;ADROIT <span className="text-accent">.</span>
          </span>
          <span className={cn(
            "text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300",
            isScrolled ? "text-muted-foreground" : "text-white/60"
          )}>
            Attorneys
          </span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav isScrolled={isScrolled} linkTextColor={linkTextColor} />

        {/* Mobile Navigation */}
        <MobileNav isScrolled={isScrolled} />
      </nav>
    </header>
  );
};

export default Header;
