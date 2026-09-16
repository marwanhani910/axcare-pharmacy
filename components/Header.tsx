"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/?q=${encodeURIComponent(searchTerm.trim())}#catalog`);
    } else {
      router.push("/#catalog");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 font-sans shadow-sm">
      {/* Top Banner */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span>📞 Hotline: <strong className="text-white">19999</strong></span>
          <span className="hidden sm:inline">⚡ Express Delivery in 30–60 mins</span>
        </div>
        <Link
          href="/upload-prescription"
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-2.5 py-1 rounded-md font-bold transition flex items-center gap-1"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
          </svg>
          Upload Prescription
        </Link>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-cyan-600 flex items-center justify-center font-black text-white text-xl">
            +
          </div>
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">
            AxCare<span className="text-cyan-700">Pharmacy</span>
          </span>
        </Link>

        {/* Global Live Search */}
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-xl relative hidden sm:block">
          <input
            type="text"
            placeholder="Search for medicines, vitamins, skincare..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-100 border border-slate-200 rounded-full py-2 pl-4 pr-10 text-xs text-slate-900 focus:outline-none focus:border-cyan-600 focus:bg-white transition"
          />
          <button type="submit" className="absolute right-3 top-2 text-slate-400 hover:text-cyan-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
        </form>

        {/* Navigation Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="bg-cyan-50 border border-cyan-200 hover:bg-cyan-100/70 text-cyan-800 px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 relative"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            Cart
            <span className="bg-cyan-700 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-extrabold">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}