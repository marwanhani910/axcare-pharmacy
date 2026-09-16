"use client";

import React, { use } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

const CATEGORY_MAP: Record<string, string> = {
  medicines: "Medicines",
  vitamins: "Vitamins",
  skincare: "Skincare",
  "baby-care": "Baby Care",
  equipment: "Equipment",
};

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { addToCart } = useCart();

  const categoryTitle = CATEGORY_MAP[slug] || slug.replace("-", " ");

  const filteredProducts = PRODUCTS.filter(
    (product) =>
      product.category.toLowerCase().replace(/\s+/g, "-") === slug ||
      product.category.toLowerCase() === categoryTitle.toLowerCase()
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 font-sans min-h-[70vh]">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/"
          className="text-xs font-bold text-cyan-700 hover:text-cyan-800 transition flex items-center gap-1.5"
        >
          ← Back to All Categories
        </Link>
      </div>

      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight capitalize">
          {categoryTitle}
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Showing {filteredProducts.length} items in {categoryTitle}
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-4">
          <p className="text-sm font-bold text-slate-800">
            No products found in this category yet.
          </p>
          <Link
            href="/"
            className="mt-3 inline-block text-xs text-cyan-600 font-bold hover:underline"
          >
            Return to Homepage
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
                    {product.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2">
                  {product.name}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                <span className="font-extrabold text-cyan-800 text-sm">
                  {product.price}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow-sm active:scale-95"
                >
                  + Add
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
