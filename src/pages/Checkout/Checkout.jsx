import { Button, Grid, Paper, Typography } from "@mui/material"
import FormTextField from "../../components/FormTextField/FormTextField"

const Checkout = () => {
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
            <Grid container item xs={12}>
              <Grid item xs>
                <FormTextField label="Address" required />
              </Grid>
              <Grid item>
                <FormTextField label="Apt, suite, etc." />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormTextField label="City" required />
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
            pl: "5rem",
            pr: "5rem",
            pt: "5rem",
            mr: "2rem",
          }}
        ></Paper>
      </Grid>
    </Grid>
  )
}

export default Checkout
