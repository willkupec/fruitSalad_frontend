const API = process.env.REACT_APP_API

// API Routes

export const CUSTOMER_API = `${API}/customer`
export const CART_ITEM_API = `${API}/cartItem`
export const ADDRESS_API = `${API}/address`
export const ADDRESS_BY_CUSTOMER_API = `${ADDRESS_API}/customer/`
export const LOGIN_API = `${CUSTOMER_API}/login`
export const REGISTRATION_API = `${CUSTOMER_API}/register`

// External API Routes

export const COUNTRIES_API = "https://restcountries.com/v3.1/all"
