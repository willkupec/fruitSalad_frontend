import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Login from "./pages/Login/Login"
import { LOGIN } from "./constants/routes"

const App = () => {
  const location = useLocation()
  return (
    <Routes location={location}>
      <Route path={LOGIN} element={<Login />} />
    </Routes>
  )
}

export default App
