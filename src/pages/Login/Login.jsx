import React, { useContext, useState } from "react"
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
import { HOME, REGISTRATION } from "../../constants/frontend_routes"
import { LOGIN_API } from "../../constants/api_routes"
import UserContext from "../../context/UserContext/UserContext"

const loginUser = async (credentials) => {
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
    <Container component="main" maxWidth="md">
      <Paper
        component="form"
        onSubmit={handleLogin}
        noValidate
        elevation={24}
        sx={{
          mt: "10%",
          borderRadius: "30px",
          width: 900,
          height: 700,
          backgroundColor: "white",
          pl: "5rem",
          pr: "5rem",
          pt: "5rem",
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
                textAlign: "center",
                color: "#1e1e1e",
                fontWeight: "bold",
              }}
            >
              LOGIN
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                color: "#1e1e1e",
              }}
            >
              Welcome!
            </Typography>
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
                backgroundColor: "white",
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
              Login
            </Button>
            <Grid item>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  color: "#1e1e1e",
                }}
              >
                No account?{" "}
                <Link
                  onClick={() => {
                    navigate(REGISTRATION)
                  }}
                  sx={{
                    color: "#88CF9F",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <b>Register Here.</b>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Login
