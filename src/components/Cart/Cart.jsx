import React, { useContext } from "react"
import { Box, Typography, Drawer, Button } from "@mui/material"
import { filter, isEmpty } from "lodash"
import CartContext from "../../context/CartContext/CartContext"
import { useNavigate } from "react-router"
import { CHECKOUT } from "../../constants/frontend_routes"
import CartContent from "../CartContent/CartContent"
import { useKeycloak } from "@react-keycloak/web"

const Cart = () => {
  const { cart, setCart, showCart, setShowCart } = useContext(CartContext)
  const navigate = useNavigate()
  const { keycloak } = useKeycloak()
  const removeFromCart = (cartItem) => {
    setCart(
      filter(cart, (c) => {
        if (c.quantity > 1) {
          if (c.id === cartItem.id) {
            c.quantity = c.quantity - 1
          }
          return c
        }
        return c.id !== cartItem.id
      })
    )
  }

  const goToCheckout = () => navigate(CHECKOUT)

  const checkoutOnClick = () => {
    setShowCart(false)
    keycloak?.authenticated ? goToCheckout() : keycloak?.login()
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
