import {
  Autocomplete,
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material"
import FormTextField from "../../components/FormTextField/FormTextField"
import { useContext, useEffect, useState } from "react"
import { COUNTRIES_API } from "../../constants/api_routes"
import { map, sumBy } from "lodash"
import CartContext from "../../context/CartContext/CartContext"
import { Box } from "@mui/system"

const getCountries = async (setCountries) => {
  return fetch(COUNTRIES_API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => setCountries(map(data, (country) => country.name.common)))
}

const Checkout = () => {
  const [countries, setCountries] = useState([])
  const { cart } = useContext(CartContext)

  const subTotalPrice = sumBy(cart, (item) => item.price)
  const taxPrice = 4.35
  const totalPrice = subTotalPrice + taxPrice

  const cartContent = map(cart, (item) => (
    <Box key={item.id}>
      <Box display="flex" sx={{ pt: 2, pb: 2, ml: 2 }} alignItems="start">
        <Avatar
          src={item.src}
          sx={{ width: 45, height: 45, mr: 2, borderRadius: 0 }}
        />
        <Grid container justifyContent="space-between" sx={{ pr: 5, pt: 1 }}>
          <Grid item>
            <Typography variant="body2">{item.title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">€{item.price}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </Box>
  ))

  useEffect(() => {
    getCountries(setCountries)
  }, [])

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
      <Grid item xs={5}>
        <Paper
          component="form"
          noValidate
          elevation={24}
          sx={{
            borderRadius: "30px",
            width: "100%",
            height: "100%",
            backgroundColor: "#e0e0e0",
          }}
        >
          {cartContent}
          <Grid container justifyContent="space-between" sx={{pr: 5, pt: 2, pl: 2}}>
            <Grid item>
              <Typography variant="h6">
                Subtotal
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                {subTotalPrice}€
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" sx={{pr: 5, pl: 2}}>
            <Grid item>
              <Typography variant="h6">
                Tax
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                {taxPrice}€
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" sx={{pr: 5, pl: 2, pb: 2}}>
            <Grid item>
              <Typography variant="h6">
                Shipping
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Free
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container justifyContent="space-between" sx={{pr: 5, pl: 2, pt: 5}}>
            <Grid item>
              <Typography variant="h6">
                Total
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4">
                {totalPrice}€
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Checkout
