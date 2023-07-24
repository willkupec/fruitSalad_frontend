import React from "react"
import banner from "../../components/assets/temp_banner.jpg"
import shirt_90s from "../../components/assets/90s_shirt.jpg"
import clown_sweater from "../../components/assets/clown_sweater.jpg"
import corderoy_jacket from "../../components/assets/corderoy_jacket.jpg"
import patchwork_jacket from "../../components/assets/patchwork_jacket.jpg"
import { Box, Grid } from "@mui/material"
import CartItem from "./components/CartItem/CartItem"

const cartItems = [
  {
    id: 1,
    src: shirt_90s,
    alt: "shirt_90s",
    width: "520px",
    title: "90s Pastel Striped Shirt",
    price: 40,
  },
  {
    id: 2,
    src: corderoy_jacket,
    alt: "corderoy_jacket",
    width: "452px",
    title: "Black Long-Sleeve Corderoy Shirt",
    price: 45,
  },
  {
    id: 3,
    src: clown_sweater,
    alt: "clown_sweater",
    title: "The Lovers Sweater",
    price: 50,
  },
  {
    id: 4,
    src: patchwork_jacket,
    alt: "patchwork_jacket",
    title: "Patchwork Button-Up Jacket",
    price: 70,
  },
]

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fcdf23",
          width: "100vw",
        }}
      >
        <Box component="img" src={banner} alt="banner" width={"1500px"} />
      </Box>
      <Grid
        container
        rowSpacing={10}
        columnSpacing={30}
        justifyContent={"center"}
        sx={{ pt: 10 }}
      >
        <Grid item>
          <CartItem cartItem={cartItems[0]} />
        </Grid>
        <Grid item>
          <CartItem cartItem={cartItems[1]} />
        </Grid>
        <Grid item>
          <CartItem cartItem={cartItems[2]} />
        </Grid>
        <Grid item>
          <CartItem cartItem={cartItems[3]} />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
