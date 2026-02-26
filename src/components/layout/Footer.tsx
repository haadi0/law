'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { PRACTICE_AREAS } from '@/lib/data';

const Footer = () => {
  const [year, setYear] = useState<string>('2024');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand block - Typography Mark */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col items-start group">
              <span className="text-2xl font-headline font-bold text-accent leading-none">G&apos;ADROIT</span>
              <span className="text-[8px] font-bold text-primary-foreground/60 tracking-[0.4em] uppercase mt-1">Attorneys</span>
            </Link>
            <p className="text-xs text-primary-foreground/60 leading-relaxed max-w-xs">
              Tanzania-based | East Africa-focused elite practice. Providing precision counsel for global institutional capital.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-accent transition-colors"><Linkedin size={18} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Twitter size={18} /></Link>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h4 className="font-headline text-base font-semibold text-accent">Practice Areas</h4>
            <ul className="space-y-2">
              {PRACTICE_AREAS.slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link href={`/practice-areas/${area.slug}`} className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-headline text-base font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">About the Firm</Link></li>
              <li><Link href="/industries" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">Industries</Link></li>
              <li><Link href="/investor-resources" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">Investor Resources</Link></li>
              <li><Link href="/insights" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">Insights & News</Link></li>
              <li><Link href="/contact" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="font-headline text-base font-semibold text-accent">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-xs text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>12th Floor, Elite Towers, Dar es Salaam</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-primary-foreground/60">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:consult@gadroit.com" className="hover:text-accent">consult@gadroit.com</a>
              </div>
              <div className="flex items-center gap-3 text-xs text-primary-foreground/60">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+255222123456" className="hover:text-accent">+255 222 123 456</a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-primary-foreground/40">
          <p>© {year} G&apos;ADROIT ATTORNEYS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-engagement" className="hover:text-accent transition-colors">Terms of Engagement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
