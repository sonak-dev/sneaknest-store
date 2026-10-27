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
         <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5">

            {/* Header */}
            <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">

               {/* RED BADGE */}
               <div>
                  <span className="inline-flex items-center rounded-full bg-red-100 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-red-600">
                     Verified Athletic Stories
                  </span>
               </div>

               {/* HEADING */}
               <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  What Runners &amp; Athletes Say
               </h2>

               {/* DESCRIPTION */}
               <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                  Over 14,800+ athletes put millions of kilometers into our footwear every single month. Here is their unfiltered experience.
               </p>

            </div>

            {/* CARDS */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-10">

               {reviews.map((r) => (
                  <div
                     key={r.id}
                     className="
                        group
                        flex
                        flex-col
                        rounded-3xl
                        border
                        border-gray-200
                        bg-white
                        p-7
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-red-200
                        hover:shadow-xl
                     "
                  >

                     {/* TOP ROW */}
                     <div className="flex items-center justify-between gap-4">

                        {/* SHOE */}
                        <span className="rounded-full bg-gray-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-800">
                           {r.shoe}
                        </span>

                        {/* STARS */}
                        <div className="shrink-0 text-sm tracking-wider text-amber-500">
                           {"★".repeat(r.stars)}
                        </div>

                     </div>


                     {/* HIGHLIGHT */}
                     <p className="mt-5 text-xs font-bold uppercase leading-5 tracking-wide text-red-600">
                        “{r.highlight}”
                     </p>


                     {/* REVIEW */}
                     <p className="mt-3 text-sm leading-7 text-gray-600 italic">
                        “{r.text}”
                     </p>


                     {/* REVIEWER */}
                     <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-5">

                        {/* AVATAR */}
                        <div
                           className={`
                              flex h-11 w-11 shrink-0 items-center justify-center
                              rounded-full
                              text-sm font-bold
                              ${r.avatarBg}
                           `}
                        >
                           {r.name.charAt(0)}
                        </div>


                        {/* USER INFO */}
                        <div className="min-w-0">

                           <div className="flex items-center gap-1.5">

                              <p className="truncate text-sm font-bold text-gray-900">
                                 {r.name}
                              </p>

                              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[9px] font-bold text-emerald-600">
                                 ✓
                              </span>

                           </div>

                           <p className="mt-1 truncate text-[11px] text-gray-400">
                              {r.role} · {r.location}
                           </p>

                           <p className="mt-0.5 text-[10px] text-gray-400">
                              {r.date}
                           </p>

                        </div>

                     </div>

                  </div>
               ))}

            </div>

         </div>
      </section>
   );
};