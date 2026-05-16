import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowLeft, ArrowRight, Truck, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency, cn } from '../lib/utils';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  const freeShippingThreshold = 200;
  const progress = Math.min((cartTotal / freeShippingThreshold) * 100, 100);
  const remaining = freeShippingThreshold - cartTotal;

  const upsellProducts = PRODUCTS.filter(p => !cart.some(item => item.id === p.id)).slice(0, 4);

  if (cart.length === 0) {
    return (
      <div className="pt-40 min-h-screen px-6 text-center space-y-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-serif">Your Cart is Empty</h1>
        <p className="text-black/60 max-w-md mx-auto">It looks like your coffee ritual hasn't started yet. Browse our collection to find your next favorite.</p>
        <Link to="/shop" className="inline-flex items-center space-x-3 px-10 py-5 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-coffee transition-all">
          <span>Start Shopping</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-40 min-h-screen px-6 md:px-12 pb-32 max-w-7xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1 space-y-12">
          <div className="flex items-end justify-between border-b border-black/5 pb-8">
            <h1 className="text-5xl font-serif italic">Your Ritual</h1>
            <p className="text-xs font-bold uppercase tracking-widest text-black/40">{cart.length} Items</p>
          </div>

          {/* Free Shipping Bar */}
          <div className="space-y-4 p-6 bg-brand-beige rounded-2xl">
             <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                <span>{remaining > 0 ? `You are ${formatCurrency(remaining)} away from free shipping` : "You've earned free shipping!"}</span>
                <span>{formatCurrency(freeShippingThreshold)} Goal</span>
             </div>
             <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                <div className="h-full bg-brand-gold transition-all duration-700" style={{ width: `${progress}%` }} />
             </div>
          </div>

          <div className="space-y-8">
            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedGrind}`} className="flex gap-6 pb-8 border-b border-black/5">
                <Link to={`/product/${item.id}`} className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-brand-beige flex-shrink-0">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </Link>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-tight">{item.name}</h3>
                      {item.selectedGrind && (
                        <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold mt-1">Grind: {item.selectedGrind}</p>
                      )}
                    </div>
                    <p className="font-bold">{formatCurrency(item.price * item.quantity)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-black/10 rounded-lg overflow-hidden h-10">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 hover:bg-brand-beige transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 hover:bg-brand-beige transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-black/30 hover:text-red-500 transition-colors p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-20 space-y-12">
             <h2 className="text-3xl font-serif">Complete Your Ritual</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {upsellProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
             </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="lg:w-[400px] space-y-8">
           <div className="p-8 bg-white border border-black/5 rounded-[2rem] shadow-xl sticky top-40">
              <h2 className="text-xl font-bold uppercase tracking-widest mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                 <div className="flex justify-between text-sm font-medium">
                    <span className="text-black/60">Subtotal</span>
                    <span>{formatCurrency(cartTotal)}</span>
                 </div>
                 <div className="flex justify-between text-sm font-medium">
                    <span className="text-black/60">Shipping</span>
                    <span>{cartTotal >= freeShippingThreshold ? 'Free' : formatCurrency(25)}</span>
                 </div>
                 <div className="pt-4 border-t border-black/5 flex justify-between font-bold text-lg uppercase tracking-tight">
                    <span>Total</span>
                    <span>{formatCurrency(cartTotal + (cartTotal >= freeShippingThreshold ? 0 : 25))}</span>
                 </div>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full py-5 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-coffee transition-all transform active:scale-95 shadow-lg"
              >
                Proceed to Checkout
              </button>

              <div className="mt-8 space-y-4">
                 <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest font-bold text-black/40">
                    <Truck size={14} />
                    <span>Free shipping on all orders over 200 SAR</span>
                 </div>
                 <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest font-bold text-black/40">
                    <ShieldCheck size={14} />
                    <span>Secure payment via Mada, Visa & more</span>
                 </div>
              </div>
           </div>
           
           <Link to="/shop" className="flex items-center justify-center space-x-3 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">
              <ArrowLeft size={16} />
              <span>Continue Shopping</span>
           </Link>
        </div>
      </div>
    </div>
  );
};
