
'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import DesktopNav from '@/components/header/DesktopNav';
import MobileNav from '@/components/header/MobileNav';
import Link from 'next/link';
import Image from 'next/image';

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
        <Link href="/" className="hidden lg:flex items-center group">
          <Image 
            src="/Gadroit-Logo.png" 
            alt="G'ADROIT ATTORNEYS" 
            width={180} 
            height={50} 
            className={cn(
              "h-10 md:h-12 w-auto transition-all duration-300",
              !isScrolled && "brightness-0 invert opacity-90"
            )}
            priority
          />
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
