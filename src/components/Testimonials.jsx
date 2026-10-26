const reviews = [
   {
      id: 1,
      name: "Vikram Malhotra",
      location: "New Delhi",
      role: "Marathon Finisher (PB: 38:12)",
      shoe: "ZoomX Vaporfly Next% 3",
      stars: 5,
      date: "Verified Run · 2 days ago",
      text: "Shaved 4 full minutes off my Vedanta Delhi Half Marathon time. The energy rebound on the carbon Flyplate feels like unfair propulsion in the final 5K.",
      avatarBg: "bg-red-600 text-white",
      highlight: "Unmatched carbon plate propulsion",
   },
   {
      id: 2,
      name: "Dr. Ananya Deshmukh",
      location: "Mumbai",
      role: "CrossFit Coach & Athlete",
      shoe: "Metcon 9 Amp Edition",
      stars: 5,
      date: "Verified Gym · 1 week ago",
      text: "Rock-solid anchor for Olympic snatches and box jumps. Zero foot roll even with 110kg overhead. Easily the most durable pair in my gym bag.",
      avatarBg: "bg-amber-600 text-white",
      highlight: "Zero lateral wobble during heavy lifts",
   },
   {
      id: 3,
      name: "Rohan Sen",
      location: "Bengaluru",
      role: "Tech Lead & 10K Daily Runner",
      shoe: "Air Max Pulse Supreme",
      stars: 5,
      date: "Verified Run · 2 weeks ago",
      text: "Switching from standard sneakers to Air Max Pulse eliminated my post-run heel fatigue completely. I clock 14,000 steps daily on office concrete in total comfort.",
      avatarBg: "bg-blue-600 text-white",
      highlight: "Eliminated all heel & arch fatigue",
   },
];

export const Testimonials = () => {
   return (
      <section className="py-12 sm:py-16 lg:py-20">
         {/* Section Header with generous vertical spacing */}
         <div className="text-center md:text-left mb-10 sm:mb-14">
            <span className="inline-block bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
               Verified Athletic Stories
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight my-3">
               What Runners &amp; Athletes Say
            </h2>

            <p className="text-gray-500 text-sm sm:text-base max-w-2xl leading-relaxed mt-2">
               Over 14,800+ athletes put millions of kilometers into our footwear every single month. Here is their unfiltered experience.
            </p>
         </div>

         {/* 3 Distinctive Testimonial Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((r) => (
               <div
                  key={r.id}
                  className="
                     bg-white border border-gray-200/90 rounded-3xl p-7 sm:p-8
                     hover:shadow-2xl hover:border-red-200 hover:-translate-y-1.5
                     transition-all duration-300
                     flex flex-col justify-between relative overflow-hidden
                     group
                  "
               >
                  {/* Subtle quote watermark */}
                  <span className="absolute -top-3 right-4 text-8xl text-gray-100 font-serif leading-none select-none pointer-events-none group-hover:text-red-50 transition-colors">
                     &ldquo;
                  </span>

                  <div className="relative z-10">
                     {/* Shoe Model Pill & Rating Header */}
                     <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold bg-neutral-100 text-neutral-800 px-3 py-1 rounded-full uppercase tracking-wider">
                           {r.shoe}
                        </span>
                        <div className="text-amber-500 text-sm tracking-wider font-bold">
                           {"★".repeat(r.stars)}
                        </div>
                     </div>

                     {/* Highlight Callout */}
                     <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2.5">
                        &ldquo;{r.highlight}&rdquo;
                     </p>

                     {/* Main Review text with proper vertical spacing */}
                     <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                        &ldquo;{r.text}&rdquo;
                     </p>
                  </div>

                  {/* Reviewer Meta Section with border separation */}
                  <div className="flex items-center gap-3.5 border-t border-gray-100 pt-4.5 relative z-10">
                     <div className={`w-11 h-11 rounded-full ${r.avatarBg} flex items-center justify-center font-bold text-sm shadow-xs shrink-0`}>
                        {r.name.charAt(0)}
                     </div>
                     <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                           <p className="font-bold text-sm text-gray-900 truncate">{r.name}</p>
                           <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.2 rounded-sm shrink-0">
                              ✓
                           </span>
                        </div>
                        <p className="text-[11px] text-gray-400 truncate">{r.role} · {r.location}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{r.date}</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};