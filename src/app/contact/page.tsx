import React from 'react';
import ContactForm from '@/components/sections/ContactForm';
import { Mail, Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';

export const metadata = {
  title: "Contact & Confidential Briefing | G'Adroit Attorneys",
  description: 'Request a confidential consultation with our international business and dispute specialists in Dar es Salaam.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-headline font-bold">Engage With Confidence.</h1>
            <p className="text-xl text-primary-foreground/80 font-light leading-relaxed">
              Initiate your consultation through our secure portal. G'Adroit Attorneys treats every inquiry with the highest level of professional discretion and attorney-client privilege.
            </p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full -mr-24 -mb-24 blur-3xl"></div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Information Side */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-headline font-bold text-primary">Global Standards. Local Authority.</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <MapPin />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Dar es Salaam Headquarters</h4>
                      <p className="text-muted-foreground text-sm">12th Floor, Elite Towers, Ohio Street, P.O. Box 7772, Dar es Salaam, Tanzania</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Phone />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Regional Direct Line</h4>
                      <p className="text-muted-foreground text-sm">+255 (0) 222 123 456</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Mail />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Electronic Correspondence</h4>
                      <p className="text-muted-foreground text-sm">consult@gadroit.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <ShieldCheck className="text-accent" /> Absolute Discretion
                  </div>
                  <p className="text-xs text-muted-foreground">All communications are protected under attorney-client privilege from the moment of first contact.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Clock className="text-accent" /> Response Protocol
                  </div>
                  <p className="text-xs text-muted-foreground">Our partners review all international and institutional inquiries within 24 hours of submission.</p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white shadow-2xl p-8 md:p-12 -mt-32 lg:-mt-48 relative z-20 border border-border">
              <h3 className="text-2xl font-headline font-bold text-primary mb-8">Consultation Inquiry</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
