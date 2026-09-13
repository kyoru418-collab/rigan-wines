'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Wine } from '@/lib/wines'

type CartItem = { wine: Wine; quantity: number }

type CartContextValue = {
  items: CartItem[]
  addItem: (wine: Wine) => void
  removeItem: (slug: string) => void
  updateQuantity: (slug: string, quantity: number) => void
  clear: () => void
  totalCount: number
  totalPrice: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (wine: Wine) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.wine.slug === wine.slug)
      if (existing) {
        return prev.map((item) =>
          item.wine.slug === wine.slug ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { wine, quantity: 1 }]
    })
  }

  const removeItem = (slug: string) => {
    setItems((prev) => prev.filter((item) => item.wine.slug !== slug))
  }

  const updateQuantity = (slug: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((item) => item.wine.slug !== slug)
        : prev.map((item) => (item.wine.slug === slug ? { ...item, quantity } : item))
    )
  }

  const clear = () => setItems([])

  const totalCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])
  const totalPrice = useMemo(() => items.reduce((sum, item) => sum + item.quantity * item.wine.price, 0), [items])

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clear, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
