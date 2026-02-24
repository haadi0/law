
'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import DesktopNav from '@/components/header/DesktopNav';
import MobileNav from '@/components/header/MobileNav';
import Link from 'next/link';
import Image from 'next/image';
import GIcon from '@/new-logo-G-alphabet2.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use accent (gold) when at top, primary (navy) when scrolled
  const linkTextColor = isScrolled ? 'text-primary' : 'text-accent';

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
        {/* Logo - Desktop Only */}
        <Link href="/" className="hidden lg:flex items-center gap-1.5 group">
          <Image 
            src={GIcon} 
            alt="G" 
            width={45} 
            height={45} 
            className="h-10 w-auto transition-all duration-300"
            priority
          />
          <div className={cn(
            "flex flex-col leading-none transition-colors duration-300",
            isScrolled ? "text-primary" : "text-accent"
          )}>
            <span className="text-xl font-headline font-bold tracking-tighter">'ADROIT</span>
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-80">Attorneys</span>
          </div>
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
