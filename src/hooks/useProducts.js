import { useState, useEffect } from "react";
import axios from "axios";
import { products as mockProducts } from "../data/products.js";

const USD_TO_INR = 85;

export const useProducts = () => {
   const [products, setProducts] = useState(mockProducts);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
      const urls = [
         "https://dummyjson.com/products/category/mens-shoes",
         "https://dummyjson.com/products/category/womens-shoes",
      ];
      Promise.all(urls.map((u) => axios.get(u)))
         .then(([men, women]) => {
            const api = [...men.data.products, ...women.data.products].map((p) => {
               const price = Math.round(p.price * USD_TO_INR);
               const discount = Math.round(p.discountPercentage || 0);
               return {
                  id: `api-${p.id}`,
                  name: p.title,
                  category: p.category === "mens-shoes" ? "Men" : "Women",
                  price,
                  oldPrice: Math.round(price / (1 - discount / 100)),
                  discount,
                  rating: Number(p.rating).toFixed(1),
                  reviews: p.reviews?.length ?? 0,
                  color: p.brand ?? "",
                  hue: 0,
                  badge: "",
                  description: p.description,
                  image: p.thumbnail,
               };
            });
            setProducts([...api, ...mockProducts]);
         })
         .catch(() => setError(true))
         .finally(() => setLoading(false));
   }, []);

   return { products, loading, error };
};