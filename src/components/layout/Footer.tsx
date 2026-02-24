
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { PRACTICE_AREAS } from '@/lib/data';
import logo from '@/Gadroit-Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand block */}
          <div className="space-y-6">
            <Link href="/">
              <Image 
                src={logo} 
                alt="G'ADROIT ATTORNEYS" 
                width={200} 
                height={55} 
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Tanzania-based | East Africa-focused | International business & dispute specialists.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-accent transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></Link>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-6">
            <h4 className="font-headline text-lg font-semibold text-accent">Practice Areas</h4>
            <ul className="space-y-3">
              {PRACTICE_AREAS.slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link href={`/practice-areas/${area.slug}`} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-headline text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">About the Firm</Link></li>
              <li><Link href="/industries" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Industries</Link></li>
              <li><Link href="/investor-resources" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Investor Resources</Link></li>
              <li><Link href="/insights" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Insights & News</Link></li>
              <li><Link href="/contact" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h4 className="font-headline text-lg font-semibold text-accent">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>12th Floor, Elite Towers, Ohio Street, Dar es Salaam, Tanzania</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:consult@gadroit.com" className="hover:text-accent">consult@gadroit.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+255222123456" className="hover:text-accent">+255 222 123 456</a>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-[10px] text-primary-foreground/40 italic">
                Notice: All inquiries are treated with strict confidentiality.
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <p>© {currentYear} G&apos;ADROIT ATTORNEYS. All rights reserved.</p>
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
