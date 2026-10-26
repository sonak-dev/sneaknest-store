import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation.jsx";
import { Footer } from "./components/Footer.jsx";
import { CartPanel } from "./components/CartPanel.jsx";
import { Band } from "./components/Band.jsx";
import { Home } from "./pages/Home.jsx";
import { Shop } from "./pages/Shop.jsx";
import { ProductDetails } from "./pages/ProductDetails.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { ReviewsPage } from "./pages/ReviewsPage.jsx";
import { FeaturesPage } from "./pages/FeaturesPage.jsx";
import { NotFound } from "./pages/NotFound.jsx";

// Scroll to top on route change
const ScrollToTop = () => {
   const { pathname } = useLocation();
   useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
   return null;
};

function App() {
   const [cart, setCart] = useState(() => {
      try {
         return JSON.parse(localStorage.getItem("cart")) || [];
      } catch {
         return [];
      }
   });
   const [isCartOpen, setIsCartOpen] = useState(false);

   useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
   }, [cart]);

   const addToCart = (product) => {
      setCart((prev) => {
         const exists = prev.find((item) => item.id === product.id);
         if (exists) {
            return prev.map((item) =>
               item.id === product.id ? { ...item, qty: item.qty + (product.qty || 1) } : item
            );
         }
         return [...prev, { ...product, qty: product.qty || 1 }];
      });
   };

   const updateQty = (id, delta) => {
      setCart((prev) =>
         prev
            .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
            .filter((item) => item.qty > 0)
      );
   };

   const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

   return (
      <>
         <ScrollToTop />
         <header className="sticky top-0 z-40 bg-white/80 backdrop-blur">
            <div className="max-w-360 mx-auto px-4 md:px-16">
               <Navigation cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
            </div>
         </header>

         <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetails onAddToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="*" element={<NotFound />} />
         </Routes>

         <Band className="bg-gray-100"><Footer /></Band>
         <CartPanel
            cart={cart}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onUpdateQty={updateQty}
         />
      </>
   );
}

export default App;