import { Button, Grid, Paper, Typography } from "@mui/material"
import CartContentCheckout from "../../components/CartContent/CartContentCheckout"
import FormTextField from "../../components/FormTextField/FormTextField"
import { useContext, useEffect, useState } from "react"
import CustomerContext from "../../context/CustomerContext/CustomerContext"
import { makePayment } from "./payment_fetches"
import { useNavigate } from "react-router-dom"
import { HOME } from "../../constants/frontend_routes"

const initialPaymentData = {
  name: "",
  number: "",
  expiryDate: "",
  cvv: "",
  customer: "",
}

const Payment = () => {
  const [payment, setPayment] = useState(initialPaymentData)
  const { customer } = useContext(CustomerContext)
  const navigate = useNavigate()

  useEffect(() => {
    setPayment((prevData) => ({ ...prevData, customer: customer }))
  }, [customer])

  console.log(payment)

  const completeOrder = () => {
    makePayment(payment)
    navigate(HOME)
  }

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
            sx={{ width: "100%", height: "70%" }}
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
                PAYMENT
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid container item spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    color: "#1e1e1e",
                  }}
                >
                  Credit Card Info
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormTextField
                  value={payment.name}
                  onChange={(e) =>
                    setPayment((prevData) => ({
                      ...prevData,
                      name: e.target.value,
                    }))
                  }
                  required
                  label="Name on card"
                  autoComplete="cc-name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormTextField
                  value={payment.number}
                  onChange={(e) =>
                    setPayment((prevData) => ({
                      ...prevData,
                      number: parseInt(e.target.value),
                    }))
                  }
                  required
                  label="Card number"
                  autoComplete="cc-number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormTextField
                  value={payment.expiryDate}
                  onChange={(e) =>
                    setPayment((prevData) => ({
                      ...prevData,
                      expiryDate: e.target.value,
                    }))
                  }
                  required
                  label="Expiry date"
                  autoComplete="cc-exp"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormTextField
                  value={payment.cvv}
                  onChange={(e) =>
                    setPayment((prevData) => ({
                      ...prevData,
                      cvv: parseInt(e.target.value),
                    }))
                  }
                  required
                  label="CVV"
                  helperText="Last three digits on signature strip"
                  autoComplete="cc-csc"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                onClick={completeOrder}
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
                Complete Order
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <CartContentCheckout />
    </Grid>
  )
}

export default Payment
