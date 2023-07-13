import React from "react"
import { Box, Typography } from "@mui/material"

const onClick = () => {
  console.log("clicked")
}

const CartItem = ({ src, alt, width, title, price }) => (
  <>
    <Box
      backgroundColor="white"
      width={"520px"}
      height={"663px"}
      onClick={onClick}
      sx={{
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
    </Box>
    <Typography variant="h6" align="center" color="#363333">
      {title}
    </Typography>
    <Typography variant="h6" align="center" color="#363333">
      €{price}
    </Typography>
  </>
)

export default CartItem
