import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import Home from "./pages/Home/Home"
import { LOGIN, REGISTRATION } from "./constants/frontend_routes"
import Header from "./components/Header/Header"
import UserProvider from "./context/UserProvider"

const App = () => {
  const location = useLocation()
  return (
    <UserProvider>
      <Header />
      <Routes location={location}>
        <Route path={"*"} element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTRATION} element={<Registration />} />
      </Routes>
    </UserProvider>
  )
}

export default App
