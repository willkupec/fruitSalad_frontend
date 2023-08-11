import React from "react"
import banner from "../../assets/temp_banner.jpg"
import shirt_90s from "../../assets/90s_shirt.jpg"
import clown_sweater from "../../assets/clown_sweater.jpg"
import corderoy_jacket from "../../assets/corderoy_jacket.jpg"
import patchwork_jacket from "../../assets/patchwork_jacket.jpg"
import { Box, Grid } from "@mui/material"
import CartItem from "./components/CartItem/CartItem"

const Home = () => (
  <>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fcdf23",
        width: "100vw"
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
        <CartItem
          src={shirt_90s}
          alt="shirt_90s"
          width="520px"
          title="90s Pastel Striped Shirt"
          price={40}
        />
      </Grid>
      <Grid item>
        <CartItem
          src={corderoy_jacket}
          alt="corderoy_jacket"
          width="452px"
          title="Black Long-Sleeve Corderoy Shirt"
          price={45}
        />
      </Grid>
      <Grid item>
        <CartItem
          src={clown_sweater}
          alt="clown_sweater"
          title="The Lovers Sweater"
          price={50}
        />
      </Grid>
      <Grid item>
        <CartItem
          src={patchwork_jacket}
          alt="patchwork_jacket"
          title="Patchwork Button-Up Jacket"
          price={70}
        />
      </Grid>
    </Grid>
  </>
)

export default Home
