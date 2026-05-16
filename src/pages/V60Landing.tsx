import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Play, Star } from 'lucide-react';
import { PRODUCTS } from '../data';

export const V60Landing: React.FC = () => {
  const v60Set = PRODUCTS.find(p => p.id === 'v60-starter-set')!;

  return (
    <div className="flex flex-col bg-brand-cream">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-brand-espresso">
          <img src="https://picsum.photos/seed/v60-hero/1920/1080" alt="V60 Ritual" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-cream" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Brew Better Coffee at Home.
          </motion.h1>
          <p className="text-xl text-black/70 mb-10 max-w-2xl mx-auto font-medium">
            The Perdido V60 Starter Set gives you the tools, beans, and simple guide you need to start making clean, premium coffee at home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link to="/product/v60-starter-set" className="w-full sm:w-auto px-10 py-5 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-2xl">
                Buy the V60 Starter Set
             </Link>
             <button className="w-full sm:w-auto px-10 py-5 bg-white border border-black/10 text-xs font-bold uppercase tracking-[0.2em] rounded-full flex items-center justify-center space-x-2">
                <Play size={14} className="fill-current" />
                <span>See What’s Included</span>
             </button>
          </div>
        </div>
      </section>

      {/* What's Included Grid */}
      <section className="section-padding">
         <div className="max-w-7xl mx-auto space-y-20">
            <h2 className="text-4xl font-serif text-center">Everything You Need.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[
                 { name: 'V60 Dripper', text: 'Ceramic design for perfect heat retention and clean flavor profile.' },
                 { name: 'Glass Server', text: 'Elegantly minimal server for brewing and serving your morning ritual.' },
                 { name: 'Paper Filters', text: 'Oxygen-bleached filters ensured to leave no paper taste in your cup.' },
                 { name: 'Measuring Scoop', text: 'The precise measurement for the perfect ratio every single time.' },
                 { name: 'Specialty Beans', text: '250g of our House Blend, roasted light-medium for clarity.' },
                 { name: 'Brewing Guide', text: 'A step-by-step guide designed for beginners to master the pour.' },
               ].map((item, idx) => (
                 <div key={idx} className="space-y-4 p-8 bg-brand-beige rounded-3xl border border-black/5 hover:border-brand-gold transition-colors">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                       <Check className="text-brand-gold" size={24} />
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-tighter">{item.name}</h4>
                    <p className="text-sm text-black/60 leading-relaxed font-medium">{item.text}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Why V60? */}
      <section className="section-padding bg-brand-espresso text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
             <div className="md:w-1/2">
                <img src="https://picsum.photos/seed/v60-why/1000/1000" alt="V60 Pour" className="rounded-[2.5rem] shadow-2xl" referrerPolicy="no-referrer" />
             </div>
             <div className="md:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif">Why V60?</h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  V60 brewing is favored by specialty coffee lovers worldwide for one reason: **Clarity**. The spiral ridges and large opening give you full control over your coffee, resulting in a cleaner cup that brings out the delicate notes of the beans.
                </p>
                <div className="space-y-6">
                   <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center mt-1">
                         <span className="text-[10px] font-black text-black">1</span>
                      </div>
                      <p className="text-sm font-medium leading-relaxed">**Clean Body:** Filters out heavy oils for a bright, tea-like consistency.</p>
                   </div>
                   <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center mt-1">
                         <span className="text-[10px] font-black text-black">2</span>
                      </div>
                      <p className="text-sm font-medium leading-relaxed">**Flavor Clarity:** Allows subtle floral and fruity notes to shine.</p>
                   </div>
                   <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center mt-1">
                         <span className="text-[10px] font-black text-black">3</span>
                      </div>
                      <p className="text-sm font-medium leading-relaxed">**Full Control:** You manage the water temperature, flow, and time.</p>
                   </div>
                </div>
             </div>
          </div>
      </section>

      {/* Perfect For */}
      <section className="section-padding">
         <div className="max-w-5xl mx-auto text-center space-y-16">
            <h2 className="text-4xl font-serif underline decoration-brand-gold underline-offset-8">Perfect For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 'Beginners starting their journey',
                 'Home coffee lovers and rituals',
                 'Thoughtful gifting for any occasion',
                 'Moving from instant to specialty',
                 'Calm and focused morning rituals',
               ].map((text, i) => (
                 <div key={i} className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                    <Star size={16} className="text-brand-gold fill-brand-gold" />
                    <span className="text-sm font-bold uppercase tracking-widest">{text}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-brand-beige">
         <div className="max-w-7xl mx-auto space-y-20">
            <h2 className="text-4xl font-serif text-center">Fast, Simple, Premium.</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
               {[
                 { step: '01', title: 'Add Filter', desc: 'Place filter and rinse with hot water.' },
                 { step: '02', title: 'Add Coffee', desc: '15g of medium-fine ground coffee.' },
                 { step: '03', title: 'Bloom', desc: 'Pour 40g water and wait 30s.' },
                 { step: '04', title: 'Pour', desc: 'Slow circles until 250g total.' },
                 { step: '05', title: 'Enjoy', desc: 'A clean, balanced cup of coffee.' },
               ].map((item) => (
                 <div key={item.step} className="space-y-4 p-8 bg-white rounded-3xl relative overflow-hidden group">
                    <span className="text-6xl font-serif text-black/5 absolute -top-2 -right-2 transition-colors group-hover:text-brand-gold/10">{item.step}</span>
                    <h4 className="text-lg font-bold uppercase tracking-tighter relative z-10">{item.title}</h4>
                    <p className="text-xs text-black/60 font-medium relative z-10">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-center">
         <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-5xl font-serif">Everything You Need to Start Brewing.</h2>
            <Link to="/product/v60-starter-set" className="inline-block px-12 py-6 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-brand-coffee transition-all">
               Get My V60 Set
            </Link>
         </div>
      </section>
    </div>
  );
};
