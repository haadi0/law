'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const NEWS_DATA = [
  {
    id: 1,
    date: 'August 20, 2021',
    comments: 0,
    title: 'Friendly Frictionless Best Practices By Enterprise Messaging',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600',
    type: 'standard',
  },
  {
    id: 2,
    date: 'August 20, 2021',
    comments: 0,
    title: 'Building A Simple AI Chatbot With Web Speech And Node',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600',
    type: 'standard',
  },
  {
    id: 3,
    date: 'August 20, 2021',
    comments: 0,
    title: 'Keep In Mind When Design Transportation Map',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80&w=800',
    type: 'featured',
  },
];

export default function NewsUpdatesSection() {
  const standards = NEWS_DATA.filter((n) => n.type === 'standard');
  const featured = NEWS_DATA.find((n) => n.type === 'featured');

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-accent"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Our News & Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight uppercase tracking-tight">
            Every Single Updates
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Standard Updates */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12">
            {standards.map((news, idx) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center group cursor-pointer"
              >
                <div className="md:col-span-2 relative aspect-[4/3] overflow-hidden shadow-lg border border-primary/5">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
                <div className="md:col-span-3 space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-primary/40 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-accent" /> {news.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3 h-3 text-accent" /> Comment ({news.comments})
                    </span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                    {news.title}
                  </h3>
                  <Link
                    href="/insights"
                    className="inline-flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-[0.2em] group-hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-3 h-3 text-accent" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Featured Update */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative group cursor-pointer"
            >
              <div className="relative h-[450px] lg:h-full min-h-[400px] overflow-hidden shadow-2xl border border-primary/5">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1200px) 100vw, 40vw"
                />
                {/* 20% Opacity Overlay - Following site standard */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-accent" /> {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3 h-3 text-accent" /> Comment ({featured.comments})
                    </span>
                  </div>
                  <h3 className="text-3xl font-headline font-bold text-white leading-tight">
                    {featured.title}
                  </h3>
                  <Link
                    href="/insights"
                    className="inline-flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-[0.2em] group-hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
