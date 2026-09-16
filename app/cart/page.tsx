"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();
  const deliveryFee = subtotal > 0 ? 25 : 0;
  const total = subtotal + deliveryFee;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
        Your Shopping Cart ({totalItems})
      </h1>

      {cart.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto my-8">
          <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Your cart is empty</h2>
          <p className="text-sm text-slate-500 mb-6">Looks like you haven't added any pharmacy essentials yet.</p>
          <Link
            href="/"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Item List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                  <p className="text-xs font-semibold text-cyan-700 mt-1">{item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-slate-900 w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-slate-400 hover:text-rose-600 transition p-1"
                  title="Remove item"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary Box */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm h-fit">
            <h2 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
              Order Summary
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">EGP {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Express Delivery Fee</span>
                <span className="font-semibold text-slate-900">EGP {deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-slate-100 pt-3 flex justify-between font-black text-base text-slate-900">
                <span>Total</span>
                <span className="text-cyan-700">EGP {total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block text-center w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3.5 rounded-xl transition shadow-md text-sm active:scale-98"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}