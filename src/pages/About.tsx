import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Coffee, Heart, Zap, Shield, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-brand-espresso">
           <img src="https://picsum.photos/seed/about-hero/1920/1080?blur=5" alt="Perdido Story" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
           <div className="absolute inset-0 bg-brand-cream/10" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6 uppercase tracking-tight"
          >
            Lost, Then Found.
          </motion.h1>
          <p className="text-xl text-white/80 font-medium tracking-wide">
            Perdido = Coffee Worth Getting Lost In.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-brand-cream">
         <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif">A Search for Something Better.</h2>
            <div className="space-y-6 text-lg text-black/60 font-medium leading-relaxed">
               <p>
                 Perdido was created for people who were searching for a better coffee experience — richer aroma, cleaner taste, and a daily ritual that feels personal.
               </p>
               <p>
                 In a world that moves too fast, we believe coffee is more than caffeine. It is a pause, a ritual, and a small moment of control. We built Perdido around the idea that some things are worth slowing down for.
               </p>
               <p>
                 Based in Saudi Arabia, we bring together the finest specialty beans from across the globe and the precision of V60 brewing to your home.
               </p>
            </div>
         </div>
      </section>

      {/* Quality Promise */}
      <section className="section-padding bg-brand-beige">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
               <h2 className="text-4xl font-serif">Our Quality Promise</h2>
               <p className="text-black/60 font-medium">To make premium home coffee feel simple, beautiful, and personal.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                 { icon: <Zap />, title: "Fresh Beans", text: "Roasted in small batches to ensure you experience the full peak of flavor." },
                 { icon: <Coffee />, title: "Clear Profiles", text: "No more bitter mystery. We provide clear, honest tasting notes for every origin." },
                 { icon: <Shield />, title: "Premium Tools", text: "We only sell equipment we use daily in our own rituals." },
                 { icon: <Heart />, title: "Beautiful Rituals", text: "From our packaging to our guides, everything is designed to inspire." },
               ].map((item, i) => (
                 <div key={i} className="text-center space-y-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto text-brand-gold shadow-sm">
                       {React.cloneElement(item.icon, { size: 32 })}
                    </div>
                    <h4 className="text-lg font-bold uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm text-black/60 font-medium leading-relaxed">{item.text}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-espresso text-white text-center">
         <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-serif">Ready to start your ritual?</h2>
            <p className="text-white/60 font-medium">Explore our curated selection of specialty beans and precision brewing sets.</p>
            <Link to="/shop" className="inline-flex items-center space-x-3 px-10 py-5 bg-brand-gold text-[#0a0a0a] text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all transform hover:scale-105">
               <span>Explore Perdido Coffee</span>
               <ArrowRight size={16} />
            </Link>
         </div>
      </section>
    </div>
  );
};
