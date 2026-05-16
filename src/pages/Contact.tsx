import React from 'react';
import { Mail, MessageCircle as WhatsApp, Instagram, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-40 bg-brand-cream min-h-screen px-6">
      <div className="max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-serif">Get in Touch.</h1>
              <p className="text-lg text-black/60 font-medium leading-relaxed">
                Need help choosing your coffee or V60 set? Send us a message and we’ll help you find the right ritual.
              </p>
            </div>

            <div className="space-y-8">
              <a href="#" className="flex items-center space-x-6 group">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-gold shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all">
                    <Mail size={24} />
                 </div>
                 <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-black/40">Email Us</h4>
                    <p className="font-bold">hello@perdido.coffee</p>
                 </div>
              </a>
              <a href="#" className="flex items-center space-x-6 group">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-gold shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all">
                    <WhatsApp size={24} />
                 </div>
                 <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-black/40">WhatsApp Support</h4>
                    <p className="font-bold">+966 50 000 0000</p>
                 </div>
              </a>
              <a href="#" className="flex items-center space-x-6 group">
                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-gold shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all">
                    <Instagram size={24} />
                 </div>
                 <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-black/40">Follow Us</h4>
                    <p className="font-bold">@perdido.coffee</p>
                 </div>
              </a>
            </div>
          </div>

          <form className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-black/5 space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Name</label>
                   <input type="text" className="w-full bg-brand-beige border-none rounded-xl px-6 py-4 focus:ring-1 focus:ring-brand-gold outline-none" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Email</label>
                   <input type="email" className="w-full bg-brand-beige border-none rounded-xl px-6 py-4 focus:ring-1 focus:ring-brand-gold outline-none" placeholder="Email Address" />
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Phone Number</label>
                <input type="tel" className="w-full bg-brand-beige border-none rounded-xl px-6 py-4 focus:ring-1 focus:ring-brand-gold outline-none" placeholder="+966" />
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Message</label>
                <textarea rows={4} className="w-full bg-brand-beige border-none rounded-xl px-6 py-4 focus:ring-1 focus:ring-brand-gold outline-none resize-none" placeholder="How can we help you?" />
             </div>
             <button className="w-full py-5 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-coffee transition-all flex items-center justify-center space-x-3">
                <span>Send Message</span>
                <Send size={16} />
             </button>
          </form>
        </div>
      </div>
    </div>
  );
};
