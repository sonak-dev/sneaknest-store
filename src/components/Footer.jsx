import { useState } from "react";
import { Link } from "react-router-dom";

const shopLinks = [
   { name: "All Sneakers", path: "/shop" },
   { name: "Why SneakNest", path: "/features" },
   { name: "Customer Reviews", path: "/reviews" },
];

const companyLinks = [
   { name: "Home", path: "/" },
   { name: "About Us", path: "/about" },
   { name: "Contact", path: "/contact" },
];

const payments = ["UPI", "Cards", "Net Banking", "Cash on Delivery"];

const SocialIcon = ({ label, children }) => (
   <a
      href="#"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-colors"
   >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         {children}
      </svg>
   </a>
);

const linkClass = "text-neutral-400 hover:text-white transition-colors";
const headingClass = "text-xs font-bold uppercase tracking-widest text-white mb-5";

export const Footer = () => {
   const [email, setEmail] = useState("");
   const [subscribed, setSubscribed] = useState(false);

   const handleSubscribe = (e) => {
      e.preventDefault();
      if (!email.trim()) return;
      setSubscribed(true);
      setEmail("");
   };

   return (
      <footer className="pt-14 sm:pt-16">

         {/* ── Newsletter strip ── */}
         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-12 border-b border-neutral-800">
            <div>
               <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Join the <span className="text-red-500">Nest</span>
               </h3>
               <p className="text-neutral-400 text-sm mt-2 max-w-md">
                  Get early access to new drops, exclusive offers and sneaker care tips. No spam, ever.
               </p>
            </div>

            {subscribed ? (
               <p className="text-emerald-400 font-semibold text-sm">
                  ✓ You're in! Check your inbox for a welcome offer.
               </p>
            ) : (
               <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-md">
                  <input
                     type="email"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Enter your email"
                     className="flex-1 bg-neutral-200 rounded-lg px-4 py-3 text-sm placeholder-neutral-500 focus:outline-none"
                  />
                  <button
                     type="submit"
                     className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors cursor-pointer"
                  >
                     Subscribe
                  </button>
               </form>
            )}
         </div>

         {/* ── Main columns ── */}
         <div className="grid grid-cols-2 md:grid-cols-12 gap-10 py-12">

            {/* Brand */}
            <div className="col-span-2 md:col-span-4">
               <Link to="/" className="inline-block font-black text-2xl tracking-tight">
                  SNEAK<span className="text-red-500">NEST</span>
               </Link>
               <p className="text-neutral-400 text-sm leading-6 mt-4 max-w-xs">
                  Premium sneakers engineered for comfort, speed and everyday style. Delivered across India.
               </p>
               <div className="flex gap-3 mt-6">
                  <SocialIcon label="Instagram">
                     <rect x="3" y="3" width="18" height="18" rx="5" />
                     <circle cx="12" cy="12" r="4" />
                     <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </SocialIcon>
                  <SocialIcon label="YouTube">
                     <rect x="2" y="5" width="20" height="14" rx="4" />
                     <path d="M10 9l5 3-5 3z" fill="currentColor" />
                  </SocialIcon>
                  <SocialIcon label="X">
                     <path d="M4 4l16 16M20 4L4 20" />
                  </SocialIcon>
               </div>
            </div>

            {/* Shop */}
            <div className="md:col-span-2">
               <h4 className={headingClass}>Shop</h4>
               <ul className="space-y-3 list-none text-sm">
                  {shopLinks.map((l) => (
                     <li key={l.name}><Link to={l.path} className={linkClass}>{l.name}</Link></li>
                  ))}
               </ul>
            </div>

            {/* Company */}
            <div className="md:col-span-2">
               <h4 className={headingClass}>Company</h4>
               <ul className="space-y-3 list-none text-sm">
                  {companyLinks.map((l) => (
                     <li key={l.name}><Link to={l.path} className={linkClass}>{l.name}</Link></li>
                  ))}
               </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-4">
               <h4 className={headingClass}>Get in touch</h4>
               <ul className="space-y-3 list-none text-sm text-neutral-400">
                  <li>📧 support@sneaknest.example</li>
                  <li>📞 1800-000-0000 (demo)</li>
                  <li>📍 Connaught Place, New Delhi</li>
                  <li>🕒 Mon – Sat, 10:00 AM – 7:00 PM</li>
               </ul>
               <Link to="/contact" className="inline-block mt-5 text-sm font-semibold text-red-500 hover:text-red-400">
                  Visit support desk →
               </Link>
            </div>
         </div>

         {/* ── Bottom bar ── */}
         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 py-6 border-t border-neutral-800">
            <div className="text-xs text-neutral-500 space-y-1">
               <p>© 2026 SneakNest. All rights reserved.</p>
               <p>Demo project: brand name, logo and content are fictional.</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
               {payments.map((p) => (
                  <span key={p} className="text-[11px] font-semibold text-neutral-400 border border-neutral-800 rounded-md px-2.5 py-1">
                     {p}
                  </span>
               ))}
               <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="ml-2 text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer"
               >
                  Back to top ↑
               </button>
            </div>
         </div>
      </footer>
   );
};