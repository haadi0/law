
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, AlertTriangle, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PRACTICE_AREAS } from '@/lib/data';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const area = PRACTICE_AREAS.find((a) => a.slug === params.slug);
  if (!area) return { title: 'Practice Area Not Found' };
  return {
    title: `${area.title} | G'Adroit Attorneys`,
    description: area.description,
  };
}

export default function PracticeAreaPage({ params }: { params: { slug: string } }) {
  const area = PRACTICE_AREAS.find((a) => a.slug === params.slug);

  if (!area) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <Link href="/practice-areas" className="text-accent text-sm font-bold flex items-center gap-2 mb-8">
              <ArrowRight className="rotate-180 w-4 h-4" /> All Practice Areas
            </Link>
            <h1 className="text-5xl md:text-6xl font-headline font-bold">{area.title}</h1>
            <p className="text-xl text-primary-foreground/80 font-light max-w-2xl">
              {area.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* What We Do */}
              <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-8 pb-4 border-b">Scope of Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {area.process.map((step) => (
                    <div key={step} className="flex items-start gap-4 p-6 bg-white border shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                      <span className="font-semibold text-primary">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scenarios */}
              <div className="bg-secondary/20 p-8 rounded-lg">
                <h3 className="text-2xl font-headline font-bold text-primary mb-6">Common Strategic Scenarios</h3>
                <ul className="space-y-4">
                  {area.scenarios.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 italic text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                      <span>&quot;{item}&quot;</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risks */}
              <div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
                  <Shield className="text-accent" /> Mitigating Investor Risk
                </h3>
                <div className="space-y-4">
                  {area.risks.map((risk) => (
                    <div key={risk} className="flex items-center gap-4 p-6 bg-destructive/5 border border-destructive/10 rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
                      <span className="text-primary font-medium">{risk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-8">
              <Card className="bg-primary text-white border-none rounded-none">
                <CardHeader>
                  <CardTitle className="font-headline">Need Expert Guidance?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-primary-foreground/60">
                    Our specialized team is ready to analyze your specific operational challenges.
                  </p>
                  <Button asChild className="w-full bg-accent text-accent-foreground rounded-none">
                    <Link href="/contact">Request Consultation</Link>
                  </Button>
                </CardContent>
              </Card>

              <div className="p-8 border border-accent/20 bg-accent/5">
                <h4 className="font-headline font-bold text-primary mb-4">Related Resources</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/investor-resources" className="text-accent hover:underline">Investor Market Entry Guide</Link></li>
                  <li><Link href="/insights" className="text-accent hover:underline">Recent Regulatory Updates</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
