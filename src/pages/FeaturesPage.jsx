import { Link } from "react-router-dom";
import { Band } from "../components/Band.jsx";

const mainFeatures = [
   {
      icon: "⚡",
      title: "ZoomX & ReactX Foam",
      tag: "Energy Return",
      tagColor: "bg-red-50 text-red-600 border-red-200",
      description: "Our proprietary foam formulation delivers 85% energy return with every strike while reducing manufacturing carbon impact by 43%.",
      specs: ["85% Energy Return", "43% Lower Carbon", "Ultra-soft heel dampening"],
   },
   {
      icon: "🪶",
      title: "Engineered Flyknit Weave",
      tag: "Ultralight Fit",
      tagColor: "bg-blue-50 text-blue-600 border-blue-200",
      description: "Precision-engineered high-strength fibers create a seamless, sock-like upper with zero friction points and maximum airflow.",
      specs: ["Zero Pressure Hotspots", "Zoned Breathability", "Recycled Poly Yarn"],
   },
   {
      icon: "🚀",
      title: "Full-Length Carbon Flyplate",
      tag: "Propulsion",
      tagColor: "bg-purple-50 text-purple-600 border-purple-200",
      description: "Sandwiched between dual foam pods, the carbon fiber Flyplate creates a stiff, propulsive snap that drives your transition forward.",
      specs: ["Snap-Back Propulsion", "Rigid Arch Support", "Marathon Validated"],
   },
   {
      icon: "🌧️",
      title: "Storm-Tread Waffle Outsole",
      tag: "All-Weather Grip",
      tagColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
      description: "Micro-grooved industrial rubber channels water instantly away from the contact patch, maintaining grip on wet asphalt and tracks.",
      specs: ["Multi-Surface Traction", "Hydro-Channelling Grooves", "High-Abrasion Rubber"],
   },
   {
      icon: "🛡️",
      title: "Dynamic Fit Cable Architecture",
      tag: "Lockdown Support",
      tagColor: "bg-amber-50 text-amber-600 border-amber-200",
      description: "Flywire filaments integrate directly into the lacing system, wrapping around your midfoot to prevent internal foot slippage.",
      specs: ["Custom Arch Tension", "360° Foot Hug", "Zero Lateral Drift"],
   },
   {
      icon: "🌱",
      title: "Next Nature Sustainable Craft",
      tag: "Move To Zero",
      tagColor: "bg-teal-50 text-teal-600 border-teal-200",
      description: "Constructed with at least 20% recycled content by total weight, giving post-consumer plastics a high-performance second life.",
      specs: ["Post-Consumer Plastic Yarns", "Grind Rubber Midsole", "Closed-Loop Box"],
   },
];

const comparisons = [
   { feature: "Cushioning Technology", standard: "Standard EVA Compressed Foam", brand: "Air Zoom Pods + ReactX Formula" },
   { feature: "Upper Construction", standard: "Glued synthetic leather / vinyl", brand: "Seamless Single-Thread Flyknit" },
   { feature: "Energy Return", standard: "~45-50% energy loss", brand: "Up to 85% kinetic return" },
   { feature: "Weight per Shoe", standard: "380g - 420g average", brand: "Under 210g ultra-lightweight" },
   { feature: "Longevity & Tread Life", standard: "300 - 400 km wear limit", brand: "800+ km tested durability" },
];

export const FeaturesPage = () => {
   return (
      <main className="font-sans antialiased min-h-screen bg-gray-50 pb-16">
         {/* Hero Header */}
         <div className="bg-linear-to-r from-neutral-950 via-zinc-900 to-red-950 text-white py-14 md:py-20">
            <Band>
               <div className="max-w-2xl space-y-4">
                  <span className="inline-block bg-red-600/30 border border-red-500/40 text-red-300 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                     Proprietary Performance Tech
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                     Engineered for <span className="text-red-500">Unstoppable Motion</span>
                  </h1>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-1">
                     Every stitch, sole curve, and foam cell is lab-tuned by biomechanical engineers to elevate speed, reduce injury risk, and deliver relentless comfort.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-4">
                     <Link
                        to="/shop"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md shadow-red-600/30 hover:scale-105 active:scale-95"
                     >
                        Shop Feature Shoes →
                     </Link>
                     <Link
                        to="/reviews"
                        className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
                     >
                        Read Athlete Reviews
                     </Link>
                  </div>
               </div>
            </Band>
         </div>

         {/* Features Grid */}
         <Band className="py-14 md:py-20">
            <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
               <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Six Pillars of Athletic Superiority
               </h2>
               <p className="text-sm text-gray-500">
                  Tested in the lab. Proven on Olympic tracks and city streets.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
               {mainFeatures.map((feat, idx) => (
                  <div
                     key={idx}
                     className="bg-white rounded-3xl p-7 border border-gray-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                     <div>
                        <div className="flex items-center justify-between mb-5">
                           <span className="w-13 h-13 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl shadow-xs">
                              {feat.icon}
                           </span>
                           <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${feat.tagColor}`}>
                              {feat.tag}
                           </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                           {feat.description}
                        </p>
                     </div>

                     <div className="border-t border-gray-100 pt-5 space-y-2">
                        {feat.specs.map((spec, sIdx) => (
                           <div key={sIdx} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span>{spec}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </Band>

         {/* Comparison Table */}
         <div className="bg-white py-14 md:py-20 border-t border-gray-200">
            <Band>
               <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                     How We Compare to Ordinary Footwear
                  </h2>
                  <p className="text-sm text-gray-500">See the scientific difference under the hood</p>
               </div>

               <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xs">
                  <table className="w-full text-left text-sm">
                     <thead className="bg-neutral-900 text-white uppercase text-xs tracking-wider">
                        <tr>
                           <th className="py-4.5 px-6 font-bold">Performance Dimension</th>
                           <th className="py-4.5 px-6 font-semibold text-gray-400">Ordinary Footwear</th>
                           <th className="py-4.5 px-6 font-bold text-red-400">Our Footwear Innovation</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100 bg-white">
                        {comparisons.map((row, idx) => (
                           <tr key={idx} className="hover:bg-gray-50 transition-colors">
                              <td className="py-4.5 px-6 font-bold text-gray-900">{row.feature}</td>
                              <td className="py-4.5 px-6 text-gray-500">{row.standard}</td>
                              <td className="py-4.5 px-6 font-semibold text-emerald-600 flex items-center gap-2">
                                 <span>✓</span>
                                 <span>{row.brand}</span>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </Band>
         </div>
      </main>
   );
};
