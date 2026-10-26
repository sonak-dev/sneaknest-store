import { useState } from "react";
import { Navigation } from "../components/Navigation.jsx";
import { ProductsSection } from "../components/ProductsSection.jsx";
import { Footer } from "../components/Footer.jsx";

export const ShopPage = () => {
   const [toast, setToast] = useState("");

   const handleAddToCart = (product) => {
      try {
         const existing = JSON.parse(localStorage.getItem("cart")) || [];
         const found = existing.find((p) => p.id === product.id);
         let updated;
         if (found) {
            updated = existing.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
         } else {
            updated = [...existing, { ...product, qty: 1 }];
         }
         localStorage.setItem("cart", JSON.stringify(updated));
         window.dispatchEvent(new Event("storage"));
      } catch (e) {
         console.error(e);
      }

      setToast(`Added "${product.name}" to cart!`);
      setTimeout(() => setToast(""), 3000);
   };

   return (
      <div className="font-sans antialiased min-h-screen bg-gray-50 flex flex-col justify-between">
         {/* Toast Notification */}
         {toast && (
            <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
               <span className="text-emerald-400 font-bold">✓</span>
               <span className="text-sm font-medium">{toast}</span>
            </div>
         )}

         <div>
            {/* Top Navigation */}
            <div className="bg-white border-b border-gray-100 shadow-xs sticky top-0 z-40">
               <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                  <Navigation />
               </div>
            </div>

            {/* Shop Banner with generous vertical space */}
            <div className="bg-linear-to-r from-neutral-950 via-zinc-900 to-red-950 text-white py-14 md:py-20">
               <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 space-y-4">
                  <div>
                     <span className="inline-block bg-red-600/30 border border-red-500/40 text-red-300 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-2">
                        Official Catalog &amp; Store
                     </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight my-3">
                     Shop All <span className="text-red-500">Footwear &amp; Collections</span>
                  </h1>

                  <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed my-3">
                     Explore our full catalog of 48 high-performance running shoes, street icons, and gym trainers engineered with proprietary cushioning.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-3">
                     <span className="text-xs font-semibold bg-neutral-800/80 border border-neutral-700 px-3 py-1.5 rounded-lg text-gray-300">
                        👟 48 Unique Models
                     </span>
                     <span className="text-xs font-semibold bg-neutral-800/80 border border-neutral-700 px-3 py-1.5 rounded-lg text-gray-300">
                        ⚡ Real-Time Inventory
                     </span>
                     <span className="text-xs font-semibold bg-neutral-800/80 border border-neutral-700 px-3 py-1.5 rounded-lg text-gray-300">
                        🚚 Free Express Shipping
                     </span>
                  </div>
               </div>
            </div>

            {/* Products Section Grid */}
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16">
               <ProductsSection onAddToCart={handleAddToCart} />
            </div>
         </div>

         {/* Footer */}
         <div className="bg-white border-t border-gray-100">
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
               <Footer />
            </div>
         </div>
      </div>
   );
};
