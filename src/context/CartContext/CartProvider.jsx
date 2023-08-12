import React from "react"
import { useState } from "react"
import CartContext from "./CartContext"

const CartProvider = (props) => {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  return (
    <CartContext.Provider value={{ cart, setCart, showCart, setShowCart }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
