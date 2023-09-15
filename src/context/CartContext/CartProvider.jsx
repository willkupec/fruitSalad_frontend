import React, { useEffect } from "react"
import { useState } from "react"
import CartContext from "./CartContext"

const getInitialCart = () => {
  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(cart) : []
}

const CartProvider = (props) => {
  const [cart, setCart] = useState(getInitialCart())
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, setCart, showCart, setShowCart }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
