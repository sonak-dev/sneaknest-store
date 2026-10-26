import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState(() => {
      try { return JSON.parse(localStorage.getItem("cart")) || []; }
      catch { return []; }
   });
   const [isCartOpen, setIsCartOpen] = useState(false);

   useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
   }, [cart]);

   const addToCart = (product) => {
      setCart((prev) => {
         const exists = prev.find((i) => i.id === product.id);
         if (exists) return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
         return [...prev, { ...product, qty: 1 }];
      });
   };

   const updateQty = (id, delta) => {
      setCart((prev) =>
         prev.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i)).filter((i) => i.qty > 0)
      );
   };

   const cartCount = cart.reduce((s, i) => s + i.qty, 0);
   const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

   return (
      <CartContext.Provider
         value={{
            cart, addToCart, updateQty, cartCount, total,
            isCartOpen, openCart: () => setIsCartOpen(true), closeCart: () => setIsCartOpen(false),
         }}
      >
         {children}
      </CartContext.Provider>
   );
};