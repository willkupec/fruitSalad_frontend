import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  Paper,
} from "@mui/material"
import LoginError from "../../components/LoginError"
import { LOGIN } from "../../constants/routes"

const Registration = () => {
    const navigate = useNavigate()
    const [showLoginError, setShowLoginError] = useState("none")
    const [errorMsg, setErrorMsg] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async (event) => {
        event.preventDefault()
        try {
          const user = {}
    
          if (user.error) {
            setShowLoginError("inherit")
            setErrorMsg(user.message)
          } else {
            localStorage.setItem("validateEmail", JSON.stringify(user))
            navigate(LOGIN)
          }
        } catch (e) {
          console.log(e.message)
        }
      }

  return (
    <div>
      <Container component="main" maxWidth="sm">
        <Paper
          elevation={24}
          sx={{
            display: "block",
            margin: "auto",
            mt: "30%",
            borderRadius: "12px",
            width: 400,
            height: 500,
            backgroundColor: "white",
          }}
        >
            <Box
              component="form"
              onSubmit={handleRegister}
              noValidate
              sx={{
                backgroundColor: "black",
                borderRadius: "12px",
                width: "97%",
                height: "97%",
                ml: "auto",
                mr: "auto",
                top: "1.5%",
                p: "1.5rem",
                position: "relative",
              }}
            >
              <Grid
                container
                spacing={1}
                alignItems="center"
                sx={{ height: "100%", width: "100%" }}
              >
                <Grid item xs={12}>
                  <Typography sx={{ color: "white" }}>Email</Typography>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    sx={{
                      backgroundColor: "white",
                      height: "3.5rem",
                      borderRadius: "0.3rem",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ color: "white" }}>Password</Typography>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{
                      backgroundColor: "white",
                      height: "3.5rem",
                      borderRadius: "0.3rem",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    disabled={
                      !(
                        email.length > 0 &&
                        password.length > 0
                      )
                    }
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: "white",
                      color: "black",
                      height: "3.5rem",
                      border: "3px solid black",
                      borderRadius: "5px",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "primary.main",
                      },
                    }}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
              <LoginError msg={errorMsg} visible={showLoginError} />
            </Box>
        </Paper>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "white",
            ml: "auto",
            mr: "auto",
            mt: "5vh",
            width: "30rem",
          }}
        >
          Already have an account?{" "}
          <Link
            onClick={() => {
              navigate(LOGIN)
            }}
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <b>Login here.</b>
          </Link>
        </Typography>
      </Container>
    </div>
  )
}

export default Registration
