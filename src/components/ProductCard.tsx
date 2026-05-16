import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { formatCurrency, cn } from '../lib/utils';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("group relative bg-[#fdfaf5] p-4 rounded-2xl border border-transparent hover:border-[#d4c3a1] transition-all duration-500", className)}
    >
      {product.label && (
        <span className="absolute top-6 left-6 z-10 bg-[#1a1a1a] text-[#d4c3a1] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          {product.label}
        </span>
      )}
      
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </Link>

      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold">{product.type}</p>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-amber-900 transition-colors uppercase tracking-tight">
                {product.name}
              </h3>
            </Link>
          </div>
          <span className="text-lg font-bold text-[#1a1a1a]">
            {formatCurrency(product.price)}
          </span>
        </div>

        {product.roast && (
          <p className="text-xs text-black/60 font-medium">
            {product.roast} Roast • {product.origin}
          </p>
        )}

        {product.notes && (
          <p className="text-[11px] text-amber-800/80 italic font-medium truncate">
            {product.notes.join(', ')}
          </p>
        )}

        <div className="flex items-center space-x-1 pt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className="fill-amber-500 text-amber-500" />
          ))}
          <span className="text-[10px] text-black/40 font-bold ml-1">(12)</span>
        </div>

        <div className="pt-4 flex items-center space-x-3">
          <button
            onClick={() => addToCart(product, 1)}
            className="flex-1 bg-[#1a1a1a] text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-amber-900 transition-colors"
          >
            Quick Add
          </button>
          <Link
            to={`/product/${product.id}`}
            className="w-12 h-10 flex items-center justify-center border border-black/10 rounded-lg hover:border-black transition-colors"
          >
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
