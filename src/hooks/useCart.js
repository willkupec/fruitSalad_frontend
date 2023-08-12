import { useContext } from "react"
import CartContext from "../context/CartContext/CartContext"

const useCart = (cartItem) => {
  const { setCart } = useContext(CartContext)

  const addToCart = () => {
    setCart((c) => [...c, cartItem])
  }

/*   const removeFromCart = () => {
    setCart(cart.filter((c) => c.id !== cartItem.id))
  } */

  return { addToCart }
}
export default useCart
