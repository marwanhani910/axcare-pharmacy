"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/languagecontext";

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans mt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Brand Info using logo.jpeg */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 overflow-hidden rounded-lg">
              <Image
                src="/logo.jpeg"
                alt="AxCare Pharmacy Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              AxCare<span className="text-cyan-400">Pharmacy</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {lang === "ar"
              ? "صيدليتك الإلكترونية المرخصة والموثوقة. توصيل سريع للأدوية والمكملات الغذائية والعناية الشخصية والأجهزة الطبية خلال ٣٠-٦٠ دقيقة."
              : "Your trusted licensed online pharmacy. Express delivery for medications, health supplements, personal care, and medical equipment within 30–60 minutes."}
          </p>
          <div className="text-xs text-cyan-400 font-bold">
            {lang === "ar" ? "📞 الخط الساخن: ١٩٩٩٩ (متاح ٢٤/٧)" : "📞 Hotline: 19999 (24/7 Available)"}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            {lang === "ar" ? "روابط سريعة" : "Quick Navigation"}
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition">
                {lang === "ar" ? "كتالوج الصفحة الرئيسية" : "Home Catalog"}
              </Link>
            </li>
            <li>
              <Link href="/upload-prescription" className="hover:text-cyan-400 transition">
                {lang === "ar" ? "رفع روشتة الطبيب" : "Upload Doctor's Prescription"}
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-cyan-400 transition">
                {lang === "ar" ? "سلة التسوق الخاصة بي" : "My Shopping Cart"}
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="hover:text-cyan-400 transition">
                {lang === "ar" ? "إتمام الطلب السريع" : "Express Checkout"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Product Categories */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            {lang === "ar" ? "الأقسام الرئيسية" : "Top Categories"}
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li className="hover:text-cyan-400 transition cursor-pointer">
              {lang === "ar" ? "الأدوية والعلاج" : "Medicines & Treatment"}
            </li>
            <li className="hover:text-cyan-400 transition cursor-pointer">
              {lang === "ar" ? "الفيتامينات والمكملات الغذائية" : "Vitamins & Supplements"}
            </li>
            <li className="hover:text-cyan-400 transition cursor-pointer">
              {lang === "ar" ? "العناية بالبشرة والجمال" : "Skincare & Beauty"}
            </li>
            <li className="hover:text-cyan-400 transition cursor-pointer">
              {lang === "ar" ? "عناية الطفل والأم" : "Baby & Mother Care"}
            </li>
            <li className="hover:text-cyan-400 transition cursor-pointer">
              {lang === "ar" ? "الأجهزة الطبية" : "Medical Equipment"}
            </li>
          </ul>
        </div>

        {/* Col 4: Trust Badges */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">
            {lang === "ar" ? "خدمة العملاء" : "Customer Care"}
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            {lang === "ar"
              ? "مرخصة من وزارة الصحة. منتجات أصلية ١٠٠٪ مضمونة وتوصيل آمن."
              : "Licensed by the Ministry of Health. Guaranteed 100% authentic products and secure delivery."}
          </p>
          <div className="flex gap-2">
            <span className="bg-slate-800 border border-slate-700 text-[10px] font-bold px-2.5 py-1.5 rounded-lg text-slate-300">
              {lang === "ar" ? "💵 الدفع عند الاستلام" : "💵 Cash on Delivery"}
            </span>
            <span className="bg-slate-800 border border-slate-700 text-[10px] font-bold px-2.5 py-1.5 rounded-lg text-slate-300">
              {lang === "ar" ? "💳 إنستا باي" : "💳 InstaPay"}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        {lang === "ar"
          ? `© ${new Date().getFullYear()} صيدلية أكس كير. جميع الحقوق محفوظة.`
          : `© ${new Date().getFullYear()} AxCare Pharmacy. All rights reserved.`}
      </div>
    </footer>
  );
}