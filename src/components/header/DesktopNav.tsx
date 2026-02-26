'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PRACTICE_AREAS } from '@/lib/data';

interface DesktopNavProps {
  isScrolled: boolean;
  linkTextColor: string;
}

export default function DesktopNav({ isScrolled, linkTextColor }: DesktopNavProps) {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About the Firm', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas', hasDropdown: true },
    { name: 'Attorneys', href: '/attorneys' },
    { name: 'Industries', href: '/industries' },
    { name: 'News', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="relative flex items-center w-full h-11">
      {/* Centered Links */}
      <div className="flex-1 flex justify-center items-center gap-8">
        {navLinks.map((link) => {
          if (link.hasDropdown) {
            return (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className={cn(
                  "flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest transition-colors outline-none group",
                  linkTextColor,
                  "hover:text-accent"
                )}>
                  {link.name} <ChevronDown className="w-3 h-3 transition-transform group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 p-2 bg-background border shadow-xl rounded-none">
                  {PRACTICE_AREAS.map((area) => (
                    <DropdownMenuItem key={area.slug} asChild>
                      <Link href={`/practice-areas/${area.slug}`} className="py-2 text-[10px] font-bold uppercase tracking-widest">
                        {area.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-[10px] font-bold uppercase tracking-widest transition-colors',
                pathname === link.href ? 'text-accent' : linkTextColor,
                'hover:text-accent'
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Right Aligned CTA - Compacted h-12 Equivalent for Nav */}
      <div className="shrink-0">
        <Button asChild size="sm" className="rounded-none px-6 h-8 bg-accent text-white hover:bg-white hover:text-primary font-bold uppercase tracking-widest text-[9px] transition-all duration-300 shadow-lg">
          <Link href="/contact">Free Consultation</Link>
        </Button>
      </div>
    </div>
  );
}
