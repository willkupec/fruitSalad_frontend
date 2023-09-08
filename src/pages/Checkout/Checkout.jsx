import { Autocomplete, Button, Grid, Paper, Typography } from "@mui/material"
import FormTextField from "../../components/FormTextField/FormTextField"
import { useContext, useEffect, useState } from "react"
import {
  ADDRESS_BY_CUSTOMER_API,
  COUNTRIES_API,
} from "../../constants/api_routes"
import { PAYMENT } from "../../constants/frontend_routes"
import { map } from "lodash"
import { useNavigate } from "react-router-dom"
import CartContentCheckout from "../../components/CartContent/CartContentCheckout"
import UserContext from "../../context/UserContext/UserContext"

const getCountries = async (setCountries) =>
  fetch(COUNTRIES_API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    // maps names of countries
    .then((data) => setCountries(map(data, (country) => country.name.common)))

const getAddressData = async (userData, setAddressData) =>
  fetch(ADDRESS_BY_CUSTOMER_API + userData, {
    method: "GET",
    headers: {
      "Content-Type": "text/plain",
    },
  })
    .then((response) => response.json())
    .then((data) => setAddressData(data))

const Checkout = () => {
  const [countries, setCountries] = useState([])
  const [addressData, setAddressData] = useState(null)
  const { userData } = useContext(UserContext)
  const navigate = useNavigate()

  console.log(addressData)

  const goToPayment = () => {
    navigate(PAYMENT)
  }

  useEffect(() => {
    getCountries(setCountries)
  }, [])

  useEffect(() => {
    // if we have an address from logged in user
    getAddressData(userData, setAddressData)
    // load fields with address data
  }, [userData])

  return (
    <Grid
      container
      direction={"row"}
      columnSpacing={5}
      sx={{ mt: "6.5%", ml: "1.5%", width: "95vw", height: "80vh" }}
    >
      <Grid item xs={7}>
        <Paper
          component="form"
          noValidate
          elevation={24}
          sx={{
            borderRadius: "30px",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            pl: "5rem",
            pr: "5rem",
            pt: "2rem",
          }}
        >
          <Grid
            container
            columnSpacing={1}
            alignItems="center"
            sx={{ width: "100%", height: "85%" }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "left",
                  color: "#1e1e1e",
                  fontWeight: "bold",
                }}
              >
                CHECKOUT
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Shipping Information
              </Typography>
              <FormTextField label="Name / Company Name" required />
            </Grid>
            <Grid container item spacing={2} xs={12}>
              <Grid item xs={9}>
                <FormTextField label="Address" required />
              </Grid>
              <Grid item xs={3}>
                <FormTextField label="Apt, suite, etc." />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormTextField label="City" required />
            </Grid>
            <Grid container item spacing={2} xs={12}>
              <Grid item xs={6}>
                <Autocomplete
                  disablePortal
                  options={countries}
                  renderInput={(params) => (
                    <FormTextField {...params} label="Country" />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <FormTextField label="Postal Code" required />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                onClick={goToPayment}
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#88CF9F",
                  fontWeight: "bold",
                  color: "white",
                  height: "3.5rem",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "primary.main",
                  },
                }}
              >
                Continue to Payment
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <CartContentCheckout />
    </Grid>
  )
}

export default Checkout
