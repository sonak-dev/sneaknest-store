export const CartPanel = ({ cart, isOpen, onClose, onUpdateQty }) => {
   if (!isOpen) return null;

   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

   return (
      /* Backdrop */
      <div
         className="fixed inset-0 bg-black/50 z-50 flex justify-end"
         onClick={onClose}
      >
         {/* Panel – full width on small phones, max-md on larger */}
         <div
            className="
               bg-white w-full sm:max-w-sm md:max-w-md
               h-full p-5 sm:p-6
               overflow-y-auto
               flex flex-col
            "
            onClick={(e) => e.stopPropagation()}
         >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
               <h2 className="text-xl sm:text-2xl font-bold">Your Cart 🛒</h2>
               <button
                  onClick={onClose}
                  className="text-2xl cursor-pointer hover:text-red-600 transition-colors leading-none"
               >
                  ✕
               </button>
            </div>

            {cart.length === 0 ? (
               <div className="flex-1 flex flex-col justify-center items-center gap-4 text-center">
                  <span className="text-5xl">🛍️</span>
                  <p className="text-gray-500 text-sm">Your cart is empty.<br />Add some shoes!</p>
               </div>
            ) : (
               <>
                  {/* Items */}
                  <div className="flex-1 overflow-y-auto -mx-1 px-1">
                     {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 sm:gap-4 border-b border-gray-100 py-4">
                           <img
                              src={item.image}
                              alt={item.name}
                              className="h-14 w-14 sm:h-16 sm:w-16 object-contain rounded-lg bg-gray-50 shrink-0"
                           />
                           <div className="flex-1 min-w-0">
                              <p className="font-semibold text-sm sm:text-base truncate">{item.name}</p>
                              <p className="text-gray-500 text-sm">₹{item.price.toLocaleString("en-IN")}</p>
                           </div>
                           {/* Qty Controls */}
                           <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                              <button
                                 onClick={() => onUpdateQty(item.id, -1)}
                                 className="border border-gray-300 w-7 h-7 rounded-md font-bold text-sm cursor-pointer hover:bg-gray-100 transition"
                              >
                                 −
                              </button>
                              <span className="w-5 text-center font-semibold text-sm">{item.qty}</span>
                              <button
                                 onClick={() => onUpdateQty(item.id, +1)}
                                 className="border border-gray-300 w-7 h-7 rounded-md font-bold text-sm cursor-pointer hover:bg-gray-100 transition"
                              >
                                 +
                              </button>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* Total + Checkout */}
                  <div className="border-t border-gray-200 pt-4 mt-4 space-y-4">
                     <div className="flex justify-between text-base sm:text-lg font-bold">
                        <span>Total</span>
                        <span>₹{total.toLocaleString("en-IN")}</span>
                     </div>
                     <button className="
                        w-full bg-red-600 text-white
                        py-3 rounded-xl font-semibold
                        hover:bg-red-700 active:scale-95
                        transition-all cursor-pointer
                        text-sm sm:text-base
                     ">
                        Proceed to Checkout
                     </button>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};