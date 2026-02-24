
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BLOG_POSTS } from '@/lib/data';
import { Input } from '@/components/ui/input';

export const metadata = {
  title: "Insights & News | G'Adroit Attorneys",
  description: 'Legal analysis, regulatory updates, and expert insights on Tanzanian and East African law.',
};

export default function InsightsPage() {
  const featured = BLOG_POSTS[0];
  const others = BLOG_POSTS.slice(1);

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-5xl md:text-6xl font-headline font-bold">Insights</h1>
              <p className="text-xl text-primary-foreground/80 font-light">
                Analytical intelligence on the evolving legal landscape of East Africa.
              </p>
            </div>
            <div className="w-full md:w-80 relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/40" />
               <Input placeholder="Search insights..." className="pl-10 bg-white text-primary rounded-none h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <Link href={`/insights/${featured.slug}`} className="group block mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white border overflow-hidden hover:shadow-2xl transition-shadow duration-500">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/gadroit-blog/800/500" 
                  fill 
                  alt={featured.title} 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-12 space-y-6">
                <div className="flex items-center gap-4 text-xs font-bold text-accent uppercase tracking-widest">
                  <span>{featured.category}</span>
                  <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                  <span className="text-muted-foreground">{featured.date}</span>
                </div>
                <h2 className="text-4xl font-headline font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="pt-4">
                  <span className="flex items-center gap-2 font-bold text-primary">
                    Read Analysis <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Listing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {others.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="group space-y-6">
                <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                   <Image 
                    src={`https://picsum.photos/seed/${post.slug}/600/400`} 
                    fill 
                    alt={post.title} 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-accent uppercase tracking-widest">
                    <span>{post.category}</span>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Categories/Pagination placeholder */}
          <div className="mt-24 pt-12 border-t flex flex-wrap gap-4 items-center justify-center">
             <Button variant="outline" className="rounded-none px-8 py-6 text-lg">Load Older Insights</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
