import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import Home from "./pages/Home/Home"
import {
  CART_ITEM,
  LOGIN,
  REGISTRATION,
} from "./constants/routes/frontend_routes"
import Header from "./components/Header/Header"
import UserProvider from "./context/UserProvider"
import InspectCartItem from "./pages/InspectCartItem/InspectCartItem"

const App = () => {
  const location = useLocation()
  return (
    <UserProvider>
      <Header />
      <Routes location={location}>
        <Route path={"*"} element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTRATION} element={<Registration />} />
        <Route path={`${CART_ITEM}/:id`} element={<InspectCartItem />} />
      </Routes>
    </UserProvider>
  )
}

export default App
