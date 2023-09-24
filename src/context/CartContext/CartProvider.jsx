import React, { useEffect } from "react"
import { useState } from "react"
import CartContext from "./CartContext"
import { CART_API } from "../../constants/api_routes"
import { map, omit } from "lodash"

export const getOrderItems = (cart) =>
  map(cart, (cartItem) => {
    return { quantity: cartItem.quantity, cartItem: omit(cartItem, "quantity") }
  })

const setOrderItems = async (orderItems) =>
  fetch(CART_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderItems),
  })

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

  console.log("orderItems:", getOrderItems(cart))

  return (
    <CartContext.Provider value={{ cart, setCart, showCart, setShowCart }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
