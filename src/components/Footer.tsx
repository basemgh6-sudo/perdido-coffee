import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter as TikTok, MessageCircle as WhatsApp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-bold tracking-[0.2em]">
            PERDIDO
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Perdido is a premium coffee brand built around specialty beans, V60 rituals, and moments worth slowing down for. Coffee worth getting lost in.
          </p>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-[#d4c3a1] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-[#d4c3a1] transition-colors"><TikTok size={20} /></a>
            <a href="#" className="hover:text-[#d4c3a1] transition-colors"><WhatsApp size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-white/40">Shop</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/shop?type=V60 Set" className="hover:text-[#d4c3a1] transition-colors">V60 Starter Sets</Link></li>
            <li><Link to="/shop?type=Coffee Beans" className="hover:text-[#d4c3a1] transition-colors">Specialty Beans</Link></li>
            <li><Link to="/shop?type=Bundle" className="hover:text-[#d4c3a1] transition-colors">Bundles</Link></li>
            <li><Link to="/shop" className="hover:text-[#d4c3a1] transition-colors">All Products</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-white/40">Information</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/about" className="hover:text-[#d4c3a1] transition-colors">Our Story</Link></li>
            <li><Link to="/guide" className="hover:text-[#d4c3a1] transition-colors">Brewing Guide</Link></li>
            <li><Link to="/faq" className="hover:text-[#d4c3a1] transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-[#d4c3a1] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-white/40">Support</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-[#d4c3a1] transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-[#d4c3a1] transition-colors">Refund Policy</a></li>
            <li><a href="#" className="hover:text-[#d4c3a1] transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-white/40">
        <p>© 2025 Perdido Coffee. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <span>Mada</span>
          <span>Apple Pay</span>
          <span>Visa</span>
          <span>Mastercard</span>
        </div>
      </div>
    </footer>
  );
};
