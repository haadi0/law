
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PracticeAreasAccordion from './PracticeAreasAccordion';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About the Firm', href: '/about' },
    { name: 'Industries', href: '/industries' },
    { name: 'Investor Resources', href: '/investor-resources' },
    { name: 'Insights & News', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/60 backdrop-blur-sm z-50 lg:hidden"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            role="dialog"
            aria-modal="true"
            className="fixed top-0 right-0 h-[100dvh] w-[90%] md:w-full md:max-w-md bg-primary text-white z-[60] lg:hidden shadow-2xl overflow-y-auto"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex min-h-[100dvh] flex-col pt-[calc(env(safe-area-inset-top)+16px)] pb-[calc(env(safe-area-inset-bottom)+16px)]">
              <div className="px-6 pb-6 flex justify-between items-center border-b border-white/10 shrink-0">
                <Link href="/" onClick={onClose} className="flex flex-col items-start">
                  <span className="text-2xl font-headline font-bold text-accent leading-none">G&apos;ADROIT</span>
                  <span className="text-[8px] font-bold text-white tracking-[0.3em] uppercase mt-1">Attorneys</span>
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-8 h-8 text-white" />
                </button>
              </div>

              <div className="flex-1 p-6 space-y-12">
                <div className="space-y-4">
                  <Button
                    asChild
                    className="w-full bg-accent text-primary hover:bg-white py-8 text-lg font-bold rounded-none shadow-xl"
                    onClick={onClose}
                  >
                    <Link href="/contact">Request Confidential Consultation</Link>
                  </Button>
                  <div className="p-4 bg-white/5 border border-white/10 space-y-3">
                    <a
                      href="mailto:consult@gadroit.com"
                      className="flex items-center gap-3 text-sm text-white/80 hover:text-accent transition-colors"
                    >
                      <Mail className="w-4 h-4 text-accent" /> consult@gadroit.com
                    </a>
                    <a
                      href="tel:+255222123456"
                      className="flex items-center gap-3 text-sm text-white/80 hover:text-accent transition-colors"
                    >
                      <Phone className="w-4 h-4 text-accent" /> +255 222 123 456
                    </a>
                    <p className="text-[10px] italic text-white/40 border-t border-white/5 pt-2">
                      Notice: All inquiries are treated with strict confidentiality.
                    </p>
                  </div>
                </div>

                <nav className="flex flex-col">
                  {navLinks.map((link) => {
                    if (link.name === 'About the Firm') {
                      return (
                        <React.Fragment key={link.name}>
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className="py-4 text-2xl font-headline font-bold text-white border-b border-white/10 hover:text-accent transition-all hover:translate-x-2"
                          >
                            {link.name}
                          </Link>
                          <PracticeAreasAccordion onItemClick={onClose} />
                        </React.Fragment>
                      )
                    }
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={onClose}
                        className="py-4 text-2xl font-headline font-bold text-white border-b border-white/10 hover:text-accent transition-all hover:translate-x-2"
                      >
                        {link.name}
                      </Link>
                    )
                  })}
                </nav>

                <div className="pt-8 pb-12">
                  <Link 
                    href="/contact" 
                    onClick={onClose}
                    className="flex items-center justify-between text-xl font-headline font-bold text-accent group"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
