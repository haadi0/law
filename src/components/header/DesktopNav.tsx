
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
    { name: 'About', href: '/about' },
    { name: 'Industries', href: '/industries' },
    { name: 'Resources', href: '/investor-resources' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="hidden lg:flex items-center gap-10">
      <DropdownMenu>
        <DropdownMenuTrigger className={cn(
          "flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors outline-none group",
          linkTextColor,
          "hover:text-accent"
        )}>
          Practice Areas <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64 p-2 bg-background border shadow-xl rounded-none">
          <DropdownMenuItem asChild>
            <Link href="/practice-areas" className="font-bold py-2 uppercase tracking-widest text-[10px]">All Areas</Link>
          </DropdownMenuItem>
          {PRACTICE_AREAS.map((area) => (
            <DropdownMenuItem key={area.slug} asChild>
              <Link href={`/practice-areas/${area.slug}`} className="py-2 text-[11px] font-medium">
                {area.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            'text-sm font-bold uppercase tracking-widest transition-colors',
            pathname === link.href ? 'text-accent' : linkTextColor,
            'hover:text-accent'
          )}
        >
          {link.name}
        </Link>
      ))}

      <Button asChild size="sm" className={cn(
        "rounded-none px-6 font-bold uppercase tracking-widest text-[10px] transition-all duration-300",
        isScrolled ? "bg-primary text-white hover:bg-accent" : "bg-white text-primary hover:bg-accent hover:text-white"
      )}>
        <Link href="/contact">Inquiry</Link>
      </Button>
    </div>
  );
}
