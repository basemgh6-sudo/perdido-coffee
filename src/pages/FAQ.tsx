import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

export const FAQ: React.FC = () => {
  const faqs = [
    { q: "How long does delivery take inside Saudi Arabia?", a: "Standard delivery takes 2-4 business days within Riyadh and 3-6 days for other regions." },
    { q: "Do you ship across the GCC?", a: "Yes, we ship to UAE, Kuwait, Bahrain, and Oman. GCC shipping typically takes 5-10 business days." },
    { q: "Are the coffee beans freshly roasted?", a: "Always. We roast in small batches multiple times a week to ensure you receive beans at their peak flavor profile." },
    { q: "Which grind should I choose for V60?", a: "For V60, choose our 'V60' grind option, which is medium-fine (similar to table salt)." },
    { q: "What is included in the V60 Starter Set?", a: "It includes a ceramic dripper, glass server, paper filters, measuring scoop, 250g beans, and a brewing guide." },
    { q: "Can I send Perdido as a gift?", a: "Absolutely. Our packaging is designed to be gift-ready, and you can add a custom message at checkout." },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="pt-40 bg-brand-cream min-h-screen px-6">
      <div className="max-w-3xl mx-auto pb-32 space-y-16">
        <h1 className="text-5xl font-serif text-center">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-black/5 overflow-hidden">
               <button
                 onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                 className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-beige transition-colors"
               >
                 <span className="font-bold text-sm uppercase tracking-widest">{faq.q}</span>
                 {openIdx === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
               </button>
               {openIdx === idx && (
                 <div className="p-6 pt-0 text-black/60 font-medium text-sm leading-relaxed">
                    {faq.a}
                 </div>
               )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
