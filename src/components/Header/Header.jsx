import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useKeycloak } from "@react-keycloak/web"
import AppBar from "@mui/material/AppBar"
import { Box, Grid, Toolbar, Menu, MenuItem } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import PersonIcon from "@mui/icons-material/Person"
import LocalMallIcon from "@mui/icons-material/LocalMall"
import fruitsalad_title from "../../assets/fruitsalad_title.png"
import { HOME } from "../../constants/frontend_routes"
import CartContext from "../../context/CartContext/CartContext"
import CustomerContext from "../../context/CustomerContext/CustomerContext"

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()
  const { keycloak } = useKeycloak()
  const { setShowCart } = useContext(CartContext)
  const { setCustomer } = useContext(CustomerContext)

  const handleMenu = (event) => {
    if (!keycloak?.authenticated) {
      setAnchorEl(null)
      keycloak?.login()
    } else setAnchorEl(event.currentTarget)
  }

  const logout = () => {
    keycloak?.logout()
    setCustomer(null)
    navigate(HOME)
  }

  const openCart = () => {
    setShowCart(true)
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
                width="200px"
                onClick={() => navigate(HOME)}
                sx={{ cursor: "pointer" }}
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
              {keycloak?.authenticated && (
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
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
              )}
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
