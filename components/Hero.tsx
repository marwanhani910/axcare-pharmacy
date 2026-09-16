"use client";

import Link from "next/link";
import { useLanguage } from "@/context/languagecontext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-cyan-800 to-teal-900 text-white py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Hero Text */}
        <div className="space-y-4">
          <span className="inline-block bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            {t("heroBadge") || "⚡ Express 30-60 Min Delivery"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight">
            {t("heroTitle") || "Your Health & Pharmacy Essentials, Delivered Fast."}
          </h1>
          <p className="text-sm sm:text-base text-cyan-100/90 leading-relaxed max-w-xl">
            {t("heroDesc") || "Order authentic medicines, vitamins, skincare, and medical supplies online with licensed pharmacist consultation and instant home delivery."}
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/upload-prescription"
              className="bg-white hover:bg-cyan-50 text-cyan-900 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
              </svg>
              {t("uploadPrescription") || "Upload Prescription Now"}
            </Link>
            <Link
              href="/cart"
              className="bg-cyan-700/60 hover:bg-cyan-700 text-white border border-cyan-500/40 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition"
            >
              {t("viewCart") || "View Cart & Orders"}
            </Link>
          </div>
        </div>

        {/* Right Column: Quick Prescription Upload Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-3xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-400/20 rounded-xl flex items-center justify-center text-cyan-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {t("rxCardTitle") || "Have a Rx Prescription?"}
              </h3>
              <p className="text-xs text-cyan-200">
                {t("rxCardSubtitle") || "Skip searching — upload doctor note directly"}
              </p>
            </div>
          </div>
          <p className="text-xs text-cyan-100/80 leading-relaxed">
            {t("rxCardDesc") || "Our certified pharmacists will process your prescription, verify health insurance coverage, and assemble your order immediately."}
          </p>
          <Link
            href="/upload-prescription"
            className="block text-center w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-xs py-3 rounded-xl transition"
          >
            {t("uploadRxBtn") || "Upload Rx Image"}
          </Link>
        </div>
      </div>
    </section>
  );
}