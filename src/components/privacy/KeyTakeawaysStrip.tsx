
'use client';

import React from 'react';

const takeaways = [
  'Zero Data Trading',
  'Encryption at Rest',
  'Attorney-Client Privilege',
  'Global Compliance Standards'
];

export default function KeyTakeawaysStrip() {
  return (
    <div className="flex flex-wrap gap-3 pt-4">
      {takeaways.map((text) => (
        <div 
          key={text} 
          className="px-4 py-2 bg-secondary/30 border border-primary/5 rounded-full text-[10px] uppercase tracking-widest font-bold text-primary/60"
        >
          {text}
        </div>
      ))}
    </div>
  );
}
