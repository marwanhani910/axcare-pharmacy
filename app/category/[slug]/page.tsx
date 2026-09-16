"use client";

import React, { use } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/languagecontext";

const CATEGORY_MAP: Record<string, { en: string; ar: string }> = {
  medicines: { en: "Medicines", ar: "الأدوية" },
  vitamins: { en: "Vitamins", ar: "الفيتامينات" },
  skincare: { en: "Skincare", ar: "العناية بالبشرة" },
  "baby-care": { en: "Baby Care", ar: "عناية الطفل" },
  equipment: { en: "Equipment", ar: "الأجهزة الطبية" },
};

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { addToCart } = useCart();
  const { lang, t } = useLanguage();

  const categoryObj = CATEGORY_MAP[slug];
  const categoryTitle = categoryObj ? categoryObj[lang] : slug.replace("-", " ");

  const filteredProducts = PRODUCTS.filter(
    (product) =>
      product.category.toLowerCase().replace(/\s+/g, "-") === slug ||
      product.category.toLowerCase() === (categoryObj?.en.toLowerCase() || slug)
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 font-sans min-h-[70vh]">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/"
          className="text-xs font-bold text-cyan-700 hover:text-cyan-800 transition flex items-center gap-1.5"
        >
          {t("backToHome") || "← Back to All Categories"}
        </Link>
      </div>

      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight capitalize">
          {categoryTitle}
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          {lang === "ar"
            ? `عرض ${filteredProducts.length} منتج في قسم ${categoryTitle}`
            : `Showing ${filteredProducts.length} items in ${categoryTitle}`}
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-4">
          <p className="text-sm font-bold text-slate-800">
            {lang === "ar" ? "لم يتم العثور على منتجات في هذا القسم بعد." : "No products found in this category yet."}
          </p>
          <Link
            href="/"
            className="mt-3 inline-block text-xs text-cyan-600 font-bold hover:underline"
          >
            {lang === "ar" ? "العودة إلى الصفحة الرئيسية" : "Return to Homepage"}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl p-2 bg-slate-50 rounded-xl border border-slate-100">
                    {product.image}
                  </span>
                  <span className="bg-cyan-50 text-cyan-700 border border-cyan-200 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {lang === "ar" ? (product.badgeAr || product.badge) : product.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2">
                  {lang === "ar" ? (product.nameAr || product.name) : product.name}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                <span className="font-extrabold text-cyan-800 text-sm">
                  {product.price} {lang === "ar" ? "ج.م" : "EGP"}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow-sm active:scale-95"
                >
                  {t("addToCart")}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}