import { useContext } from "react"
import CartContext from "../context/CartContext/CartContext"

const useCart = (cartItem) => {
  const { setCart } = useContext(CartContext)

  const addToCart = () => {
    setCart((c) => [...c, cartItem])
  }

  return { addToCart }
}
export default useCart
