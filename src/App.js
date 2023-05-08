import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import { LOGIN, REGISTRATION } from "./constants/routes"

const App = () => {
  const location = useLocation()
  return (
    <Routes location={location}>
      <Route path={LOGIN} element={<Login />} />
      <Route path={REGISTRATION} element={<Registration />} />
      <Route path={"*"} element={<Login />} />
    </Routes>
  )
}

export default App
