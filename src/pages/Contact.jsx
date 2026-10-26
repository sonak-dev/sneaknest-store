import { useState } from "react";
import { Band } from "../components/Band.jsx";

const faqs = [
   {
      q: "How can I track my order status?",
      a: "Once your order ships, you will receive an SMS and email notification with an express courier tracking link. You can also view real-time updates in your account dashboard.",
   },
   {
      q: "What is the return & replacement policy?",
      a: "We offer a 30-day hassle-free return window on all unworn footwear and apparel with original tags and packaging intact. Free doorstep reverse pickup is provided.",
   },
   {
      q: "How do I find my accurate shoe size?",
      a: "Check our size chart on the product card or visit any official experience store for a free 3D digital foot scan and gait analysis.",
   },
   {
      q: "Can I cancel or alter my shipping address?",
      a: "Orders can be modified or canceled within 60 minutes of placement by reaching out to our live chat support team or calling 1800 102 6453.",
   },
];

export const Contact = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      orderId: "",
      category: "Order Status & Tracking",
      message: "",
   });
   const [submitted, setSubmitted] = useState(false);
   const [activeFaq, setActiveFaq] = useState(0);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.message) return;
      setSubmitted(true);
   };

   return (
      <main className="font-sans antialiased min-h-screen bg-gray-50 pb-16">
         {/* Hero Header */}
         <div className="bg-linear-to-r from-neutral-950 via-zinc-900 to-red-950 text-white py-14 md:py-20">
            <Band>
               <span className="inline-block bg-red-600/30 border border-red-500/40 text-red-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
                  24/7 Dedicated Support
               </span>
               <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
                  Get in Touch with <span className="text-red-500">Brand Care</span>
               </h1>
               <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                  Have questions about sizing, an existing order, or product release dates? Our athletic support specialists are ready to assist you.
               </p>
            </Band>
         </div>

         {/* Contact Channels Bar */}
         <div className="-mt-8">
            <Band>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-md">
                     <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl mb-3">
                        📞
                     </div>
                     <h3 className="font-bold text-sm text-gray-900">Phone Support</h3>
                     <p className="text-xs text-gray-500 mt-0.5">Toll-free 24/7 assistance</p>
                     <a href="tel:18001026453" className="text-sm font-bold text-red-600 hover:underline mt-2 inline-block">
                        1800 102 6453
                     </a>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-md">
                     <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-3">
                        💬
                     </div>
                     <div className="flex items-center justify-between">
                        <h3 className="font-bold text-sm text-gray-900">Live Chat</h3>
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                           ● Online
                        </span>
                     </div>
                     <p className="text-xs text-gray-500 mt-0.5">Instant answers from experts</p>
                     <button
                        onClick={() => alert("Connecting to Live Athlete Support Specialist...")}
                        className="text-sm font-bold text-emerald-600 hover:underline mt-2 inline-block cursor-pointer"
                     >
                        Start Live Chat →
                     </button>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-md">
                     <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-3">
                        ✉️
                     </div>
                     <h3 className="font-bold text-sm text-gray-900">Email Us</h3>
                     <p className="text-xs text-gray-500 mt-0.5">Response within 2 hours</p>
                     <a href="mailto:support@nike.com" className="text-sm font-bold text-blue-600 hover:underline mt-2 inline-block">
                        support@nike.com
                     </a>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-md">
                     <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-3">
                        🏢
                     </div>
                     <h3 className="font-bold text-sm text-gray-900">Global HQ</h3>
                     <p className="text-xs text-gray-500 mt-0.5">One Bowerman Drive</p>
                     <span className="text-sm font-semibold text-gray-800 mt-2 inline-block">
                        Beaverton, OR, USA
                     </span>
                  </div>
               </div>
            </Band>
         </div>

         {/* Main Form & FAQ Section */}
         <div className="pt-12 md:pt-16">
            <Band>
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                  {/* Left: Interactive Form */}
                  <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
                     <h2 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Direct Message</h2>
                     <p className="text-sm text-gray-500 mb-6">
                        Fill out the form below and an athlete specialist will get back to you shortly.
                     </p>

                     {submitted ? (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                           <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                              ✓
                           </div>
                           <h3 className="text-lg font-bold text-gray-900">Message Received!</h3>
                           <p className="text-sm text-gray-600 mt-1 max-w-md mx-auto">
                              Thank you, <span className="font-semibold">{formData.name}</span>. A confirmation ticket has been dispatched to <span className="font-semibold">{formData.email}</span>.
                           </p>
                           <button
                              onClick={() => {
                                 setSubmitted(false);
                                 setFormData({ name: "", email: "", orderId: "", category: "Order Status & Tracking", message: "" });
                              }}
                              className="mt-6 bg-black text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-gray-800 transition"
                           >
                              Send Another Message
                           </button>
                        </div>
                     ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                 <label className="block text-xs font-semibold text-gray-700 mb-1">
                                    Your Full Name *
                                 </label>
                                 <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="e.g. Rahul Sharma"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-600 transition"
                                 />
                              </div>

                              <div>
                                 <label className="block text-xs font-semibold text-gray-700 mb-1">
                                    Email Address *
                                 </label>
                                 <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="e.g. rahul@example.com"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-600 transition"
                                 />
                              </div>
                           </div>

                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                 <label className="block text-xs font-semibold text-gray-700 mb-1">
                                    Order ID (Optional)
                                 </label>
                                 <input
                                    type="text"
                                    value={formData.orderId}
                                    onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                                    placeholder="#NK-98421"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-600 transition"
                                 />
                              </div>

                              <div>
                                 <label className="block text-xs font-semibold text-gray-700 mb-1">
                                    Topic / Inquiry Type
                                 </label>
                                 <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-600 bg-white transition"
                                 >
                                    <option>Order Status & Tracking</option>
                                    <option>Return & Refund Request</option>
                                    <option>Shoe Sizing & Fit Guidance</option>
                                    <option>Store Visit & Experience</option>
                                    <option>Partnership & Sponsorship</option>
                                 </select>
                              </div>
                           </div>

                           <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-1">
                                 Message Details *
                              </label>
                              <textarea
                                 rows={4}
                                 required
                                 value={formData.message}
                                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                 placeholder="Tell us how we can help you today..."
                                 className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-600 transition"
                              />
                           </div>

                           <button
                              type="submit"
                              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors cursor-pointer shadow-md shadow-red-600/20"
                           >
                              Submit Message
                           </button>
                        </form>
                     )}
                  </div>

                  {/* Right: FAQ Accordion */}
                  <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
                     <h3 className="text-xl font-bold text-gray-900 mb-1">Frequently Asked Questions</h3>
                     <p className="text-xs text-gray-500 mb-5">Quick answers to common questions</p>

                     <div className="space-y-3">
                        {faqs.map((faq, idx) => {
                           const isOpen = activeFaq === idx;
                           return (
                              <div
                                 key={idx}
                                 className="border border-gray-200 rounded-2xl overflow-hidden transition-all"
                              >
                                 <button
                                    onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                                    className="w-full text-left p-4 flex items-center justify-between gap-3 font-semibold text-sm text-gray-800 hover:bg-gray-50 cursor-pointer"
                                 >
                                    <span>{faq.q}</span>
                                    <span className="text-xs text-gray-400 font-bold">
                                       {isOpen ? "▲" : "▼"}
                                    </span>
                                 </button>
                                 {isOpen && (
                                    <div className="px-4 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50">
                                       {faq.a}
                                    </div>
                                 )}
                              </div>
                           );
                        })}
                     </div>
                  </div>

               </div>
            </Band>
         </div>
      </main>
   );
};
