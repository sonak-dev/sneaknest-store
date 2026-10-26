import { Link } from "react-router-dom";

export const HeroSection = () => {
   return (
      <main className="
         flex flex-col md:flex-row
         items-center
         min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-72px)]
         px-4 md:px-8 lg:px-10
         py-12 md:py-16
         gap-10 md:gap-14
      ">

         {/* ── Left Column ── */}
         <div className="
            w-full md:w-1/2
            flex flex-col
            text-center md:text-left
            items-center md:items-start
         ">
            {/* Badge with top & bottom space */}
            <div className="mb-4">
               <span className="
                  inline-block bg-red-100 text-red-600
                  text-xs font-bold uppercase tracking-widest
                  px-3.5 py-1.5 rounded-full shadow-xs
               ">
                  ⚡ New Collection 2026
               </span>
            </div>

            {/* Main Heading with clear margins */}
            <h1 className="
               text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
               font-black text-black
               leading-tight md:leading-none
               tracking-tight
               my-3 sm:my-4
            ">
               YOUR FEET DESERVE THE BEST
            </h1>

            {/* Description Paragraph with top & bottom spacing */}
            <p className="
               max-w-sm sm:max-w-md
               text-gray-500
               leading-relaxed
               text-sm sm:text-base
               uppercase tracking-wide
               my-3 sm:my-4
            ">
               Your feet deserve the best, and we&apos;re here to help you
               find the perfect pair. Explore premium-quality shoes
               designed for comfort, performance, and everyday style.
            </p>

            {/* Buttons with top & bottom breathing room */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start pt-3 pb-6">
               <Link
                  to="/shop"
                  className="
                     bg-red-600 text-white
                     px-7 sm:px-9 py-3 sm:py-3.5
                     rounded-xl font-bold
                     cursor-pointer
                     hover:bg-red-700 active:scale-95
                     transition-all text-sm sm:text-base
                     shadow-lg shadow-red-600/30
                  "
               >
                  Shop Now →
               </Link>
               <Link
                  to="/shop"
                  className="
                     border-2 border-black
                     px-7 sm:px-9 py-3 sm:py-3.5
                     rounded-xl font-bold
                     cursor-pointer
                     hover:bg-black hover:text-white active:scale-95
                     transition-all text-sm sm:text-base
                  "
               >
                  Browse Catalog
               </Link>
            </div>

            {/* Available On with top spacing */}
            <div className="flex flex-col gap-2.5 items-center md:items-start pt-3 border-t border-red-100/60 w-full sm:w-auto">
               <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Also Available On
               </p>
               <div className="flex gap-5 items-center">
                  <img src="/images/flipkart.png" alt="Flipkart" className="h-7 sm:h-8 w-auto opacity-80 hover:opacity-100 transition" />
                  <img src="/images/amazon.png"   alt="Amazon"   className="h-7 sm:h-8 w-auto opacity-80 hover:opacity-100 transition" />
               </div>
            </div>
         </div>

         {/* ── Right Column ── */}
         <div className="
            w-full md:w-1/2
            flex justify-center items-center
            relative
         ">
            {/* Background circular accent */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-red-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

            <img
               src="/images/shoe_image.png"
               alt="Nike Red Shoe"
               className="
                  w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                  h-auto object-contain
                  drop-shadow-2xl
                  hover:scale-105 hover:-rotate-1 transition-transform duration-500
               "
            />
         </div>

      </main>
   );
};