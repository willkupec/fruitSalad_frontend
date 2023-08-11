import { useContext } from "react"
import CartContext from "../context/CartContext/CartContext"

const useCart = (cartItem) => {
  const { setCart } = useContext(CartContext)

  const addToCart = () => {
    /*     // if true, cartItem is present in the cart
    cart.findIndex((c) => c.id === cartItem.id) >= 0
    // removes product already present in cart
      ? setCart(cart.filter((c) => c.id !== cartItem.id))
      :  */
    // add product that isn't within cart
    setCart((c) => [...c, cartItem])
  }

  return { addToCart }
}
export default useCart
