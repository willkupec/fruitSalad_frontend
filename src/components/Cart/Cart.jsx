import React from "react"
import { Box, Paper, Typography, Drawer } from "@mui/material"

const Cart = () => {
  return (
    <Drawer
      open={true}
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
    </Drawer>
  )
}

export default Cart
