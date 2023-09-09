import { Autocomplete, Button, Grid, Paper, Typography } from "@mui/material"
import FormTextField from "../../components/FormTextField/FormTextField"
import { useContext, useEffect, useState } from "react"
import { PAYMENT } from "../../constants/frontend_routes"
import { map } from "lodash"
import { useNavigate } from "react-router-dom"
import CartContentCheckout from "../../components/CartContent/CartContentCheckout"
import UserContext from "../../context/UserContext/UserContext"
import {
  addAddressData,
  getAddressData,
  getCountries,
  updateAddressData,
} from "./checkout_fetches"

const initialAddressData = {
  name: "",
  address: "",
  addressEtc: "",
  city: "",
  country: "",
  zipCode: 0,
  customer: "",
}

const Checkout = () => {
  const [countries, setCountries] = useState([])
  const [addressData, setAddressData] = useState(initialAddressData)
  const [addressFetched, setAddressFetched] = useState(false)
  const { userData } = useContext(UserContext)
  const navigate = useNavigate()

  const goToPayment = () => {
    // if there exists address data in db
    // update address, else
    // create new address
    addressFetched ? updateAddressData(addressData) : addAddressData(addressData)
    navigate(PAYMENT)
  }

  useEffect(() => {
    getCountries(setCountries)
  }, [])

  useEffect(() => {
    // if we have an address from logged in user
    // load fields with address data
    getAddressData(userData, setAddressData, setAddressFetched)
    //sets customer string when user has no prev address
    if(addressFetched)
      setAddressData((prevData) => ({ ...prevData, customer: userData }))
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
              <FormTextField
                value={addressData.name}
                onChange={(e) =>
                  setAddressData((prevData) => ({
                    ...prevData,
                    name: e.target.value,
                  }))
                }
                label="Name / Company Name"
                required
              />
            </Grid>
            <Grid container item spacing={2} xs={12}>
              <Grid item xs={9}>
                <FormTextField
                  value={addressData.address}
                  onChange={(e) =>
                    setAddressData((prevData) => ({
                      ...prevData,
                      address: e.target.value,
                    }))
                  }
                  label="Address"
                  required
                />
              </Grid>
              <Grid item xs={3}>
                <FormTextField
                  value={addressData.addressEtc}
                  onChange={(e) =>
                    setAddressData((prevData) => ({
                      ...prevData,
                      addressEtc: e.target.value,
                    }))
                  }
                  label="Apt, suite, etc."
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormTextField
                value={addressData.city}
                onChange={(e) =>
                  setAddressData((prevData) => ({
                    ...prevData,
                    city: e.target.value,
                  }))
                }
                label="City"
                required
              />
            </Grid>
            <Grid container item spacing={2} xs={12}>
              <Grid item xs={6}>
                <Autocomplete
                  disablePortal
                  options={countries}
                  // isOptionEqualToValue={(option, value) => option.label === value}
                  value={addressData.country}
                  onChange={(_, value) =>
                    setAddressData((prevData) => ({
                      ...prevData,
                      country: value,
                    }))
                  }
                  renderInput={(params) => (
                    <FormTextField {...params} label="Country" />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <FormTextField
                  value={addressData.zipCode}
                  onChange={(e) =>
                    setAddressData((prevData) => ({
                      ...prevData,
                      zipCode: e.target.value,
                    }))
                  }
                  label="Postal Code"
                  required
                />
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
