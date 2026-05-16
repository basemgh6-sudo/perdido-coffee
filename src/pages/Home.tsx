import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Coffee, Shield, Zap, Truck, Star } from 'lucide-react';
import { PRODUCTS, REVIEWS } from '../data';
import { ProductCard } from '../components/ProductCard';
import { cn } from '../lib/utils';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.featured);
  const v60Set = PRODUCTS.find(p => p.id === 'v60-starter-set')!;
  const beanProducts = PRODUCTS.filter(p => p.type === 'Coffee Beans').slice(0, 4);
  const bundleProducts = PRODUCTS.filter(p => p.type === 'Bundle').slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <img
            src="https://picsum.photos/seed/perdido-hero/1920/1080?blur=2"
            alt="Perdido Coffee"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tight"
          >
            Coffee Worth Getting Lost In.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-12 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Premium V60 coffee sets and freshly roasted specialty beans made for slow mornings, deep focus, and better daily rituals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/shop?type=V60 Set"
              className="w-full sm:w-auto px-10 py-5 bg-[#d4c3a1] text-[#0a0a0a] text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all transform hover:scale-105"
            >
              Shop V60 Sets
            </Link>
            <Link
              to="/shop?type=Coffee Beans"
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-[#0a0a0a] transition-all transform hover:scale-105"
            >
              Explore Coffee Beans
            </Link>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            <div className="flex items-center justify-center space-x-2">
              <Zap size={14} className="text-[#d4c3a1]" />
              <span>Freshly Roasted</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield size={14} className="text-[#d4c3a1]" />
              <span>Premium V60 Sets</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Truck size={14} className="text-[#d4c3a1]" />
              <span>Saudi Delivery</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4c3a1]" />
              <span>Secure Checkout</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured V60 Starter Set */}
      <section className="section-padding bg-brand-beige">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Your First Real Coffee Ritual Starts Here.
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              The Perdido V60 Starter Set gives you everything you need to brew clean, rich, café-style coffee at home. No complications, just better mornings.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {v60Set.includes?.map((item) => (
                <li key={item} className="flex items-center space-x-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-6 pt-4">
              <Link
                to={`/product/${v60Set.id}`}
                className="px-8 py-4 bg-[#1a1a1a] text-white text-[11px] font-bold uppercase tracking-widest rounded-xl hover:bg-brand-coffee transition-colors"
              >
                Build My V60 Set
              </Link>
              <Link
                to="/v60-landing"
                className="text-[11px] font-bold uppercase tracking-widest border-b border-black flex items-center space-x-2"
              >
                <span>What’s Inside?</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-brand-gold/10 rounded-[2rem] transform -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
            <img
              src={v60Set.images[0]}
              alt="V60 Starter Set"
              className="relative w-full aspect-square object-cover rounded-[1.5rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Best-Selling Coffee Beans */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between space-y-6 md:space-y-0">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif">Fresh Beans for Every Ritual.</h2>
              <p className="text-black/60">Curated origins, roasted close to your order.</p>
            </div>
            <Link to="/shop?type=Coffee Beans" className="text-sm font-bold uppercase tracking-widest border-b border-black">
              View All Beans
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {beanProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Section */}
      <section className="section-padding bg-[#1a0f0a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif">Better Together: Sets, Beans, and Brewing Tools.</h2>
            <p className="text-white/60">Unlock better value and complete your coffee setup.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {bundleProducts.map((bundle) => (
               <ProductCard key={bundle.id} product={bundle} className="bg-white/5 border-white/10" />
             ))}
          </div>
          <div className="flex justify-center pt-8">
            <Link
              to="/shop?type=Bundle"
              className="px-10 py-5 bg-[#d4c3a1] text-[#0a0a0a] text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all transform hover:scale-105"
            >
              Shop All Bundles
            </Link>
          </div>
        </div>
      </section>

      {/* Why Perdido */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-4xl font-serif text-center">Why Coffee People Choose Perdido</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Zap />, title: "Freshly Roasted", text: "Coffee roasted close to your order for better aroma and taste." },
              { icon: <Shield />, title: "Premium V60 Sets", text: "Clean, elegant brewing tools selected for daily use." },
              { icon: <Coffee />, title: "Specialty Beans", text: "Curated origins, clear tasting notes, and balanced profiles." },
              { icon: <Truck />, title: "Fast Saudi Delivery", text: "Delivered across Saudi Arabia with careful packaging." },
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto text-brand-gold">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-lg font-bold uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm text-black/60 leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Coffee Style */}
      <section className="section-padding bg-brand-beige">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-4xl font-serif text-center">Choose Your Ritual</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'V60', style: 'Clean • Bright', ritual: 'Slow morning ritual', color: 'bg-amber-100' },
              { title: 'Iced V60', style: 'Refreshing • Light', ritual: 'Perfect for Saudi weather', color: 'bg-blue-50' },
              { title: 'Espresso', style: 'Strong • Rich', ritual: 'Daily energy boost', color: 'bg-stone-200' },
              { title: 'French Press', style: 'Heavy Body • Deep', ritual: 'Simple, bold brewing', color: 'bg-orange-50' },
            ].map((style) => (
              <div key={style.title} className={cn("p-8 rounded-3xl space-y-6 flex flex-col justify-between h-[320px] transition-transform hover:-translate-y-2 cursor-pointer", style.color)}>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter">{style.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">{style.style}</p>
                </div>
                <p className="text-sm font-medium leading-relaxed">{style.ritual}</p>
                <div className="pt-4">
                  <Link to="/shop" className="text-xs font-bold uppercase tracking-widest flex items-center space-x-2">
                    <span>Explore Products</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-brand-cream border-t border-black/5">
        <div className="max-w-4xl mx-auto space-y-16 text-center">
          <h2 className="text-4xl font-serif">Loved by Coffee People</h2>
          <div className="grid grid-cols-1 gap-12">
            {REVIEWS.map((review) => (
              <div key={review.id} className="space-y-6">
                <div className="flex justify-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <blockquote className="text-2xl font-serif italic text-black/80 leading-relaxed">
                  "{review.comment}"
                </blockquote>
                <cite className="block text-sm font-bold uppercase tracking-widest not-italic text-black/40">
                  — {review.userName}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-[#1a1a1a] text-white">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-serif">Join the Perdido List</h2>
          <p className="text-white/60">Get early access to new coffee drops, brewing tips, and private offers.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-[#d4c3a1] transition-colors"
            />
            <button className="px-8 py-4 bg-[#d4c3a1] text-[#0a0a0a] text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-colors">
              Join the List
            </button>
          </form>
        </div>
      </section>

       {/* Final CTA */}
       <section className="section-padding bg-brand-beige text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl font-serif tracking-tight text-center">Start Your Coffee Ritual Today.</h2>
          <p className="text-black/60 font-medium">Choose your set, pick your beans, and get lost in better coffee.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/shop?type=V60 Set"
              className="w-full sm:w-auto px-10 py-5 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-brand-coffee transition-all"
            >
              Shop V60 Sets
            </Link>
            <Link
              to="/shop?type=Coffee Beans"
              className="w-full sm:w-auto px-10 py-5 bg-white border border-black/10 text-[#0a0a0a] text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:border-black transition-all"
            >
              Shop Coffee Beans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
