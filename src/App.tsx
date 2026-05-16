import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { V60Landing } from './pages/V60Landing';
import { About } from './pages/About';
import { BrewingGuide } from './pages/BrewingGuide';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Placeholder pages for brevity - could be expanded
const Checkout = () => <div className="pt-40 px-12 pb-32 min-h-screen text-center font-serif text-3xl italic">Checkout Flow Placeholder</div>;

export default function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen bg-brand-cream">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/guide" element={<BrewingGuide />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/v60-landing" element={<V60Landing />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}
