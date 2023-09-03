import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import Home from "./pages/Home/Home"
import { ReactKeycloakProvider } from "@react-keycloak/web"
import keycloak from "./Keycloak"
import { CHECKOUT, LOGIN, REGISTRATION } from "./constants/frontend_routes"
import Header from "./components/Header/Header"
import UserProvider from "./context/UserContext/UserProvider"
import CartProvider from "./context/CartContext/CartProvider"
import Cart from "./components/Cart/Cart"
import PrivateRoute from "./utils/PrivateRoute"

const App = () => {
  const location = useLocation()
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <UserProvider>
        <CartProvider>
          <Cart />
          <Header />
          <Routes location={location}>
            <Route path={"*"} element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTRATION} element={<Registration />} />
            <Route
              path={CHECKOUT}
              element={
                <PrivateRoute>
                  <div />
                </PrivateRoute>
              }
            />
          </Routes>
        </CartProvider>
      </UserProvider>
    </ReactKeycloakProvider>
  )
}

export default App
