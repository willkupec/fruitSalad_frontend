import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import {
  Container,
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  Paper,
} from "@mui/material"
import { HOME, LOGIN } from "../../constants/frontend_routes"
import { REGISTRATION_API } from "../../constants/api_routes"
import UserContext from "../../context/UserContext"

const registerUser = async (credentials) => {
  return fetch(REGISTRATION_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json())
}

const Registration = () => {
  const navigate = useNavigate()
  const { setUserData } = useContext(UserContext)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      const user = await registerUser({ firstName, lastName, email, password })

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
    <Container component="main" maxWidth="md" sx={{display: "flex", alignItems: "center", justifySelf: "center"}}>
      <Paper
        component="form"
        onSubmit={handleRegister}
        noValidate
        elevation={24}
        sx={{
          borderRadius: "30px",
          width: 900,
          height: 700,
          backgroundColor: "white",
          pl: "5rem",
          pr: "5rem",
          pt: "3rem",
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
                mb: "1.75rem",
                textAlign: "left",
                color: "#1e1e1e",
                fontWeight: "bold",
              }}
            >
              CREATE ACCOUNT
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              name="firstName"
              autoComplete="firstName"
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              variant="outlined"
              sx={{
                height: "3.5rem",
                borderRadius: "5px",
                ".MuiInputLabel-root": {
                  color: "#1e1e1e",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#1e1e1e",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              name="lastName"
              autoComplete="lastName"
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              variant="outlined"
              sx={{
                height: "3.5rem",
                borderRadius: "5px",
                ".MuiInputLabel-root": {
                  color: "#1e1e1e",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#1e1e1e",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              sx={{
                height: "3.5rem",
                borderRadius: "5px",
                ".MuiInputLabel-root": {
                  color: "#1e1e1e",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#1e1e1e",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              label="Password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                height: "3.5rem",
                borderRadius: "5px",
                ".MuiInputLabel-root": {
                  color: "#1e1e1e",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#1e1e1e",
                  },
                },
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
              Create Account
            </Button>
            <Grid item>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  color: "#1e1e1e",
                }}
              >
                Already have an account?{" "}
                <Link
                  onClick={() => {
                    navigate(LOGIN)
                  }}
                  sx={{
                    color: "#88CF9F",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <b>Login.</b>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Registration
