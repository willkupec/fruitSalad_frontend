import React from "react"
import banner from "../../components/assets/temp_banner.jpg"
import { Box, Grid } from "@mui/material"

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fcdf23",
        }}
      >
        <img src={banner} alt="banner" width={"1400px"}></img>
      </Box>
      <Grid container rowSpacing={10} justifyContent={"center"} sx={{ pt: 10 }}>
        <Grid item xs={5}>
          <Box backgroundColor="white" width={"520px"} height={"704px"}></Box>
        </Grid>
        <Grid item>
          <Box backgroundColor="white" width={"520px"} height={"704px"}></Box>
        </Grid>
        <Grid item xs={5}>
          <Box backgroundColor="white" width={"520px"} height={"704px"}></Box>
        </Grid>
        <Grid item>
          <Box backgroundColor="white" width={"520px"} height={"704px"}></Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
