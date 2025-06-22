"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
// import { toast } from "@/hooks/use-toast"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  inStock: boolean
  unit?: string
  freshness?: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    })

    // toast({
    //   title: "Added to cart",
    //   description: `${product.name} has been added to your cart.`,
    // })
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Fresh Produce":
        return "bg-green-100 text-green-800"
      case "Fresh Seafood":
        return "bg-blue-100 text-blue-800"
      case "Premium Meats":
        return "bg-red-100 text-red-800"
      case "Bakery":
        return "bg-yellow-100 text-yellow-800"
      case "Gourmet Cheese":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="group relative overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-2 rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden rounded-t-3xl">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Category Badge */}
          <Badge className={`absolute top-4 left-4 ${getCategoryColor(product.category)} font-medium`}>
            {product.category}
          </Badge>

          {discount > 0 && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-scale-in">
              -{discount}%
            </div>
          )}

          {/* Freshness indicator */}
          {product.freshness && (
            <div className="absolute bottom-4 left-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm flex items-center">
              <Leaf className="h-3 w-3 mr-1" />
              {product.freshness}
            </div>
          )}

          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-t-3xl">
              <span className="text-white font-semibold text-lg bg-gray-900/80 px-4 py-2 rounded-full backdrop-blur-sm">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </Link>

      <CardContent className="p-6 relative z-10">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-bold text-xl mb-2 line-clamp-2 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
            {product.name}
          </h3>
        </Link>

        {product.unit && <p className="text-sm text-gray-500 mb-3">{product.unit}</p>}

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2 font-medium">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-2xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardContent>
    </Card>
  )
}
