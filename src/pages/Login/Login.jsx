import React, { useContext, useState } from "react"
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
import { HOME, REGISTRATION } from "../../constants/frontend_routes"
import { LOGIN_API } from "../../constants/api_routes"
import UserContext from "../../context/UserContext"

const loginUser = async (credentials) => {
  console.log(JSON.stringify(credentials))
  return fetch(LOGIN_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json())
}

const Login = () => {
  const navigate = useNavigate()
  const { setUserData } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginUser({ email, password })

      if (user.error) {
        console.log("error:", user.error)
      } else {
        setUserData(user)
        navigate(HOME)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <>
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
            onSubmit={handleLogin}
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
                <Typography color={"white"}>Email</Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",
                    height: "3.5rem",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography color={"white"}>Password</Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    backgroundColor: "white",
                    height: "3.5rem",
                    borderRadius: "5px",
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  disabled={!(email.length > 0 && password.length > 0)}
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "white",
                    color: "black",
                    height: "3.5rem",
                    border: "3px solid black",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "primary.main",
                    },
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
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
            width: "20rem",
          }}
        >
          No account?{" "}
          <Link
            onClick={() => {
              navigate(REGISTRATION)
            }}
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <b>Register here.</b>
          </Link>
        </Typography>
      </Container>
    </>
  )
}

export default Login
