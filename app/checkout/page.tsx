"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/languagecontext";

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useCart();
  const { lang } = useLanguage();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    governorate: "Cairo",
    address: "",
    notes: "",
  });

  const deliveryFee = subtotal > 0 ? 25 : 0;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert(
        lang === "ar"
          ? "يرجى ملء جميع الحقول المطلوبة."
          : "Please fill in all required fields."
      );
      return;
    }
    setIsSubmitted(true);
    clearCart();
  };

  if (isSubmitted) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16 text-center font-sans">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-black text-slate-900 mb-2">
            {lang === "ar" ? "تم تأكيد الطلب!" : "Order Confirmed!"}
          </h1>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            {lang === "ar" ? (
              <>
                شكراً لك، <strong className="text-slate-800">{formData.fullName}</strong>. تم تقديم طلبك بنجاح. سيتواصل معك مندوب التوصيل على الرقم <strong className="text-slate-800">{formData.phone}</strong> قريباً.
              </>
            ) : (
              <>
                Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Your order has been placed successfully. Our delivery agent will contact you at <strong className="text-slate-800">{formData.phone}</strong> shortly.
              </>
            )}
          </p>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left rtl:text-right text-xs space-y-2 mb-8">
            <div className="flex justify-between">
              <span className="text-slate-500">
                {lang === "ar" ? "عنوان التوصيل:" : "Delivery Address:"}
              </span>
              <span className="font-semibold text-slate-800">
                {formData.address}, {formData.governorate}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">
                {lang === "ar" ? "طريقة الدفع:" : "Payment Method:"}
              </span>
              <span className="font-semibold text-slate-800">
                {paymentMethod === "cod"
                  ? lang === "ar"
                    ? "الدفع عند الاستلام"
                    : "Cash on Delivery"
                  : lang === "ar"
                  ? "بطاقة ائتمان عند الاستلام"
                  : "Credit Card on Delivery"}
              </span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-slate-900 text-sm">
              <span>{lang === "ar" ? "إجمالي المبلغ المدفوع:" : "Total Paid:"}</span>
              <span className="text-cyan-700">
                {lang === "ar" ? `${total.toFixed(2)} ج.م` : `EGP ${total.toFixed(2)}`}
              </span>
            </div>
          </div>
          <Link
            href="/"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition shadow-md"
          >
            {lang === "ar" ? "العودة إلى المتجر" : "Return to Store"}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
        {lang === "ar" ? "إتمام الشراء والتوصيل السريع" : "Checkout & Express Delivery"}
      </h1>

      {cart.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-sm">
          <p className="text-slate-500 text-sm mb-4">
            {lang === "ar" ? "ليس لديك أي منتجات لإتمام شراؤها." : "You have no items to checkout."}
          </p>
          <Link
            href="/"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition"
          >
            {lang === "ar" ? "العودة إلى المتجر" : "Return to Store"}
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer Details & Shipping Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-700 text-xs flex items-center justify-center font-bold">1</span>
                {lang === "ar" ? "تفاصيل التوصيل" : "Delivery Details"}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
                <div>
                  <label className="block mb-1">
                    {lang === "ar" ? "الاسم الكامل *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === "ar" ? "الاسم الكامل *" : "Full Name *"}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-cyan-600 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block mb-1">
                    {lang === "ar" ? "رقم الهاتف المحمول *" : "Mobile Phone Number *"}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="01001234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-cyan-600 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block mb-1">
                    {lang === "ar" ? "المحافظة" : "Governorate"}
                  </label>
                  <select
                    value={formData.governorate}
                    onChange={(e) => setFormData({ ...formData, governorate: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-cyan-600 focus:bg-white text-slate-900"
                  >
                    <option value="Cairo">{lang === "ar" ? "القاهرة" : "Cairo"}</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block mb-1">
                    {lang === "ar" ? "عنوان الشارع بالتفصيل *" : "Detailed Street Address *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={
                      lang === "ar"
                        ? "رقم المبنى، اسم الشارع، الشقة / الطابق"
                        : "Building No., Street Name, Apartment / Floor"
                    }
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-cyan-600 focus:bg-white text-slate-900"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block mb-1">
                    {lang === "ar" ? "ملاحظات التوصيل للصيدلي (اختياري)" : "Pharmacist Delivery Notes (Optional)"}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={
                      lang === "ar"
                        ? "مثال: اتصل قبل التوصيل، اتركها عند الاستقبال..."
                        : "e.g. Call before delivery, drop at front desk..."
                    }
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-cyan-600 focus:bg-white text-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Option */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-700 text-xs flex items-center justify-center font-bold">2</span>
                {lang === "ar" ? "خيارات الدفع" : "Payment Options"}
              </h2>

              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 border border-slate-200 rounded-2xl cursor-pointer hover:border-cyan-500 transition">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="accent-cyan-600 w-4 h-4"
                    />
                    <div>
                      <span className="block text-xs font-bold text-slate-900">
                        {lang === "ar" ? "الدفع عند الاستلام" : "Cash on Delivery"}
                      </span>
                      <span className="block text-[11px] text-slate-500">
                        {lang === "ar" ? "ادفع نقداً عند استلام طلبك الطبي" : "Pay cash upon receiving your medical package"}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600">
                    {lang === "ar" ? "مجاني" : "Free"}
                  </span>
                </label>

                <label className="flex items-center justify-between p-4 border border-slate-200 rounded-2xl cursor-pointer hover:border-cyan-500 transition">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="accent-cyan-600 w-4 h-4"
                    />
                    <div>
                      <span className="block text-xs font-bold text-slate-900">
                        {lang === "ar" ? "جهاز الدفع الإلكتروني POS عند الاستلام" : "POS Card Reader on Delivery"}
                      </span>
                      <span className="block text-[11px] text-slate-500">
                        {lang === "ar" ? "ادفع ببطاقة الائتمان أو الخصم عبر جهاز المندوب" : "Pay with credit/debit card via courier terminal"}
                      </span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Checkout Summary Sidebar */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm h-fit">
            <h2 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
              {lang === "ar" ? "مراجعة الطلب" : "Order Review"}
            </h2>

            <div className="space-y-3 max-h-56 overflow-y-auto mb-4 pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-xs">
                  <span className="text-slate-700 truncate max-w-[180px]">
                    {item.quantity}x {lang === "ar" ? (item.nameAr || item.name) : item.name}
                  </span>
                  <span className="font-bold text-slate-900 shrink-0">
                    {lang === "ar" ? item.price.replace("EGP", "ج.م") : item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>{lang === "ar" ? "المجموع الفرعي" : "Subtotal"}</span>
                <span className="font-semibold text-slate-900">
                  {lang === "ar" ? `${subtotal.toFixed(2)} ج.م` : `EGP ${subtotal.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>{lang === "ar" ? "التوصيل" : "Delivery"}</span>
                <span className="font-semibold text-slate-900">
                  {lang === "ar" ? `${deliveryFee.toFixed(2)} ج.م` : `EGP ${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              <div className="border-t border-slate-100 pt-3 flex justify-between font-black text-sm text-slate-900">
                <span>{lang === "ar" ? "إجمالي المبلغ" : "Total Amount"}</span>
                <span className="text-cyan-700">
                  {lang === "ar" ? `${total.toFixed(2)} ج.م` : `EGP ${total.toFixed(2)}`}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3.5 rounded-xl transition shadow-md text-xs active:scale-98"
            >
              {lang === "ar"
                ? `تأكيد الطلب (${total.toFixed(2)} ج.م)`
                : `Confirm Order (EGP ${total.toFixed(2)})`}
            </button>
          </div>
        </form>
      )}
    </main>
  );
}