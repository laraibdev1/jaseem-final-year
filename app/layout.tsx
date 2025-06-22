import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/contexts/cart-context"
import { AuthProvider } from "@/contexts/auth-context"
// import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EcoShop - Your Premium E-commerce Destination",
  description:
    "Discover quality products with exceptional service. Shop electronics, clothing, furniture, and more with fast shipping and great prices.",
  keywords: "ecommerce, online shopping, electronics, clothing, furniture, lifestyle products",
  authors: [{ name: "EcoShop Team" }],
  openGraph: {
    title: "EcoShop - Your Premium E-commerce Destination",
    description: "Discover quality products with exceptional service.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoShop - Your Premium E-commerce Destination",
    description: "Discover quality products with exceptional service.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            {/* <Toaster /> */}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
