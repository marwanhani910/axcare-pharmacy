"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header & Common
    cart: "Cart",
    searchPlaceholder: "Search for medicines, vitamins, skincare...",
    uploadPrescription: "Upload Prescription",
    hotline: "Hotline",
    expressDelivery: "Express Delivery in 30–60 mins",
    
    // Categories & Filters
    allCategories: "All Categories",
    medicines: "Medicines",
    vitamins: "Vitamins",
    skincare: "Skincare",
    babyCare: "Baby Care",
    personalCare: "Personal Care",
    medicalDevices: "Medical Devices",
    
    // Product Actions & Labels
    addToCart: "+ Add",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    price: "Price",
    total: "Total",
    checkout: "Proceed to Checkout",
    
    // Homepage / Catalog & Cart Page
    featuredProducts: "Featured Products",
    flashDeals: "Flash Deals",
    backToHome: "← Back to All Categories",
    emptyCart: "Your cart is empty",
    shoppingCart: "Shopping Cart",
    remove: "Remove",
    quantity: "Quantity",

    // Hero Section Keys
    heroBadge: "⚡ Express 30-60 Min Delivery",
    heroTitle: "Your Health & Pharmacy Essentials, Delivered Fast.",
    heroDesc: "Order authentic medicines, vitamins, skincare, and medical supplies online with licensed pharmacist consultation and instant home delivery.",
    viewCart: "View Cart & Orders",
    rxCardTitle: "Have a Rx Prescription?",
    rxCardSubtitle: "Skip searching — upload doctor note directly",
    rxCardDesc: "Our certified pharmacists will process your prescription, verify health insurance coverage, and assemble your order immediately.",
    uploadRxBtn: "Upload Rx Image",
  },
  ar: {
    // Header & Common
    cart: "السلة",
    searchPlaceholder: "ابحث عن الأدوية، الفيتامينات، العناية بالبشرة...",
    uploadPrescription: "رفع الروشتة",
    hotline: "الخط الساخن",
    expressDelivery: "توصيل سريع خلال ٣٠-٦٠ دقيقة",
    
    // Categories & Filters
    allCategories: "جميع الأقسام",
    medicines: "الأدوية",
    vitamins: "الفيتامينات",
    skincare: "العناية بالبشرة",
    babyCare: "عناية الطفل",
    personalCare: "العناية الشخصية",
    medicalDevices: "الأجهزة الطبية",
    
    // Product Actions & Labels
    addToCart: "+ إضافة",
    inStock: "متوفر",
    outOfStock: "غير متوفر",
    price: "السعر",
    total: "الإجمالي",
    checkout: "إتمام الشراء",
    
    // Homepage / Catalog & Cart Page
    featuredProducts: "المنتجات المميزة",
    flashDeals: "عروض مميزة",
    backToHome: "← العودة إلى جميع الأقسام",
    emptyCart: "سلة التسوق فارغة",
    shoppingCart: "سلة التسوق",
    remove: "إزالة",
    quantity: "الكمية",

    // Hero Section Keys
    heroBadge: "⚡ توصيل سريع خلال ٣٠-٦٠ دقيقة",
    heroTitle: "أدوية ومستلزمات صيدليتك، تصلك بسرعة.",
    heroDesc: "اطلب الأدوية الأصلية، والفيتامينات، ومنتجات العناية بالبشرة والمستلزمات الطبية عبر الإنترنت مع استشارة صيدلي معتمد وتوصيل فوري.",
    viewCart: "عرض السلة والطلبات",
    rxCardTitle: "هل لديك روشتة طبية؟",
    rxCardSubtitle: "تخطي البحث — ارفع صورة الطبيب مباشرة",
    rxCardDesc: "سيقوم صيادلتنا المعتمدون بمعالجة الروشتة، والتحقق من تغطية التأمين الطبي، وتجهيز طلبك على الفور.",
    uploadRxBtn: "رفع صورة الروشتة",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}