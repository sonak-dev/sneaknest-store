import { ProductsSection } from "../components/ProductsSection.jsx";
import { Band } from "../components/Band.jsx";

export const Shop = ({ onAddToCart = () => {} }) => {
   return (
      <main className="font-sans antialiased min-h-screen bg-gray-50 pb-16">
         {/* Shop Banner with generous vertical rhythm */}
         <div className="bg-linear-to-r from-neutral-950 via-zinc-900 to-red-950 text-white py-14 md:py-20">
            <Band>
               <div className="max-w-3xl space-y-4">
                  <div>
                     <span className="inline-block bg-red-600/30 border border-red-500/40 text-red-300 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                        All Collections &amp; Releases
                     </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight my-3">
                     The Complete <span className="text-red-500">Shoe Catalog</span>
                  </h1>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl my-3">
                     Explore our entire lineup of elite marathon racers, gym cross-trainers, and iconic streetwear sneakers engineered with proprietary ReactX and Air Zoom cushioning.
                  </p>

                  {/* Highlights Bar */}
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
            </Band>
         </div>

         {/* Products Grid with generous top & bottom padding */}
         <Band className="py-12 md:py-16">
            <ProductsSection onAddToCart={onAddToCart} />
         </Band>
      </main>
   );
};
