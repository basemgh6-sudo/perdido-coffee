import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { cartCount } = useCart();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'V60 Sets', href: '/shop?type=V60 Set' },
    { name: 'Coffee Beans', href: '/shop?type=Coffee Beans' },
    { name: 'Bundles', href: '/shop?type=Bundle' },
    { name: 'Brewing Guide', href: '/guide' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#1a1a1a] text-white text-center py-2 text-xs z-[60] tracking-wider uppercase">
        Fresh coffee beans and V60 sets now available — delivery across Saudi Arabia.
        <Link to="/shop" className="ml-2 underline hover:text-[#d4c3a1] transition-colors">Shop Now</Link>
      </div>

      <header
        className={cn(
          "fixed top-8 left-0 right-0 h-20 flex items-center justify-between px-6 md:px-12 z-50 transition-all duration-300",
          isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        )}
      >
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white hover:text-[#d4c3a1] transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-[0.2em] text-white absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
          PERDIDO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium tracking-widest uppercase text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-white">
          <button className="hover:text-[#d4c3a1] transition-colors hidden sm:block">
            <Search size={22} />
          </button>
          <button className="hover:text-[#d4c3a1] transition-colors hidden sm:block">
            <User size={22} />
          </button>
          <Link to="/cart" className="relative hover:text-[#d4c3a1] transition-colors">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#d4c3a1] text-[#0a0a0a] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-bold tracking-widest text-white">PERDIDO</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium tracking-widest uppercase text-white hover:text-[#d4c3a1] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex space-x-6 pt-8 border-t border-white/10">
            <button className="text-white hover:text-[#d4c3a1]">
              <Search size={24} />
            </button>
            <button className="text-white hover:text-[#d4c3a1]">
              <User size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
