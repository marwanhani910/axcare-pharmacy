"use client";

import { useState } from "react";
import Link from "next/link";

export default function UploadPrescriptionPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    hasInsurance: "no",
    insuranceProvider: "",
    notes: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please select or upload an image of your prescription.");
      return;
    }
    if (!formData.fullName || !formData.phone) {
      alert("Please fill in your name and contact phone number.");
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16 text-center font-sans">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-black text-slate-900 mb-2">Prescription Received!</h1>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Our licensed pharmacist is reviewing your prescription photo (<strong className="text-slate-800">{file?.name}</strong>). We will call you at <strong className="text-slate-800">{formData.phone}</strong> within 15 minutes to confirm pricing and delivery details.
          </p>
          <Link
            href="/"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 font-sans">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Upload Doctor's Prescription
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Upload a clear photo or PDF of your medical prescription for fast home delivery
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Upload Drop Zone */}
        <div>
          <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
            1. Upload Prescription Image / PDF *
          </label>
          <div className="border-2 border-dashed border-slate-300 hover:border-cyan-500 rounded-2xl p-8 text-center bg-slate-50 hover:bg-cyan-50/30 transition cursor-pointer relative">
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
            <div className="w-12 h-12 bg-white text-cyan-600 rounded-2xl border border-slate-200 flex items-center justify-center mx-auto mb-3 shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            {file ? (
              <div>
                <span className="text-sm font-bold text-slate-900 block">{file.name}</span>
                <span className="text-xs text-emerald-600 font-semibold mt-1 block">✓ File selected ready for submission</span>
              </div>
            ) : (
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 block">
                  Click to choose file or drag photo here
                </span>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Supports JPG, PNG, WEBP, or PDF up to 10MB
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Patient Details */}
        <div>
          <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            2. Patient Information *
          </label>
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
              <label className="block mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g. 01001234567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-cyan-600 focus:bg-white text-slate-900"
              />
            </div>
          </div>
        </div>

        {/* Insurance Coverage Option */}
        <div>
          <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
            3. Health Insurance Coverage
          </label>
          <div className="flex gap-4 text-xs font-semibold text-slate-700 mb-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="insurance"
                value="no"
                checked={formData.hasInsurance === "no"}
                onChange={() => setFormData({ ...formData, hasInsurance: "no" })}
                className="accent-cyan-600 w-4 h-4"
              />
              Self-Pay (No Insurance)
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="insurance"
                value="yes"
                checked={formData.hasInsurance === "yes"}
                onChange={() => setFormData({ ...formData, hasInsurance: "yes" })}
                className="accent-cyan-600 w-4 h-4"
              />
              I have Health Insurance
            </label>
          </div>

          {formData.hasInsurance === "yes" && (
            <input
              type="text"
              placeholder="Enter Insurance Provider Name / Policy ID"
              value={formData.insuranceProvider}
              onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
            />
          )}
        </div>

        {/* Special Instructions */}
        <div>
          <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
            4. Instructions for Pharmacist (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Specify alternative brands, dosage preferences, or delivery timing..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 rounded-xl transition shadow-md text-sm active:scale-98"
        >
          Submit Prescription for Processing
        </button>
      </form>
    </main>
  );
}