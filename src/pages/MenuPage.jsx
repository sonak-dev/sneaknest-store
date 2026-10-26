import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation.jsx";
import { Footer } from "../components/Footer.jsx";

const menuCategories = ["All Items", "Running Shoes", "Lifestyle & Air", "Training & Gym", "Apparel & Gear"];

const menuItems = [
   {
      id: "m-1",
      name: "Air Max Pulse Supreme",
      category: "Lifestyle & Air",
      tag: "Best Seller",
      tagColor: "bg-amber-100 text-amber-800",
      price: 11495,
      oldPrice: 13995,
      rating: 4.9,
      caloriesOrWeight: "310g lightweight",
      description: "Point-loaded Air cushioning system designed for unreal bounce and all-day city comfort.",
      features: ["Breathable mesh upper", "Foam midsole", "Rubber waffle outsole"],
      color: "Summit White / Phantom",
      image: "/images/shoes_image.png",
   },
   {
      id: "m-2",
      name: "ZoomX Vaporfly Next% 3",
      category: "Running Shoes",
      tag: "Race Day Elite",
      tagColor: "bg-red-100 text-red-700",
      price: 20695,
      oldPrice: 22995,
      rating: 4.8,
      caloriesOrWeight: "185g ultra-light",
      description: "Marathon racing shoe with full-length carbon fiber Flyplate and maximum energy return.",
      features: ["ZoomX foam", "Carbon Flyplate", "Engineered Flyknit"],
      color: "Bright Crimson / Electric Gold",
      image: "/images/shoes_image.png",
   },
   {
      id: "m-3",
      name: "Air Jordan 1 High OG",
      category: "Lifestyle & Air",
      tag: "Heritage Icon",
      tagColor: "bg-purple-100 text-purple-700",
      price: 16995,
      oldPrice: 18995,
      rating: 5.0,
      caloriesOrWeight: "Premium Leather",
      description: "The silhouette that changed sneaker culture forever. Premium full-grain leather build.",
      features: ["Air-Sole heel unit", "Solid rubber outsole", "Deep flex grooves"],
      color: "Chicago Varsity Red / Black",
      image: "/images/shoes_image.png",
   },
   {
      id: "m-4",
      name: "Metcon 9 Amp Edition",
      category: "Training & Gym",
      tag: "Cross-Training",
      tagColor: "bg-emerald-100 text-emerald-800",
      price: 12795,
      oldPrice: 14495,
      rating: 4.7,
      caloriesOrWeight: "Hyperlift Plate",
      description: "Larger Hyperlift plate and rubber rope wrap designed for heavy lifters, crossfitters, and sprinters.",
      features: ["Dual-density foam", "Reinforced side walls", "Lace lock tab"],
      color: "Iron Grey / Volt Green",
      image: "/images/shoes_image.png",
   },
   {
      id: "m-5",
      name: "Pegasus 41 ReactX",
      category: "Running Shoes",
      tag: "Everyday Daily",
      tagColor: "bg-blue-100 text-blue-700",
      price: 10495,
      oldPrice: 11995,
      rating: 4.8,
      caloriesOrWeight: "ReactX Foam +13% bounce",
      description: "The workhorse with wings. Dual Air Zoom units combined with eco-conscious ReactX foam.",
      features: ["Dual Air Zoom", "Engineered mesh", "Waffle traction"],
      color: "Glacier Blue / Total Orange",
      image: "/images/shoes_image.png",
   },
   {
      id: "m-6",
      name: "Dri-FIT ADV Tech Fleece Hoodie",
      category: "Apparel & Gear",
      tag: "Trending Drop",
      tagColor: "bg-zinc-100 text-zinc-800",
      price: 7495,
      oldPrice: 8995,
      rating: 4.9,
      caloriesOrWeight: "Thermal Insulation",
      description: "Smooth on both sides, this premium lightweight fleece warms without unnecessary bulk.",
      features: ["Zippered arm pocket", "4-panel hood", "Articulated sleeves"],
      color: "Dark Heather Grey",
      image: "/images/shoes_image.png",
   },
   {
      id: "m-7",
      name: "InfinityRN 4 Gore-Tex",
      category: "Running Shoes",
      tag: "All-Weather",
      tagColor: "bg-cyan-100 text-cyan-800",
      price: 14995,
      oldPrice: 16995,
      rating: 4.7,
      caloriesOrWeight: "Waterproof Shield",
      description: "Waterproof GORE-TEX membrane keeps your feet completely dry during rainy winter miles.",
      features: ["GORE-TEX layer", "Storm-Tread outsole", "ReactX foam midsole"],
      color: "Thunder Blue / Reflect Silver",
      image: "/images/shoes_image.png",
   },
   {
      id: "m-8",
      name: "Pro Elite Speedpack Duffle",
      category: "Apparel & Gear",
      tag: "Essential",
      tagColor: "bg-amber-100 text-amber-800",
      price: 3995,
      oldPrice: 4995,
      rating: 4.6,
      caloriesOrWeight: "42L Volume Capacity",
      description: "Spacious training duffle with ventilated shoe compartment and water-resistant coated bottom.",
      features: ["Ventilated sneaker pocket", "Padded shoulder strap", "Durable 600D poly"],
      color: "Matte Stealth Black",
      image: "/images/shoes_image.png",
   },
];

