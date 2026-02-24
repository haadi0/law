
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data';

export default function BentoRelated() {
  const related = BLOG_POSTS.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Main Feature in Bento */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="md:col-span-2 md:row-span-2 bg-primary text-white p-12 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 text-accent font-bold opacity-10 text-6xl">01</div>
        <div className="space-y-6 relative z-10">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Featured Insight</span>
          <h3 className="text-3xl font-headline font-bold leading-tight group-hover:text-accent transition-colors">
            {related[0].title}
          </h3>
          <p className="text-primary-foreground/60 line-clamp-3 leading-relaxed">
            {related[0].excerpt}
          </p>
        </div>
        <Link href={`/insights/${related[0].slug}`} className="flex items-center gap-2 font-bold text-accent mt-8 relative z-10">
          Read Briefing <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </motion.div>

      {/* Secondary items */}
      {related.slice(1).map((post, idx) => (
        <motion.div 
          key={post.slug}
          whileHover={{ scale: 1.01 }}
          className="md:col-span-2 p-10 bg-background border flex flex-col justify-between group cursor-pointer"
        >
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{post.category}</span>
            <h3 className="text-xl font-headline font-bold text-primary group-hover:text-accent transition-colors leading-snug">
              {post.title}
            </h3>
          </div>
          <Link href={`/insights/${post.slug}`} className="mt-8 flex items-center justify-between text-xs font-bold text-primary">
            <span>Access Report</span>
            <ArrowUpRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-all" />
          </Link>
        </motion.div>
      ))}

      {/* Custom Hub Link */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="md:col-span-4 p-8 border border-accent/20 bg-accent/5 flex items-center justify-between group cursor-pointer"
      >
        <div className="flex items-center gap-6">
           <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">...</div>
           <h4 className="text-lg font-headline font-bold text-primary">Access the Complete Investor Intelligence Archive</h4>
        </div>
        <Link href="/insights" className="text-sm font-bold text-accent group-hover:translate-x-2 transition-transform">
          Browse Insights →
        </Link>
      </motion.div>
    </div>
  );
}
