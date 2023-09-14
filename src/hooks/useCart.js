import { useContext } from "react"
import CartContext from "../context/CartContext/CartContext"
import { find, map } from "lodash"

const useCart = (cartItem) => {
  const { cart, setCart } = useContext(CartContext)
  const cartItemExists = find(cart, (c) => c?.id === cartItem?.id)

  const addToCart = () => {
    if (!cartItemExists) {
      setCart((c) => [...c, { ...cartItem, quantity: 1 }])
    } else {
      // when cart item exists, increments quantity
      setCart(
        map(cart, (c) => {
          if (c.id === cartItem.id) {
            c.quantity = c.quantity + 1
          }
          return c
        })
      )
    }

  }

  return { addToCart }
}
export default useCart
