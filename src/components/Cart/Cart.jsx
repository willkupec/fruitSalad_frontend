import React, { useContext } from "react"
import {
  Box,
  Typography,
  Drawer,
  Button,
} from "@mui/material"
import { isEmpty } from "lodash"
import CartContext from "../../context/CartContext/CartContext"
import { useNavigate } from "react-router"
import { CHECKOUT } from "../../constants/frontend_routes"
import CartContent from "../CartContent/CartContent"

const Cart = () => {
  const { cart, setCart, showCart, setShowCart } = useContext(CartContext)
  const navigate = useNavigate()
  const removeFromCart = (cartItem) => {
    setCart(cart.filter((c) => c.id !== cartItem.id))
  }

  const goToCheckout = () =>
    navigate(CHECKOUT)

  const checkoutOnClick = () => {
    setShowCart(false)
    goToCheckout()
  }

  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: 500,
          backgroundColor: "white",
          borderRadius: 0,
        },
      }}
    >
      <Box
        sx={{ p: 4 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h3" color="black">
          Cart
        </Typography>
      </Box>
      <CartContent cart={cart} removeFromCart={removeFromCart} />
      {!isEmpty(cart) && (
        <Button variant="contained" onClick={checkoutOnClick}>
          Checkout
        </Button>
      )}
    </Drawer>
  )
}

export default Cart
