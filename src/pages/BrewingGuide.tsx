import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Droplets, Thermometer, Timer, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export const BrewingGuide: React.FC = () => {
  const guides = [
    {
      id: 'v60',
      title: 'V60 Pour Over',
      description: 'The gold standard for clarity and bright flavors.',
      ratio: '15g coffee to 250g water',
      temp: '92°C - 94°C',
      time: '2:30 - 3:00 min',
      steps: [
        'Place filter and rinse with hot water.',
        'Add medium-fine ground coffee.',
        'Bloom: Pour 40g water, wait 30 seconds.',
        'Second Pour: Pour 100g in slow circles.',
        'Final Pour: Add remaining 110g water.',
        'Gently swirl and enjoy your clean cup.'
      ]
    },
    {
      id: 'iced-v60',
      title: 'Iced V60',
      description: 'Refreshing and vibrant specialty coffee over ice.',
      ratio: '18g coffee to 150g water + 100g ice',
      temp: '94°C',
      time: '2:00 min',
      steps: [
        'Place 100g ice in the glass server.',
        'Add medium ground coffee to V60.',
        'Brew with 150g hot water slowly.',
        'The coffee will cool instantly over ice.',
        'Swirl to melt any remaining ice and serve.'
      ]
    },
    {
      id: 'espresso',
      title: 'Espresso',
      description: 'Rich, concentrated, and powerful daily energy.',
      ratio: '18g coffee to 36g liquid',
      temp: '93°C',
      time: '25 - 30 sec',
      steps: [
        'Dose 18g of finely ground coffee.',
        'Distribute and tamp evenly.',
        'Pull shot for roughly 28 seconds.',
        'Look for a rich, golden crema.'
      ]
    }
  ];

  return (
    <div className="pt-40 bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 space-y-24">
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif">Brew Better Coffee at Home.</h1>
          <p className="text-lg text-black/60 font-medium">Master the art of the perfect pour with our beginner-friendly guides. Rituals made simple.</p>
        </header>

        <div className="space-y-32">
          {guides.map((guide, idx) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn("flex flex-col gap-12", idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse")}
            >
              <div className="lg:w-1/2 rounded-[2.5rem] overflow-hidden shadow-2xl bg-brand-beige aspect-square">
                <img src={`https://picsum.photos/seed/brew-${guide.id}/1000/1000`} alt={guide.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="lg:w-1/2 space-y-10">
                <div className="space-y-4">
                   <h2 className="text-4xl font-serif">{guide.title}</h2>
                   <p className="text-lg text-black/60 font-medium">{guide.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-6 bg-brand-beige rounded-2xl space-y-2">
                      <div className="flex items-center space-x-2 text-brand-gold"><Droplets size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Ratio</span></div>
                      <p className="font-bold text-sm tracking-tight">{guide.ratio}</p>
                   </div>
                   <div className="p-6 bg-brand-beige rounded-2xl space-y-2">
                      <div className="flex items-center space-x-2 text-brand-gold"><Thermometer size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Temp</span></div>
                      <p className="font-bold text-sm tracking-tight">{guide.temp}</p>
                   </div>
                   <div className="p-6 bg-brand-beige rounded-2xl space-y-2">
                      <div className="flex items-center space-x-2 text-brand-gold"><Timer size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Time</span></div>
                      <p className="font-bold text-sm tracking-tight">{guide.time}</p>
                   </div>
                   <div className="p-6 bg-brand-beige rounded-2xl space-y-2">
                       <div className="flex items-center space-x-2 text-brand-gold"><Coffee size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Grind</span></div>
                       <p className="font-bold text-sm tracking-tight">Medium-Fine</p>
                   </div>
                </div>

                <div className="space-y-6">
                   <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-black/40">Step-by-Step</h4>
                   <div className="space-y-6 relative">
                      <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-black/5" />
                      {guide.steps.map((step, i) => (
                        <div key={i} className="flex items-start space-x-6 relative z-10">
                           <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center text-[10px] font-black text-black ring-8 ring-brand-cream">
                              {i + 1}
                           </div>
                           <p className="text-sm font-medium pt-1">{step}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="pt-8">
                   <Link to="/shop" className="inline-flex items-center space-x-3 text-sm font-bold uppercase tracking-widest border-b border-black pb-2">
                      <span>Shop Beans for {guide.title}</span>
                      <ArrowRight size={16} />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
