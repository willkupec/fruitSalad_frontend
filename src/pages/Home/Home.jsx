import React from "react"
import banner from "../../assets/temp_banner.jpg"
import { Box, Grid } from "@mui/material"
import CartItem from "./components/CartItem/CartItem"

const cartItem1 = {
  id: 1,
  src: "https://i.imgur.com/ssYPbf4.jpg",
  alt: "90s Pastel Striped Shirt",
  width: "520px",
  title: "90s Pastel Striped Shirt",
  price: 40,
}

const cartItem2 = {
  id: 2,
  src: "https://i.imgur.com/y5TlUBz.jpg",
  alt: "Black Long-Sleeve Corderoy Shirt",
  width: "452px",
  title: "Black Long-Sleeve Corderoy Shirt",
  price: 45,
}

const cartItem3 = {
  id: 3,
  src: "https://i.imgur.com/M5Q5CSQ.jpg",
  alt: "The Lovers Sweater",
  title: "The Lovers Sweater",
  price: 50,
}

const cartItem4 = {
  id: 4,
  src: "https://i.imgur.com/VJSprtt.jpg",
  alt: "Patchwork Button-Up Jacket",
  title: "Patchwork Button-Up Jacket",
  price: 70,
}

const Home = () => (
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
        <CartItem cartItem={cartItem1} />
      </Grid>
      <Grid item>
        <CartItem cartItem={cartItem2} />
      </Grid>
      <Grid item>
        <CartItem cartItem={cartItem3} />
      </Grid>
      <Grid item>
        <CartItem cartItem={cartItem4} />
      </Grid>
    </Grid>
  </>
)

export default Home
