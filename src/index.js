
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import App from "./App"
import theme from "./theme"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
      </ThemeProvider>
    </BrowserRouter>
)
