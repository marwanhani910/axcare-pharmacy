export interface Product {
  id: string;
  name: string;
  nameAr?: string;
  category: "Medicines" | "Vitamins" | "Skincare" | "Baby Care" | "Equipment";
  badgeAr?: string;
  price: string;
  image: string; // Emoji icon or image URL path
  badge: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Panadol Extra Film Coated Tablets - 24 Pack",
    category: "Medicines",
    price: "EGP 45.00",
    image: "💊",
    badge: "15% OFF",
  },
  {
    id: "2",
    name: "CeraVe Hydrating Facial Cleanser 236ml",
    category: "Skincare",
    price: "EGP 380.00",
    image: "✨",
    badge: "Top Seller",
  },
  {
    id: "3",
    name: "Vitamin C 1000mg Effervescent - 20 Tablets",
    category: "Vitamins",
    price: "EGP 120.00",
    image: "🍊",
    badge: "20% OFF",
  },
  {
    id: "4",
    name: "Pampers Premium Care Diapers Size 3 - 56 Count",
    category: "Baby Care",
    price: "EGP 310.00",
    image: "👶",
    badge: "Express",
  },
  {
    id: "5",
    name: "Centrum Adult Multivitamins (30 Tablets)",
    category: "Vitamins",
    price: "EGP 320.00",
    image: "🧴",
    badge: "Daily Care",
  },
  {
    id: "6",
    name: "Digital Blood Pressure Monitor",
    category: "Equipment",
    price: "EGP 890.00",
    image: "🩺",
    badge: "Medical Tech",
  },
  // ➕ ADD YOUR NEW PRODUCTS HERE:
  {
    id: "7",
    name: "Augmentin 1g Tablets (14 Pack)",
    category: "Medicines",
    price: "EGP 110.00",
    image: "💊",
    badge: "Prescription",
  },
  {
    id: "8",
    name: "Bioderma Sensibio H2O Micellar Water 500ml",
    category: "Skincare",
    price: "EGP 420.00",
    image: "✨",
    badge: "Popular",
  },
{
  id: "9",
  name: "Your New Product Name",
  category: "Vitamins", // Must match one of the categories
  price: "EGP 150.00",
  image: "💊", 
  badge: "New Arrival",
}
];