import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/languagecontext"; // 1. Add this import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AxCare Pharmacy | Online Healthcare & Express Delivery",
  description: "Order medicines, vitamins, skincare, and upload prescriptions online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col justify-between`}>
        <LanguageProvider> {/* 2. Wrap your app here */}
          <CartProvider>
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}