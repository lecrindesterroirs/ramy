'use client'

import { createContext, useContext, useState, useEffect, useRef } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  // Évite d'écraser le localStorage avec [] au premier rendu
  const isFirstRender = useRef(true)

  // Lecture depuis localStorage au montage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lecrin-cart')
      if (saved) setItems(JSON.parse(saved))
    } catch {}
  }, [])

  // Écriture dans localStorage — sauf au tout premier rendu
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    try {
      localStorage.setItem('lecrin-cart', JSON.stringify(items))
    } catch {}
  }, [items])

  const addItem = (product, quantity = 1, composition = null) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + quantity, ...(composition !== null ? { composition } : {}) }
            : i
        )
      }
      return [...prev, { ...product, quantity, ...(composition !== null ? { composition } : {}) }]
    })
  }

  const removeItem = (id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity } : i))
  }

  const clearCart = () => setItems([])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
