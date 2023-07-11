import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import { Box, Grid, Toolbar, Menu, MenuItem } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import PersonIcon from "@mui/icons-material/Person"
import LocalMallIcon from "@mui/icons-material/LocalMall"
import fruitsalad_title from "../../components/assets/fruitsalad_title.png"
import { LOGIN } from "../../constants/frontend_routes"

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
      <AppBar>
        <Toolbar sx={{ height: "5vh" }}>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item>
              <Box
                component="img"
                src={fruitsalad_title}
                alt="fruitsalad_title"
                width={"200px"}
              />
            </Grid>
            <Box>
              <Grid container item>
                <Grid item>
                  <IconButton
                    size="large"
                    aria-label="cart"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={openCart}
                    color="inherit"
                  >
                    <LocalMallIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    size="large"
                    aria-label="account"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <PersonIcon />
                  </IconButton>
                </Grid>
              </Grid>
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
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
