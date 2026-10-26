const series = ["Air", "Flex", "Speed", "Urban", "Power", "Street", "Cloud", "Zoom"];
const types = ["Runner", "Trainer", "Classic", "Walker", "Pro", "Max"];
const categories = ["Running", "Casual", "Training"];
const badges = ["New", "Bestseller", "Trending", "", "", ""];
const discounts = [10, 15, 20, 25, 30];

const colorName = (h) => {
   if (h < 20) return "Red";
   if (h < 50) return "Orange";
   if (h < 80) return "Yellow";
   if (h < 150) return "Green";
   if (h < 200) return "Teal";
   if (h < 260) return "Blue";
   if (h < 310) return "Purple";
   return "Pink";
};

// 8 series × 6 types = 48 unique products
export const products = Array.from({ length: 48 }, (_, i) => {
   const name = `${series[i % 8]} ${types[Math.floor(i / 8)]}`;
   const category = categories[i % 3];
   const price = 2999 + ((i * 13) % 48) * 100;      // 48 alag prices
   const discount = discounts[i % 5];
   const hue = (i * 37) % 360;                       // 48 alag colors

   return {
      id: i + 1,
      name,
      category,
      price,
      oldPrice: Math.round(price / (1 - discount / 100)),
      discount,
      rating: (3.8 + ((i * 7) % 13) / 10).toFixed(1),
      reviews: 20 + ((i * 53) % 480),
      color: colorName(hue),
      hue,
      badge: badges[i % 6],
      description: `${name} is a ${category.toLowerCase()} shoe built for comfort and everyday performance.`,
      image: "/images/shoes_image.png",
   };
});