export const MenuPage = () => {
   const [selectedCat, setSelectedCat] = useState("All Items");
   const [searchQuery, setSearchQuery] = useState("");
   const [notification, setNotification] = useState("");

   const filteredItems = menuItems.filter((item) => {
      const matchCat = selectedCat === "All Items" || item.category === selectedCat;
      const matchSearch =
         item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
         item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
   });

   const handleAddToCart = (item) => {
      try {
         const existing = JSON.parse(localStorage.getItem("cart")) || [];
         const found = existing.find((p) => p.id === item.id);
         let updated;
         if (found) {
            updated = existing.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
         } else {
            updated = [...existing, { ...item, qty: 1 }];
         }
         localStorage.setItem("cart", JSON.stringify(updated));
         window.dispatchEvent(new Event("storage"));
      } catch (e) {
         console.error(e);
      }

      setNotification(`Added "${item.name}" to cart!`);
      setTimeout(() => setNotification(""), 3000);
   };

   return (
      <div className="font-sans antialiased min-h-screen bg-gray-50 flex flex-col justify-between">
         {/* Toast Notification */}
         {notification && (
            <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-bounce">
               <span className="text-emerald-400 font-bold">✓</span>
               <span className="text-sm font-medium">{notification}</span>
            </div>
         )}

         <div>
            {/* Top Navigation */}
            <div className="bg-white border-b border-gray-100 shadow-xs">
               <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                  <Navigation />
               </div>
            </div>

            {/* Hero Header */}
            <div className="bg-linear-to-br from-zinc-900 via-neutral-900 to-red-950 text-white py-12 md:py-16">
               <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                     <div>
                        <div className="inline-flex items-center gap-2 bg-red-600/30 border border-red-500/40 text-red-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3">
                           ⚡ Full Catalog & Menu
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                           The Performance <span className="text-red-500">Menu</span>
                        </h1>
                        <p className="text-gray-300 mt-2 max-w-xl text-sm sm:text-base">
                           Browse hand-selected releases, signature footwear, racing silhouettes, and premium tech apparel built for peak performance.
                        </p>
                     </div>

                     {/* Search Input */}
                     <div className="w-full md:w-80">
                        <label className="text-xs text-gray-400 font-medium block mb-1">Search Menu</label>
                        <div className="relative">
                           <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="Search shoes, tech fleece, gear..."
                              className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 px-4 py-2.5 pl-10 rounded-xl text-sm focus:outline-none focus:border-red-500 transition-colors"
                           />
                           <span className="absolute left-3.5 top-2.5 text-gray-400 text-sm">🔍</span>
                           {searchQuery && (
                              <button
                                 onClick={() => setSearchQuery("")}
                                 className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-white"
                              >
                                 ✕
                              </button>
                           )}
                        </div>
                     </div>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 pt-8 scrollbar-none">
                     {menuCategories.map((cat) => (
                        <button
                           key={cat}
                           onClick={() => setSelectedCat(cat)}
                           className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap cursor-pointer transition-all ${
                              selectedCat === cat
                                 ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                                 : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
                           }`}
                        >
                           {cat}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            {/* Items Grid */}
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14">
               <div className="flex justify-between items-center mb-6">
                  <p className="text-sm font-medium text-gray-500">
                     Showing <span className="font-bold text-gray-900">{filteredItems.length}</span> items in {selectedCat}
                  </p>
                  <Link
                     to="/products"
                     className="text-xs sm:text-sm font-semibold text-red-600 hover:text-red-700 hover:underline flex items-center gap-1"
                  >
                     View all 48 catalog products →
                  </Link>
               </div>

               {filteredItems.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
                     <p className="text-4xl mb-3">👟</p>
                     <h3 className="text-lg font-bold text-gray-900">No items match your filter</h3>
                     <p className="text-sm text-gray-500 mt-1">Try resetting your search query or select &quot;All Items&quot;.</p>
                     <button
                        onClick={() => {
                           setSelectedCat("All Items");
                           setSearchQuery("");
                        }}
                        className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition"
                     >
                        Reset Filters
                     </button>
                  </div>
               ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                     {filteredItems.map((item) => (
                        <div
                           key={item.id}
                           className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                        >
                           <div>
                              {/* Image Box */}
                              <div className="bg-linear-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center relative min-h-50">
                                 <span
                                    className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${item.tagColor}`}
                                 >
                                    {item.tag}
                                 </span>
                                 <span className="absolute top-3 right-3 text-xs bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md font-semibold text-gray-800 shadow-xs">
                                    ★ {item.rating}
                                 </span>
                                 <img
                                    src={item.image}
                                    alt={item.name}
                                    className="max-h-36 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                                 />
                              </div>

                              {/* Content */}
                              <div className="p-5">
                                 <div className="flex items-center justify-between text-xs text-gray-400 font-medium mb-1">
                                    <span>{item.category}</span>
                                    <span>{item.caloriesOrWeight}</span>
                                 </div>
                                 <h3 className="text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                                    {item.name}
                                 </h3>
                                 <p className="text-xs text-gray-500 line-clamp-2 mt-1.5 leading-relaxed">
                                    {item.description}
                                 </p>

                                 {/* Key spec pills */}
                                 <div className="flex flex-wrap gap-1.5 mt-3">
                                    {item.features.map((feat, idx) => (
                                       <span
                                          key={idx}
                                          className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium"
                                       >
                                          ✓ {feat}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           </div>

                           {/* Card Footer */}
                           <div className="p-5 pt-0 border-t border-gray-50 mt-2">
                              <div className="flex items-baseline justify-between py-3">
                                 <div>
                                    <span className="text-lg font-extrabold text-gray-900">
                                       ₹{item.price.toLocaleString("en-IN")}
                                    </span>
                                    <span className="text-xs text-gray-400 line-through ml-2">
                                       ₹{item.oldPrice.toLocaleString("en-IN")}
                                    </span>
                                 </div>
                                 <span className="text-xs font-bold text-emerald-600">
                                    {Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% OFF
                                 </span>
                              </div>

                              <button
                                 onClick={() => handleAddToCart(item)}
                                 className="w-full bg-black text-white hover:bg-red-600 py-2.5 rounded-xl font-semibold text-xs sm:text-sm tracking-wide transition-colors cursor-pointer flex items-center justify-center gap-2"
                              >
                                 <span>Add To Cart</span>
                                 <span>+</span>
                              </button>
                           </div>
                        </div>
                     ))}
                  </div>
               )}
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
