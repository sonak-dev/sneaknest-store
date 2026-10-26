import { useState } from 'react'
import { Navigation } from '../components/Navigation.jsx'
import { ProductsSection } from '../components/ProductsSection.jsx'
import { Footer } from '../components/Footer.jsx'

export const ProductsPage = () => {
   const [toast, setToast] = useState("")

   const handleAddToCart = (product) => {
      try {
         const existing = JSON.parse(localStorage.getItem("cart")) || []
         const found = existing.find((p) => p.id === product.id)
         let updated
         if (found) {
            updated = existing.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
         } else {
            updated = [...existing, { ...product, qty: 1 }]
         }
         localStorage.setItem("cart", JSON.stringify(updated))
         window.dispatchEvent(new Event("storage"))
      } catch (e) {
         console.error(e)
      }

      setToast(`Added "${product.name}" to cart!`)
      setTimeout(() => setToast(""), 3000)
   }

   return (
      <div className="font-sans antialiased min-h-screen bg-gray-50 flex flex-col justify-between">
         {/* Toast Notification */}
         {toast && (
            <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-bounce">
               <span className="text-emerald-400 font-bold">✓</span>
               <span className="text-sm font-medium">{toast}</span>
            </div>
         )}

         <div>
            {/* Top Navigation */}
            <div className="bg-white border-b border-gray-100 shadow-xs sticky top-0 z-40">
               <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
                  <Navigation />
               </div>
            </div>

            {/* Products grid */}
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-8">
               <ProductsSection onAddToCart={handleAddToCart} />
            </div>
         </div>

         {/* Footer */}
         <div className="bg-white border-t border-gray-100">
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
               <Footer />
            </div>
         </div>
      </div>
   )
}
