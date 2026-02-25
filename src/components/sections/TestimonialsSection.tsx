
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Scale, Briefcase, User } from 'lucide-react';

const testimonials = [
  {
    quote: "The professional precision G'Adroit brings to our international operations is unmatched. Their deep understanding of both local and global legal standards has been pivotal to our success in the region.",
    author: "Alex Carolina",
    role: "CEO of RJX Solutions",
    signature: "Carolina",
    image: "https://picsum.photos/seed/alex-carolina/200/200"
  },
  {
    quote: "Navigating regulatory hurdles in East Africa felt daunting until we partnered with G'Adroit. Their authority and local knowledge gave us the confidence to scale rapidly and securely.",
    author: "Sarah Jenkins",
    role: "Director at Global Ventures",
    signature: "Jenkins",
    image: "https://picsum.photos/seed/sarah-jenkins/200/200"
  },
  {
    quote: "G'Adroit Attorneys represents the gold standard of African legal practice. Their strategic counsel is predictive, ensuring our investments are protected well before we hit the ground.",
    author: "David Chen",
    role: "Founder of TechStart",
    signature: "Chen",
    image: "https://picsum.photos/seed/david-chen/200/200"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Left Column: Testimonial Slider */}
      <div className="bg-primary text-white p-12 lg:p-24 flex flex-col justify-center relative min-h-[500px] lg:min-h-[700px]">
        {/* Quote Icon */}
        <div className="absolute top-12 left-12 lg:top-24 lg:left-24">
          <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
            <Quote className="w-6 h-6 text-white fill-white" />
          </div>
        </div>

        <div className="space-y-12 max-w-lg mx-auto lg:mx-0 pt-16 h-full flex flex-col justify-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-bold leading-tight">What Our Clients Say</h2>
            <div className="flex items-center gap-1">
              <div className="h-[1px] w-12 bg-accent/40"></div>
              <span className="text-accent italic font-headline text-lg">//</span>
              <div className="h-[1px] w-12 bg-accent/40"></div>
            </div>
          </div>

          <div className="relative min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <p className="text-xl font-light leading-relaxed text-primary-foreground/80 italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="h-[1px] w-16 bg-white/20"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="relative w-16 h-16 rounded-none overflow-hidden grayscale">
                      <Image 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].author} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-headline font-bold">{testimonials[currentIndex].author}</h4>
                      <p className="text-xs text-primary-foreground/50 uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block">
                    <span className="font-headline italic text-3xl text-white/40 select-none">
                      {testimonials[currentIndex].signature}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 pt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-white scale-125' : 'border border-white hover:bg-white/20'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Values */}
      <div className="bg-[#f7f6f2] p-12 lg:p-24 flex flex-col justify-center relative min-h-[500px] lg:min-h-[700px]">
        <div className="max-w-lg mx-auto lg:mx-0 space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-bold text-primary">Strategic Values</h2>
            <div className="flex items-center gap-1">
              <div className="h-[1px] w-12 bg-accent/40"></div>
              <span className="text-accent italic font-headline text-lg">//</span>
              <div className="h-[1px] w-12 bg-accent/40"></div>
            </div>
          </div>

          <div className="space-y-12 relative">
            {[
              { 
                icon: Scale, 
                title: 'Fight For Justice', 
                desc: 'Seeking justice in a complex world is a significant investment. When we follow this call, we are deeply committed to your cause.' 
              },
              { 
                icon: Briefcase, 
                title: 'Best Case Strategy', 
                desc: 'Proving liability in complex civil litigation requires relentless engineering and a masterful grasp of the regulatory path.' 
              },
              { 
                icon: User, 
                title: 'Experienced Attorneys', 
                desc: 'Our partners offer a broad range of opportunities for specialized counsel to work directly on your most critical matters.' 
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
