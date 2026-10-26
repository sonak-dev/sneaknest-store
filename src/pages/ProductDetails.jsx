import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products as mockProducts } from "../data/products.js";
import { Band } from "../components/Band.jsx";
import axios from "axios";

const sizes = ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"];

export const ProductDetails = ({ onAddToCart = () => {} }) => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [product, setProduct] = useState(null);
   const [loading, setLoading] = useState(true);
   const [selectedSize, setSelectedSize] = useState("UK 8");
   const [qty, setQty] = useState(1);
   const [toast, setToast] = useState("");

   useEffect(() => {
      // Check mock products first
      const foundMock = mockProducts.find((p) => String(p.id) === String(id));
      if (foundMock) {
         setProduct(foundMock);
         setLoading(false);
         return;
      }

      // If it's an API product (e.g. api-123)
      if (id?.startsWith("api-")) {
         const apiId = id.replace("api-", "");
         axios
            .get(`https://dummyjson.com/products/${apiId}`)
            .then((res) => {
               const p = res.data;
               const price = Math.round(p.price * 85);
               const discount = Math.round(p.discountPercentage || 0);
               setProduct({
                  id: `api-${p.id}`,
                  name: p.title,
                  category: p.category === "mens-shoes" ? "Men" : "Women",
                  price,
                  oldPrice: Math.round(price / (1 - discount / 100)),
                  discount,
                  rating: Number(p.rating).toFixed(1),
                  reviews: p.reviews?.length ?? 24,
                  color: p.brand ?? "Default Edition",
                  hue: 0,
                  badge: "Popular",
                  description: p.description,
                  image: p.thumbnail,
               });
            })
            .catch(() => {
               // Fallback to first mock product
               setProduct(mockProducts[0]);
            })
            .finally(() => setLoading(false));
         return;
      }

      // Default fallback
      setProduct(mockProducts[0]);
      setLoading(false);
   }, [id]);

   const handleAdd = () => {
      if (!product) return;
      onAddToCart({ ...product, selectedSize, qty });
      setToast(`Added ${qty} × "${product.name}" (${selectedSize}) to Cart!`);
      setTimeout(() => setToast(""), 3500);
   };

   if (loading || !product) {
      return (
         <div className="min-h-[60vh] flex items-center justify-center">
            <div className="animate-spin text-4xl">👟</div>
         </div>
      );
   }

   return (
      <main className="font-sans antialiased min-h-screen bg-gray-50 py-8 sm:py-12">
         {/* Toast Notification */}
         {toast && (
            <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
               <span className="text-emerald-400 font-bold">✓</span>
               <span className="text-sm font-medium">{toast}</span>
            </div>
         )}

         <Band>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
               <Link to="/" className="hover:text-red-600 transition">Home</Link>
               <span>/</span>
               <Link to="/shop" className="hover:text-red-600 transition">Shop</Link>
               <span>/</span>
               <span className="text-gray-900 font-semibold truncate max-w-xs">{product.name}</span>
            </div>

            {/* Main Product Layout */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

               {/* Left: Product Image Box */}
               <div className="lg:col-span-6 flex flex-col gap-4">
                  <div className="relative bg-gray-100/80 rounded-2xl p-8 flex items-center justify-center min-h-85 sm:min-h-105 overflow-hidden group">
                     {product.badge && (
                        <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                           {product.badge}
                        </span>
                     )}
                     {product.discount > 0 && (
                        <span className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                           {product.discount}% OFF
                        </span>
                     )}
                     <img
                        src={product.image}
                        alt={product.name}
                        style={{ filter: product.hue ? `hue-rotate(${product.hue}deg)` : "none" }}
                        className="max-h-64 sm:max-h-80 w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                     />
                  </div>

                  {/* Trust guarantees bar */}
                  <div className="grid grid-cols-3 gap-3 text-center text-xs text-gray-500 bg-gray-50 p-4 rounded-xl">
                     <div>
                        <span className="block text-base mb-0.5">🚚</span>
                        <span className="font-semibold text-gray-800">Free Shipping</span>
                     </div>
                     <div>
                        <span className="block text-base mb-0.5">🔄</span>
                        <span className="font-semibold text-gray-800">30-Day Returns</span>
                     </div>
                     <div>
                        <span className="block text-base mb-0.5">🛡️</span>
                        <span className="font-semibold text-gray-800">100% Authentic</span>
                     </div>
                  </div>
               </div>

               {/* Right: Product Details & Purchase Form */}
               <div className="lg:col-span-6 flex flex-col gap-6">
                  <div>
                     <span className="inline-block bg-red-100 text-red-600 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                        {product.category} Footwear
                     </span>
                     <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 my-2 leading-tight">
                        {product.name}
                     </h1>
                     <div className="flex items-center gap-2.5 my-3">
                        <div className="text-amber-500 font-bold text-base">★★★★★</div>
                        <span className="text-sm font-bold text-gray-800">{product.rating}</span>
                        <span className="text-xs text-gray-400 font-medium">({product.reviews} verified buyer ratings)</span>
                     </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-3.5 py-4 border-y border-gray-200/80 my-1">
                     <span className="text-3xl sm:text-4xl font-black text-gray-900">
                        ₹{product.price.toLocaleString("en-IN")}
                     </span>
                     {product.oldPrice && product.oldPrice !== product.price && (
                        <span className="text-sm text-gray-400 line-through">
                           ₹{product.oldPrice.toLocaleString("en-IN")}
                        </span>
                     )}
                     <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                        Inclusive of all taxes
                     </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                     {product.description}
                  </p>

                  {/* Size Selector */}
                  <div>
                     <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-800">
                           Select Size (UK)
                        </label>
                        <button
                           onClick={() => alert("Standard athletic fit. If in between sizes, we recommend sizing up a half size.")}
                           className="text-xs text-red-600 font-semibold hover:underline"
                        >
                           Size Guide
                        </button>
                     </div>
                     <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {sizes.map((s) => (
                           <button
                              key={s}
                              onClick={() => setSelectedSize(s)}
                              className={`py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                                 selectedSize === s
                                    ? "bg-black text-white ring-2 ring-black shadow-sm"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                              }`}
                           >
                              {s}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-3">
                     {/* Qty selector */}
                     <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-2 w-full sm:w-36">
                        <button
                           onClick={() => setQty((q) => Math.max(1, q - 1))}
                           className="text-lg font-bold text-gray-500 hover:text-black px-2"
                        >
                           −
                        </button>
                        <span className="text-sm font-bold text-gray-900">{qty}</span>
                        <button
                           onClick={() => setQty((q) => q + 1)}
                           className="text-lg font-bold text-gray-500 hover:text-black px-2"
                        >
                           +
                        </button>
                     </div>

                     {/* Add to Cart button */}
                     <button
                        onClick={handleAdd}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg shadow-red-600/30 cursor-pointer active:scale-98"
                     >
                        Add to Cart 🛒
                     </button>
                  </div>

                  {/* Back to Shop */}
                  <div className="pt-2">
                     <button
                        onClick={() => navigate("/shop")}
                        className="text-xs font-semibold text-gray-500 hover:text-black transition"
                     >
                        ← Back to Catalog
                     </button>
                  </div>
               </div>
            </div>
         </Band>
      </main>
   );
};
