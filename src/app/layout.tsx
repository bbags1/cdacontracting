import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premier Contracting Services | Coeur d'Alene, ID",
  description: "Expert home renovation and remodeling services in Coeur d'Alene, Idaho. Specializing in kitchens, bathrooms, flooring, and trim work. Quality craftsmanship and professional service.",
  keywords: "contractor, home renovation, remodeling, Coeur d'Alene, Idaho, kitchen remodel, bathroom remodel, flooring, trim work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gray-800">CDA Contracting</div>
              <div className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
                <a href="/gallery" className="text-gray-600 hover:text-gray-900">Gallery</a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white mt-12">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center">
              <p>© 2024 CDA Contracting. All rights reserved.</p>
              <p className="mt-2">Serving Coeur d'Alene and surrounding areas</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
