import { useState } from "react";
import { Band } from "../components/Band.jsx";

const initialReviews = [
   {
      id: 1,
      name: "Vikram Malhotra",
      role: "Marathon Runner (10K PB: 38:12)",
      shoe: "ZoomX Vaporfly Next% 3",
      rating: 5,
      date: "2 days ago",
      verified: true,
      helpful: 42,
      tag: "Marathon",
      comment: "Ran the Vedanta Delhi Half Marathon wearing these and shaved 4 full minutes off my personal best! The carbon Flyplate rebound is unlike anything else on the market.",
   },
   {
      id: 2,
      name: "Ananya Deshmukh",
      role: "CrossFit Athlete & Trainer",
      shoe: "Metcon 9 Amp Edition",
      rating: 5,
      date: "1 week ago",
      verified: true,
      helpful: 29,
      tag: "Gym & Crossfit",
      comment: "Unshakable base during heavy barbell squats and Olympic cleans. The wider Hyperlift heel plate gives you zero wobble when lifting 120kg+.",
   },
   {
      id: 3,
      name: "Rohan Sen",
      role: "Software Architect & Daily Walker",
      shoe: "Air Max Pulse Supreme",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      helpful: 18,
      tag: "Daily Casual",
      comment: "I clock 12,000 steps daily on office concrete floors. My lower back and heel fatigue disappeared completely after switching to Air Max Pulse.",
   },
   {
      id: 4,
      name: "Sneha Kapoor",
      role: "Trail & Road Runner",
      shoe: "Pegasus 41 ReactX",
      rating: 4,
      date: "3 weeks ago",
      verified: true,
      helpful: 14,
      tag: "Marathon",
      comment: "The new ReactX foam is noticeably springier than the 40. Toe box is roomy and breathable. Best all-around daily trainer you can buy under ₹12K.",
   },
   {
      id: 5,
      name: "Aman Preet Singh",
      role: "Streetwear Enthusiast",
      shoe: "Air Jordan 1 High OG",
      rating: 5,
      date: "1 month ago",
      verified: true,
      helpful: 57,
      tag: "Daily Casual",
      comment: "Absolute holy grail silhouette. The leather smells genuine and breaks in comfortably after 2-3 wears. Matches literally any denim or cargo fit.",
   },
   {
      id: 6,
      name: "Pooja Varma",
      role: "Morning Park Runner",
      shoe: "InfinityRN 4 Gore-Tex",
      rating: 5,
      date: "1 month ago",
      verified: true,
      helpful: 23,
      tag: "Marathon",
      comment: "Monsoon runs in Mumbai are normally a nightmare, but the GORE-TEX membrane kept my socks bone dry even through puddle splashes. Incredible traction.",
   },
];

