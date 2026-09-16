"use client";

import Link from "next/link";

const CATEGORIES = [
  { name: "Medicines", icon: "💊", count: "120+ Items", slug: "medicines" },
  { name: "Vitamins", icon: "🍊", count: "85+ Items", slug: "vitamins" },
  { name: "Skincare", icon: "✨", count: "210+ Items", slug: "skincare" },
  { name: "Baby Care", icon: "👶", count: "60+ Items", slug: "baby-care" },
  { name: "Medical Equipment", icon: "🩺", count: "40+ Items", slug: "equipment" },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 tracking-tight">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.name}
            href={`/category/${cat.slug}`}
            className="bg-white border border-slate-200/80 rounded-2xl p-4 text-center hover:border-cyan-500 hover:shadow-md transition group block"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition transform">
              {cat.icon}
            </div>
            <h3 className="font-bold text-slate-900 text-xs sm:text-sm">{cat.name}</h3>
            <p className="text-[11px] text-slate-400 mt-0.5">{cat.count}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}