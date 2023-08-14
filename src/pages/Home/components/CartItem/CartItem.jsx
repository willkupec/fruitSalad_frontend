import React from "react"
import { Box, Paper, Typography, Button } from "@mui/material"
import useCart from "../../../../hooks/useCart"

const CartItem = ({ cartItem }) => {
  const { src, title, price } = cartItem
  const { addToCart } = useCart(cartItem)
  return (
    <>
      <Paper
        elevation={10}
        sx={{
          width: "520px",
          height: "663px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          transition: "transform .2s",
          "&:hover": {
            transform: "scale(0.95)",
          },
        }}
      >
        <Box component="img" src={src} alt={title} width={"520px"}></Box>
      </Paper>
      <Typography variant="h6" align="center" color="#363333">
        {title}
      </Typography>
      <Typography variant="h6" align="center" color="#363333">
        €{price}
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={addToCart}
        sx={{
          display: "flex",
          ml: "auto",
          mr: "auto",
          backgroundColor: "#1e1b1b",
          color: "whitesmoke",
          mb: "12px",
          mt: "4px",
        }}
      >
        Add to Cart
      </Button>
    </>
  )
}

export default CartItem
