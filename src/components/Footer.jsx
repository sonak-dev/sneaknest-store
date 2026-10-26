import { Link } from "react-router-dom";

export const Footer = () => {
   const footerLinks = [
      { name: "Home", path: "/" },
      { name: "Shop", path: "/shop" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
   ];

   return (
      <footer className="py-10 sm:py-12 lg:py-16">
         <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">

            {/* Brand – full width on small, then normal */}
            <div className="col-span-2 sm:col-span-1">
               <div className="flex items-center gap-2 mb-3">
                  <img
                     className="h-7 w-auto"
                     src="/images/brand_logo.png"
                     alt="Logo"
                  />
                  <h3 className="font-extrabold text-xl">ShoeStore</h3>
               </div>
               <p className="text-gray-500 text-sm leading-6 max-w-xs">
                  Premium athletic footwear and gear engineered for comfort, speed, and everyday lifestyle. Delivered across India.
               </p>
            </div>

            <div>
               <h3 className="font-bold mb-3 text-sm uppercase tracking-widest text-gray-900">
                  Quick Links
               </h3>
               <ul className="text-gray-500 space-y-2 list-none text-sm">
                  {footerLinks.map((l) => (
                     <li key={l.name}>
                        <Link
                           to={l.path}
                           className="hover:text-red-600 transition-colors inline-block"
                        >
                           {l.name}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>

            <div>
               <h3 className="font-bold mb-3 text-sm uppercase tracking-widest text-gray-900">
                  Contact & Hub
               </h3>
               <div className="text-gray-500 space-y-2 text-sm">
                  <p>📞 1800 102 6453 (Toll Free)</p>
                  <p>📧 support@nike.com</p>
                  <p>📍 Connaught Place, New Delhi</p>
                  <Link to="/contact" className="text-xs font-semibold text-red-600 hover:underline block pt-1">
                     View 24/7 Support Desk →
                  </Link>
               </div>
            </div>

         </div>

         <p className="text-center text-gray-400 text-xs sm:text-sm mt-10 border-t border-gray-200 pt-6">
            © 2026 ShoeStore & Nike Inc. All rights reserved.
         </p>
      </footer>
   );
};