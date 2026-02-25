
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Scale, Briefcase, User } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Left Column: Testimonial */}
      <div className="bg-primary text-white p-12 lg:p-24 flex flex-col justify-center relative min-h-[500px] lg:min-h-[700px]">
        {/* Quote Icon */}
        <div className="absolute top-12 left-12 lg:top-24 lg:left-24">
          <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
            <Quote className="w-6 h-6 text-white fill-white" />
          </div>
        </div>

        <div className="space-y-12 max-w-lg mx-auto lg:mx-0 pt-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-bold leading-tight">What Our Clients Say</h2>
            <div className="flex items-center gap-1">
              <div className="h-[1px] w-12 bg-accent/40"></div>
              <span className="text-accent italic font-headline text-lg">//</span>
              <div className="h-[1px] w-12 bg-accent/40"></div>
            </div>
          </div>

          <p className="text-xl font-light leading-relaxed text-primary-foreground/80 italic">
            "How to pursue pleasure rationally consequences that are extremely painful or again is there anyones who loves or pursues or desires to obtain pain of itself because its sed great pleasure get well soon."
          </p>

          <div className="h-[1px] w-16 bg-white/20"></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative w-16 h-16 rounded-none overflow-hidden grayscale">
                <Image 
                  src="https://picsum.photos/seed/alex-carolina/200/200" 
                  alt="Alex Carolina" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-headline font-bold">Alex Carolina</h4>
                <p className="text-xs text-primary-foreground/50 uppercase tracking-widest">CEO of RJX Solutions</p>
              </div>
            </div>
            
            {/* Signature Placeholder */}
            <div className="hidden md:block">
              <span className="font-headline italic text-3xl text-white/40 select-none">Carolina</span>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            <div className="w-2.5 h-2.5 rounded-full border border-white"></div>
            <div className="w-2.5 h-2.5 rounded-full border border-white"></div>
          </div>
        </div>
      </div>

      {/* Right Column: Values */}
      <div className="bg-[#f7f6f2] p-12 lg:p-24 flex flex-col justify-center relative min-h-[500px] lg:min-h-[700px]">
        <div className="max-w-lg mx-auto lg:mx-0 space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-bold text-primary">What Our Clients Say</h2>
            <div className="flex items-center gap-1">
              <div className="h-[1px] w-12 bg-accent/40"></div>
              <span className="text-accent italic font-headline text-lg">//</span>
              <div className="h-[1px] w-12 bg-accent/40"></div>
            </div>
          </div>

          <div className="space-y-12 relative">
            {/* Feature Points */}
            {[
              { 
                icon: Scale, 
                title: 'Fight For Justice', 
                desc: 'Seeking justice in the world is a sed significant emotional and investment when we follow this call, we\'re deeply.' 
              },
              { 
                icon: Briefcase, 
                title: 'Best Case Strategy', 
                desc: 'Proving liability in plaintiffs\' personal injury and complex civil litigation can be challenging and requires relent.' 
              },
              { 
                icon: User, 
                title: 'Experienced Attorneys', 
                desc: 'Lawyer Justice offers a broad range of opportunities for Speak Experienced attorneys to work you.' 
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="shrink-0 pt-1">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-headline font-bold text-primary">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
