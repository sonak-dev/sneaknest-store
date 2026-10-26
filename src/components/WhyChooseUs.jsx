const features = [
   {
      icon: "🚚",
      badge: "Fast Dispatch",
      badgeColor: "bg-blue-100 text-blue-700",
      title: "Express Nationwide Delivery",
      subtitle: "Lightning-fast dispatch to your doorstep.",
      text: "Every order is packaged in climate-neutral boxes and shipped via express air logistics. Real-time SMS and WhatsApp tracking included.",
      highlights: ["Free shipping over ₹4,999", "Dispatch within 24 Hours", "25,000+ PIN Codes Covered"],
      cardBg: "bg-gradient-to-br from-blue-50/70 via-white to-blue-50/40",
      borderColor: "border-blue-200/80 hover:border-blue-400",
      iconBg: "bg-blue-600 text-white shadow-md shadow-blue-500/20",
   },
   {
      icon: "🔄",
      badge: "Zero Risk",
      badgeColor: "bg-amber-100 text-amber-800",
      title: "30-Day Doorstep Returns",
      subtitle: "Shop with absolute peace of mind.",
      text: "Doesn't fit quite right? We arrange a free doorstep exchange or 100% money-back refund without tedious customer support calls.",
      highlights: ["Free Home Reverse Pickup", "Zero Return Penalties", "Instant Refund Initiation"],
      cardBg: "bg-gradient-to-br from-amber-50/70 via-white to-amber-50/40",
      borderColor: "border-amber-200/80 hover:border-amber-400",
      iconBg: "bg-amber-500 text-white shadow-md shadow-amber-500/20",
   },
   {
      icon: "🛡️",
      badge: "Direct Factory",
      badgeColor: "bg-emerald-100 text-emerald-800",
      title: "100% Authentic Guarantee",
      subtitle: "Certified performance materials.",
      text: "Sourced directly from authorized manufacturing plants. Every pair features verifiable RFID anti-counterfeit tags and original box packaging.",
      highlights: ["Official Brand Warranty", "Verifiable QR Serial Codes", "Laboratory Grade Quality"],
      cardBg: "bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/40",
      borderColor: "border-emerald-200/80 hover:border-emerald-400",
      iconBg: "bg-emerald-600 text-white shadow-md shadow-emerald-500/20",
   },
];

export const WhyChooseUs = () => {
   return (
      <section className="py-12 sm:py-16 lg:py-20">
         {/* Section Header with generous top & bottom spacing */}
         <div className="text-center md:text-left mb-10 sm:mb-14">
            <span className="inline-block bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
               The Brand Advantage
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight my-3">
               Why Thousands of Athletes Choose Us
            </h2>

            <p className="text-gray-500 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
               We don&apos;t just sell footwear; we back every step of your journey with world-class logistics, authentic guarantees, and dedicated athlete support.
            </p>
         </div>

         {/* 3 Distinctive Feature Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((f) => (
               <div
                  key={f.title}
                  className={`
                     ${f.cardBg} ${f.borderColor}
                     border rounded-3xl p-7 sm:p-8
                     hover:shadow-2xl hover:-translate-y-1.5
                     transition-all duration-300
                     flex flex-col justify-between
                     group
                  `}
               >
                  <div>
                     {/* Icon & Badge Header */}
                     <div className="flex items-center justify-between mb-6">
                        <div className={`${f.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                           {f.icon}
                        </div>
                        <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${f.badgeColor}`}>
                           {f.badge}
                        </span>
                     </div>

                     {/* Title & Subtitle with proper breathing room */}
                     <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 mb-1.5 leading-snug">
                        {f.title}
                     </h3>
                     <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        {f.subtitle}
                     </p>

                     {/* Main description paragraph */}
                     <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                        {f.text}
                     </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="border-t border-gray-200/70 pt-5 space-y-2">
                     {f.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                           <span className="text-emerald-600 font-bold">✓</span>
                           <span>{item}</span>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};