import { Avatar, Box, Divider, Grid, Paper, Typography } from "@mui/material"
import { map, sumBy } from "lodash"
import CartContext from "../../context/CartContext/CartContext"
import { useContext } from "react"

const CartContentCheckout = () => {
  const { cart } = useContext(CartContext)
  const subTotalPrice = sumBy(cart, (item) => item.price)
  const taxPrice = 4.35
  const totalPrice = subTotalPrice + taxPrice

  const cartContent = map(cart, (item, index) => (
    <Box key={`${index}_${item.id}`}>
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

  return (
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
        <Grid
          container
          justifyContent="space-between"
          sx={{ pr: 5, pt: 2, pl: 2 }}
        >
          <Grid item>
            <Typography variant="h6">Subtotal</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{subTotalPrice}€</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" sx={{ pr: 5, pl: 2 }}>
          <Grid item>
            <Typography variant="h6">Tax</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{taxPrice}€</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          sx={{ pr: 5, pl: 2, pb: 2 }}
        >
          <Grid item>
            <Typography variant="h6">Shipping</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Free</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          justifyContent="space-between"
          sx={{ pr: 5, pl: 2, pt: 5 }}
        >
          <Grid item>
            <Typography variant="h6">Total</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">{totalPrice}€</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default CartContentCheckout
