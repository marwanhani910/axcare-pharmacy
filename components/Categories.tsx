"use client";

import Link from "next/link";
import { useLanguage } from "@/context/languagecontext";

const CATEGORIES = [
  { 
    name: "Medicines", 
    nameAr: "الأدوية", 
    icon: "💊", 
    countEn: "120+ Items", 
    countAr: "+120 منتج", 
    slug: "medicines" 
  },
  { 
    name: "Vitamins", 
    nameAr: "الفيتامينات", 
    icon: "🍊", 
    countEn: "85+ Items", 
    countAr: "+85 منتج", 
    slug: "vitamins" 
  },
  { 
    name: "Skincare", 
    nameAr: "العناية بالبشرة", 
    icon: "✨", 
    countEn: "210+ Items", 
    countAr: "+210 منتج", 
    slug: "skincare" 
  },
  { 
    name: "Baby Care", 
    nameAr: "عناية الطفل", 
    icon: "👶", 
    countEn: "60+ Items", 
    countAr: "+60 منتج", 
    slug: "baby-care" 
  },
  { 
    name: "Medical Equipment", 
    nameAr: "الأجهزة الطبية", 
    icon: "🩺", 
    countEn: "40+ Items", 
    countAr: "+40 منتج", 
    slug: "equipment" 
  },
];

export default function Categories() {
  const { lang } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 tracking-tight rtl:text-right">
        {lang === "ar" ? "التسوق حسب القسم" : "Shop by Category"}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="bg-white border border-slate-200/80 rounded-2xl p-4 text-center hover:border-cyan-500 hover:shadow-md transition group block"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition transform">
              {cat.icon}
            </div>
            <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
              {lang === "ar" ? cat.nameAr : cat.name}
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {lang === "ar" ? cat.countAr : cat.countEn}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}