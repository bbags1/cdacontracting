import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premier Bathroom Remodeling & Custom Saunas | Coeur d'Alene, ID",
  description: "Expert bathroom remodeling, custom sauna construction, and professional tile work in Coeur d'Alene. Specializing in luxury bathroom renovations, Finnish saunas, and high-end tile installation.",
  keywords: "bathroom remodeling Coeur d'Alene, custom saunas Idaho, tile installation, bathroom renovation, Finnish sauna builder, luxury bathroom remodel, tile contractor Coeur d'Alene, home renovation Idaho",
  openGraph: {
    title: "Premier Bathroom Remodeling & Custom Saunas | Coeur d'Alene, ID",
    description: "Expert bathroom remodeling, custom sauna construction, and professional tile work in Coeur d'Alene.",
    images: ['/photos/bathrooms13.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white`}>
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gray-800">CDA Contracting</div>
              <div className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-600 hover:text-gray-900 transition">Home</a>
                <a href="/gallery" className="text-gray-600 hover:text-gray-900 transition">Gallery</a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-200px)]">{children}</main>
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
