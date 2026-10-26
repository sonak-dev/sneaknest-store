import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation.jsx";
import { HeroSection } from "./components/Hero.jsx";
import { ProductsSection } from "./components/ProductsSection.jsx";
import { WhyChooseUs } from "./components/WhyChooseUs.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { Footer } from "./components/Footer.jsx";
import { CartPanel } from "./components/CartPanel.jsx";

export const BrandPage = () => {
   // cart is read from localStorage on first load
   const [cart, setCart] = useState(() => {
      try {
         return JSON.parse(localStorage.getItem("cart")) || [];
      } catch {
         return [];
      }
   });

   const [isCartOpen, setIsCartOpen] = useState(false);

   // save cart whenever it changes
   useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
   }, [cart]);

   const addToCart = (product) => {
      setCart((prev) => {
         const exists = prev.find((item) => item.id === product.id);
         if (exists) {
            return prev.map((item) =>
               item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            );
         }
         return [...prev, { ...product, qty: 1 }];
      });
   };

   // delta = +1 or -1; item is removed when qty becomes 0
   const updateQty = (id, delta) => {
      setCart((prev) =>
         prev
            .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
            .filter((item) => item.qty > 0)
      );
   };

   const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

   return (
      <div className="font-sans antialiased">

         {/* ── HERO SECTION (gradient background) ── */}
         <div id="home" className="bg-linear-to-br from-white via-red-50 to-rose-100">
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
               <Navigation cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
               <HeroSection />
            </div>
         </div>

         {/* ── PRODUCTS SECTION ── */}
         <div id="products" className="bg-gray-50 scroll-mt-6">
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
               <ProductsSection onAddToCart={addToCart} />
            </div>
         </div>

         {/* ── WHY CHOOSE US ── */}
         <div id="features" className="bg-white scroll-mt-6">
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
               <WhyChooseUs />
            </div>
         </div>

         {/* ── TESTIMONIALS ── */}
         <div id="reviews" className="bg-gray-50 scroll-mt-6">
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
               <Testimonials />
            </div>
         </div>

         {/* ── FOOTER ── */}
         <div id="contact" className="bg-white scroll-mt-6">
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
               <Footer />
            </div>
         </div>

         {/* ── CART PANEL ── */}
         <CartPanel
            cart={cart}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onUpdateQty={updateQty}
         />
      </div>
   );
};