import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import PersonIcon from "@mui/icons-material/Person"
import LocalMallIcon from "@mui/icons-material/LocalMall"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import Logo from "./icons/Logo"
import { LOGIN } from "../constants/frontend_routes"

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleAccountButton = () => {
    setAnchorEl(null)
    //if not logged in, navigate to login page
    navigate(LOGIN)
    //if logged in, navigate to account page
  }

  const logout = () => {
    //TODO
    //navigate user to home page
  }

  const openCart = () => {
    //TODO opens cart on side of screen, fixed to side
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: "12vh" }}>
          <Logo />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            fruit salad
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openCart}
              color="inherit"
            >
              <LocalMallIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <PersonIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              {/* //TODO adjust text depending on if user is logged in */}
              <MenuItem onClick={handleAccountButton}>My account</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
