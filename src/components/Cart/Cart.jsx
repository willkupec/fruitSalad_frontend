import React, { useContext } from "react"
import {
  Box,
  Typography,
  Drawer,
  Avatar,
  Divider,
  Button,
  IconButton,
} from "@mui/material"
import { map, isEmpty } from "lodash"
import CloseIcon from "@mui/icons-material/Close"
import CartContext from "../../context/CartContext/CartContext"
import { useNavigate } from "react-router"
import { CHECKOUT } from "../../constants/frontend_routes"

const Cart = () => {
  const { cart, setCart, showCart, setShowCart } = useContext(CartContext)
  const navigate = useNavigate()
  const removeFromCart = (cartItem) => {
    setCart(cart.filter((c) => c.id !== cartItem.id))
  }

  const goToCheckout = () => {
    navigate(CHECKOUT)
  }

  const cartContent = map(cart, (item) => (
    <Box key={item.id}>
      <Box display="flex" sx={{ pt: 2, pb: 2, ml: 2 }} alignItems="start">
        <Avatar
          src={item.src}
          sx={{ width: 96, height: 96, mr: 2, borderRadius: 0 }}
        />
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body1">€{item.price}</Typography>
        </Box>
        <IconButton
          onClick={() => removeFromCart(item)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "-0.2rem",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
    </Box>
  ))

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
      {cartContent}
      {!isEmpty(cart) && (
        <Button variant="contained" onClick={goToCheckout}>
          Checkout
        </Button>
      )}
    </Drawer>
  )
}

export default Cart
