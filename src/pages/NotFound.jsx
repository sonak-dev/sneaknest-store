import { Link } from 'react-router-dom'

export const NotFound = () => {
   return (
      <div className="font-sans antialiased min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-6">
         <p className="text-8xl font-extrabold text-red-600 mb-4">404</p>
         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Page Not Found</h1>
         <p className="text-gray-500 mb-8 max-w-sm">
            Oops! The page you're looking for doesn't exist.
         </p>
         <Link
            to="/"
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all"
         >
            ← Go Back Home
         </Link>
      </div>
   )
}
