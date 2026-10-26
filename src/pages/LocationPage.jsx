import { useState } from "react";
import { Navigation } from "../components/Navigation.jsx";
import { Footer } from "../components/Footer.jsx";

const cities = ["All Cities", "Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Kolkata"];

const storeLocations = [
   {
      id: "loc-1",
      name: "Nike Flagship Store — Connaught Place",
      city: "Delhi NCR",
      type: "Flagship Destination",
      address: "Inner Circle, Block F, Radial Rd 1, Connaught Place, New Delhi",
      pincode: "110001",
      phone: "+91 11 4151 7780",
      hours: "10:30 AM – 09:30 PM",
      status: "Open Now",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      distance: "2.4 km away",
      rating: 4.8,
      services: ["Nike By You Custom Studio", "Digital Treadmill Gait Analysis", "Click & Collect", "VIP Sneaker Lounge"],
      mapCoordinates: "28.6328° N, 77.2197° E",
   },
   {
      id: "loc-2",
      name: "Nike By Bandra — Linking Road",
      city: "Mumbai",
      type: "Neighborhood Concept",
      address: "Plot 390, Linking Road, Khar West, Next to McDonald's, Mumbai",
      pincode: "400052",
      phone: "+91 22 2648 9912",
      hours: "11:00 AM – 10:00 PM",
      status: "Open Now",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      distance: "4.1 km away",
      rating: 4.9,
      services: ["Bra Fit Specialists", "Sneaker Cleaning Station", "Curbside Pickup", "Nike Run Club Meetup Hub"],
      mapCoordinates: "19.0688° N, 72.8340° E",
   },
   {
      id: "loc-3",
      name: "Nike Indiranagar Studio",
      city: "Bengaluru",
      type: "Performance Hub",
      address: "100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru",
      pincode: "560038",
      phone: "+91 80 4120 4432",
      hours: "10:00 AM – 09:30 PM",
      status: "Open Now",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      distance: "1.8 km away",
      rating: 4.9,
      services: ["Marathon Footwear Lab", "Instant Locker Pickup", "Expert Styling Session", "Nike By You Studio"],
      mapCoordinates: "12.9719° N, 77.6412° E",
   },
   {
      id: "loc-4",
      name: "Nike Select Citywalk Mall",
      city: "Delhi NCR",
      type: "Mall Experience",
      address: "Ground Floor, Select Citywalk, Saket District Centre, New Delhi",
      pincode: "110017",
      phone: "+91 11 4057 8890",
      hours: "10:00 AM – 10:00 PM",
      status: "Open Now",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      distance: "6.5 km away",
      rating: 4.7,
      services: ["Kids Athletic Fit Zone", "Same-Day Order Pickup", "Recycling Box (Move to Zero)"],
      mapCoordinates: "28.5283° N, 77.2195° E",
   },
   {
      id: "loc-5",
      name: "Nike Inorbit Cyberabad",
      city: "Hyderabad",
      type: "Flagship Destination",
      address: "Level 1, Inorbit Mall, Mindspace Tech Park, Hitech City, Hyderabad",
      pincode: "500081",
      phone: "+91 40 6704 5500",
      hours: "10:30 AM – 10:00 PM",
      status: "Open Now",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      distance: "5.2 km away",
      rating: 4.7,
      services: ["Custom Jersey Pressing", "Gait Test Zone", "Click & Collect", "Sneaker Exchange"],
      mapCoordinates: "17.4334° N, 78.3867° E",
   },
   {
      id: "loc-6",
      name: "Nike South City Kolkata",
      city: "Kolkata",
      type: "Premium Store",
      address: "Shop 112, South City Mall, Prince Anwar Shah Road, Kolkata",
      pincode: "700068",
      phone: "+91 33 4007 2341",
      hours: "11:00 AM – 09:30 PM",
      status: "Open Now",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      distance: "8.0 km away",
      rating: 4.6,
      services: ["Run Analysis Bar", "Curbside Pickup", "Nike By You Patches"],
      mapCoordinates: "22.5020° N, 88.3626° E",
   },
];

