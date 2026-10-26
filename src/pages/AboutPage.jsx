import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation.jsx";
import { Footer } from "../components/Footer.jsx";

const stats = [
   { label: "Founded", value: "1964", caption: "Eugene, Oregon" },
   { label: "Global Reach", value: "160+", caption: "Countries active" },
   { label: "Athletes Empowered", value: "50M+", caption: "Worldwide community" },
   { label: "Renewable Energy", value: "100%", caption: "Target for facilities" },
];

const timeline = [
   {
      year: "1964",
      title: "Blue Ribbon Sports Begins",
      desc: "Track coach Bill Bowerman and middle-distance runner Phil Knight shake hands with a $500 investment to reimagine athletic footwear.",
   },
   {
      year: "1971",
      title: "The Birth of The Swoosh & Waffle Iron",
      desc: "Carolyn Davidson designs the iconic Swoosh for $35. Bowerman pours rubber into his wife's waffle iron to invent the grip outsole.",
   },
   {
      year: "1985",
      title: "The Air Jordan Revolution",
      desc: "Michael Jordan laces up the Air Jordan 1, changing the intersection of basketball, music, design, and global streetwear forever.",
   },
   {
      year: "2017",
      title: "Breaking2 & ZoomX Era",
      desc: "Eliud Kipchoge and the team push human potential past the 2-hour marathon threshold using revolutionary ZoomX and carbon Flyplates.",
   },
   {
      year: "Today",
      title: "Move to Zero — Zero Carbon & Zero Waste",
      desc: "Pioneering Next Nature materials, circular shoe design, and sustainable manufacturing for the future of sports and the planet.",
   },
];

const values = [
   {
      icon: "⚡",
      title: "Obsession with Innovation",
      desc: "At the Nike Sport Research Lab (NSRL), biomechanists and physiologists study athlete motion down to the millisecond to engineer breakthrough gear.",
   },
   {
      icon: "🌱",
      title: "Sustainable Performance",
      desc: "Performance shouldn't cost the Earth. We incorporate recycled Flyknit yarns, recycled air units, and closed-loop waste into modern products.",
   },
   {
      icon: "🤝",
      title: "Community & Inclusivity",
      desc: "'If you have a body, you are an athlete.' We break barriers so youth, communities, and future champions can play on equal footing.",
   },
];

export const AboutPage = () => {
   return (
      <div className="font-sans antialiased min-h-screen bg-gray-50 flex flex-col justify-between">
         <div>
            {/* Top Navigation */}
            <div className="bg-white border-b border-gray-100 shadow-xs">
               <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                  <Navigation />
               </div>
            </div>

            {/* Hero Header */}
            <div className="bg-linear-to-r from-neutral-950 via-zinc-900 to-red-950 text-white py-16 md:py-24">
               <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                  <div className="max-w-3xl">
                     <span className="inline-block bg-red-600/30 border border-red-500/40 text-red-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                        Our Story & Purpose
                     </span>
                     <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                        BRING INSPIRATION & INNOVATION TO EVERY{" "}
                        <span className="text-red-500 underline decoration-red-500/40">ATHLETE*</span> IN THE WORLD.
                     </h1>
                     <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-6 leading-relaxed">
                        *If you have a body, you are an athlete. For over six decades, our purpose has been simple: harness the power of sport to unleash human potential and move humanity forward.
                     </p>
                     <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                           to="/menu"
                           className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                        >
                           Explore Collection →
                        </Link>
                        <Link
                           to="/location"
                           className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                        >
                           Find Our Stores
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

            {/* Key Stats Counter */}
            <div className="bg-white border-b border-gray-200">
               <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                     {stats.map((stat, i) => (
                        <div key={i} className="p-4 border-r last:border-none border-gray-100">
                           <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
                              {stat.value}
                           </div>
                           <div className="text-sm font-bold text-red-600 mt-1">{stat.label}</div>
                           <div className="text-xs text-gray-400 mt-0.5">{stat.caption}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Timeline Section */}
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
               <div className="text-center max-w-xl mx-auto mb-14">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                     Six Decades of Pushing Limits
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                     From a backyard waffle iron experiment to the world&apos;s most celebrated footwear brand.
                  </p>
               </div>

               <div className="relative border-l-2 border-red-500/30 ml-4 md:ml-32 space-y-12">
                  {timeline.map((item, index) => (
                     <div key={index} className="relative pl-8 group">
                        {/* Dot */}
                        <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-white border-4 border-red-600 group-hover:scale-125 transition-transform" />

                        {/* Content */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow">
                           <span className="text-xs font-black tracking-widest text-red-600 uppercase">
                              {item.year}
                           </span>
                           <h3 className="text-lg font-bold text-gray-900 mt-1">{item.title}</h3>
                           <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Core Values */}
            <div className="bg-white py-16 md:py-24 border-t border-gray-100">
               <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                  <div className="text-center max-w-xl mx-auto mb-12">
                     <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        What Drives Us Every Day
                     </h2>
                     <p className="text-sm text-gray-500 mt-2">
                        Engineering gear for the everyday jogger to Olympic record holders.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {values.map((v, i) => (
                        <div
                           key={i}
                           className="bg-gray-50 p-8 rounded-3xl border border-gray-200/80 hover:border-red-500/50 hover:shadow-xl transition-all duration-300"
                        >
                           <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-gray-100 flex items-center justify-center text-2xl mb-6">
                              {v.icon}
                           </div>
                           <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                           <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Footer */}
         <div className="bg-white border-t border-gray-100">
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
               <Footer />
            </div>
         </div>
      </div>
   );
};
