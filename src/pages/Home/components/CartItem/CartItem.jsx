import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Paper, Typography } from "@mui/material"
import { CART_ITEM } from "../../../../constants/routes/frontend_routes"

const CartItem = ({ id, src, alt, width, title, price }) => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(`${CART_ITEM}/${id}`)
  }

  return (
    <>
      <Paper
        elevation={10}
        onClick={onClick}
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
          cursor: "pointer",
        }}
      >
        <Box component="img" src={src} alt={alt} width={width}></Box>
      </Paper>
      <Typography variant="h6" align="center" color="#363333">
        {title}
      </Typography>
      <Typography variant="h6" align="center" color="#363333">
        €{price}
      </Typography>
    </>
  )
}

export default CartItem
