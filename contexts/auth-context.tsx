"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  orders: Order[]
}

interface Order {
  id: string
  date: string
  total: number
  status: "pending" | "processing" | "shipped" | "delivered"
  items: Array<{
    id: number
    name: string
    price: number
    quantity: number
    image: string
  }>
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  addOrder: (order: Omit<Order, "id" | "date">) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("Error loading user from localStorage:", error)
      }
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication - in real app, this would be an API call
    if (email && password) {
      const mockUser: User = {
        id: "1",
        name: "John Doe",
        email,
        orders: [
          {
            id: "order-1",
            date: "2024-01-15",
            total: 299.99,
            status: "delivered",
            items: [
              {
                id: 1,
                name: "Premium Wireless Headphones",
                price: 299.99,
                quantity: 1,
                image: "/placeholder.svg?height=400&width=400",
              },
            ],
          },
        ],
      }
      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      return true
    }
    return false
  }

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock signup - in real app, this would be an API call
    if (name && email && password) {
      const mockUser: User = {
        id: Date.now().toString(),
        name,
        email,
        orders: [],
      }
      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const addOrder = (orderData: Omit<Order, "id" | "date">) => {
    if (!user) return

    const newOrder: Order = {
      ...orderData,
      id: `order-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
    }

    const updatedUser = {
      ...user,
      orders: [newOrder, ...user.orders],
    }

    setUser(updatedUser)
    localStorage.setItem("user", JSON.stringify(updatedUser))
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, addOrder }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
