import { Link } from "react-router-dom";

export const ProductCard = ({
   id, name, price, oldPrice, discount, rating, reviews,
   color, hue, badge, description, image, category, onAdd,
}) => {
   const linkTarget = id ? `/product/${id}` : "#";

   // Subtle tinted background for image box based on category
   const bgGradient =
      category === "Running"
         ? "from-rose-50/70 via-orange-50/40 to-white"
         : category === "Casual" || category === "Lifestyle & Air"
         ? "from-blue-50/70 via-indigo-50/40 to-white"
         : "from-emerald-50/70 via-teal-50/40 to-white";

   return (
      <div className="
         relative border border-gray-200/90 rounded-3xl p-5 sm:p-6
         hover:shadow-2xl hover:border-red-200 hover:-translate-y-1.5
         transition-all duration-300
         flex flex-col justify-between bg-white
         group
      ">
         <div>
            {/* Top Badges */}
            <div className="flex justify-between items-center mb-3">
               {badge ? (
                  <span className="bg-neutral-900 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                     {badge}
                  </span>
               ) : (
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                     {category || "Footwear"}
                  </span>
               )}

               {discount > 0 && (
                  <span className="bg-red-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-xs">
                     {discount}% OFF
                  </span>
               )}
            </div>

            {/* Product Image Link Box */}
            <Link
               to={linkTarget}
               className={`
                  bg-linear-to-b ${bgGradient}
                  border border-gray-100 rounded-2xl
                  items-center justify-center
                  h-48 sm:h-54 my-2 overflow-hidden block
                  transition-all group-hover:border-red-100
               `}
            >
               <img
                  src={image}
                  alt={name}
                  style={{ filter: hue ? `hue-rotate(${hue}deg)` : "none" }}
                  className="h-38 sm:h-46 w-auto object-contain drop-shadow-md group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-300"
               />
            </Link>

            {/* Category & Color Meta */}
            <div className="flex items-center justify-between text-xs text-gray-400 font-semibold uppercase tracking-wider mt-4 mb-2">
               <span>{category || "Unisex"}</span>
               <span>{color || "Edition"}</span>
            </div>

            {/* Product Title with generous vertical space */}
            <h3 className="font-extrabold text-base sm:text-lg text-gray-900 group-hover:text-red-600 transition-colors leading-snug my-2 min-h-12">
               <Link to={linkTarget}>{name}</Link>
            </h3>

            {/* Description text with top & bottom breathing room */}
            <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 leading-relaxed my-2.5">
               {description}
            </p>

            {/* Star Rating Bar */}
            <div className="flex items-center justify-between bg-gray-50/80 border border-gray-100 px-3 py-2 rounded-xl my-3.5 text-xs">
               <div className="flex items-center gap-1.5">
                  <span className="text-amber-500 text-sm font-bold">★</span>
                  <span className="font-bold text-gray-800">{rating}</span>
                  <span className="text-gray-400 text-[11px]">/ 5.0</span>
               </div>
               <span className="text-gray-400 font-medium text-[11px]">
                  {reviews} verified reviews
               </span>
            </div>
         </div>

         {/* Price & Action Section */}
         <div className="pt-4 border-t border-gray-100 mt-2">
            <div className="flex items-baseline justify-between mb-4">
               <div>
                  <span className="text-xl sm:text-2xl font-black text-gray-900">
                     ₹{price.toLocaleString("en-IN")}
                  </span>
                  {oldPrice !== price && (
                     <span className="text-xs text-gray-400 line-through ml-2">
                        ₹{oldPrice.toLocaleString("en-IN")}
                     </span>
                  )}
               </div>
               <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                  In Stock
               </span>
            </div>

            <button
               onClick={onAdd}
               className="
                  w-full bg-neutral-900 text-white
                  hover:bg-red-600 active:scale-98
                  py-3 px-4 rounded-xl
                  font-bold text-xs sm:text-sm tracking-wide
                  transition-all duration-200 cursor-pointer
                  flex items-center justify-center gap-2 shadow-sm
               "
            >
               <span>Add to Cart</span>
               <span className="text-base font-bold">+</span>
            </button>
         </div>
      </div>
   );
};