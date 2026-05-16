import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';
import { ProductType, RoastLevel, BrewingMethod } from '../types';
import { cn } from '../lib/utils';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const typeFilter = searchParams.get('type');
  const roastFilter = searchParams.get('roast');
  const methodFilter = searchParams.get('method');
  const sort = searchParams.get('sort') || 'newest';

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesType = !typeFilter || product.type === typeFilter;
      const matchesRoast = !roastFilter || product.roast === roastFilter;
      const matchesMethod = !methodFilter || product.bestFor?.includes(methodFilter as BrewingMethod);
      const matchesSearch = !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesRoast && matchesMethod && matchesSearch;
    }).sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      return 0; // Default to initial order
    });
  }, [typeFilter, roastFilter, methodFilter, sort, searchQuery]);

  const updateFilter = (key: string, value: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set(key, value);
    else newParams.delete(key);
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col min-h-screen pt-40">
      <div className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-serif">The Shop</h1>
            <p className="text-black/60 max-w-lg">Everything you need for your daily ritual. From heirloom beans to precision brewing sets.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-black/5 rounded-xl focus:outline-none focus:border-brand-gold transition-colors font-medium text-sm"
            />
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 pb-32">
        {/* Filters Sidebar - Desktop */}
        <div className="hidden lg:block w-64 space-y-10">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-black/40">Product Type</h4>
            <div className="space-y-3">
              {Object.values(ProductType).map(type => (
                <button
                  key={type}
                  onClick={() => updateFilter('type', type === typeFilter ? null : type)}
                  className={cn(
                    "block text-sm font-medium transition-colors hover:text-brand-gold",
                    type === typeFilter ? "text-brand-gold" : "text-black/60"
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-black/40">Roast Level</h4>
            <div className="space-y-3">
              {Object.values(RoastLevel).map(roast => (
                <button
                  key={roast}
                  onClick={() => updateFilter('roast', roast === roastFilter ? null : roast)}
                  className={cn(
                    "block text-sm font-medium transition-colors hover:text-brand-gold",
                    roast === roastFilter ? "text-brand-gold" : "text-black/60"
                  )}
                >
                  {roast}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-black/40">Brewing Method</h4>
            <div className="space-y-3">
              {Object.values(BrewingMethod).map(method => (
                <button
                  key={method}
                  onClick={() => updateFilter('method', method === methodFilter ? null : method)}
                  className={cn(
                    "block text-sm font-medium transition-colors hover:text-brand-gold",
                    method === methodFilter ? "text-brand-gold" : "text-black/60"
                  )}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {(typeFilter || roastFilter || methodFilter || searchQuery) && (
            <button
              onClick={clearFilters}
              className="text-[10px] uppercase tracking-widest font-bold flex items-center space-x-2 text-brand-coffee pt-4 border-t border-black/5"
            >
              <X size={14} />
              <span>Clear All</span>
            </button>
          )}
        </div>

        {/* Product Grid Area */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-black/40">
              Showing {filteredProducts.length} Products
            </p>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center space-x-2 text-sm font-bold uppercase tracking-widest"
              >
                <Filter size={16} />
                <span>Filters</span>
              </button>
              <div className="relative group">
                <button className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest">
                  <span>Sort: {sort === 'newest' ? 'Newest' : sort === 'price-low' ? 'Price Low' : 'Price High'}</span>
                  <ChevronDown size={14} />
                </button>
                <div className="absolute right-0 top-full mt-2 bg-white border border-black/5 rounded-xl shadow-xl p-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                  {['newest', 'price-low', 'price-high'].map(s => (
                    <button
                      key={s}
                      onClick={() => updateFilter('sort', s)}
                      className="block w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-beige rounded-lg"
                    >
                      {s.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-32 text-center space-y-4">
              <p className="text-2xl font-serif italic text-black/40">No products found for this ritual.</p>
              <button onClick={clearFilters} className="text-sm font-bold underline">Clear filters and try again</button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm z-[100] p-6 flex flex-col">
           <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-serif text-white">Filters</h2>
            <button onClick={() => setIsFilterOpen(false)} className="text-white"><X size={32} /></button>
           </div>
           <div className="flex-1 overflow-y-auto space-y-12 pb-12">
              <div className="space-y-6">
                 <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Product Type</h4>
                 <div className="flex flex-wrap gap-3">
                    {Object.values(ProductType).map(type => (
                      <button
                        key={type}
                        onClick={() => updateFilter('type', type === typeFilter ? null : type)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                          type === typeFilter ? "bg-[#d4c3a1] border-[#d4c3a1] text-[#0a0a0a]" : "border-white/20 text-white"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                 </div>
              </div>
              <div className="space-y-6">
                 <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Roast Level</h4>
                 <div className="flex flex-wrap gap-3">
                    {Object.values(RoastLevel).map(roast => (
                      <button
                        key={roast}
                        onClick={() => updateFilter('roast', roast === roastFilter ? null : roast)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                          roast === roastFilter ? "bg-[#d4c3a1] border-[#d4c3a1] text-[#0a0a0a]" : "border-white/20 text-white"
                        )}
                      >
                        {roast}
                      </button>
                    ))}
                 </div>
              </div>
           </div>
           <button
             onClick={() => setIsFilterOpen(false)}
             className="w-full py-4 bg-[#d4c3a1] text-[#0a0a0a] text-xs font-bold uppercase tracking-widest rounded-xl"
           >
             Show Products
           </button>
        </div>
      )}
    </div>
  );
};
