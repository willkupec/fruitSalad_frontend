import React from "react"
import shirt_90s from "../../components/assets/90s_shirt.jpg"
import { Box, Grid, Typography } from "@mui/material"
import SizeRadioGroup from "../../components/SizeRadioGroup/SizeRadioGroup"

const cartItem = {
  id: 1,
  src: shirt_90s,
  alt: "shirt_90s",
  width: "inherit",
  title: "90s Pastel Striped Shirt",
  price: 40,
}

const { src, alt, width, title, price } = cartItem

/* photo
   title
   price
   size options
   Add To Cart Button
*/

const InspectCartItem = () => {
  return (
    <>
      <Grid container sx={{ mt: 18, pl: 50 }}>
        <Grid item xs={6}>
          <Box component="img" src={src} alt={alt} width={width}></Box>
        </Grid>
        <Grid container item rowSpacing={0} xs={6} sx={{ pt: 5 }}>
          <Grid item xs={12}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h5">{price}€</Typography>
          </Grid>
          <Grid item>
            <SizeRadioGroup />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default InspectCartItem
