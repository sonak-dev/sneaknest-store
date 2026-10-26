import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const links = [
   { label: "Home", path: "/" },
   { label: "Shop", path: "/shop" },
   { label: "About", path: "/about" },
   { label: "Contact", path: "/contact" },
];

export const Navigation = ({ cartCount, onCartClick }) => {
   const [menuOpen, setMenuOpen] = useState(false);
   const navigate = useNavigate();

   // Local cart state fallback if not supplied via props
   const [localCartCount, setLocalCartCount] = useState(() => {
      try {
         const items = JSON.parse(localStorage.getItem("cart")) || [];
         return items.reduce((sum, item) => sum + (item.qty || 1), 0);
      } catch {
         return 0;
      }
   });

   useEffect(() => {
      const syncCart = () => {
         try {
            const items = JSON.parse(localStorage.getItem("cart")) || [];
            setLocalCartCount(items.reduce((sum, item) => sum + (item.qty || 1), 0));
         } catch {
            setLocalCartCount(0);
         }
      };

      window.addEventListener("storage", syncCart);
      return () => window.removeEventListener("storage", syncCart);
   }, []);

   const displayCount = cartCount !== undefined ? cartCount : localCartCount;

   const handleCartClick = () => {
      if (onCartClick) {
         onCartClick();
      } else {
         navigate("/shop");
      }
   };

   return (
      <div className="relative">
         {/* Main Nav Bar */}
         <nav className="flex justify-between items-center h-16 md:h-18">

            {/* Logo */}
            <Link to="/" className="shrink-0 flex items-center">
               <img
                  className="h-8 sm:h-9 md:h-11 w-auto"
                  src="/images/solehub_logo.svg"
                  alt="Logo"
               />
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex gap-8 lg:gap-10 list-none items-center">
               {links.map((link) => (
                  <li key={link.path}>
                     <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                           `font-semibold uppercase text-xs lg:text-sm tracking-wider transition-all ${
                              isActive
                                 ? "text-red-600 font-bold border-b-2 border-red-600 pb-0.5"
                                 : "text-gray-700 hover:text-red-600"
                           }`
                        }
                     >
                        {link.label}
                     </NavLink>
                  </li>
               ))}
            </ul>

            {/* Right Side: Cart + Login + Hamburger */}
            <div className="flex items-center gap-3 sm:gap-4">
               <button
                  onClick={handleCartClick}
                  className="font-medium cursor-pointer text-sm sm:text-base flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  title="View Cart"
               >
                  <span>🛒</span>
                  <span className="hidden sm:inline font-semibold text-xs uppercase tracking-wider text-gray-700">
                     Cart
                  </span>
                  <span className="bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-5 text-center">
                     {displayCount}
                  </span>
               </button>

               <button
                  onClick={() => alert("Login coming soon!")}
                  className="hidden sm:block bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-lg font-medium cursor-pointer text-sm transition-colors"
               >
                  Login
               </button>

               {/* Hamburger (mobile only) */}
               <button
                  className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
                  onClick={() => setMenuOpen((v) => !v)}
                  aria-label="Toggle menu"
               >
                  <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                  <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                  <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
               </button>
            </div>
         </nav>

         {/* Mobile Dropdown Menu */}
         <div
            className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 shadow-xl rounded-b-2xl ${
               menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
         >
            <ul className="flex flex-col list-none px-5 py-4 gap-3">
               {links.map((link) => (
                  <li key={link.path}>
                     <NavLink
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                           `font-semibold uppercase text-sm tracking-wider block py-1.5 transition-colors ${
                              isActive ? "text-red-600 font-bold" : "text-gray-800 hover:text-red-600"
                           }`
                        }
                     >
                        {link.label}
                     </NavLink>
                  </li>
               ))}
               <li className="pt-2 border-t border-gray-100">
                  <button
                     onClick={() => { setMenuOpen(false); alert("Login coming soon!"); }}
                     className="bg-red-600 text-white px-4 py-2 rounded-xl font-semibold w-full text-sm"
                  >
                     Login
                  </button>
               </li>
            </ul>
         </div>
      </div>
   );
};