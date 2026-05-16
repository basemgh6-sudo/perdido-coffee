import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Truck, Shield, RefreshCw, Zap, Minus, Plus, ChevronRight } from 'lucide-react';
import { PRODUCTS, REVIEWS } from '../data';
import { useCart } from '../context/CartContext';
import { formatCurrency, cn } from '../lib/utils';
import { ProductCard } from '../components/ProductCard';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedGrind, setSelectedGrind] = useState('Whole Bean');

  const relatedProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.id !== id && p.type === product?.type).slice(0, 4);
  }, [id, product?.type]);

  if (!product) return <div className="pt-40 text-center">Product not found.</div>;

  const grindOptions = ['Whole Bean', 'V60', 'Espresso', 'French Press', 'Cold Brew'];

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-black/40 mb-12">
          <Link to="/" className="hover:text-black">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <ChevronRight size={10} />
          <span className="text-black">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Images */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[4/5] overflow-hidden rounded-3xl bg-brand-beige"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
               {[...Array(4)].map((_, i) => (
                 <div key={i} className="aspect-square bg-brand-beige rounded-xl overflow-hidden cursor-pointer hover:border-brand-gold border-2 border-transparent transition-all">
                    <img src={product.images[0]} alt="" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                 </div>
               ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            {product.label && (
              <span className="inline-block bg-[#1a1a1a] text-[#d4c3a1] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-6">
                {product.label}
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight uppercase tracking-tight">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-8">
               <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />)}
               </div>
               <span className="text-xs font-bold text-black/40 uppercase tracking-widest underline cursor-pointer">12 Reviews</span>
               <span className="h-4 w-[1px] bg-black/10" />
               <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">In Stock</span>
            </div>

            <p className="text-3xl font-bold mb-8">{formatCurrency(product.price)}</p>

            <div className="prose prose-sm text-black/60 mb-10 leading-relaxed font-medium">
              <p>{product.description}</p>
            </div>

            {/* Config options */}
            <div className="space-y-8 mb-10">
               {product.type === 'Coffee Beans' && (
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40">Select Grind</label>
                    <div className="flex flex-wrap gap-3">
                      {grindOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => setSelectedGrind(option)}
                          className={cn(
                            "px-6 py-3 border rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                            selectedGrind === option ? "bg-[#1a1a1a] border-[#1a1a1a] text-white" : "border-black/5 hover:border-black/20"
                          )}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
               )}

               <div className="flex items-center space-x-6">
                 <div className="flex items-center border border-black/10 rounded-xl overflow-hidden h-14 bg-white shadow-sm">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-5 hover:bg-brand-beige transition-colors">
                      <Minus size={16} />
                    </button>
                    <span className="w-10 text-center font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="px-5 hover:bg-brand-beige transition-colors">
                      <Plus size={16} />
                    </button>
                 </div>
                 <button
                   onClick={() => addToCart(product, quantity, selectedGrind)}
                   className="flex-1 h-14 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-coffee transition-all transform active:scale-95 shadow-xl"
                 >
                   Add to Cart
                 </button>
               </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-black/5">
               <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-beige flex items-center justify-center text-brand-gold">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-widest">Freshly Roasted</h5>
                    <p className="text-[10px] text-black/40 font-medium">Small-batch quality</p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-beige flex items-center justify-center text-brand-gold">
                    <Truck size={20} />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-widest">Fast Delivery</h5>
                    <p className="text-[10px] text-black/40 font-medium">Saudi Arabia & GCC</p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-beige flex items-center justify-center text-brand-gold">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-widest">Secure Payments</h5>
                    <p className="text-[10px] text-black/40 font-medium">Tabby & Tamara available</p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-beige flex items-center justify-center text-brand-gold">
                    <RefreshCw size={20} />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-widest">Premium Packing</h5>
                    <p className="text-[10px] text-black/40 font-medium">Gift-ready boxes</p>
                  </div>
               </div>
            </div>

            {/* Accordion Sections could go here if needed */}
          </div>
        </div>

        {/* Product Details Tabs or More Content */}
        <div className="mt-32 border-t border-black/5 pt-20">
           <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-coffee">Details & Ritual</h3>
                <h2 className="text-3xl font-serif">Behind Every Cup is a Found Memory.</h2>
                <p className="text-black/60 leading-relaxed font-medium">
                  At Perdido, we spend months searching for origins that tell a story. This product isn't just about the caffeine—it's about the moment of clarity that comes with a perfectly brewed cup. Hand-selected, carefully roasted, and delivered with intention.
                </p>
              </div>

              {product.includes && (
                <div className="space-y-4">
                   <h3 className="text-xs uppercase tracking-[0.2em] font-bold">What's Inside</h3>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.includes.map(item => (
                        <li key={item} className="flex items-center space-x-3 text-sm font-medium p-4 bg-white rounded-xl shadow-sm border border-black/5">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                           <span>{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
              )}
           </div>
        </div>

        {/* Related Products */}
        <div className="mt-32 space-y-12">
           <h2 className="text-3xl font-serif text-center">Complete Your Ritual</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
           </div>
        </div>
      </div>

       {/* Mobile Sticky Add to Cart */}
       <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-black/5 z-[60] safe-area-pb">
          <button
            onClick={() => addToCart(product, quantity, selectedGrind)}
            className="w-full h-14 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-2xl flex items-center justify-between px-8"
          >
            <span>Add to Cart</span>
            <span>{formatCurrency(product.price)}</span>
          </button>
       </div>
    </div>
  );
};
