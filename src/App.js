import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home/Home"
import { ReactKeycloakProvider } from "@react-keycloak/web"
import keycloak from "./Keycloak"
import {
  CHECKOUT,
  PAYMENT,
} from "./constants/frontend_routes"
import Header from "./components/Header/Header"
import CustomerProvider from "./context/CustomerContext/CustomerProvider"
import CartProvider from "./context/CartContext/CartProvider"
import Cart from "./components/Cart/Cart"
import Checkout from "./pages/Checkout/Checkout"
import Payment from "./pages/Payment/Payment"

const App = () => {
  const location = useLocation()
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <CustomerProvider>
        <CartProvider>
          <Cart />
          <Header />
          <Routes location={location}>
            <Route path={"*"} element={<Home />} />
            {keycloak?.authenticated && (
              <Route path={CHECKOUT} element={<Checkout />} />
            )}
            {keycloak?.authenticated && (
              <Route path={PAYMENT} element={<Payment />} />
            )}
          </Routes>
        </CartProvider>
      </CustomerProvider>
    </ReactKeycloakProvider>
  )
}

export default App