export const LocationPage = () => {
   const [selectedCity, setSelectedCity] = useState("All Cities");
   const [searchQuery, setSearchQuery] = useState("");
   const [activeStore, setActiveStore] = useState(storeLocations[0]);

   const filteredStores = storeLocations.filter((store) => {
      const matchCity = selectedCity === "All Cities" || store.city === selectedCity;
      const matchQuery =
         store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
         store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
         store.pincode.includes(searchQuery);
      return matchCity && matchQuery;
   });

   return (
      <div className="font-sans antialiased min-h-screen bg-gray-50 flex flex-col justify-between">
         <div>
            {/* Navigation Header */}
            <div className="bg-white border-b border-gray-100 shadow-xs">
               <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                  <Navigation />
               </div>
            </div>

            {/* Banner Section */}
            <div className="bg-linear-to-br from-zinc-950 via-neutral-900 to-black text-white py-12 md:py-16">
               <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                     <div>
                        <div className="inline-flex items-center gap-2 bg-red-600/30 border border-red-500/40 text-red-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3">
                           📍 Official Store Locator
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                           Find a <span className="text-red-500">Store Near You</span>
                        </h1>
                        <p className="text-gray-300 mt-2 max-w-xl text-sm sm:text-base">
                           Visit our flagship stores and experience centers. Get personalized shoe fitting, gait analysis, and try on limited edition drops.
                        </p>
                     </div>

                     {/* Search bar */}
                     <div className="w-full md:w-80">
                        <label className="text-xs text-gray-400 font-medium block mb-1">Search City or Pincode</label>
                        <div className="relative">
                           <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="e.g. Bandra, Saket, 560038..."
                              className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 px-4 py-2.5 pl-10 rounded-xl text-sm focus:outline-none focus:border-red-500 transition-colors"
                           />
                           <span className="absolute left-3.5 top-2.5 text-gray-400 text-sm">📍</span>
                           {searchQuery && (
                              <button
                                 onClick={() => setSearchQuery("")}
                                 className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-white"
                              >
                                 ✕
                              </button>
                           )}
                        </div>
                     </div>
                  </div>

                  {/* City selector pills */}
                  <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 pt-8 scrollbar-none">
                     {cities.map((city) => (
                        <button
                           key={city}
                           onClick={() => setSelectedCity(city)}
                           className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap cursor-pointer transition-all ${
                              selectedCity === city
                                 ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                                 : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
                           }`}
                        >
                           {city}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Left Column: Stores list */}
                  <div className="lg:col-span-7 flex flex-col gap-4">
                     <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-bold text-gray-900">
                           {filteredStores.length} Stores Available
                        </h2>
                        <span className="text-xs text-gray-500">Click a card to inspect store details</span>
                     </div>

                     {filteredStores.length === 0 ? (
                        <div className="bg-white rounded-2xl p-10 text-center border border-gray-200">
                           <p className="text-3xl mb-2">📍</p>
                           <h3 className="font-bold text-gray-800">No stores found</h3>
                           <p className="text-sm text-gray-500 mt-1">Try another city name or reset the search query.</p>
                           <button
                              onClick={() => {
                                 setSelectedCity("All Cities");
                                 setSearchQuery("");
                              }}
                              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg text-xs font-semibold"
                           >
                              Show All Stores
                           </button>
                        </div>
                     ) : (
                        filteredStores.map((store) => {
                           const isSelected = activeStore.id === store.id;
                           return (
                              <div
                                 key={store.id}
                                 onClick={() => setActiveStore(store)}
                                 className={`bg-white rounded-2xl p-6 border transition-all duration-200 cursor-pointer text-left ${
                                    isSelected
                                       ? "border-red-600 shadow-lg ring-2 ring-red-600/20"
                                       : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                                 }`}
                              >
                                 <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <div className="flex items-center gap-2">
                                       <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700">
                                          {store.city}
                                       </span>
                                       <span className="text-xs text-gray-400 font-medium">
                                          • {store.type}
                                       </span>
                                    </div>
                                    <span
                                       className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${store.statusColor}`}
                                    >
                                       ● {store.status}
                                    </span>
                                 </div>

                                 <h3 className="text-lg font-bold text-gray-900 mb-1">{store.name}</h3>
                                 <p className="text-sm text-gray-600 leading-relaxed mb-3">{store.address}</p>

                                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-500 mb-4 bg-gray-50 p-3 rounded-xl">
                                    <div>
                                       <span className="block text-gray-400 text-[10px] uppercase font-bold">Hours</span>
                                       <span className="font-semibold text-gray-800">{store.hours}</span>
                                    </div>
                                    <div>
                                       <span className="block text-gray-400 text-[10px] uppercase font-bold">Phone</span>
                                       <span className="font-semibold text-gray-800">{store.phone}</span>
                                    </div>
                                    <div>
                                       <span className="block text-gray-400 text-[10px] uppercase font-bold">Rating</span>
                                       <span className="font-semibold text-gray-800">★ {store.rating} / 5</span>
                                    </div>
                                 </div>

                                 {/* Services tags */}
                                 <div className="flex flex-wrap gap-1.5">
                                    {store.services.map((svc, i) => (
                                       <span
                                          key={i}
                                          className="text-[11px] bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-md font-medium"
                                       >
                                          ✓ {svc}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           );
                        })
                     )}
                  </div>

                  {/* Right Column: Selected Store Map & Action Card */}
                  <div className="lg:col-span-5 sticky top-24">
                     <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg">
                        {/* Map Header Visual Mockup */}
                        <div className="bg-linear-to-br from-neutral-800 to-zinc-900 p-8 text-white relative">
                           <div className="absolute top-4 right-4 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                              Live Hub
                           </div>
                           <p className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                              GPS Coordinate Pin
                           </p>
                           <h3 className="text-xl font-bold mt-1 text-white">{activeStore.name}</h3>
                           <p className="text-xs text-gray-400 mt-1">{activeStore.mapCoordinates}</p>

                           {/* Interactive visual radar icon */}
                           <div className="mt-6 flex items-center gap-4 bg-neutral-900/80 border border-neutral-700 p-3.5 rounded-2xl backdrop-blur-xs">
                              <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center text-lg animate-pulse">
                                 📍
                              </div>
                              <div className="text-xs">
                                 <p className="font-semibold text-white">Current Store Focus</p>
                                 <p className="text-gray-400">{activeStore.city} • Open today until 10 PM</p>
                              </div>
                           </div>
                        </div>

                        {/* Store Details Body */}
                        <div className="p-6">
                           <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                              Available In-Store Services
                           </h4>
                           <ul className="space-y-2.5 mb-6">
                              {activeStore.services.map((service, index) => (
                                 <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                                       ✓
                                    </span>
                                    <span>{service}</span>
                                 </li>
                              ))}
                           </ul>

                           {/* Action Buttons */}
                           <div className="flex flex-col sm:flex-row gap-3">
                              <a
                                 href={`https://maps.google.com/?q=${encodeURIComponent(activeStore.name + " " + activeStore.address)}`}
                                 target="_blank"
                                 rel="noreferrer"
                                 className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl text-center text-xs sm:text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
                              >
                                 <span>Get Directions</span>
                                 <span>↗</span>
                              </a>
                              <a
                                 href={`tel:${activeStore.phone.replace(/[^0-9+]/g, "")}`}
                                 className="flex-1 bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-xl text-center text-xs sm:text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
                              >
                                 <span>Call Store</span>
                                 <span>📞</span>
                              </a>
                           </div>

                           <div className="mt-4 text-center">
                              <p className="text-[11px] text-gray-400">
                                 Appointments for Gait Analysis & Custom Shoe fitting are free. Walk-ins welcome.
                              </p>
                           </div>
                        </div>
                     </div>
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
