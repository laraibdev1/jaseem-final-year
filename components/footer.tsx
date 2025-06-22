import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Truck } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">🥬</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                FreshMarket
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for farm-fresh groceries and premium ingredients. Delivering quality and freshness to
              your doorstep.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Mail].map((Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500/20 cursor-pointer transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <Icon className="h-5 w-5 text-gray-300 hover:text-white transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Shop All", href: "/products" },
                { name: "Fresh Deals", href: "/deals" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Categories
            </h3>
            <ul className="space-y-3">
              {["Fresh Produce", "Premium Meats", "Fresh Seafood", "Bakery Fresh", "Dairy & Eggs"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Delivery Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Fresh Avenue</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) FRESH-99</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">hello@freshmarket.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">2-hour delivery available</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t border-white/10 mt-12 pt-8 text-center animate-fade-in-up"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-gray-400">
            © 2024 FreshMarket. All rights reserved. Fresh groceries, delivered with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
