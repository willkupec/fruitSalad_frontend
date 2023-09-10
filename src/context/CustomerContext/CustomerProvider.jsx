import React from "react"
import { useState } from "react"
import CustomerContext from "./CustomerContext"

const getInitialCustomer = () => {
  const customer = localStorage.getItem("customer")
  return customer ? JSON.parse(customer) : null
}

const CustomerProvider = (props) => {
  const [customer, setCustomer] = useState(getInitialCustomer())

  const setCustomerWrapper = (data) => {
    localStorage.setItem("customer", JSON.stringify(data))
    setCustomer(data)
  }

  return (
    <CustomerContext.Provider value={{ customer, setCustomer: setCustomerWrapper }}>
      {props.children}
    </CustomerContext.Provider>
  )
}

export default CustomerProvider
