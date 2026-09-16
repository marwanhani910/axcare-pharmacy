"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/languagecontext";

const FLASH_DEALS = [
  {
    id: "1",
    nameEn: "Panadol Extra Film Coated Tablets - 24 Pack",
    nameAr: "بانادول إكسترا أقرص مغلفة - ٢٤ قرص",
    categoryEn: "Medicines",
    categoryAr: "الأدوية",
    price: 45.00,
    oldPrice: 55.00,
    image: "💊",
    badgeEn: "15% OFF",
    badgeAr: "خصم ١٥٪",
  },
  {
    id: "3",
    nameEn: "Vitamin C 1000mg Effervescent - 20 Tablets",
    nameAr: "فيتامين سي ١٠٠٠ مجم فوار - ٢٠ قرص",
    categoryEn: "Vitamins",
    categoryAr: "الفيتامينات",
    price: 120.00,
    oldPrice: 150.00,
    image: "🍊",
    badgeEn: "20% OFF",
    badgeAr: "خصم ٢٠٪",
  },
  {
    id: "2",
    nameEn: "CeraVe Hydrating Facial Cleanser 236ml",
    nameAr: "غسول سيرافي المرطب للبشرة ٢٣٦ مل",
    categoryEn: "Skincare",
    categoryAr: "العناية بالبشرة",
    price: 380.00,
    oldPrice: 420.00,
    image: "✨",
    badgeEn: "Top Seller",
    badgeAr: "الأكثر مبيعاً",
  },
];

export default function FlashDeals() {
  const { addToCart } = useCart();
  const { lang, t } = useLanguage();

  // Dynamic state for real-time countdown
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 18,
    seconds: 42,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 }; // Resets to 24h cycle
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-gradient-to-r from-cyan-900 via-teal-900 to-slate-900 p-6 rounded-3xl text-white shadow-md border border-cyan-800/40">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="bg-red-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest animate-pulse">
              {lang === "ar" ? "مباشر" : "LIVE"}
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              ⚡ {lang === "ar" ? "العروض السريعة والأكثر مبيعاً" : "Flash Deals & Bestsellers"}
            </h2>
          </div>
          <p className="text-xs text-cyan-200/80">
            {lang === "ar"
              ? "خصومات يومية لفترة محدودة على منتجات الرعاية الصحية الأساسية."
              : "Limited quantity daily discounts on essential healthcare products."}
          </p>
        </div>

        {/* Live Active Countdown */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-2xl shrink-0 self-start sm:self-auto">
          <span className="text-xs text-cyan-200 font-medium">
            {lang === "ar" ? "تنتهي العروض خلال:" : "Deals end in:"}
          </span>
          <span className="text-xs font-black tracking-wider text-amber-300 font-mono">
            {format(timeLeft.hours)}h : {format(timeLeft.minutes)}m : {format(timeLeft.seconds)}s
          </span>
        </div>
      </div>

      {/* 3 Curated Deal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FLASH_DEALS.map((product) => {
          // Format item payload correctly for cart context
          const cartProduct = {
            ...product,
            name: lang === "ar" ? product.nameAr : product.nameEn,
            price: `${lang === "ar" ? "ج.م" : "EGP"} ${product.price.toFixed(2)}`,
          };

          return (
            <div
              key={product.id}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl p-2.5 bg-slate-50 rounded-2xl border border-slate-100 group-hover:scale-105 transition transform">
                    {product.image}
                  </span>
                  <span className="bg-red-50 text-red-600 border border-red-200 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {lang === "ar" ? product.badgeAr : product.badgeEn}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-cyan-700 uppercase tracking-wider">
                  {lang === "ar" ? product.categoryAr : product.categoryEn}
                </span>
                <h3 className="font-bold text-slate-900 text-sm leading-snug mt-1 mb-2">
                  {lang === "ar" ? product.nameAr : product.nameEn}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                <div>
                  <span className="font-black text-cyan-800 text-base">
                    {lang === "ar" ? "ج.م" : "EGP"} {product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-400 line-through ml-2">
                    {lang === "ar" ? "ج.م" : "EGP"} {product.oldPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(cartProduct)}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow-sm active:scale-95"
                >
                  {t("addToCart")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}