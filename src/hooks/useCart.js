import { useContext } from "react"
import CartContext from "../context/CartContext/CartContext"
import { find, includes, map } from "lodash"

const useCart = (cartItem, quantity, setQuantity) => {
  const { cart, setCart } = useContext(CartContext)
  const cartItemExists = find(cart, (c) => c?.id === cartItem?.id)

  console.log("!cartItemExists:", !cartItemExists)
  const addToCart = () => {
    if (!cartItemExists) {
      setCart((c) => [...c, { ...cartItem, quantity: quantity }])
    } else {

      setCart(
        map(cart, (c) => {
          if (c.id === cartItem.id) {
            c.quantity = quantity
          }
          return c
        })
      )
      setQuantity(quantity + 1)
    }

  }

  console.log(cart)

  return { addToCart }
}
export default useCart
