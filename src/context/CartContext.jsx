import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  function addToCart(product) {
    const updated = [...cart, product]
    setCart(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  function removeFromCart(index) {
    const updated = cart.filter((_, i) => i !== index)
    setCart(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}