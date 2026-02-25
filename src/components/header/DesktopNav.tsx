
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
    { name: 'About Us', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas', hasDropdown: true },
    { name: 'Attorneys', href: '#attorneys' },
    { name: 'FAQ', href: '#faq' },
    { name: 'News', href: '/insights' },
    { name: 'Shop', href: '#' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="flex items-center justify-between w-full h-16">
      <div className="flex items-center gap-8">
        {navLinks.map((link) => {
          if (link.hasDropdown) {
            return (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className={cn(
                  "flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors outline-none group",
                  linkTextColor,
                  "hover:text-accent"
                )}>
                  {link.name} <ChevronDown className="w-3 h-3 transition-transform group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 p-2 bg-background border shadow-xl rounded-none">
                  {PRACTICE_AREAS.map((area) => (
                    <DropdownMenuItem key={area.slug} asChild>
                      <Link href={`/practice-areas/${area.slug}`} className="py-2 text-[11px] font-medium">
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
                'text-xs font-bold uppercase tracking-widest transition-colors',
                pathname === link.href ? 'text-accent' : linkTextColor,
                'hover:text-accent'
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <Button asChild size="sm" className="rounded-none px-8 h-10 bg-white text-primary hover:bg-accent hover:text-white font-bold uppercase tracking-widest text-[11px] transition-all duration-300">
        <Link href="/contact">Free Consultation</Link>
      </Button>
    </div>
  );
}
