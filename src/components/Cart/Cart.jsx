import React, { useContext } from "react"
import { Box, Paper, Typography, Drawer } from "@mui/material"
import CartContext from "../../context/CartContext/CartContext"

const Cart = () => {
  const { cart, showCart, setShowCart } = useContext(CartContext)

  const cartContent = cart.map((item) => (
    <Box key={item.id}>
      <Box
        display="flex"
        sx={{ pt: 2, pb: 2 }}
        alignItems="start"
        jusifyContent="space-between"
      ></Box>
    </Box>
  ))

  return (
    <Drawer
      open={showCart}
      anchor="right"
      PaperProps={{
        sx: {
          width: 500,
          backgroundColor: "white",
          borderRadius: 0,
        },
      }}
    >
      <h1>Cart</h1>
      {cartContent}
    </Drawer>
  )
}

export default Cart
