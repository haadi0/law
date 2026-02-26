import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, AlertTriangle, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PRACTICE_AREAS } from '@/lib/data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) return { title: 'Practice Area Not Found' };
  return {
    title: `${area.title} | G'Adroit Attorneys`,
    description: area.description,
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero - Compacted */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <Link href="/practice-areas" className="text-accent text-[10px] font-bold flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity uppercase tracking-widest">
              <ArrowRight className="rotate-180 w-3 h-3" /> ALL PRACTICE AREAS
            </Link>
            <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight">{area.title}</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-light max-w-2xl leading-relaxed">
              {area.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              {/* Scope of Expertise */}
              <div>
                <h2 className="text-xl md:text-2xl font-headline font-bold text-primary mb-8 pb-4 border-b">Scope of Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {area.process.map((step) => (
                    <div key={step} className="flex items-start gap-4 p-6 bg-white border shadow-sm group hover:border-accent transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="font-bold text-sm text-primary">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scenarios */}
              <div className="bg-secondary/20 p-8 border border-primary/5">
                <h3 className="text-lg font-headline font-bold text-primary mb-6 uppercase tracking-wider">Strategic Scenarios</h3>
                <ul className="space-y-4">
                  {area.scenarios.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 italic text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                      <span>&quot;{item}&quot;</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risks */}
              <div className="space-y-6">
                <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" /> Mitigating Investor Risk
                </h3>
                <div className="space-y-3">
                  {area.risks.map((risk) => (
                    <div key={risk} className="flex items-center gap-4 p-5 bg-destructive/5 border border-destructive/10">
                      <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
                      <span className="text-primary text-sm font-medium">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-6">
              <Card className="bg-primary text-white border-none rounded-none shadow-2xl">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">Request Expert Counsel</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-primary-foreground/40 leading-relaxed">
                    Analyzing specialized operational challenges & mapping regulatory paths.
                  </p>
                  <Button asChild className="w-full bg-accent text-accent-foreground rounded-none h-12 text-[10px] font-bold tracking-widest hover:bg-white hover:text-primary transition-all uppercase">
                    <Link href="/contact">START CONSULTATION</Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="p-8 border border-accent/20 bg-accent/5">
                <h4 className="font-headline font-bold text-primary text-sm mb-4 uppercase tracking-widest">Resources</h4>
                <ul className="space-y-3 text-xs">
                  <li><Link href="/investor-resources" className="text-accent hover:underline font-bold">Investor Market Entry Guide</Link></li>
                  <li><Link href="/insights" className="text-accent hover:underline font-bold">Recent Regulatory Updates</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}