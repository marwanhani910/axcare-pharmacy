"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useCart();
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
      alert("Please fill in all required fields.");
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
          <h1 className="text-2xl font-black text-slate-900 mb-2">Order Confirmed!</h1>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Your order has been placed successfully. Our delivery agent will contact you at <strong className="text-slate-800">{formData.phone}</strong> shortly.
          </p>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left text-xs space-y-2 mb-8">
            <div className="flex justify-between">
              <span className="text-slate-500">Delivery Address:</span>
              <span className="font-semibold text-slate-800">{formData.address}, {formData.governorate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Payment Method:</span>
              <span className="font-semibold text-slate-800">
                {paymentMethod === "cod" ? "Cash on Delivery" : "Credit Card on Delivery"}
              </span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-slate-900 text-sm">
              <span>Total Paid:</span>
              <span className="text-cyan-700">EGP {total.toFixed(2)}</span>
            </div>
          </div>
          <Link
            href="/"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition shadow-md"
          >
            Return to Store
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
        Checkout & Express Delivery
      </h1>

      {cart.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
          <p className="text-slate-500 text-sm mb-4">You have no items to checkout.</p>
          <Link
            href="/"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition"
          >
            Return to Store
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer Details & Shipping Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-700 text-xs flex items-center justify-center font-bold">1</span>
                Delivery Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
                <div>
                  <label className="block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marwan Hani"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-cyan-600 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block mb-1">Mobile Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 01001234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-cyan-600 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block mb-1">Governorate</label>
                  <select
                    value={formData.governorate}
                    onChange={(e) => setFormData({ ...formData, governorate: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-cyan-600 focus:bg-white text-slate-900"
                  >
                    <option value="Cairo">Cairo</option>
                    <option value="Giza">Giza</option>
                    <option value="Alexandria">Alexandria</option>
                    <option value="Dakahlia">Dakahlia</option>
                    <option value="Sharqia">Sharqia</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block mb-1">Detailed Street Address *</label>
                  <input
                    type="text"
                    required
                    placeholder="Building No., Street Name, Apartment / Floor"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-cyan-600 focus:bg-white text-slate-900"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block mb-1">Pharmacist Delivery Notes (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Call before delivery, drop at front desk..."
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
                Payment Options
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
                      <span className="block text-xs font-bold text-slate-900">Cash on Delivery</span>
                      <span className="block text-[11px] text-slate-500">Pay cash upon receiving your medical package</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600">Free</span>
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
                      <span className="block text-xs font-bold text-slate-900">POS Card Reader on Delivery</span>
                      <span className="block text-[11px] text-slate-500">Pay with credit/debit card via courier terminal</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Checkout Summary Sidebar */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm h-fit">
            <h2 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
              Order Review
            </h2>

            <div className="space-y-3 max-h-56 overflow-y-auto mb-4 pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-xs">
                  <span className="text-slate-700 truncate max-w-[180px]">
                    {item.quantity}x {item.name}
                  </span>
                  <span className="font-bold text-slate-900 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">EGP {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery</span>
                <span className="font-semibold text-slate-900">EGP {deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-slate-100 pt-3 flex justify-between font-black text-sm text-slate-900">
                <span>Total Amount</span>
                <span className="text-cyan-700">EGP {total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3.5 rounded-xl transition shadow-md text-xs active:scale-98"
            >
              Confirm Order (EGP {total.toFixed(2)})
            </button>
          </div>
        </form>
      )}
    </main>
  );
}