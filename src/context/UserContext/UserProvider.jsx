import React from "react"
import { useState } from "react"
import UserContext from "./UserContext"

const getInitialUser = () => {
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

const UserProvider = (props) => {
  const [userData, setUserData] = useState(getInitialUser())

  const setUserDataWrapper = (data) => {
    localStorage.setItem("user", JSON.stringify(data))
    setUserData(data)
  }

  return (
    <UserContext.Provider value={{ userData, setUserData: setUserDataWrapper }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
