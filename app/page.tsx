import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Shield, Clock, Leaf, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/product-card"
import productsData from "@/data/products.json"

export default function HomePage() {
  const featuredProducts = productsData.products.filter((product) => product.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200">
                <Leaf className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-green-700 text-sm font-medium">Farm Fresh • Delivered Daily</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Fresh</span>
                <br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Groceries
                </span>
                <br />
                <span className="text-gray-900">Delivered</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience the finest selection of farm-fresh produce, premium meats, and artisan goods delivered
                straight to your door in under 2 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/products">
                    Start Shopping
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 bg-white"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2hr</div>
                  <div className="text-sm text-gray-600">Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Fresh Guarantee</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="/image03.png"
                  alt="Fresh Groceries"
                  width={500}
                  height={600}
                  className="rounded-3xl shadow-2xl shadow-green-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-3xl"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                FreshMarket
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to bringing you the freshest ingredients and the most convenient shopping experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "2-Hour Delivery",
                description: "Get your groceries delivered fresh to your door in just 2 hours or less.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Leaf,
                title: "Farm Fresh Quality",
                description: "Sourced directly from local farms and trusted suppliers for maximum freshness.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Shield,
                title: "100% Fresh Guarantee",
                description: "Not satisfied with freshness? We'll replace it for free, no questions asked.",
                color: "from-orange-500 to-red-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2 border-0 bg-white shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
              <Award className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-green-700 text-sm font-medium">Premium Selection</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Today's{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Fresh Picks
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked premium products delivered fresh from farm to your table
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
            >
              <Link href="/products">
                Shop All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Shop by Category</h2>
            <p className="text-xl text-gray-600">Explore our wide selection of fresh, quality products</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Fresh Produce", emoji: "🥬", color: "from-green-400 to-emerald-500" },
              { name: "Premium Meats", emoji: "🥩", color: "from-red-400 to-pink-500" },
              { name: "Fresh Seafood", emoji: "🐟", color: "from-blue-400 to-cyan-500" },
              { name: "Bakery Fresh", emoji: "🍞", color: "from-yellow-400 to-orange-500" },
              { name: "Dairy & Eggs", emoji: "🥛", color: "from-indigo-400 to-purple-500" },
              { name: "Pantry Essentials", emoji: "🫙", color: "from-gray-400 to-slate-500" },
              { name: "Organic Selection", emoji: "🌱", color: "from-lime-400 to-green-500" },
              { name: "Gourmet Cheese", emoji: "🧀", color: "from-amber-400 to-yellow-500" },
            ].map((category, index) => (
              <Card
                key={category.name}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{category.emoji}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our <span className="text-green-300">Customers</span> Say
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Join thousands of families who trust us for their daily grocery needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                comment:
                  "The freshness is incredible! My vegetables last so much longer than store-bought. The 2-hour delivery is a game-changer.",
                product: "Organic Produce Bundle",
                avatar: "/image02.png",
              },
              {
                name: "Michael Chen",
                rating: 5,
                comment:
                  "Best salmon I've ever had delivered. The quality rivals the finest restaurants. Customer service is outstanding too.",
                product: "Wild Alaskan Salmon",
                avatar: "/image01.png",
              },
              {
                name: "Emily Rodriguez",
                rating: 5,
                comment:
                  "FreshMarket has transformed how our family eats. Everything is so fresh and the convenience is unmatched.",
                product: "Weekly Family Box",
                avatar: "/image03.png",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-green-100 italic text-lg leading-relaxed mb-6">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-green-300">Purchased: {testimonial.product}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Fresh <span className="text-green-200">Deals</span> Weekly
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Subscribe to receive exclusive offers, seasonal recipes, and first access to new products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-2xl text-gray-900 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-white/30 font-medium"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
