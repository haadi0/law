
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { personalizeConsultationRouting } from '@/ai/flows/personalized-consultation-routing';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  message: z.string().min(10, { message: 'Please provide more detail about your inquiry.' }),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [suggestion, setSuggestion] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await personalizeConsultationRouting({
        name: values.name,
        email: values.email,
        company: values.company,
        message: values.message,
      });
      setSuggestion(result);
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted && suggestion) {
    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-headline font-bold text-primary">Inquiry Received</h2>
          <p className="text-muted-foreground">Thank you for reaching out. We have analyzed your inquiry and identified the optimal lead for your case.</p>
        </div>

        <div className="bg-primary/5 border border-accent/20 p-6 space-y-4">
          <div className="flex items-center gap-2 text-accent font-bold text-sm">
            <Sparkles className="w-4 h-4" /> AI RECOMMENDED ROUTING
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Practice Area</span>
            <p className="font-headline text-lg text-primary">{suggestion.suggestedPracticeArea}</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Suggested Partner</span>
            <p className="font-headline text-lg text-primary">{suggestion.suggestedAttorney}</p>
          </div>
          <div className="pt-2 border-t border-accent/10">
            <p className="text-xs text-muted-foreground leading-relaxed italic">{suggestion.reasoning}</p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          A formal response from {suggestion.suggestedAttorney}&apos;s office will be sent to your email within 24 hours.
        </p>
        
        <Button 
          variant="outline" 
          className="w-full rounded-none"
          onClick={() => {
            setSubmitted(false);
            setSuggestion(null);
            form.reset();
          }}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="rounded-none border-primary/20 focus:border-accent" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Professional Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@company.com" className="rounded-none border-primary/20 focus:border-accent" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Global Investments Ltd" className="rounded-none border-primary/20 focus:border-accent" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brief Summary of Legal Matter</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Provide context regarding your investment, regulatory hurdle, or dispute..." 
                  className="min-h-[150px] rounded-none border-primary/20 focus:border-accent resize-none"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-none font-bold text-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Routing Inquiry...
            </>
          ) : (
            'Request Confidential Consultation'
          )}
        </Button>
        <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
          Secured with end-to-end encryption & client confidentiality protocol
        </p>
      </form>
    </Form>
  );
};

export default ContactForm;
