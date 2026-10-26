import { HeroSection } from "../components/Hero.jsx";
import { ProductsSection } from "../components/ProductsSection.jsx";
import { WhyChooseUs } from "../components/WhyChooseUs.jsx";
import { Testimonials } from "../components/Testimonials.jsx";
import { Band } from "../components/Band.jsx";

export const Home = ({ onAddToCart = () => {} }) => {
   return (
      <main className="font-sans antialiased">
         {/* ── HERO SECTION ── */}
         <div className="bg-linear-to-br from-white via-red-50 to-rose-100">
            <Band>
               <HeroSection />
            </Band>
         </div>

         {/* ── FEATURED PRODUCTS ── */}
         <Band className="bg-gray-50 py-12 md:py-16">
            <ProductsSection onAddToCart={onAddToCart} />
         </Band>

         {/* ── WHY CHOOSE US (FEATURES) ── */}
         <Band className="bg-white py-12 md:py-16">
            <WhyChooseUs />
         </Band>

         {/* ── TESTIMONIALS (REVIEWS) ── */}
         <Band className="bg-gray-50 py-12 md:py-16">
            <Testimonials />
         </Band>
      </main>
   );
};
