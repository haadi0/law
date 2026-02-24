
import React from 'react';
import Link from 'next/link';
import { Search, FileText, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { INVESTOR_RESOURCES } from '@/lib/data';

export const metadata = {
  title: "Investor Resources Hub | G'Adroit Attorneys",
  description: 'A structured library of legal guides and resources for foreign investors in Tanzania and East Africa.',
};

export default function ResourcesPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-6xl font-headline font-bold">Investor Intelligence Hub</h1>
            <p className="text-xl text-primary-foreground/80 font-light">
              Essential legal guides and regulatory resources designed specifically for foreign direct investment in the East African region.
            </p>
            <div className="relative max-w-xl">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/40" />
               <Input 
                placeholder="Search guides (e.g., Land Acquisition, Tax, JV Structure)" 
                className="pl-10 h-14 bg-white text-primary rounded-none border-none focus-visible:ring-accent"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INVESTOR_RESOURCES.map((resource, idx) => (
              <div key={idx} className="bg-white p-8 border hover:border-accent transition-all duration-300 group shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent">
                      <FileText />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground bg-secondary px-2 py-1">{resource.category}</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-primary leading-snug group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>
                </div>
                <div className="mt-8 pt-6 border-t flex justify-between items-center">
                   <Button variant="link" className="p-0 text-primary font-bold flex items-center gap-2 group-hover:text-accent">
                     Read Guide <ArrowRight className="w-4 h-4" />
                   </Button>
                   <Download className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Call-out */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <h2 className="text-4xl font-headline font-bold mb-6">Need Bespoke Intelligence?</h2>
          <p className="text-primary-foreground/60 mb-10 text-lg font-light leading-relaxed">
            While our guides provide general frameworks, every investment scenario carries unique variables. Our advisory team provides customized market entry and regulatory reports for institutional investors.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-none px-12 h-16 text-lg">
             <Link href="/contact">Request Bespoke Advisory Report</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
