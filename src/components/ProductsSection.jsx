import { useState, useEffect } from "react";
import { products as mockProducts } from "../data/products.js";
import { ProductCard } from "./ProductCard.jsx";
import axios from "axios";

const USD_TO_INR = 85;

export const ProductsSection = ({ onAddToCart }) => {
   const [items, setItems] = useState(mockProducts);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [category, setCategory] = useState("All");
   const [visible, setVisible] = useState(9);

   useEffect(() => {
      const urls = [
         "https://dummyjson.com/products/category/mens-shoes",
         "https://dummyjson.com/products/category/womens-shoes",
      ];

      Promise.all(urls.map((u) => axios.get(u)))
         .then(([men, women]) => {
            const apiProducts = [...men.data.products, ...women.data.products].map((p) => {
               const price = Math.round(p.price * USD_TO_INR);
               const discount = Math.round(p.discountPercentage || 0);
               return {
                  id: `api-${p.id}`,
                  name: p.title,
                  category: p.category === "mens-shoes" ? "Men" : "Women",
                  price,
                  oldPrice: Math.round(price / (1 - discount / 100)),
                  discount,
                  rating: Number(p.rating).toFixed(1),
                  reviews: p.reviews?.length ?? 0,
                  color: p.brand ?? "",
                  hue: 0,
                  badge: "",
                  description: p.description,
                  image: p.thumbnail,
               };
            });
            setItems([...apiProducts, ...mockProducts]);
         })
         .catch(() => setError(true))
         .finally(() => setLoading(false));
   }, []);

   const categories = ["All", ...new Set(items.map((p) => p.category))];
   const filtered = category === "All" ? items : items.filter((p) => p.category === category);

   return (
      <section className="py-10 sm:py-12 lg:py-16">

         {/* Header row: title + filter */}
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-12 gap-5 pb-5 border-b border-gray-200/80">
            <div>
               <span className="text-xs uppercase font-bold tracking-widest text-red-600 block mb-2">
                  Featured Footwear
               </span>
               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight my-2">
                  Latest Drops &amp; Releases
               </h2>
               <p className="text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed mt-1">
                  Showing {Math.min(visible, filtered.length)} of {filtered.length} high-performance shoes and street silhouettes.
               </p>
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
               <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">Category:</span>
               <select
                  value={category}
                  onChange={(e) => { setCategory(e.target.value); setVisible(9); }}
                  className="bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer shadow-xs"
               >
                  {categories.map((c) => <option key={c}>{c}</option>)}
               </select>
            </div>
         </div>

         {/* Products Grid */}
         {loading ? (
            <div className="flex justify-center items-center py-16">
               <div className="animate-spin rounded-full h-10 w-10 border-4 border-red-500 border-t-transparent" />
            </div>
         ) : error ? (
            <p className="text-center py-12 text-red-600 font-medium">
               ⚠️ Failed to load products. Please try again later.
            </p>
         ) : (
            <>
               {/* Responsive grid: 1 col mobile → 2 col tablet → 3 col desktop */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-10">
                  {filtered.slice(0, visible).map((p) => (
                     <ProductCard key={p.id} {...p} onAdd={() => onAddToCart(p)} />
                  ))}
               </div>

               {/* Load More */}
               {visible < filtered.length && (
                  <div className="flex justify-center">
                     <button
                        onClick={() => setVisible((v) => v + 9)}
                        className="
                           bg-red-600 text-white
                           px-8 py-3 rounded-lg
                           font-semibold text-sm sm:text-base
                           hover:bg-red-700 active:scale-95
                           transition-all cursor-pointer
                        "
                     >
                        Load More
                     </button>
                  </div>
               )}
            </>
         )}
      </section>
   );
};