export const ReviewsPage = () => {
   const [reviews, setReviews] = useState(initialReviews);
   const [filterTag, setFilterTag] = useState("All");
   const [newReview, setNewReview] = useState({ name: "", shoe: "ZoomX Vaporfly Next% 3", rating: 5, comment: "" });
   const [showForm, setShowForm] = useState(false);
   const [submittedToast, setSubmittedToast] = useState("");

   const handleHelpful = (id) => {
      setReviews((prev) =>
         prev.map((r) => (r.id === id ? { ...r, helpful: r.helpful + 1 } : r))
      );
   };

   const handleSubmitReview = (e) => {
      e.preventDefault();
      if (!newReview.name || !newReview.comment) return;
      const created = {
         id: Date.now(),
         name: newReview.name,
         role: "Verified Community Athlete",
         shoe: newReview.shoe,
         rating: Number(newReview.rating),
         date: "Just now",
         verified: true,
         helpful: 1,
         tag: "Daily Casual",
         comment: newReview.comment,
      };
      setReviews([created, ...reviews]);
      setShowForm(false);
      setNewReview({ name: "", shoe: "ZoomX Vaporfly Next% 3", rating: 5, comment: "" });
      setSubmittedToast("Thank you! Your verified review has been published.");
      setTimeout(() => setSubmittedToast(""), 4000);
   };

   const filteredReviews = filterTag === "All"
      ? reviews
      : reviews.filter((r) => r.tag === filterTag || (filterTag === "5 Stars" && r.rating === 5));

   return (
      <main className="font-sans antialiased min-h-screen bg-gray-50 pb-16">
         {submittedToast && (
            <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
               <span className="text-emerald-400 font-bold">✓</span>
               <span className="text-sm font-medium">{submittedToast}</span>
            </div>
         )}

         {/* Hero Header */}
         <div className="bg-linear-to-r from-neutral-950 via-zinc-900 to-red-950 text-white py-14 md:py-20">
            <Band>
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
                  <div className="space-y-3">
                     <span className="inline-block bg-red-600/30 border border-red-500/40 text-red-300 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                        Verified Athlete Feedback
                     </span>
                     <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                        Real Performance. <span className="text-red-500">Unfiltered Reviews.</span>
                     </h1>
                     <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed pt-1">
                        Over 14,800+ runners, lifters, and everyday athletes share their real mileage, fit, and performance feedback.
                     </p>
                  </div>

                  <button
                     onClick={() => setShowForm(!showForm)}
                     className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all cursor-pointer shadow-lg shadow-red-600/30 self-start md:self-auto shrink-0 hover:scale-105 active:scale-95"
                  >
                     {showForm ? "✕ Close Form" : "★ Write a Review"}
                  </button>
               </div>
            </Band>
         </div>

         {/* Rating Summary Card */}
         <div className="-mt-8">
            <Band>
               <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
                  <div className="md:col-span-4 text-center md:border-r border-gray-100 pr-0 md:pr-10 space-y-1">
                     <div className="text-5xl sm:text-6xl font-black text-gray-900">4.9</div>
                     <div className="text-amber-500 text-2xl tracking-widest my-1.5">★★★★★</div>
                     <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                        Based on 14,820 Verified Ratings
                     </p>
                  </div>

                  <div className="md:col-span-8 space-y-3">
                     {[
                        { star: "5 Stars", pct: "88%", count: "13,040" },
                        { star: "4 Stars", pct: "9%", count: "1,330" },
                        { star: "3 Stars", pct: "2%", count: "296" },
                        { star: "2 Stars", pct: "1%", count: "112" },
                        { star: "1 Star", pct: "0%", count: "42" },
                     ].map((row, i) => (
                        <div key={i} className="flex items-center gap-4 text-xs">
                           <span className="w-14 text-gray-600 font-medium shrink-0">{row.star}</span>
                           <div className="flex-1 bg-gray-100 h-2.5 rounded-full overflow-hidden">
                              <div className="bg-amber-400 h-full rounded-full transition-all duration-500" style={{ width: row.pct }} />
                           </div>
                           <span className="w-12 text-right text-gray-400 font-medium shrink-0">{row.pct}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </Band>
         </div>

         {/* Write a Review Box */}
         {showForm && (
            <div className="pt-8">
               <Band>
                  <form onSubmit={handleSubmitReview} className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-10 border border-neutral-700 shadow-2xl space-y-6">
                     <div>
                        <h3 className="text-xl sm:text-2xl font-bold">Share Your Athlete Experience</h3>
                        <p className="text-xs text-gray-400 mt-1">Your honest review helps other runners choose the right footwear.</p>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="space-y-1.5">
                           <label className="block text-xs font-semibold text-gray-300">Your Name *</label>
                           <input
                              type="text"
                              required
                              value={newReview.name}
                              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                              placeholder="e.g. Arjun Mehta"
                              className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                           />
                        </div>

                        <div className="space-y-1.5">
                           <label className="block text-xs font-semibold text-gray-300">Product Tested</label>
                           <select
                              value={newReview.shoe}
                              onChange={(e) => setNewReview({ ...newReview, shoe: e.target.value })}
                              className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                           >
                              <option>ZoomX Vaporfly Next% 3</option>
                              <option>Air Max Pulse Supreme</option>
                              <option>Metcon 9 Amp Edition</option>
                              <option>Pegasus 41 ReactX</option>
                              <option>Air Jordan 1 High OG</option>
                              <option>InfinityRN 4 Gore-Tex</option>
                           </select>
                        </div>

                        <div className="space-y-1.5">
                           <label className="block text-xs font-semibold text-gray-300">Rating</label>
                           <select
                              value={newReview.rating}
                              onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                              className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                           >
                              <option value="5">★★★★★ (5 - Outstanding)</option>
                              <option value="4">★★★★☆ (4 - Very Good)</option>
                              <option value="3">★★★☆☆ (3 - Average)</option>
                           </select>
                        </div>
                     </div>

                     <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-gray-300">Your Review & Mileage Experience *</label>
                        <textarea
                           rows={3}
                           required
                           value={newReview.comment}
                           onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                           placeholder="Describe comfort, fit, responsiveness, and how it performs during your workouts..."
                           className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                        />
                     </div>

                     <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl text-sm transition-colors cursor-pointer shadow-md shadow-red-600/30"
                     >
                        Submit Review
                     </button>
                  </form>
               </Band>
            </div>
         )}

         {/* Filter Pills */}
         <div className="pt-10 pb-6">
            <Band>
               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                  {["All", "5 Stars", "Marathon", "Gym & Crossfit", "Daily Casual"].map((tag) => (
                     <button
                        key={tag}
                        onClick={() => setFilterTag(tag)}
                        className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide cursor-pointer transition-all ${
                           filterTag === tag
                              ? "bg-black text-white shadow-md scale-105"
                              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                        }`}
                     >
                        {tag}
                     </button>
                  ))}
               </div>
            </Band>
         </div>

         {/* Reviews Cards Grid */}
         <Band>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
               {filteredReviews.map((rev) => (
                  <div
                     key={rev.id}
                     className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                     <div>
                        {/* Reviewer Header */}
                        <div className="flex items-center justify-between mb-4">
                           <div className="flex items-center gap-3.5">
                              <div className="w-11 h-11 rounded-full bg-neutral-900 text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
                                 {rev.name.charAt(0)}
                              </div>
                              <div>
                                 <div className="flex items-center gap-2">
                                    <h4 className="font-bold text-sm text-gray-900">{rev.name}</h4>
                                    {rev.verified && (
                                       <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                                          ✓ Verified
                                       </span>
                                    )}
                                 </div>
                                 <p className="text-[11px] text-gray-400 mt-0.5">{rev.role}</p>
                              </div>
                           </div>
                           <span className="text-xs text-gray-400 shrink-0">{rev.date}</span>
                        </div>

                        {/* Stars & Model */}
                        <div className="flex items-center justify-between py-2.5 border-y border-gray-100 my-3.5 text-xs">
                           <span className="text-amber-500 font-bold text-sm tracking-wider">
                              {"★".repeat(rev.rating)}
                           </span>
                           <span className="font-semibold text-gray-700 bg-gray-50 px-2.5 py-1 rounded-md text-[11px]">
                              {rev.shoe}
                           </span>
                        </div>

                        {/* Review Text */}
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic my-2">
                           &ldquo;{rev.comment}&rdquo;
                        </p>
                     </div>

                     {/* Helpful Button */}
                     <div className="border-t border-gray-100 mt-5 pt-4 flex items-center justify-between text-xs text-gray-400">
                        <span>Was this helpful?</span>
                        <button
                           onClick={() => handleHelpful(rev.id)}
                           className="font-semibold text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1.5 cursor-pointer bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg active:scale-95"
                        >
                           <span>👍</span>
                           <span>Helpful ({rev.helpful})</span>
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </Band>
      </main>
   );
};
