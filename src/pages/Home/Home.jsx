import React, { useState, useEffect, useContext } from "react"
import banner from "../../assets/temp_banner.jpg"
import { Box, Grid } from "@mui/material"
import CartItem from "./components/CartItem/CartItem"
import { CART_API } from "../../constants/api_routes"
import { get, map } from "lodash"
import { useKeycloak } from "@react-keycloak/web"
import CustomerContext from "../../context/CustomerContext/CustomerContext"

const getCartItems = async (setHomeItems) => {
  return fetch(CART_API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => setHomeItems(data))
}

const Home = () => {
  const [homeItems, setHomeItems] = useState([])
  const keycloak = useKeycloak()
  const { setCustomer } = useContext(CustomerContext)

  useEffect(() => {
    if (get(keycloak, "keycloak.authenticated", null)) {
      const sub = get(keycloak, "keycloak.idTokenParsed.sub", null)
      setCustomer(sub)
    }
  }, [keycloak, keycloak?.authenticated, setCustomer])

  useEffect(() => {
    getCartItems(setHomeItems)
  }, [])

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
        {map(homeItems, (item) => (
          <Grid item key={item.title}>
            <CartItem cartItem={item} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Home
