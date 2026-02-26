'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to the console for debugging
    console.error('SERVER_ERROR_DEBUG:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-md w-full space-y-8 text-center bg-white p-12 border shadow-2xl">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center text-destructive">
            <AlertCircle className="w-10 h-10" />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-headline font-bold text-primary">Protocol Disruption</h1>
          <p className="text-muted-foreground font-light leading-relaxed">
            An internal server error occurred while processing this request. Details have been logged for our technical unit.
          </p>
          <div className="p-4 bg-secondary/30 rounded text-[10px] font-mono text-primary/60 break-all">
            Digest: {error.digest || 'Internal system failure'}
          </div>
        </div>
        <Button 
          onClick={() => reset()}
          className="w-full bg-primary hover:bg-accent text-white h-14 rounded-none font-bold uppercase tracking-widest transition-all group"
        >
          <RefreshCcw className="mr-2 w-4 h-4 group-hover:rotate-180 transition-transform duration-500" /> 
          Attempt Protocol Reset
        </Button>
      </div>
    </div>
  );
}
